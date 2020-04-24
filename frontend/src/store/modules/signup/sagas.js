import { call, put, takeLatest, all } from 'redux-saga/effects'
import api from '../../../services/api'
import history from '../../../services/history'
import { signUpSuccess, signUpFailure } from './actions'

export function * store ({ payload }) {
  try {
    yield call(api.post, 'ongs', { ...payload })

    yield put(signUpSuccess())
    history.push('/message')
  } catch (e) {
    yield put(signUpFailure())
  }
}

export default all([
  takeLatest('@signup/SIGN_UP_REQUEST', store)
])
