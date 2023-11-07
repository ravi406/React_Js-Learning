
import { LOGO_URL } from "../../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header =() =>{

     const [btnName,setBtnName] = useState('Login');

    useEffect(() => {console.log('useeffect called with every render')});
    useEffect(() => {console.log('useeffect called with only one render')},[btnName]);

   

    return(
        <div className='header'>
            
            <div className='logo-container'>
                <img className="logo" alt="Logo" src={LOGO_URL}/>                
            </div>

            <div className='nav-items'>
                <ul>
                    
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact-us</Link></li>
                    <li><Link to='/about'>About-us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>
                    {
                        btnName ==='Login' ? setBtnName('Logout') :setBtnName('Login');
                    }}>{btnName}</button>
                </ul>

            </div>

        </div>
    )
}

export default Header;