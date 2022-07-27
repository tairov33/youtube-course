import React, { useState } from 'react'
import Container from '../../layout/Container'
import image from '../../images/OrderFormImage.png'

import classes from './OrderForm.module.scss'

const initialData = {
    name: '',
    tel: '',
    text: '',
}

const OrderForm = () => {
    const [fields,setFields] = useState(initialData)

    const handleChange = (e) => 
        setFields(prev=>({...prev, [e.target.name] : e.target.value}))

        const handleSubmit = (e)=>{
            e.preventDefault()
            setFields(initialData)
        }

  return (
    <Container className={classes['order-form']}>
        <h2 className={classes['order-form__title']}>Order A Unique Basket!</h2>
        <form className={classes['order-form__form']}>
            <div className={classes['order-form__fields']}>
                <input className={classes['order-form__input']} type="text" placeholder='Name*'
                onChange={handleChange}
                value={fields.name}
                name='name'
                />
                <input className={classes['order-form__input']} type="tel" placeholder='Phone Number*'
                onChange={handleChange}
                value={fields.tel}
                name='tel'
                />
                <textarea className={classes['order-form__textarea']} placeholder='Your Ideas*'
                onChange={handleChange}
                value={fields.text}
                name='text'
                ></textarea>
                <button onClick={handleSubmit} className={classes['order-form__button']}>Send</button>
            </div>
            <img className={classes['order-form__image']} src={image} alt="Beautiful bouquet of roses" />
        </form>
    </Container>
  )
}

export default OrderForm