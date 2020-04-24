import { all, call, takeLatest, put } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history'
import { incidentFailure, incidentSuccess } from './actions'

export function * destroy ({ payload }) {
  yield call(api.delete, `incidents/${payload.id}`)

  window.location.reload()
}

export function * store ({ payload }) {
  try {
    yield call(api.post, 'incidents', { ...payload })
    history.push('/profile')
    yield put(incidentSuccess())
  } catch (err) {
    yield put(incidentFailure())
  }
}

export function * update ({ payload }) {
  const { id, ...rest } = payload

  yield call(api.put, `incidents/${id}`, rest)

  window.location.reload()
}

export default all([
  takeLatest('@incident/INCIDENT_DELETE', destroy),
  takeLatest('@incident/INCIDENT_UPDATE', update),
  takeLatest('@incident/INCIDENT_REQUEST', store)
])
