import React from 'react'
import { useTranslation } from 'react-i18next';
import { StyledMenu, StyledMenuItem } from './styles'


function FooterMenu() {

    const { t } = useTranslation()

    return (
        <StyledMenu>
            <StyledMenuItem to="/terms-of-use">Terms of Use</StyledMenuItem>
            <StyledMenuItem to="/privacy-policy">Privacy Policy</StyledMenuItem>
        </StyledMenu>
    )
}

export default FooterMenu
