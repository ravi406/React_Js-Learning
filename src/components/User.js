import { useState } from "react";

const User=({name,location})=>{

    const [ count ]  = useState(0);
    const [ count2 ]  = useState(4);
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>City: {location}</h3>
            <h3>Count1: {count}</h3>
        </div>
    );
}

export default User;