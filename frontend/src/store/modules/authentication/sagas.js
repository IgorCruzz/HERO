import { all, takeLatest, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import history from '../../../services/history'
import api from '../../../services/api'

export function * store ({ payload }) {
  const { token } = payload

  yield call(api.post, `authentication/${token}`)

  history.push('/')
  toast.success('Conta ativada com sucesso!!')
}

export default all([
  takeLatest('@auth/AUTH_REQUEST', store)
])
