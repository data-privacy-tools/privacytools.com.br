import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home = lazy(() => import('../components/Home'))
const Login = lazy(() => import('../components/Login'))
const SignUp = lazy(() => import('../components/SignUp'))
const Proof = lazy(() => import('../components/Product/Proof'))
const Cookies = lazy(() => import('../components/Product/Cookies'))
const Blockchain = lazy(() => import('../components/Product/Blockchain'))
const ConfirmEmail = lazy(() => import('../components/ConfirmEmail'))
const ConfirmedEmail = lazy(() => import('../components/ConfirmedEmail'))
const Contact = lazy(() => import('../components/Contact'))

const EmailSucesso = lazy(() => import('../components/EmailSucesso'))
const EmailErro = lazy(() => import('../components/EmailErro'))

const TermsOfUse = lazy(() => import('../components/TermsOfUse'))

function AppRouter(props) {
	const { i18n } = useTranslation();
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Suspense fallback={<div />}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login/" exact  component={() => { 
									window.location.href = `${process.env.REACT_APP_DASHBOARD_BASE_URL}/login?lang=${i18n.language}`; 
									return null;
								}} />
					<Route path="/signUp/" exact component={() => { 
									window.location.href = `${process.env.REACT_APP_DASHBOARD_BASE_URL}/signup?lang=${i18n.language}`; 
									return null;
								}} />
					<Route path="/confirm-your-email/" exact component={ConfirmEmail} />
					<Route path="/email-confirmed/" exact component={ConfirmedEmail} />
					<Route path="/proof-on-concession/" exact component={Proof} />
					<Route path="/auditing-in-blockchain/" exact component={Blockchain} />
					<Route path="/cookie-consent/" exact component={Cookies} />
					<Route path="/contact/" exact component={Contact} />
					<Route path="/mail-success/" exact component={EmailSucesso} />
					<Route path="/mail-error/" exact component={EmailErro} />
					<Route path="/terms-of-use/" exact component={TermsOfUse} />
					<Route path="/privacy-policy" exact component={TermsOfUse} />
				</Switch>
			</Suspense>
		</Router>
	)
}

export default AppRouter
