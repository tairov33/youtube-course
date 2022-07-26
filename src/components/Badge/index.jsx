import React from 'react'
import Container from '../../layout/Container'
import classes from './Badge.module.scss'

const Badge = () => {
    return (
        <Container className={classes['badge']}>
            <div className={classes['badge__wrapper']}>
                <div className={classes['badge__content']}>
                    <h1 className={classes['badge__title']}>
                        Fruit compositions
                    </h1>
                    <p className={classes['badge__text']}>
                        You can choose any products from our catalog and you can order them!
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Badge