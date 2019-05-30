import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Icon, Input } from 'antd'
import {rgba} from 'polished'
import Margin from '../Margin'
import { CTA } from '../Button'
import Main from '../Main'
import Header from '../Header'
import {theme} from '../../styles'
import { StyledFormWrapper} from './styles'
import { H2 } from '../Title'
import ReCAPTCHA from "react-google-recaptcha"
import { captcha} from '../../config'


function Login(props){

  const { t } = useTranslation()

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log({ values })
      }
    })
  }

  const onChangeCaptcha = captcha => props.form.setFieldsValue({captcha})

    const { getFieldDecorator } = props.form
    return (
      <>
        <Header position="relative" />
        <Main>
          <StyledFormWrapper>
            <div>
              <H2>
                {t('login.title')}
              </H2>
              <p>{t('login.headline') }</p>
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: t('please-input-your-username') }],
                  })(
                    <Input
                      size="large"
                      prefix={<Icon type="user" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
                      placeholder={t('username')}
                    />,
                  )}
                </Form.Item>
                <Margin x={12} />
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: t('please-input-your-password') }],
                  })(
                    <Input
                      size="large"
                      prefix={<Icon type="lock" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
                      type="password"
                      placeholder={t('password')}
                    />,
                  )}
                </Form.Item>

                {getFieldDecorator('captcha')(<Input type="hidden" />)}

                <Margin x={36} />

                <ReCAPTCHA
                  sitekey={captcha}
                  onChange={onChangeCaptcha}
                />

                <Margin x={36} />
                <CTA centered htmlType="submit">{t('login.button')}</CTA>
                <Margin x={12} />
              </Form>
            </div>
          </StyledFormWrapper>
        </Main>
      </>
    )

}

export default Form.create({ name: 'login' })(Login);
