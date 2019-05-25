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

function AppRouter() {
  return (
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login/' component={Login} />
                <Route path='/signUp/' component={SignUp} />
                <Route path='/confirm-your-email/' component={ConfirmEmail} />
                <Route path='/email-confirmed/' component={ConfirmedEmail} />
                <Route path='/proof-on-concession/' component={Proof} />
                <Route path='/blockchain/' component={Blockchain} />
                <Route path='/cookies/' component={Cookies} />
            </Switch>
        </Suspense>
    </Router>
  );
}

export default AppRouter
