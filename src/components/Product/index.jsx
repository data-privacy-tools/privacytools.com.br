import React from 'react'
import Banner from './Banner.jsx'
import Container from '../Container'
import Header from '../Header'
import Footer from '../Footer'
import Margin from '../Margin'
import Tools from '../Tools'
import { H1, H2 } from '../Title'
import Paragraph from '../Paragraph'

import { CTA, SecondayCTA } from '../Button'

function Product(props) {
    return (
        <>
            <Header />
            <Banner />
                {props.children}
            <Footer />
        </>
    )
}

export default Product
