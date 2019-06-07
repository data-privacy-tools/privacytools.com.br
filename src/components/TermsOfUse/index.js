import React, { useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Margin from '../Margin'
import { H1, SubTitle } from '../Title'
import Container from '../Container'
import Paragraph from '../Paragraph'
import AppWrapper from '../AppWrapper'
import { Helmet } from 'react-helmet'

function TermsOfUse(props) {
	const { t } = useTranslation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [props.location])

	return (
		<>
			<Helmet>
				<title>{t('head.home.title')}</title>
				<description>{t('head.home.description')}</description>
			</Helmet>
			<AppWrapper>
				<Margin x={120} />
				<Container maxWidth={860}>
					<H1>{t('terms-and-use.title')}</H1>
					<Trans i18nKey="terms-and-use.body" />
				</Container>
				<Margin x={36} />
			</AppWrapper>
		</>
	)
}

export default TermsOfUse
