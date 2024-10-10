import { useState } from "react";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center my-4 font-serif">
            <h1 className="font-bold">{name}</h1>
            <p className="font-semibold">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {
                categories.map((categories, index) =>
                     <RestaurantCategory 
                key={categories?.card?.card?.title} 
                cardData = {categories?.card?.card} 
                showItems = {showIndex === index? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />)
            }
        </div>
    )
}

export default RestaurantMenu;


