import { CDN_URL } from "../../utils/constants";
const ItemList =(props)=>{

    console.log('hehe',props.list.name);
    return (
        <div className=" p-2 m-2  border border-b-8 text-left ">
            <div className="  flex justify-between ">
                <div className="w-9/12 flex flex-col py-2">
                    <span className="font-bold">{props.list.name}</span>      
                    <span className="font-bold text-gray-500">{'₹ '+props.list.price ? props.list.price/100 : price.list.defaultPrice/100}</span>
                </div>

                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-1 mx-16 shadow-lg bg-black  text-white rounded-lg">Add +</button>  
                    </div>
                    
                    <div>
                        <img src={CDN_URL+props.list.imageId} className="w-full"></img>  
                    </div>
                     
                </div>

            </div>     
            <span className="text-xs text-gray-400 my-2">{props.list.description}</span>
               
        </div>
    );
}

export default ItemList;