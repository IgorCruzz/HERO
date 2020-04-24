import { combineReducers } from 'redux'

import signUp from './signup/reducer'
import signIn from './signin/reducer'
import password from './password/reducer'
import incident from './incident/reducer'

export default combineReducers({ signUp, signIn, password, incident })
