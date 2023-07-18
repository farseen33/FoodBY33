import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect,useState } from 'react';
import { image_url } from './Constant';
import Shimmer from './Shimmer';

function RestaurantMenu() {
    const params = useParams();
    const { understandid } = params;
    
    const [rest , setRest] = useState(null);
    
      useEffect(() => {
        //Api call
        getRestuarantInfo();
      }, []);

    async function getRestuarantInfo() {
      const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0509762&lng=76.0710967&restaurantId="+understandid+"&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json?.data?.cards[0]?.card?.card?.info);
      
      setRest(json?.data?.cards[0]?.card?.card?.info);

    }

    return (!rest) ? <Shimmer/> :   (
    <div><h1>Restaurantid :{understandid} </h1>
    <h1>name:{rest.name}</h1>
    <h1>city:{rest.city}  </h1>
    <img src={image_url + rest.cloudinaryImageId}/>
    
    <h1>Menu: {rest.areaName}</h1>

    </div>
  )
}

export default RestaurantMenu