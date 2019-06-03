import React, { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'

import {
	StyledMenu,
	StyledLoginButton,
	StyledMenuItem,
	StyledSpacer,
	StyledHamburgerMenu,
} from './styles'

import LanguageSelector from '../LanguageSelector'

class Menu extends PureComponent {
	state = {
		openMenu: false,
	}

	setOpenMenu = open => this.setState(() => ({ openMenu: open }))

	render() {
		const { openMenu } = this.state
		const { page, t } = this.props

		return (
			<>
				<StyledMenu open={openMenu}>
					<StyledMenuItem to="contact">{t('menu.itens.email')}</StyledMenuItem>
					<StyledSpacer />
					{page !== 'login' && <StyledMenuItem to="login">{t('menu.itens.login')}</StyledMenuItem>}
					{page !== 'signUp' && (
						<StyledLoginButton to="signUp">
							<span>{t('menu.itens.create')}</span>
						</StyledLoginButton>
					)}
				</StyledMenu>
				<LanguageSelector />
				<StyledHamburgerMenu open={openMenu} onClick={() => this.setOpenMenu(!openMenu)}>
					<div className="hamburger-inner" />
				</StyledHamburgerMenu>
			</>
		)
	}
}

export default withTranslation()(React.memo(Menu))
