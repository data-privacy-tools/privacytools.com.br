import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header'
import Footer from '../Footer'
import { Form, Icon, Input, Checkbox, message, Modal } from 'antd'
import 'antd/dist/antd.css';
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
	const [captchaValue, setCaptchaValue] = useState('');
	const [disabledButton, setDisabledButton] = useState(true);

	const { success, error } = Modal;

	const handleSubmit = e => {
		e.preventDefault()

		if (disabledButton) {  //não está válido 
			return;
		}
		
		form.validateFields((err, values) => {
			if (!err) {
				const hide = message.loading(t('action.saving.messge'), 0);
				apiInstance().saveCompany( 
					{	name: values.name, 
						companyWebsite: values.companyWebsite, 
						email: values.email,
						cnpj: values.cnpj,
						language: i18n.language || 'en'
					} )
					.then( (response) => {
						success({content: t('new.company.success')});
						hide();
						props.history.push('/');
					})
					.catch(e => {
						hide();
						console.log("Erro: ");
						console.log(e);
						if (e.response.status === 400) {
							error({content: t('new.company.error.exists')});
						} else {
							error({content: "Error: "+ e.message});
						}
					});

			}
		})
	}

	const validateCaptchaAndTerms = (_captcha, _terms) => {
		
		setDisabledButton(! (_terms && _captcha) );
	}

	const onChangeCaptcha = _captcha => {
		setCaptchaValue(_captcha);

		//pois eh, aqui tbem não consegui pegar o valor do terms que esta no state
		const _terms = document.getElementById("terms").checked;
		validateCaptchaAndTerms(_captcha, _terms);
	}

	const termsOfService = ({ target }) => {
		setTerms(target.checked)
		validateCaptchaAndTerms(captchaValue, target.checked);
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
						<Form onSubmit={handleSubmit} >
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
										}
									],
								})(
									<Input
										name="email"
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
									rules: [
										{ required: true, message: 'Please input your company name!' },
										{ min: 3, message: '3 characters minimum lenght' },
									],
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
									rules: [
											{ required: true, message: 'Please input your company web site!' },
											{ min: 3, message: '3 characters minimum lenght' },
										],
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
									rules: [
										{ required: true, message: 'Please input your company number!' },
										{ min: 3, message: '3 characters minimum lenght' },
									],
								})(
									<Input
										size="large"
										type="text"
										placeholder="Company number"
									/>
								)}
							</Form.Item>
							

							<Margin x={36} />

							

							<ReCAPTCHA sitekey={captcha} onChange={onChangeCaptcha} />

							<Margin x={36} />
							<CTA centered htmlType="submit" disabled={disabledButton}>
								Create your account
							</CTA>
							<Margin x={24} />
							<LegalText centered>
								<Checkbox onChange={termsOfService} checked={terms} name="terms" id="terms">
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
