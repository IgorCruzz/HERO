import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'

import Logon from '../pages/Logon'
import Profile from '../pages/Profile'
import NewIncident from '../pages/NewIncident'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import ChangePassword from '../pages/ChangePassword'
import Message from '../pages/Message'
import Authentication from '../pages/Authentication'

export default function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={Logon} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/incidents/new" component={NewIncident} isPrivate/>
      <Route path="/register" component={Register}/>
      <Route path="/recover" component={ForgotPassword} />
      <Route path="/message" component={Message} />
      <Route path="/Authentication/:token" component={Authentication} />
      <Route path="/password/:email" component={ChangePassword} />
    </Switch>
  )
}
