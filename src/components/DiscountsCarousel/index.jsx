import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";

import Container from '../../layout/Container'
import ProductCard from '../ProductCard'

import classes from './DiscountsCarousel.module.scss'
import 'swiper/css';
import "swiper/css/scrollbar";
import './DiscountsCarousel.style.scss';

const DiscountsCarousel = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:4000/discounts')
            const discounts = await res.json()
            setData(discounts)
        }

        fetchData()
    }, [])

    return (
        <Container className={classes['discounts']}>
            <h2 className={classes['discounts__title']}>Special Discount</h2>
            {data &&(

                <Swiper scrollbar={{
                    hide: true,
                  }}
                  modules={[Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {data.map((item) => (
                        <SwiperSlide>
                            <ProductCard key={item.id} data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                )}
        </Container>
    )
}

export default DiscountsCarousel