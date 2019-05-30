import React from 'react'
import { useTranslation } from 'react-i18next';
import { StyledMenu, StyledLoginButton, StyledMenuItem, StyledSpacer } from './styles'
function Menu({page}) {

    const { t } = useTranslation()

    return (
        <StyledMenu>
            <StyledMenuItem to="contact">
                {t('menu.itens.email')}
            </StyledMenuItem>
            <StyledSpacer />
            {page !== 'login' && <StyledMenuItem to="login">{t('menu.itens.login')}</StyledMenuItem>}
            {page !== 'signUp' && <StyledLoginButton to="signUp"><span>{t('menu.itens.create')}</span></StyledLoginButton>}
        </StyledMenu>
    )
}

export default Menu
