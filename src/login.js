import React, {useState} from "react";
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

function Login() {

    const [LoginId,setLogin]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const validate= (e)=>{
    e.preventDefault();
    if(LoginId==="" || password===""){
      alert("All fields are mandatory!.");
      return ;
    }
    setLogin("");
    setPassword("");
    navigate('/logged');


    }

    return (
        <DIV>
            <form onSubmit={validate}>
                <Label>Login ID</Label><br/>
                <Input type="text" onChange={(e) => setLogin(e.target.value)}/><br/>
                <Label>Password</Label><br/>
                <Input type="password" onChange={(e) => setPassword(e.target.value)}/><br/>
                <Button type="submit">Login</Button>
            </form>

            <P>Don't have an Account? <Link to="/register">Register</Link></P>

        </DIV>
    )
}

export default Login;