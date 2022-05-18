import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Login'

import Home from './Home'
import ProtectedRoute from './App/ProtectedRoute'

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/' component={Login} />
         <ProtectedRoute exact path='/home' component={Home} />
      </Switch>
   </Router>
)
