import RestaurentCard from "./RestaurentCard";
import restaurantData from "../../utils/mockData";
import { useState,useEffect } from "react";


const Body =() =>{

   

    const [ListOfRestaurant, setListOfRestaurant ] = useState(restaurantData);

    function clickHandler(){
      // filter out the restaurants based on the rating
      const filteredList = ListOfRestaurant.filter((rest) => rest.avgRating > 4.2 );
      setListOfRestaurant(filteredList);
 
    }            
        
    return(
        <div className='body'>
            <div className='filter'>
              <button type='button' className="filter-btn" onClick={clickHandler}>Top-Rated-Restaurants</button>
            </div>
            <div className='resto-container'>
              {
                ListOfRestaurant.map(restaurant => <RestaurentCard key={restaurant.id} resData ={restaurant}/>)
              } 
                
            </div>
        </div>
    )
}

export default Body;