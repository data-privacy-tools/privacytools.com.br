import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import Margin from '../Margin'
import { CTA } from '../Button'
import { H2 } from '../Title'
import Main from '../Main'
import Header from '../Header'
import { StyledFormWrapper } from '../Login/styles'

function Contact(props) {

  const { t } = useTranslation()

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log({ values })
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <>
      <Header position="relative" />
      <Main>
        <StyledFormWrapper>
          <div>
            <H2>{t('contact.title')}</H2>
            <p>{t('contact.headline')}</p>
            <Margin x={24} />
            <Form onSubmit={handleSubmit}>
              <Form.Item>
                {getFieldDecorator('Name', {
                  rules: [{ required: true, message: t('please-input-your-name') }],
                })(
                  <Input
                    size="large"
                    placeholder={t('name')}
                  />,
                )}
              </Form.Item>

              <Margin x={12} />

              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: t('please-input-your-email'),
                    },
                    {
                      required: true,
                      message: t('please-input-your-email'),
                    },
                  ],
                })(
                  <Input
                    size="large"
                    type="email"
                    placeholder="E-mail"
                  />,
                )}
              </Form.Item>

              <Margin x={12} />

              <Form.Item>
                {getFieldDecorator('website', {
                  rules: [{ required: false,  }],
                })(
                  <Input size="large" placeholder="Website" />
                )}
              </Form.Item>

              <Margin x={12} />

              <Form.Item>
                {getFieldDecorator('Comment', {
                  rules: [{ required: true, message: t('please-input-your-message') }],
              })(
                <Input.TextArea size="large" placeholder={t('message')} autosize={{ minRows: 5 }} />
                )}
              </Form.Item>

              <Margin x={36} />
              <CTA centered htmlType="submit">{t('send')}</CTA>
            </Form>
          </div>
        </StyledFormWrapper>
      </Main>
    </>
  )
}

export default Form.create({ name: 'Contact' })(Contact)
