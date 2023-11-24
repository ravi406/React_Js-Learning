import RestaurentCard,{withPromptedLabel} from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import restaurantData from "../../utils/mockData";
import userContext from "../../utils/userContext";

const Body =() =>{

  //local state variable -super powerfull variable

  const [searchText,setSearchText]=useState(' ');
  const [listOfRestaurant, setListOfRestaurant ] = useState([]);
  const [filteredListOfRestaurant,setFilteredRestaurant] = useState('');
  
  const {logInUser,setUserName} = useContext(userContext); 
  //whenever state variable changes react triggers a reconciliation cycle(re-render the component )
  
  useEffect(() => {  
    
     const data = restaurantData;
      setListOfRestaurant(data);  
      setFilteredRestaurant(data);  
      fetchData();  

    },[]);       

    const fetchData = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9686706&lng=77.5300547&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();


        // console.log(json);
    
        //optional chaining
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          .map((res)=>res.info));

        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          .map((res)=>res.info));
        
    }  

    // console.log('High',listOfRestaurant);

    function clickHandler(){
      // filter out the restaurants based on the rating
      const filteredList = listOfRestaurant.filter((rest) => rest.avgRating > 4.2 );
      setFilteredRestaurant(filteredList);
 
    } 

    const onlineStatus = useOnlineStatus();
    const RestaurantCardPromoted = withPromptedLabel(RestaurentCard)

    {
    if(onlineStatus === false){
      return (
      <h1>Youre offline Check You're Internet Connection...</h1>
      );
    }
    }
        
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className='body'>

            <div className='filter flex items-center'>
              <div className="search p-4 m-4">
                <input  className=" border border-solid border-black" type="text" placeholder="Search Restaurant" 
                value={searchText} 
                onChange={(event)=>{
                    setSearchText(event.target.value);
                }}/>

                <button className=" px-2  py-2 m-2 bg-green-200 rounded-xl" onClick={()=>{
                  //filter the restaurant cards and update the UI
                  //searchText  
                  
                  const filteredRestaurant = listOfRestaurant.filter((restaurant) =>{
                      return restaurant.name.toLowerCase().includes(searchText.toLowerCase());
                  })
                
                setFilteredRestaurant(filteredRestaurant);    
                }}>Search</button>
                
            </div>
            
            <div>
                <button className="px-4 py-2 m-2  bg-green-200 rounded-xl "  type='button' 
                  onClick={clickHandler}>Top-Rated-Restaurants</button>
            </div>

            
                <div className='filter flex items-center'>
                  <input className="border border-black px-2 py-1 mx-2"
                    value={logInUser}
                     onChange={(e)=>setUserName(e.target.value) } 
                  />
                </div>
        </div>

            
            <div className='flex flex-wrap justify-center'>
              {
                filteredListOfRestaurant.map(restaurant => 
                <Link key={restaurant.id} to={'/restaurants/'+restaurant.id}>
               {  restaurant.avgRating > 3.5 && restaurant.avgRating < 4.0 ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurentCard  resData ={restaurant}/>}
                </Link>)
              } 
                
            </div>
        </div>
    )
}

export default Body;