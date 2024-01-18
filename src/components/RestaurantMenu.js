import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";
import { Img_Url } from "../config";

const RestaurantMenu = () => {
    const { rid } = useParams();
    // const [restaurant, setRestaurant] = useState({});
    // const [menu, setMenu] = useState([]);
    const menu = useMenu(rid);
    const restaurant = useRestaurant(rid);
    if (!restaurant) {
        return <Shimmer />;
    }
    return (
        <div className="MenuCard p-3 flex justify-around ">
            <div>
                <h1 className="text-2xl font-bold">Restaurant id : {rid}</h1>
                <h2 className="text-2xl font-bold pb-2">Name : {restaurant?.name}</h2>
                <img src={Img_Url + restaurant.cloudinaryImageId} alt="burger" className="image2 rounded-lg h-64" />
                <h3 className="text-2xl font-bold">Locality : {restaurant.locality}</h3>
                <h3 className="text-2xl font-bold">City🏙️: {restaurant.city}</h3>
                <h3 className="text-2xl font-bold">Avg rating : {restaurant.avgRating}⭐</h3>

            </div>
            <div className="bg-green-100 p-5 m-5 font-bold rounded-lg">
                <h3 className="text-2xl font-bold">Menu⬇️</h3>
                <ul>
                    {menu.map((c) => (
                        <li className="" key={c?.card?.info?.id}>{c?.card?.info?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
