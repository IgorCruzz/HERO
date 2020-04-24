import produce from 'immer'

const INITIAL_VALUES = {
  loading: false
}

export default function incident (state = INITIAL_VALUES, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@incident/INCIDENT_REQUEST': {
        draft.loading = true
        break
      }
      case '@incident/INCIDENT_FAILURE': {
        draft.loading = false
        break
      }
      case '@incident/INCIDENT_SUCCESS': {
        draft.loading = false
      }
    }
  })
}
