import { useEffect, useState } from "react";
import { Menu_Url } from "../config";
const useRestaurant = (rid) => {
    const [restaurant,setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [rid]);

    async function getRestaurantInfo() {
        try {
            const data = await fetch(Menu_Url+rid);
            const json = await data.json();

            if (json?.data?.cards?.length > 0) {
                setRestaurant(json.data.cards[0]?.card?.card?.info || {});
            } else {
                // Handle case when the data structure is unexpected or empty
            }
        } catch (error) {
            // Handle fetch or JSON parsing errors
            console.error("Error fetching or parsing data:", error);
        }
    }
    return restaurant;
}
export default useRestaurant;