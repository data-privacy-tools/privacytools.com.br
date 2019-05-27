import React from 'react'
import AppWrapper from '../AppWrapper'

function Product(props) {
    return (
        <AppWrapper>
            {props.children}
        </AppWrapper>
    )
}

export default Product
