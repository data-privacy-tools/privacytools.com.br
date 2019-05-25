import React from 'react'
import Container from '../Container'
import {StyledTool} from './styles'

function Tool(props) {
  return (
    <StyledTool>
      {props.children}
    </StyledTool>
  )
}

export default Tool
