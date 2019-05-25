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

import { StyledLoginWrapper} from './styles'

class Login extends React.Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log({ values})
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <>
        <Main>
          <Header page='login' />
          <Margin x={120} />
          <StyledLoginWrapper>
            <h1>Welcome back!</h1>
            <p>Log in to access your profile, settings and projects.</p>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label="User Name">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    size="large"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Margin x={24} />
              <Form.Item label="Password">
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
              <CTA centered htmlType="submit" >Sign in to your account</CTA>
            </Form>
          </StyledLoginWrapper>
        </Main>
        <Footer />
      </>
    )
  }
}

export default Form.create({ name: 'normal_login' })(Login);
