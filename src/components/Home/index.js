import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from './Banner.jsx'
import Margin from '../Margin'
import Tools from '../Tools'
import { H1 } from '../Title'
import Paragraph from '../Paragraph'
import AppWrapper from '../AppWrapper'

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <AppWrapper>
        <Margin x={96} />
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
