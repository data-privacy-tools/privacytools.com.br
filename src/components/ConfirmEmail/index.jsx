import React from 'react'
import { StyledContainer } from './styles.js'
import { useTranslation } from 'react-i18next'
import { H1, H2 } from '../Title'
import Paragraph from '../Paragraph'
import emailIcon from '../../assets/email-icon.svg'
import Margin from '../Margin'
import AppWrapper from '../AppWrapper'

function ConfirmEmail(props) {

  const { t } = useTranslation()

  return (
    <AppWrapper>
      <Margin x={96} />
      <StyledContainer>
        <img src={emailIcon} alt="E-mail" />
        <H1 centered>{t('confirm-your-email')}</H1>
        <Paragraph centered maxWidth={520}>
          {t('confirm-your-email-body')}
        </Paragraph>
      </StyledContainer>
      <Margin x={24} />
    </AppWrapper>
  )
}

export default ConfirmEmail