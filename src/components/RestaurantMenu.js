import Shimmer from './Shimmer';
import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_ID } from '../../utils/constants';

const RestaurantMenu = () => {
    
    const[resInfo,setResInfo] = useState(null); 
    
    const {resId} =useParams();

    console.log(resId)
    

    useEffect(() =>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
            const data = await fetch(MENU_ID+resId);
            const json = await data.json();
            setResInfo(json.data);

    }

            const {name,cuisines,locality} = resInfo?.cards[0]?.card?.card?.info || {};

            const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
           
            
        if (resInfo === null) return <Shimmer/>

  return (
        <div>
             <h1>{name}</h1>
            <h3>{cuisines.join(' ,  ')}</h3>
            <p>CostForTwo: 450 Rs</p>
            <p>{locality}</p>
            
            <ul>
                {
                    itemCards.map((item)=><li key={item.card.info.id}>{ item.card.info.name} - {'  '+' Rs'}
                    {item.card.info.price/100}</li>)
                }        
            </ul> 
        </div>
  )
}

export default RestaurantMenu;