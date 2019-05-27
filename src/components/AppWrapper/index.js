import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function AppWrapper(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default AppWrapper
