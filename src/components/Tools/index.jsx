import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../Container'
import {StyledTools} from './styles'
import Tool from '../Tool'
import { Row, Col } from 'antd'
import { H2 } from '../Title'
import { SecondayCTA } from '../Button'
import { StyledToolIconWrapper} from '../Tool/styles'
import blockchainIcon from '../../assets/blockchain-icon.svg'
import cookieIcon from '../../assets/cookie-icon.svg'
import consentimentIcon from '../../assets/consentiment-icon.svg'

function Tools(props) {

  const { t } = useTranslation()

  return (
    <StyledTools>
        <Container>
          {props.children}
          <Row gutter={36} type="flex" justify="center">

            <Col xs={24} lg={8}>
              <Tool to='/proof-on-concession'>
                <StyledToolIconWrapper>
                <img src={consentimentIcon} alt="Proof On Concession" />
                </StyledToolIconWrapper>
                <H2 centered>{t('tools.proof-on-concession.title')}</H2>
                <p>{t('tools.proof-on-concession.body')}</p>
                <SecondayCTA as="span" top={12}>{t('know-more')}</SecondayCTA>
              </Tool>
            </Col>

            <Col xs={24} lg={8}>
              <Tool to='/auditing-in-blockchain'>
                <StyledToolIconWrapper>
                <img src={blockchainIcon} alt="Auditing In Blockchain" />
                </StyledToolIconWrapper>
                <H2 centered>{t('tools.auditing-in-blockchain.title')}</H2>
                <p>{t('tools.auditing-in-blockchain.body')}</p>
                <SecondayCTA as="span" top={12}>{t('know-more')}</SecondayCTA>
              </Tool>
            </Col>

            <Col xs={24} lg={8}>
              <Tool to='/cookie-consent'>
                <StyledToolIconWrapper>
                <img src={cookieIcon} alt="Cookie Consent" />
                </StyledToolIconWrapper>
                <H2 centered>{t('tools.cookie-consent.title')}</H2>
                <p>{t('tools.cookie-consent.body')}</p>
                <SecondayCTA as="span" top={12}>{t('know-more')}</SecondayCTA>
              </Tool>
            </Col>

          </Row>
        </Container>
    </StyledTools>
  )
}

export default Tools
