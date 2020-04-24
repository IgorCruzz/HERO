import produce from 'immer'

const INITIAL_VALUES = {
  loading: false
}

export default function password (state = INITIAL_VALUES, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recover/RECOVER_REQUEST': {
        draft.loading = true
        break
      }
      case '@recover/RECOVER_FAILURE': {
        draft.loading = false
        break
      }
      case '@recover/RECOVER_SUCCESS': {
        draft.loading = false
        break
      }
      case '@recover/CHANGE_PASSWORD': {
        draft.loading = true
        break
      }
      default:
    }
  })
}
