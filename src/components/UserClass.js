import React from "react";
import {Component} from "react";

class UserClass extends Component {
    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:5,
        }
        console.log(props.name+' constructor');
    }

    componentDidMount(){
        console.log(this.props.name+' componentDidMount');
    }
    
    render() {
        const {name , loction} =this.props;
        const {count} =this.state;
        console.log(name+' ender')
        return (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>City: {loction}</h3>
                <h3>Work:Uber SDE ,Youtuber </h3>
                <h3>count:{count}</h3>
                <button onClick={()=>{
                    //NEVER UODATE THIS STATE VARIABLE DIRECTLY
                    this.setState({ count : this.state.count+1})
                }}>Count+</button>
            </div>
        );
    }
}

export default UserClass;