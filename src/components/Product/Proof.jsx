import React from 'react'
import { H1, H2 } from '../Title'
import Paragraph from '../Paragraph'
import ProductWrapper from './ProductWrapper'
import Banner from './Banner.jsx'
import Container from '../Container'
import Margin from '../Margin'
import { Row, Col } from 'antd'
import consentimentBanner from '../../assets/consentiment-banner.svg'

import { CTA, SecondayCTA } from '../Button'

function Proof(props) {
    return (
        <ProductWrapper>
            <Banner>
                <Margin x={72} />
                <Row gutter={36} type="flex" align="middle" justify="center">
                    <Col xs={24} lg={10}>
                        <img src={consentimentBanner} />
                    </Col>
                    <Col xs={24} lg={12}>
                        <H1 white>Understand the Consent Landscape</H1>
                        <Margin x={24} />
                        <Paragraph white>
                            OneTrust integrates seamlessly into your existing information collection workflows to record and centrally manage consent.
                        </Paragraph>
                        <Margin x={48} />
                        <CTA white>
                            Learn how
                        </CTA>
                    </Col>
                </Row>
                <Margin x={72} />
            </Banner>
            <Container>

            </Container>
        </ProductWrapper>
    )
}

export default Proof
