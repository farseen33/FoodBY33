import { useEffect, useState } from "react";
import restaurantList from "./ResturantLists";
import React from "react";
import ReactDOM from "react-dom/client";
import { image_url } from "./Constant";
import Shimmer from "./Shimmer";
import Restcards from "./Restcards";
import { Link } from "react-router-dom";



function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((resturant) =>
   resturant?.data?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allrest, setAllresturants] = useState([]);
  const[filteredResturant, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0509762&lng=76.0710967&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredResturants(json?.data?.cards);
    setAllresturants(json?.data?.cards);
  }

  useEffect(() => {
    //Api call
    getRestuarants();
  }, []);

  return (allrest.length === 0) ? <Shimmer /> : (
    <>
      <div className="search">
        <input
          type="text"
          className="input"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="button"
          onClick={() => {
            const data = filterData(searchText, allrest);
            setFilteredResturants(data);
          }}
        >
          Search {searchText}
        </button>
      </div>

      <div className="listitems">
        {filteredResturant.map((restaurants) => {
          return (
            <Link to={"/resturant/"+ restaurants?.data?.data?.id} key={restaurants?.data?.data?.id} >
            <Restcards {...restaurants?.data?.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;




