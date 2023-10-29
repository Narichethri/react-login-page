import React,{useState} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate,} from 'react-router-dom';



const DIV = styled.div`
border:3px solid grey;
position: absolute;
top: 45%;
left: 50%;
transform: translate(-50%, -50%);
padding: 10px;
width:auto
`

const Label = styled.label`
border-color:green;
margin-top:10px;
color: black;
font-size:17px;
padding-left:15px;
`

const Input = styled.input`
border-color:green;
width:300px;
height:40px;
border-radius:6px;
border-color:black;
margin:10px 50px 10px 50px;
padding:2px 5px 2px 5px;
`

const Button=styled.button`
background-color:green;
padding:4px 25px;
margin-top:7px;
margin-buttom:20px;
border-radius:6px;
border:none;
position:relative;
left:40%;
color:white;
`
const P=styled.p`
position:relative;
text-align:center;
margin-top:10px;
`

const H4=styled.h4`
color:blue;
margin-top:20px;
opacity:0.5;
text-align:center;
`


function Register(){

    const [fullName,setFullname]=useState("");
    const [password,setPassword]=useState("");
    const [conformPassword,setConformPassword]=useState("");
    const navigate=useNavigate();

    const valid = (e) =>{
        e.preventDefault();
    if(fullName==="" || password==="" ||conformPassword==="" ){
      alert("All fields are mandatory!.");
      return ;
    }
    if(password !== conformPassword){
        alert("password and conformpassword are not matched !");
        return ;
    }
    setFullname("");
    setPassword("");
    setConformPassword("");
    navigate('/registered')



    }

    return (
        <DIV>
            <H4 class="text-center">Register </H4>

            <form onSubmit={valid}>
                <Label>Full Name</Label><br/>
                <Input type="text" onChange={(e) => setFullname(e.target.value)}/><br/>
                <Label>Create Password</Label><br/>
                <Input type="password" onChange={(e) => setPassword(e.target.value)}/><br/>
                <Label>Conform Password</Label><br/>
                <Input type="password" onChange={(e) => setConformPassword(e.target.value)}/><br/>
                <Button type="submit">Register</Button>
            </form>

            <P>Do You have an Account? <Link to="/">Login</Link></P>

        </DIV>
    )
}

export default Register;