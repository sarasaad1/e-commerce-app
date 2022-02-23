import React from 'react'
import styled from 'styled-components'
import Announcement from '../composants/Announcement'
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import Nouveautes from '../composants/Nouveautes'
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 55%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid gray;
  background-color: white;
  cursor: pointer;  
  font-weight: 700;
  &:hover{
      background-color: #DCDCDC;
  }
`;
export default function Produit() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src="3.jfif" />
        </ImgContainer>
        <InfoContainer>
            <Title> Doudoune ADIDAS</Title>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
            </Desc>
            <Price>99,99 €</Price>
            <FilterContainer>
             <Filter>
              <FilterTitle>Color :</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="pink" />
              <FilterColor color="gray" />
             </Filter>
             <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
             </Filter>
            </FilterContainer>
            <AddContainer>
             <AmountContainer>
              <Remove style={{cursor: "pointer"}}/>
              <Amount>1</Amount>
              <Add style={{cursor: "pointer"}}/>
             </AmountContainer>
             <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Nouveautes/>
      <Footer/>
    </Container>
  )
}