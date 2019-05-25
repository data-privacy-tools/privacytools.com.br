import React from 'react'
import { StyledContainer } from './styles.js'
import { H1, H2 } from '../Title'
import Paragraph from '../Paragraph'
import emailIcon from '../../assets/email-icon.svg'
import { CTA, SecondayCTA } from '../Button'
import Margin from '../Margin'
import Header from '../Header'

function ConfirmEmail(props) {
  return (
    <>
      <Header position='relative' />
        <Margin x={56} />
        <StyledContainer>
          <img src={emailIcon} />
          <H1 centered>Confirm your email!</H1>
          <Paragraph centered maxWidth={520}>
            your account has been successfully registered. To complete the process please check your email for a validation request
          </Paragraph>
          <SecondayCTA centered>
              Back to the site.
          </SecondayCTA>
        </StyledContainer>
        <Margin x={24} />
    </>
  )
}

export default ConfirmEmail