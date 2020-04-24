import { all } from 'redux-saga/effects'

import signUp from './signup/sagas'
import signIn from './signin/sagas'
import incident from './incident/sagas'
import password from './password/sagas'
import authentication from './authentication/sagas'

export default function * rootSaga () {
  return yield all({ signUp, signIn, incident, password, authentication })
}
