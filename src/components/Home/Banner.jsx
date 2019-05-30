import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from '../Container'
import { CTA } from '../Button'
import { H1 } from '../Title'
import { Row, Col } from 'antd'
import banner from '../../assets/banner-header.svg'
import Margin from '../Margin'
import { Link } from 'react-router-dom'

function Banner() {

  const { t } = useTranslation()

  return (
    <div>
      <Container>
        <Row gutter={36} type="flex" align="middle" justify="space-between">
          <Col xs={24} sm={12}>
            <H1>
              {t('banner.heading')}
            </H1>
            <Margin x={24} />
            <p>{t('banner.body')}</p>
            <Margin x={48} />
            <Link to='/contact'>
              <CTA as="span">
                {t('know-more')}
              </CTA>
            </Link>
            <Margin x={48} />
          </Col>
          <Col xs={24} sm={12}>
            <img src={banner} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
