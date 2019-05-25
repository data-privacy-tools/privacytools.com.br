import React from 'react'
import Container from '../Container'
import { CTA } from '../Button'
import { H1 } from '../Title'
import { Row, Col } from 'antd'
import banner from '../../assets/banner-header.svg'
import Margin from '../Margin'

function Banner() {
  return (
    <div>
      <Container>
        <Row gutter={36} type="flex" align="middle" justify="space-between">
          <Col xs={24} lg={12}>
            <H1>THE COMPLIANCE PLATFORM FOR PRIVACY-FIRST COMPANIES</H1>
            <Margin x={24} />
            <p>
              Thanks to our talented and prolific developer community, we’ve been able to highlight
              a bunch of great examples and tutorials on our Expo blog. Here’s a running collection,
              in no particular order.
            </p>
            <Margin x={48} />
            <CTA>
              Learn how
            </CTA>
          </Col>
          <Col xs={24} lg={12}>
            <img src={banner} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
