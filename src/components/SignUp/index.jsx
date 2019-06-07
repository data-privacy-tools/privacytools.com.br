import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header'
import Footer from '../Footer'
import { Form, Icon, Input, Checkbox } from 'antd'
import Margin from '../Margin'
import { CTA } from '../Button'
import { theme } from '../../styles'
import { rgba } from 'polished'
import Main from '../Main'
import LegalText from '../LegalText'
import { H2 } from '../Title'
import { StyledFormWrapper } from '../Login/styles'

import ReCAPTCHA from 'react-google-recaptcha'
import { captcha } from '../../config'

function SignUp(props) {
	const { form } = props

	const { t } = useTranslation()

	const [confirmDirty, setConfirmDirty] = useState(false)
	const [terms, setTerms] = useState(false)

	const [autoCompleteResult, setAutoCompleteResult] = useState([])

	const handleSubmit = e => {
		e.preventDefault()

		form.validateFields((err, values) => {
			if (!err && terms) {
				console.log({ values })
			}
		})
	}

	const compareToFirstPassword = (rule, value, callback) => {
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!')
		} else {
			callback()
		}
	}

	const validateToNextPassword = (rule, value, callback) => {
		if (value && confirmDirty) {
			form.validateFields(['confirm'], { force: true })
		}
		callback()
	}

	const handleConfirmBlur = e => {
		const value = e.target.value
		setConfirmDirty(confirmDirty)
	}

	const onChangeCaptcha = captcha => props.form.setFieldsValue({ captcha })

	const termsOfService = ({ target }) => setTerms(target.checked.value)

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
									/>
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
									/>
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
								})(
									<Input.Password
										size="large"
										placeholder="Password"
										prefix={<Icon type="lock" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
									/>
								)}
							</Form.Item>

							{getFieldDecorator('captcha')(<Input type="hidden" />)}

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
								})(
									<Input.Password
										prefix={<Icon type="lock" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
										placeholder="Confirm Password"
										size="large"
									/>
								)}
							</Form.Item>

							<Margin x={36} />

							<ReCAPTCHA sitekey={captcha} onChange={onChangeCaptcha} />

							<Margin x={36} />
							<CTA centered htmlType="submit">
								Create your account
							</CTA>
							<Margin x={24} />
							<LegalText centered>
								<Checkbox onChange={termsOfService}>
									Creating an account means you are okay with our{' '}
									<a target="_blank" href="/terms">
										Terms of Service
									</a>
									,{' '}
									<a target="_blank" href="/privacy">
										Privacy Policy
									</a>
								</Checkbox>
							</LegalText>
						</Form>
					</div>
				</StyledFormWrapper>
			</Main>
			<Footer />
		</>
	)
}

export default Form.create({ name: 'signup' })(SignUp)
