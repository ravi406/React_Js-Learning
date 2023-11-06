import { CDN_URL } from "../../utils/constants";


const RestaurentCard = (props) => {    
    
    const { resData } = props;    
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId} = resData;
 
    return(
    <div className='rest-card'>
        <img className='rest-img' src={CDN_URL+cloudinaryImageId}/>
           <h3>{name}</h3> 
           <h4>{cuisines.join(',')}</h4>
           <h4>{avgRating} Stars Rating</h4>  
           <h4>Delivery in {deliveryTime} Minutes</h4> 
    </div>
    )
}

export default RestaurentCard;