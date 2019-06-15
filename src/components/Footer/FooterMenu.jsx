import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyledMenu, StyledMenuItem } from './styles'

function FooterMenu() {
	const { t } = useTranslation()

	return (
		<StyledMenu>
			<StyledMenuItem to="/terms-of-use">{t('terms-and-use.menu')}</StyledMenuItem>
			<StyledMenuItem to="/privacy-policy">{t('footer.privacy.policy.menu')}</StyledMenuItem>
		</StyledMenu>
	)
}

export default FooterMenu
