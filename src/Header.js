import React from 'react';
import styled from 'styled-components';

const H4=styled.h4`
color:blue;
margin-top:70px;
opacity:0.5;
text-align:center;
`

function Header(){
    return (
        <div>
            <H4 class="text-center">Login Form</H4>
        </div>
    )

}
export default Header;
