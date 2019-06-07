import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import Margin from '../Margin'
import { CTA } from '../Button'
import { H2 } from '../Title'
import Main from '../Main'
import Header from '../Header'
import Footer from '../Footer'

import { StyledFormWrapper } from '../Login/styles'
import { Helmet } from 'react-helmet'
import * as emailjs from 'emailjs-com'

import ReCAPTCHA from 'react-google-recaptcha'
import { captcha } from '../../config'

function Contact(props) {
	const { t } = useTranslation()

	const onChangeCaptcha = captcha => props.form.setFieldsValue({ captcha })

	const handleSubmit = e => {
		e.preventDefault()

		props.form.validateFields((err, values) => {
			if (!err) {
				console.log({ values })
				sendFeedback('template_HS6WICh0', values)
			}
		})
	}

	const sendFeedback = (templateId, values) => {
		emailjs.init('user_huOCumtg7FQBmiFSYEt8A')
		emailjs
			.send('mailgun', templateId, {
				from_email: values.email,
				from_name: values.name,
				message_html: values.Comment,
				from_website: values.website,
			})
			.then(res => {
				console.log('SUCESSO!')
				//setState({"feedback":"Email enviado com sucesso"});
				props.history.push('/mail-success')
			})
			// Handle errors here however you like
			.catch(err => {
				console.error('Failed to send feedback. Error: ', err)
				props.history.push('/mail-error')
			})
	}

	const { getFieldDecorator } = props.form

	return (
		<>
			<Helmet>
				<title>{t('head.contact.title')}</title>
				<description>{t('head.contact.description')}</description>
				<script type="text/javascript" src="//cdn.emailjs.com/sdk/2.3.2/email.min.js" />
			</Helmet>
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
								})(<Input size="large" placeholder={t('name')} />)}
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
								})(<Input size="large" type="email" placeholder="E-mail" />)}
							</Form.Item>

							<Margin x={12} />

							<Form.Item>
								{getFieldDecorator('website', {
									rules: [{ required: false }],
								})(<Input size="large" placeholder="Website" />)}
							</Form.Item>
							{getFieldDecorator('captcha')(<Input type="hidden" />)}

							<Margin x={12} />

							<Form.Item>
								{getFieldDecorator('Comment', {
									rules: [{ required: true, message: t('please-input-your-message') }],
								})(
									<Input.TextArea
										size="large"
										placeholder={t('message')}
										autosize={{ minRows: 5 }}
									/>
								)}
							</Form.Item>
							<Margin x={36} />
							<ReCAPTCHA sitekey={captcha} onChange={onChangeCaptcha} />
							<Margin x={36} />
							<CTA centered htmlType="submit">
								{t('send')}
							</CTA>
						</Form>
					</div>
				</StyledFormWrapper>
			</Main>
			<Footer />
		</>
	)
}

export default Form.create({ name: 'Contact' })(Contact)
