import { CButton, CCol,CInput,CLabel,CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";

const NewMenu=()=>{

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [birthday,setBirthday]=useState("");
const [jap,setJap]=useState("");
const [eng,setEng]=useState("");   

const [japanSkill,setJapanSkill]=useState([
    {id:"1", level:"N5"},
    {id:"2", level:"N4"},
    {id:"3", level:"N3"},
    {id:"4", level:"N2"},
    {id:"5", level:"N1"},
]);

const [engSkill,setEngSkill]=useState([
    {id:"1", level:"Beginnar"},
    {id:"2", level:"Intermidate"},
    {id:"3", level:"Advanced"},
]);

const nameChange=(e)=>{
    setName(e.target.value);
}
const emailChange=(e)=>{
    setEmail(e.target.value);
}
const phoneChange=(e)=>{
    setPhone(e.target.value);
}
const birthdayChange=(e)=>{
    setBirthday(e.target.value);
}
const japChange=(e)=>{
    setJap(e.target.value);
}
const engChange=(e)=>{
    setEng(e.target.value);
}

const resetClick=()=>{
    setName("");
    setEmail("");
    setPhone("");
    setBirthday("");
    setJap("");
    setEng("");
}

const sentClick=()=>{
    localStorage.setItem("NAME",name);
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("PHONE",phone);
    localStorage.setItem("BIRTHDAY",birthday);
    localStorage.setItem("JAPSKILL",jap);
    localStorage.setItem("ENGSKILL",eng);
}

    return(
       <>
        <h1 className="mt-3" align="center">Register Form</h1>
        <br></br>
        <CRow>
            <CCol lg="6">
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="3"><CLabel className="mt-2">Name:</CLabel></CCol>
                    <CCol lg="7"><CInput  type="text" value={name} 
                    onChange={nameChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            </CCol>

            <CCol lg="6">
            <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="3"><CLabel className="mt-2">Email:</CLabel></CCol>
                    <CCol lg="7"><CInput type="text" value={email} 
                    onChange={emailChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            </CCol>
        </CRow>


        <CRow className="mt-3">
            <CCol lg="6">
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="3"><CLabel className="mt-2">Phone:</CLabel></CCol>
                    <CCol lg="7"><CInput type="text" value={phone} 
                    onChange={phoneChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
                <br></br>
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="3"><CLabel className="mt-2">Japanese Skill</CLabel></CCol>
                    <CCol lg="7">
                        <CSelect value={jap} onChange={japChange}>
                            <option value="">-- Select --</option>
                            {
                                japanSkill.map((data,index) =>{
                                    return(
                                        <option key={data.id}
                                         value={data.level}>{data.level}</option>
                                    )
                                })
                            }
                        </CSelect>
                    </CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            </CCol>

            <CCol lg="6">
            <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="3"><CLabel className="mt-2">Birthday:</CLabel></CCol>
                    <CCol lg="7"><CInput type="date" value={birthday} 
                    onChange={birthdayChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
                <br></br>
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="3"><CLabel className="mt-2">English Skill</CLabel></CCol>
                    <CCol lg="7">
                        <CSelect value={eng} onChange={engChange}>
                            <option value="">-- Select --</option>
                            {
                                engSkill.map((data,index) =>{
                                    return(
                                        <option key={data.id}
                                         value={data.level}>{data.level}</option>
                                    )
                                })
                            }
                        </CSelect>
                    </CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            </CCol>
        </CRow>
        <CRow className="mt-3">
            <CCol lg="12" align="center">
                    <CButton onClick={sentClick} 
                    className="mt-4 mr-4 btn btn-outline-success">Sent</CButton>
                    <CButton onClick={resetClick} 
                    className="mt-4 btn btn-outline-danger">Reset</CButton>
            </CCol>
            
        </CRow>
       </>
    )
}

export default NewMenu;