import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyledContainer } from './styles.js'
import { H1 } from '../Title'
import Paragraph from '../Paragraph'
import Margin from '../Margin'
import AppWrapper from '../AppWrapper'

import confirmedEmail from '../../assets/confirmedEmail.svg'

function ConfirmEmail() {

  const { t } = useTranslation()

  return (
    <AppWrapper>
      <Margin x={96} />
      <StyledContainer>
        <img src={confirmedEmail} alt="E-mail"/>
        <H1 centered>{t('contact.mail.success.title')}</H1>
        <Paragraph centered maxWidth={520}>
          {t('contact.mail.success.headline')}
        </Paragraph>
      </StyledContainer>
      <Margin x={24} />
    </AppWrapper>
  )
}

export default ConfirmEmail