import React from "react";
import {Component} from "react";

class UserClass extends Component {
    constructor(props){
        super(props);
        //create state variable    
        this.state={
            userInfo:{
            name: 'dummy',
            location: 'Bnglr',
            avatar_url: 'image not found'
        }
      }
    }
    async componentDidMount(){
        //Api call
         const data = await fetch("https://api.github.com/users/akshaymarch7");

         const json = await data.json();
    
         this.setState({
            userInfo:json,
         });
    }
    
    render() {
        
        const {name, location ,company,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                <img  className="w-32" src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>City: {location}</h3>
                <h3>Company:{company}</h3>        
            </div>
        );
    }
}

export default UserClass;