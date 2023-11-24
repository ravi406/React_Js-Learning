import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory =(props) =>{
    // console.log('props value:',props);

    const {category,index} = props?.data?.card?.info || {};
    console.log(index)
    const [showItems,setShowItems] = useState(true);

    const clickHandler=()=>{
         setShowItems(!showItems);   
    };

    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-xl">
                
                <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
                    <span className="font-bold text-lg">{category}</span>
                    <span>{'⬇️'}</span>
                    
                </div>
                { showItems && <ItemList list={props.data.card.info}/>}
                
            </div>
               
            {/* Accordion Body */}
            
        </div>
    );
}

export default RestaurantCategory;