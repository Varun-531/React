import { Link } from 'react-router-dom';
import RestrauntCard from './RestrauntCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { filterData } from '../utils/helper';
import { Data_Url } from '../config';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(Data_Url);
      const json = await data.json();
      console.log(json);
      const restaurantsData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurantsData);
      // console.log(allRestaurants);
      // console.log(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };
  const isOnline = useOnline();
  if(!isOnline) {
    return <h1>Offline..Check your Internet Connection!!!🤷‍♀️🤷‍♀️</h1>
  }
  if (!allRestaurants) return <h1>Not there</h1>;
  //   if(filteredRestaurants?.length == 0) return <h1>Not there</h1>
  return filteredRestaurants.length === 0 ? (<Shimmer />) : (
    <>
      <div className='py-5 px-5'>
        <input
          type='text'
          className='search-input bg-grey-200 mx-4 px-3 rounded-md h-7 text-black focus:bg-green-50'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="bg-black w-14 h-8 rounded-md hover:bg-white hover:text-black hover:border-2px text-center text-white" onClick={handleSearch}>Search</button>
      </div>
      <div className='bodylist flex flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}><RestrauntCard {...restaurant.info} key={restaurant.info.id} /></Link>
        ))}
      </div>
    </>
  );
};

export default Body;
