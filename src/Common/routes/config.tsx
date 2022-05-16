import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Login'

import Home from './Home'

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/' component={Login} />
         <Route exact path='/home' component={Home} />
      </Switch>
   </Router>
)
