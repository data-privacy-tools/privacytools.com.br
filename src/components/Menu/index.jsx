import React from 'react'
import { StyledMenu, StyledLoginButton, StyledMenuItem, StyledSpacer } from './styles'
import { Link } from 'react-router-dom'

function Menu({page}) {
    return (
        <StyledMenu>
            <StyledSpacer />
            {page !== 'login' && <StyledMenuItem to="login">Log In</StyledMenuItem>}
            {page !== 'signUp' && <StyledLoginButton to="signUp"><span>Create an account</span></StyledLoginButton>}
        </StyledMenu>
    )
}

export default Menu
