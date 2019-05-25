import React from 'react'
import { StyledHeader, StyledHeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import Menu from '../Menu'
import { Link } from 'react-router-dom'

function Header(props) {
  console.log(props.position)
  return (
    <StyledHeader position={props.position}>
      <StyledHeaderContainer>
        <Link to='/'>
          <img src={logo} height={36} />
        </Link>
        <Menu page={props.page}/>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header
