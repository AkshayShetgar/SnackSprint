import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {

    let [listOfRestaurants, setlistOfRestaurants] = useState([]);
    
    const [originalList, setOriginalList] = useState([]);

    const [searchdata, setSearchData] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // console.log("data is", listOfRestaurants);

    const fetchData = async () => {
        const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json  = await apiData.json();
        setlistOfRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlinestatus();

    if(onlineStatus === false) return(<h1>Looks like you are offline please check your internet connection 🔴</h1>);

    const {UserLoggedIn, setUserName} = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="mr-3 box-border">
            <div className="filter flex mb-3">
                <div className="search mt-4">
                    <input data-testid = "searchBox" type="text" className="ml-3 outline-none border border-solid border-black py-1 px-2" placeholder="Search the item here" value={searchdata} onChange={(e) => {
                        setSearchData(e.target.value);
                    }}></input>
                    <button className="bg-green-200 mx-3 p-1 rounded-md" onClick={() => {
                        const filterData = originalList.filter((res) => res.info.name.toLowerCase().includes(searchdata.toLowerCase()));
                        setlistOfRestaurants(filterData);
                    }}>Search</button>
                </div>
                <button className="bg-red-200 rounded-md p-1 mt-3.5" onClick={() => { 
                    const filteredList = originalList.filter(
                        (res) => res.info?.avgRating > 4.2
                    );
                    setlistOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                <div className="mt-4">
                    <label className=" mr-3 ml-3 font-semibold">User Name:</label>
                     <input type="text" className="-ml-1 py-1 px-2 border border-solid border-black outline-none" placeholder="Enter your name" value={UserLoggedIn} onChange={(e) => setUserName(e.target.value)}></input>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-evenly">
                {
                    listOfRestaurants.map((restaurant) => 
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard   resData = {restaurant}/></Link> 
                    )
                }
            </div>
        </div>
    )
}

export default Body;


