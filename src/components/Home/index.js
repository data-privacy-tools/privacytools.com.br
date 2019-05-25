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

function Home() {
  return (
    <>
      <Header position='fixed' />
      <Margin x={96} />
      <Banner />
      <Margin x={72} />
      <Tools>
        <H1 centered>Digital Security Journey</H1>
        <Paragraph centered maxWidth={480}>Our goal is to provide you with a technology that encompasses all platforms and communication channels.</Paragraph>
      </Tools>
      <Footer />
    </>
  )
}

export default Home
