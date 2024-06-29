import { CButton, CCol,CInput,CLabel,CRow, CSelect, CTooltip } from "@coreui/react";
import React, { useState } from "react";
import Welcome from "./Welcome";
import { useHistory } from "react-router-dom";

const TestCode=()=>{

 const [name, setName] = useState(localStorage.getItem("NAME"));
 const [email, setEmail] = useState(localStorage.getItem("EMAIL"));
 const [phone, setPhone] = useState(localStorage.getItem("PHONE"));
 const [birthday, setBirthday] = useState(localStorage.getItem("BIRTHDAY"));
 const [japSkill, setJapSkill] = useState(localStorage.getItem("JAPSKILL"));
 const [engSkill, setEngSkill] = useState(localStorage.getItem("ENGSKILL"));

let history = useHistory();

const goClick =()=>{
    history.push('/menus/NewMenu');
}

 const edit=(e)=>{
    setName(e.target.value);
    localStorage.setItem("name",e.target.value);
 }

 const reset=()=>{
    localStorage.clear();
    window.location.reload();
}

    return(
        <div>
        {name ?(
            <>
            <CLabel className="mr-4">Name:  </CLabel>
            <CLabel>{name.substring(0, 15)}</CLabel>
            <CTooltip content={name} placement="top">
                <span>.....</span>
            </CTooltip>
            </>
        ):(
            <CLabel>No Name</CLabel>
        )}
            <br></br>
            <CLabel className="mr-4">Email:</CLabel>
            <CLabel>{email}</CLabel>
            <br></br>
            <CLabel className="mr-4">Phone:</CLabel>
            <CLabel>{phone}</CLabel>
            <br></br>
            <CLabel className="mr-4">Birthday:</CLabel>
            <CLabel>{birthday}</CLabel>
            <br></br>
            <CLabel className="mr-4">Japan Skill:</CLabel>
            <CLabel>{japSkill}</CLabel>
            <br></br>
            <CLabel className="mr-4">English Skill:</CLabel>
            <CLabel>{engSkill}</CLabel>
        
        
        <CInput placeholder={name} onChange={edit}/>
        <CButton onClick={reset} className="mt-4 btn btn-danger">Delete localStorage</CButton>
        <CButton onClick={goClick} className="mt-4 ml-4 btn btn-success">Go to NewMenu</CButton>
        </div>

    
        
        
        
    )
}

export default TestCode;