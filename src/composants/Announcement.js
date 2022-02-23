import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive'

const Container = styled.div`
    background-color: darkred;
    color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight:500;
    margin-bottom: -15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    ${mobile({ fontSize: "10px", fontWeight:"200" })}
`


function Announcement() {
  return (
    <Container>
         WOW, THAT IS INCREDIBLE !!! 
    </Container>
  )
}

export default Announcement