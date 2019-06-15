import React from 'react'
import { useTranslation } from 'react-i18next'
import trubrLogo from '../../assets/trubr-logo.svg'
import { Divider } from 'antd'
import { H1 } from '../Title'
import { CTA } from '../Button'
import StyledFooter, { StyledSocialLink, StyledSubFooter } from './styles'
import Margin from '../Margin'
import Container from '../Container'
import { Row, Icon } from 'antd'
import { Link } from 'react-router-dom'
import FooterMenu from './FooterMenu'

const IconFont = Icon.IconFont

function Footer() {
	const { t } = useTranslation()

	return (
		<StyledFooter>
			<H1 centered>{t('footer.title')}</H1>
			<Link to="/contact">
				<CTA as="span" centered>
					{t('know-more')}
				</CTA>
			</Link>
			<Margin x={72} />
			<StyledSubFooter>
				<Margin x={36} />
				<Row type="flex" justify="space-between">
					<FooterMenu />
					<div>
						<StyledSocialLink
							href="https://www.linkedin.com/company/privacy-tools/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: '24px', color: '#fff' }}
						>
							<Icon type="linkedin" />
						</StyledSocialLink>
						<StyledSocialLink
							href="https://www.facebook.com/privacytoolsgdpr/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: '24px', color: '#fff' }}
						>
							<Icon type="facebook" />
						</StyledSocialLink>
						<StyledSocialLink
							href="https://twitter.com/ToolsPrivacy"
							target="_blank"
							rel="noopener noreferrer"
							style={{ fontSize: '24px', color: '#fff' }}
						>
							<Icon type="twitter" />
						</StyledSocialLink>
					</div>
				</Row>
				<Margin x={24} />
				<Row type="flex" justify="space-between">
					<a href="https://www.grupomaven.com.br" style={{ fontSize: '12px', color: '#fff' }}>
						{' '}
						{t('footer.a.company.of')}
						<img
							src="//www.trubr.com/wp-content/themes/maven/img/logo%20grupo%20maven.png"
							height={24}
							style={{ marginLeft: '3px' }}
							alt="Maven"
						/>
					</a>
					<small style={{ color: '#fff' }}>
						Copyright © {new Date().getFullYear()} All Rights Reserved
					</small>
				</Row>
			</StyledSubFooter>
		</StyledFooter>
	)
}

export default Footer
