import Shimmer from './Shimmer';
import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    
            const {resId} = useParams();

            const resInfo = useRestaurantMenu(resId);
    
            const {name,cuisines,locality,costForTwo} = resInfo?.cards[0]?.card?.card?.info || {};

            const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
            
            const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            .filter(
                (c) => c.card?.['@type'] ==='type.googleapis.com/swiggy.presentation.food.v2.Dish')


            // console.log("resmenu",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
           console.log('catuju',category)
            if (resInfo === null) return <Shimmer/>

  return (
        <div className='text-center'>
             <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <h3 className='font-bold text-gray-500'>{cuisines.join(' ,  ')}</h3>
            <p className='font-bold text-gray-500'>{costForTwo}</p>
            <p className='font-bold my-6 text-2xl'>{locality}</p>
            {/* category accordion  */}
            {
                category.map((cat,index)=>{
                   return <RestaurantCategory 
                   key={cat.id} 
                   data={cat} 
                   showItems= {index === 0 ? true : false}/>
                })
            }
            
        </div>
  )
}

export default RestaurantMenu;