import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;
    // console.log(resData);

    const {name, avgRating, deliveryTime, cloudinaryImageId, costForTwo, cuisines} = resData?.info;

    return (
        <div data-testid="resCard"  className="ml-3 w-[250px] hover:scale-95 transition-transform ease-out">
            <img className="h-[180px] w-[250px] rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <h3 className="mt-3 font-semibold">{name}</h3>  
            <span className="mr-1 font-semibold">{avgRating}</span>
            <span className="mr-2">★</span>
            <span>{deliveryTime}</span>
            <span className="mr-2 font-semibold">{costForTwo}</span><br></br>
            <span className="overflow-hidden font-semibold">{cuisines.join(", ")}</span>
        </div>
    );
};


export default RestaurantCard;