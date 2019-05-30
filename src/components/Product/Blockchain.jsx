import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { H1, H2 } from '../Title'
import Paragraph from '../Paragraph'
import ProductWrapper from './ProductWrapper'
import Banner from './Banner.jsx'
import Container from '../Container'
import Margin from '../Margin'
import { Row, Col } from 'antd'
import blockchainBanner from '../../assets/blockchain-banner.svg'

import { CTA } from '../Button'

function Blockchain() {
    const { t } = useTranslation()
    return (
        <ProductWrapper>
            <Banner>
                <Margin x={72} />
                <Row gutter={36} type="flex" align="middle" justify="space-between">
                    <Col xs={24} lg={10}>
                        <img src={blockchainBanner} alt="Blockchain Banner" />
                        <Margin x={24} />
                    </Col>
                    <Col xs={24} lg={12}>
                        <H1 white>{t('blockchain.title')}</H1>
                        <Margin x={24} />
                        <Paragraph white>
                            {t('blockchain.body')}
                        </Paragraph>
                        <Margin x={48} />
                        <CTA white>
                            {t('know-more')}
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
