import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


const Home = lazy(() => import('../components/Home'));
const Login = lazy(() => import('../components/Login'));
const SignUp = lazy(() => import('../components/SignUp'));
const Proof = lazy(() => import('../components/Product/Proof'));
const Cookies = lazy(() => import('../components/Product/Cookies'));
const Blockchain = lazy(() => import('../components/Product/Blockchain'));
const ConfirmEmail = lazy(() => import('../components/ConfirmEmail'));
const ConfirmedEmail = lazy(() => import('../components/ConfirmedEmail'));
const Contact = lazy(() => import('../components/Contact'));

const EmailSucesso = lazy(() => import('../components/EmailSucesso'));
const EmailErro = lazy(() => import('../components/EmailErro'));

function AppRouter(props) {

  return (
    <Router basename={'https://privacytools.com.br/'}>
        <Suspense fallback={<div></div>}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login/' exact component={Login} />
              <Route path='/signUp/' exact component={SignUp} />
              <Route path='/confirm-your-email/'  exact component={ConfirmEmail} />
              <Route path='/email-confirmed/'  exact component={ConfirmedEmail} />
              <Route path='/proof-on-concession/' exact component={Proof} />
              <Route path='/auditing-in-blockchain/' exact component={Blockchain} />
              <Route path='/cookie-consent/' exact component={Cookies} />
              <Route path='/contact/' exact component={Contact} />
              <Route path='/mail-success/' exact component={EmailSucesso} />
              <Route path='/mail-error/' exact component={EmailErro} />
            </Switch>
        </Suspense>
    </Router>
  );
}

export default AppRouter
