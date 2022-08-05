import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Title from '../../components/Title'
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import classes from './Category.module.scss'

const Category = () => {
  const { type } = useParams()
  const { pathname } = useLocation()
  const [data, setData] = useState(null)

  const { like, cart: cartItems } = useSelector((state) => state)

  const { text: title } = categories.find(item => item.link === pathname)

  // fetch('http://localhost:4000/products')
  // .then((data) => {
  //   return data.json()
  // })
  //   .then(cards => {
  //     setData(cards)
  //   })

  useEffect(() => {
    // ${process.env.REACT_APP_API_URL}/floristman_items?category=${type}

    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/products?category=${type}`)
      const cards = await res.json()
      setData(cards)
    }

    fetchData()
  }, [type])

  return (
    <>
      <Header />
      {title && <Title>{title}</Title>}
      <Container className={classes['cards']}>
        {data &&
          data.map((card) => (
            <ProductCard key={card.id} data={card} className={classes['card-item']}
              liked={card.id in like}
              selected={card.id in cartItems}
            />
          ))}
      </Container>
      <DiscountsCarousel />
    </>
  )
}

export default Category