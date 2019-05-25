import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import Container from '../Container'
import Margin from '../Margin'
import { CTA } from '../Button'
import { Row, Col } from 'antd';
import { Divider } from 'antd'
import Main from '../Main'
import LegalText from '../LegalText'

import { StyledLoginWrapper } from './styles'

class Login extends React.Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log({ values })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <>
        <Main>
          <Header page='login' />
          <StyledLoginWrapper>
            <h1>Create your account</h1>
            <p>Create an account to discuss, publish, and manage all of your projects.</p>
            <Form onSubmit={this.handleSubmit} className="login-form">

              <Form.Item label="E-MAIL">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="Email"
                  />,
                )}
              </Form.Item>

              <Margin x={12} />

              <Form.Item label="Username">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="text"
                    placeholder="Username"
                  />,
                )}
              </Form.Item>

              <Margin x={12} />

              <Form.Item label="Password">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="Confirm Password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>

              <Margin x={12} />

              <Form.Item label="Confirm Password">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>

              <CTA centered htmlType="submit" >Create your account</CTA>
              <Margin x={24} />
              <LegalText centered>By creating an account you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</LegalText>
            </Form>
          </StyledLoginWrapper>
        </Main>
        <Footer />
      </>
    )
  }
}

export default Form.create({ name: 'normal_login' })(Login);
