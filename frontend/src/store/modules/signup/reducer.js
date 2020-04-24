import produce from 'immer'

const INITIAL_VALUE = {
  loading: false
}

export default function signUp (state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@signup/SIGN_UP_REQUEST': {
        draft.loading = true
        break
      }
      case '@signup/SIGN_UP_SUCCESS': {
        draft.loading = false
        break
      }
      case '@signup/SIGN_UP_FAILURE': {
        draft.loading = false
        break
      }
      default:
    }
  })
}
