import React from "react";
import styled from 'styled-components' ;

const P = styled.p`
color:green;
position:absolute;
left:43%;
top:45%;
font-style:italic;
`


function Logged(){

    return (
        <div>
            <P>Loggged Successfully..</P>
        </div>
    )
}

export default Logged;