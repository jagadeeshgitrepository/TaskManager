import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Login'

import Header from './Header'

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/' component={Login} />
         <Route exact path='/home' component={Header} />
      </Switch>
   </Router>
)
