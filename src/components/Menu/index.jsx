import React from 'react'
import { StyledMenu, StyledLoginButton, StyledMenuItem, StyledSpacer } from './styles'

function Menu({page}) {
    return (
        <StyledMenu>
            <StyledMenuItem to="contact">
                E-mail us
            </StyledMenuItem>
            <StyledSpacer />
            {page !== 'login' && <StyledMenuItem to="login">Log In</StyledMenuItem>}
            {page !== 'signUp' && <StyledLoginButton to="signUp"><span>Create an account</span></StyledLoginButton>}
        </StyledMenu>
    )
}

export default Menu
