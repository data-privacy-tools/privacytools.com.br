import React from 'react'
import { H1, H2 } from '../Title'
import Paragraph from '../Paragraph'
import ProductWrapper from './ProductWrapper'
import Banner from './Banner.jsx'
import Container from '../Container'
import Margin from '../Margin'
import { Row, Col } from 'antd'
import blockchainBanner from '../../assets/blockchain-banner.svg'

import { CTA, SecondayCTA } from '../Button'

function Blockchain(props) {
    return (
        <ProductWrapper>
            <Banner>
                <Margin x={72} />
                <Row gutter={36} type="flex" align="middle" justify="center">
                    <Col xs={24} lg={10}>
                        <img src={blockchainBanner} />
                    </Col>
                    <Col xs={24} lg={12}>
                        <H1 white>Auditoria em Blockchain</H1>
                        <Margin x={24} />
                        <Paragraph white>
                            It is designed to help you quickly comply with the EU, GDPR and California cookie laws. We made it fast, free, and easy for everybody.
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

export default Blockchain
