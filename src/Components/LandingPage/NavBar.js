
import React from 'react'
import styled from "styled-components";


import { Link } from "react-router-dom"


const Container = styled.div`
  height: 80px;
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color:white;
  
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color:white;
  text-decoration:none;
  
`;


function NavBar(props){

    
    return(
        <Container>
           <Wrapper>
            <Left>
            <Language>EN</Language>
             
            


             
            </Left>
            <Center>
          <Logo>FIND JOB</Logo>
        </Center>
        <Right>
          <MenuItem>ALL JOBS</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          
        </Right>
           </Wrapper>
        </Container>
    )
}

export default NavBar