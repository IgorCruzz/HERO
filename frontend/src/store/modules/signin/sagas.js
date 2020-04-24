import { all, takeLatest, call, put } from 'redux-saga/effects'
import history from '../../../services/history'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { signInFailure, signInSuccess } from './actions'

export function * store ({ payload }) {
  try {
    const response = yield call(api.post, 'session', { ...payload })

    const { ong, token } = response.data
    const { confirmed } = response.data.ong

    if (!confirmed) {
      toast.error('É necessário ativar a conta para efetuar o login')
      yield put(signInFailure())
      return
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, ong))

    history.push('/profile')
  } catch (e) {
    yield put(signInFailure())
    toast.error('E-mail ou senha incorreto!')
  }
}

export function setToken ({ payload }) {
  if (!payload) return

  const { token } = payload.signIn

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@signin/SIGN_IN_REQUEST', store)
])
