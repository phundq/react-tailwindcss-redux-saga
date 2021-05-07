import React, { lazy, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loading from '../components/loading'

const Home = lazy(() => import('./../pages/home'))
const Login = lazy(() => import('./../pages/account/login'))

const renderLazyComponent = (LazyComponent, params) => props => (
  <LazyComponent {...props} {...params} />
)

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Redirect exact path="/" to="/home" />
      <Route exact path="/home" component={renderLazyComponent(Home)} />
      <Route exact path="/login" component={renderLazyComponent(Login)} />
    </Switch>
  </Suspense>
)

export default Routes
