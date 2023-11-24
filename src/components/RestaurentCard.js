import { CDN_URL } from "../../utils/constants";
import { useContext } from "react";
import userContext from "../../utils/userContext";

const RestaurentCard = (props) => {    
    
    const { resData } = props;    
    const {name,cuisines,avgRating,sla:{deliveryTime},cloudinaryImageId,areaName} = resData;
    
    const {logInUser}=useContext(userContext);
    return(
    <div className='m-4 p4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-300'>
        <img className='rounded-lg' src={CDN_URL+cloudinaryImageId}/>
           <h3 className="font-bold py-2 text-lg">{name}</h3> 
           <h3 className="font-bold py-2 text-md">{areaName}</h3> 
           <h4 className="whitespace-break-spaces">{cuisines.join(',')}</h4>
           <h4>{avgRating} Stars Rating</h4>  
           <h4>Delivery in {deliveryTime} Minutes</h4> 
           <h4>User: {logInUser}</h4> 
    </div>
    )
}

// Higher order component
// Input => Restaurant card => Restaurant card Promoted.

export const withPromptedLabel =(RestaurentCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white uppercase text-sm m-2 p-2 rounded-lg">promoted</label>
                <RestaurentCard {...props}/>
            </div>
        )
    }
}
export default RestaurentCard;