import User from "./User"
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {

    constructor(){
        super();
        console.log('parent constructor');
    }

    componentDidMount(){
        console.log('parent componentDidMount');
    }

  render(){ 

    console.log('parent render');
     return(
        
        <div className="">
            <h2>About Us</h2>
            
            <UserClass name="first" loction={'Bangalore'}/>
            <UserClass name="second" loction={'Bangalore'}/>
            <UserClass name="third" loction={'Bangalore'}/>
            <UserClass name="fourth" loction={'Bangalore'}/>
        
        </div>)
    }
}

export default About;