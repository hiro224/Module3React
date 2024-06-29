import React, { useState } from "react";
import HomePrime from "./homePrime";

const Home=()=>{

const[username,setUsername]=useState("");
const[phone,setPhone]=useState("");
const[age,setAge]=useState("");

    const saveClick=()=>{
        alert("Your info: "+" (Name: "+username + " Age: "+age +" phone: "+phone +" )");
    }

    const phoneChange=(e)=>{
        setPhone(e.target.value);
    }
    const nameChange=(e)=>{
        setUsername(e.target.value);
    }
    const ageChange=(e)=>{
        setAge(e.target.value);
    }

    return(
        <>
       <h1>Welcome Form my Home</h1>
       <HomePrime
        name ={username}
         age ="20"
         saveClick={saveClick}
         phone={phone}
         phoneChange={phoneChange}
         username={username}
         nameChange={nameChange}
         age ={age}
         ageChange={ageChange}
         />
       </>
    )
}

export default Home;