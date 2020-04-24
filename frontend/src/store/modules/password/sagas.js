import { all, call, takeLatest, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import history from '../../../services/history'
import { recoverFailure, recoverSuccess } from './actions'

export function * store ({ payload }) {
  try {
    const { email } = payload

    yield call(api.put, 'password', { email })

    toast.warn('Verifique o codigo enviado para seu email')

    history.push(`/password/${email}`)
    yield put(recoverSuccess())
  } catch (err) {
    yield put(recoverFailure())
    yield toast.error('Este e-mail não está cadastrado no sistema')
  }
}

export function * update ({ payload }) {
  try {
    const { email, code, password, confirmPassword } = payload

    yield call(api.put, `/reset-password/${email}`, { code, password, confirmPassword })

    toast.success('Senha alterada com sucesso!!')
    history.push('/')
  } catch (e) {
    yield put(recoverFailure())
  }
}

export default all([
  takeLatest('@recover/RECOVER_REQUEST', store),
  takeLatest('@recover/CHANGE_PASSWORD', update)
])
