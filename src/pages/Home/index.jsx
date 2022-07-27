import React from 'react'
import Badge from '../../components/Badge'
import Header from '../../components/Header'
import CategoriesBlock from '../../components/CategoriesBlock'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import OrderForm from '../../components/OrderForm'

const Home = () => {
  return (
    <>
      <Header />
        <Badge /> 
      <CategoriesBlock/>
      <DiscountsCarousel/>
      <OrderForm/>
    </>
  )
}

export default Home