import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header'
import { Form, Icon, Input } from 'antd'
import Margin from '../Margin'
import { CTA } from '../Button'
import { theme } from '../../styles'
import { rgba } from 'polished'
import Main from '../Main'
import LegalText from '../LegalText'
import { H2 } from '../Title'
import { StyledFormWrapper } from '../Login/styles'

function SignUp(props) {

  const { form } = props

  const { t } = useTranslation()

  const [confirmDirty, setConfirmDirty] = useState(false)
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    form.validateFields((err, values) => {
      if (!err) {
        console.log({ values })
      }
    })
  }

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback();
    }
  }

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }


  const handleConfirmBlur = e => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty)
  }

  const { getFieldDecorator } = form
  return (
    <>
      <Header position="relative" />
      <Main>
        <StyledFormWrapper>
          <div>
            <H2>Create your account</H2>
            <p>Create an account to discuss, publish, and manage all of your projects.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="mail" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
                    type="email"
                    placeholder="E-mail"
                  />,
                )}
              </Form.Item>
              <Margin x={12} />
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
                    type="text"
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Margin x={12} />
              <Form.Item hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                })(<Input.Password size="large" placeholder="Password" prefix={<Icon type="lock" style={{ color: rgba(theme.secondaryColor, 0.3) }} />} />)}
              </Form.Item>
              <Margin x={12} />
              <Form.Item hasFeedback>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                })(<Input.Password
                  prefix={<Icon type="lock" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
                  placeholder="Confirm Password"
                  size="large"
                 />)}
              </Form.Item>
              <Margin x={36} />
              <CTA centered htmlType="submit" >Create your account</CTA>
              <Margin x={24} />
              <LegalText centered>By creating an account you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</LegalText>
            </Form>
          </div>
        </StyledFormWrapper>
      </Main>
    </>
  )
}

export default Form.create({ name: 'signup' })(SignUp)
