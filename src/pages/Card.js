import React from 'react'
import styled from 'styled-components'
import Announcement from '../composants/Announcement'
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import { FavoriteRounded, ShoppingCartRounded } from '@material-ui/icons'

const Container = styled.div`

`
const Wrapper = styled.div`
   padding: 20px;
`
const Title = styled.h1`
   font-weight: 600;
   text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;   
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  
`
const Bottom = styled.bottom`
   display: flex;
   justify-content: space-between;
`
const TopTexts = styled.div`
  
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

export default function Card() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
         <Title> Ur BAG </Title>
         <Top>
             <TopButton> Continue Shopping</TopButton>
             <TopTexts>
                <ShoppingCartRounded />           
                <TopText>Shopping Bag(4)</TopText>
                <FavoriteRounded style={{marginLeft: "20px"}}/>
                <TopText>Your Wishlist (2)</TopText>
             </TopTexts>
             <TopButton> Check out</TopButton>
         </Top>
         <Bottom></Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}
