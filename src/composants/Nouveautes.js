import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 60vh;
   background-color: #f0f0f0;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Title = styled.h2`
   font-size: 60px;
   margin-bottom: 20px;
`
const Description = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
`
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
`
const Input = styled.input`
   border: none;
   flex: 8;
   padding-left: 20px;
`
const Button = styled.button`
   flex: 1;
   background-color: #D3D3D3 ;
   color: black;
   border: none;
   cursor: pointer ;
`


export default function Nouveautes() {
  return (
    <Container>
        <Title>Sois Le Premier À Savoir</Title>
        <Description> Inscris toi à notre newsletter pour recevoir des sorties exclusives et des remises Fitop. </Description>
        <InputContainer>
           <Input placeholder='Ton email '/>
           <Button>
               <Send/>
           </Button>
        </InputContainer>
        
    </Container>
  )
}
