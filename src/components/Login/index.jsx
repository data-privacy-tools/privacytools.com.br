import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Icon, Input } from 'antd'
import { rgba } from 'polished'
import Margin from '../Margin'
import { CTA } from '../Button'
import Main from '../Main'
import Header from '../Header'
import Footer from '../Footer'
import { theme } from '../../styles'
import { StyledFormWrapper } from './styles'
import { H2 } from '../Title'
import ReCAPTCHA from 'react-google-recaptcha'
import { captcha } from '../../config'
import {sha256} from 'js-sha256';

import AUTH from '../../auth';
import {apiInstance} from '../../api';

function Login(props) {
	const { t } = useTranslation()

	const handleSubmit = e => {
		e.preventDefault()
		props.form.validateFields((err, values) => {
			if (!err) {
				apiInstance().login( {email: values.username, password: sha256(values.password) } )
                .then( (response) => {
                    const body = JSON.stringify({ stepTwo: true, email: values.username, token: response.data.token });
                    AUTH.logout();
                    AUTH.loginStepTwo(body);
                    props.history.push('/');
                })
                .catch(e => {
                    console.log("Erro: "+ e);
                });
			}
		})
	}

	const onChangeCaptcha = captcha => props.form.setFieldsValue({ captcha })

	const { getFieldDecorator } = props.form
	return (
		<>
			<Header position="relative" />
			<Main>
				<StyledFormWrapper>
					<div>
						<H2>{t('login.title')}</H2>
						<p>{t('login.headline')}</p>
						<Form onSubmit={handleSubmit} className="login-form">
							<Form.Item>
								{getFieldDecorator('username', {
									rules: [{ required: true, message: t('please-input-your-username') }],
								})(
									<Input
										size="large"
										prefix={<Icon type="user" style={{ color: rgba(theme.secondaryColor, 0.3) }} />}
										placeholder={t('username')}
									/>
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
									/>
								)}
							</Form.Item>

							{getFieldDecorator('captcha')(<Input type="hidden" />)}

							<Margin x={36} />

							<ReCAPTCHA sitekey={captcha} onChange={onChangeCaptcha} />

							<Margin x={36} />
							<CTA centered htmlType="submit">
								{t('login.button')}
							</CTA>
							<Margin x={12} />
						</Form>
					</div>
				</StyledFormWrapper>
			</Main>
			<Footer />
		</>
	)
}

export default Form.create({ name: 'login' })(Login)
