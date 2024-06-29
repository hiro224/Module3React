import { CButton, CInput } from "@coreui/react";
import React from "react";

const HomePrime=(props)=>{

let {username,nameChange,age,ageChange,saveClick,phoneChange,phone} = props;

    return(
        <>
       <h1>This is home Prime</h1>
       <p>My name is {username}</p>
       <p>My phone is {phone}</p>
       <p>{username} is {age}years old.</p>
       <CInput className="mb-3 mt-3" type="text" placeholder="please fill Username: "
            onChange={nameChange} value ={username}
       />
       <CInput className="mb-3 mt-3" type="text" placeholder="please fill phone: "
            onChange={phoneChange} value ={phone}
       />
       <CInput className="mb-3 mt-3" type="text" placeholder="please fill your age: "
            onChange={ageChange} value ={age}
       />
       <button className="btn btn-success"
       onClick={saveClick}>Save</button>
       </>
    )
}

export default HomePrime;