import React from 'react'
import { StyledContainer } from './styles.js'

function Container(props) {
  return <StyledContainer {...props}>{props.children}</StyledContainer>
}

export default Container