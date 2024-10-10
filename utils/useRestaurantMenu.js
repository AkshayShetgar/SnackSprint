import { useState, useEffect } from "react";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await response.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
} 

export default useRestaurantMenu;