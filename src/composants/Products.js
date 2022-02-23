import React from 'react'
import styled from 'styled-components'
import {ProductPopulaire} from "../data"
import ProductsItem from './ProductsItem'

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

export default function Products() {
  return (
    <Container>
        {ProductPopulaire.map(items =>
            <ProductsItem items={items} key={items.id}/>
        )}
    </Container>
  )
}
