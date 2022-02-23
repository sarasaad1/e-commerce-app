import React from 'react';
import styled from 'styled-components';
import { Search , ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { FavoriteBorderOutlined } from '@material-ui/icons'


const Container =styled.div`
    height: 60px;
    padding-bottom: 10px;
`;

const Wrapper =styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    padding-top: 0px;
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

`
const Lang = styled.div`
    font-size: 14px;
    cursor: pointer;
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
`
const Logo = styled.h1`
    font-weight: bold;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`


function Navbar() {
  return ( 
    <Container>
      <Wrapper>  
        <Left>
          <Lang> FR </Lang>
          <SearchContainer>
            <Input/>
            <Search color='gray' fontSize='16px'/>
          </SearchContainer>          
        </Left>
        <Center>
          <Logo>Fitop</Logo>
        </Center>
        <Right>
          <MenuItem><b>S'inscrire</b></MenuItem>
          <MenuItem><b>Se connecter</b></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
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