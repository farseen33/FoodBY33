import { image_url } from "./Constant";

const Restcards = ({ name,area, cuisines, cloudinaryImageId}) => {
    return (
      <div className="card">
        <img src={image_url+cloudinaryImageId} />
        <h2>{name}</h2>
      <h3>{area}</h3>
        <h4>{cuisines}</h4>
      </div>
    );
  };

  export default Restcards;