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

import {apiInstance} from '../../api'

function SignUp(props) {
	const { form } = props

	const { t, i18n } = useTranslation();

	const [terms, setTerms] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()

		form.validateFields((err, values) => {
			if (!err && terms) {
				apiInstance().saveCompany( 
					{	name: values.name, 
						companyWebsite: values.companyWebsite, 
						email: values.email,
						cnpj: values.cnpj,
						language: i18n.language || 'en'
					} )
					.then( (response) => {
						alert(t('new.company.success'));
						props.history.push('/');
					})
					.catch(e => {
						console.log("Erro: ");
						console.log(e);
						if (e.response.status === 400) {
							alert(t('new.company.error.exists'));
						} else {
							alert("Error: "+ e.message);
						}
					});

			}
		})
	}

	const onChangeCaptcha = captcha => props.form.setFieldsValue({ captcha })

	const termsOfService = ({ target }) => setTerms(target.checked)

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
								{getFieldDecorator('name', {
									rules: [{ required: true, message: 'Please input your company name!' }],
								})(
									<Input
										size="large"
										type="text"
										placeholder="Company Name"
									/>
								)}
							</Form.Item>

							<Margin x={12} />
							<Form.Item>
								{getFieldDecorator('companyWebsite', {
									rules: [{ required: true, message: 'Please input your company web site!' }],
								})(
									<Input
										size="large"
										type="text"
										placeholder="Company Website"
									/>
								)}
							</Form.Item>

							<Margin x={12} />
							<Form.Item>
								{getFieldDecorator('cnpj', {
									rules: [{ required: true, message: 'Please input your company number!' }],
								})(
									<Input
										size="large"
										type="text"
										placeholder="Company number"
									/>
								)}
							</Form.Item>
							

							<Margin x={36} />

							{getFieldDecorator('captcha')(<Input type="hidden" />)}

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
