import React from "react";
import styled from 'styled-components' ;
import { Link } from 'react-router-dom';

const H5 = styled.h5`
color:green;
position:absolute;
left:43%;
top:45%;
font-style:italic;
`

const Button=styled.button`
background-color:green;
padding:4px 25px;
margin-top:30px;
margin-left:20px;
margin-buttom:20px;
border-radius:6px;
border:none;
color:white;
`


function Logged(){

    return (
        <div>
            <H5>Registered Successfully..</H5>
            <Link to="/">
            <Button type="submit">Back to Login</Button></Link>
        </div>
    )
}

export default Logged;