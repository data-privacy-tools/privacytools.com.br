import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './Banner.jsx'
import Margin from '../Margin'
import Tools from '../Tools'
import { H1 } from '../Title'
import Paragraph from '../Paragraph'
import AppWrapper from '../AppWrapper'
import {Helmet} from "react-helmet";

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('head.home.title')}</title>
        <description>{t('head.home.description')}</description>
      </Helmet>
      <AppWrapper>
        <Margin x={120} />
        <Banner />
        <Margin x={72} />
        <Tools>
          <H1 centered>{t('tools.section.title')}</H1>
          <Paragraph centered maxWidth={480}>
            {t('tools.section.headline')}
          </Paragraph>
        </Tools>
      </AppWrapper>
    </>
  )
}

export default Home
