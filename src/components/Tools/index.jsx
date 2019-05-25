import React from 'react'
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
  return (
    <StyledTools>
        <Container>
          {props.children}
          <Row gutter={36} type="flex" justify="center">
            <Col xs={24} lg={8}>
              <Tool>
                <StyledToolIconWrapper>
                <img src={consentimentIcon} />
                </StyledToolIconWrapper>
                <H2 centered>Prova de consentimento</H2>
                <p>Whatever you want your new processes and functions to be, we can help you create a secure environment, secure communications, unique identities, and engaging interactions.</p>
                <SecondayCTA as="a" href="/" top={12}>Saiba Mais</SecondayCTA>
              </Tool>
            </Col>
            <Col xs={24} lg={8}>
              <Tool>
                <StyledToolIconWrapper>
                <img src={blockchainIcon} />
                </StyledToolIconWrapper>
                <H2 centered>Auditoria em Blockchain</H2>
                <p>Whatever you want your new processes and functions to be, we can help you create a secure environment, secure communications, unique identities, and engaging interactions.</p>
                <SecondayCTA as="a" href="/" top={12}>Saiba Mais</SecondayCTA>
              </Tool>
            </Col>
            <Col xs={24} lg={8}>
              <Tool>
                <StyledToolIconWrapper>
                <img src={cookieIcon} />
                </StyledToolIconWrapper>
                <H2 centered>Consentimento de Cookies</H2>
                <p>Whatever you want your new processes and functions to be, we can help you create a secure environment, secure communications, unique identities, and engaging interactions.</p>
                <SecondayCTA as="a" href="/" top={12}>Saiba Mais</SecondayCTA>
              </Tool>
            </Col>
          </Row>
        </Container>
    </StyledTools>
  )
}

export default Tools
