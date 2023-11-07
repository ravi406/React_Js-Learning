import RestaurentCard from "./RestaurentCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body =() =>{

  //local state variable -super powerfull variable
  const [searchText,setSearchText]=useState(' ');
  const [listOfRestaurant, setListOfRestaurant ] = useState([]);
  const [filteredListOfRestaurant,setFilteredRestaurant] = useState('');

  //whenever state variable changes react triggers a reconciliation cycle(re-render the component )
  console.log('Body rendering..');
  // console.log(listOfRestaurant);
  
  useEffect(() => {  
    
    fetchData();

    },[]);       

    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9686706&lng=77.5300547&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          .map((res)=>res.info));

        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          .map((res)=>res.info));
        
    }

   

    

    function clickHandler(){
      // filter out the restaurants based on the rating
      const filteredList = listOfRestaurant.filter((rest) => rest.avgRating > 4.2 );
      setListOfRestaurant(filteredList);
 
    }            
        
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
            <div className="search">
              <input type="text" placeholder="Search Restaurant" 
              value={searchText} 
              onChange={(event)=>{
                  setSearchText(event.target.value);
              }}/>
              <button onClick={()=>{
                //filter the restaurant cards and update the UI
                //searchText  

                const filteredRestaurant = listOfRestaurant.filter((restaurant) =>{
                     return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
      
                })

               setFilteredRestaurant(filteredRestaurant); 

                
              }}>Search</button>
            </div>
              <button type='button' 
                className="filter-btn" onClick={clickHandler}>Top-Rated-Restaurants</button>
            </div>
            
            <div className='resto-container'>
              {
                filteredListOfRestaurant.map(restaurant => <RestaurentCard key={restaurant.id} resData ={restaurant}/>)
              } 
                
            </div>
        </div>
    )
}

export default Body;