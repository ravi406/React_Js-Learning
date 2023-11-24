
import { LOGO_URL } from "../../utils/constants";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";

const Header =() =>{

     const [btnName,setBtnName] = useState('Login');
     const onlineStatus = useOnlineStatus();   

     const {logInUser} = useContext(userContext);
    return(
        <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 '>
            
            <div className='logo-container'>
                <img className="w-36" alt="Logo" src={LOGO_URL}/>                
            </div>

            <div className='nav-item items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? '🟢':'🔴'}</li>
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact-us</Link></li>
                    <li className="px-4"><Link to='/about'>About-us</Link></li>
                    <li className="px-4"><Link to='/grocery'>Grocery</Link></li>

                    <li className="px-4 ">Cart</li>
                    <button className="border border-black rounded-md " onClick={()=>
                    {
                        btnName ==='Login' ? setBtnName('Logout') :setBtnName('Login');
                    }}>{btnName}</button>
                    <li className="px-4 font-semibold">{(logInUser)}</li> 
                </ul>

            </div>

        </div>
    )
}

export default Header;