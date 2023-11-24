import User from "./User"
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../../utils/userContext";
class About extends Component {

    constructor(){
        super();
        // console.log('parent constructor');
    }
 
    componentDidMount(){
        // console.log('parent componentDidMount');
    }

  render(){ 

    // console.log('parent render :');
     return(
        
        <div>
            <h2>About Us</h2>
            
            <userContext.Consumer>
                { ({logInUser}) => <h1>{logInUser}</h1> }
            </userContext.Consumer>

            <UserClass name="Rahul" loction={'Bangalore'}/>
        
        </div>)
    }
}

export default About;