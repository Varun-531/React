import { useEffect, useState } from "react";
import {Menu_Url} from '../config';
const useMenu = (rid) => {
    // const [restaurant,setRestaurant] = useState(null);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, [rid]);

    async function getRestaurantInfo() {
        try {
            const data = await fetch(Menu_Url+rid);
            const json = await data.json();

            if (json?.data?.cards?.length > 0) {
                setMenu(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []);
            } else {
                // Handle case when the data structure is unexpected or empty
            }
        } catch (error) {
            // Handle fetch or JSON parsing errors
            console.error("Error fetching or parsing data:", error);
        }
    }
    return menu;
}
export default useMenu;