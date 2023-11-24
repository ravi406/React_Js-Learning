import {React,lazy,Suspense,useState,useEffect} from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import userContext from '../utils/userContext';

const Grocery = lazy(()=>import('./components/Grocery'))
const About = lazy(()=>import('./components/About'))

const AppLayout =() =>{

    //Authentication
    const [userName,setUserName] =useState();

    useEffect(()=>{
        //make an api call and send some username and password 
        const data ={
            name:'Akshay Saini',
        }
        setUserName(data.name);
    },[]);
    return(
          <userContext.Provider value = {{logInUser: userName , setUserName}}>
                <div className='applayout'> 
                    <Header />
                    <Outlet />
                </div>    
         </userContext.Provider>
       
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {
                path: '/',
                element:<Body/>,
            },
            {
                path: '/about',
                element:<Suspense fallback = {<h1>Loading AboutUs....</h1>}><About/></Suspense> ,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/grocery',
                element:<Suspense fallback = {<h1>Loading Grocery....</h1>}><Grocery/></Suspense> ,
            },
            {
               path:'/restaurants/:resId',  
               element:<RestaurantMenu/>,   
            }  
        ],
        errorElement:<Error/>,
    },
    
]);


const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)