import React from 'react'
import {StyledTool} from './styles'
import { Link } from 'react-router-dom'

function Tool(props) {
  return (
      <Link to={props.to} >
        <StyledTool>
          {props.children}
        </StyledTool>
      </Link>
  )
}

export default Tool
