import React from 'react';
import styled from 'styled-components';
import { Search , ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { FavoriteBorderOutlined } from '@material-ui/icons'
import mobile from '../responsive';


const Container =styled.div`
    height: 60px;
    margin-top: -10px;
    padding-bottom: 15px;
    ${mobile({ height: "50px" })}
`;

const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    padding-top: 0px;
    ${mobile({ marginLeft: "-20px",padding: "10px 0px" })}
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`
const Center = styled.div`
    flex: 1; 
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;    
    ${mobile({ marginLeft: "-10px",flex: 2, justifyContent: "center" , flex : 3})}

`
const Lang = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer =styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "40px" })}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px", marginLeft: " 10px", })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "10px", marginLeft: "10px",display: "flex" })}
`


function Navbar() {
  return ( 
    <Container>
      <Wrapper>  
        <Left>
          <Lang> FR </Lang>
          <SearchContainer>
            <Input placeholder="Recherche"/>
            <Search style={{color:"gray",fontSize:16}} />
          </SearchContainer>          
        </Left>
        <Center>
          <Logo>Fitop</Logo>
        </Center>
        <Right>
          <MenuItem><b>S'inscrire</b></MenuItem>
          <MenuItem><b>Se connecter</b></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary" >
            <ShoppingCartOutlined />           
            </Badge>
            <Badge badgeContent={1} color="primary">
            <FavoriteBorderOutlined style={{marginLeft: "20px"}}/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>    
  )
}

export default Navbar