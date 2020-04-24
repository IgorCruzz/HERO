import produce from 'immer'

const INITIAL_VALUE = {
  loading: false,
  signed: false,
  token: null,
  profile: []
}

export default function signin (state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@signin/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@signin/SIGN_IN_SUCCESS': {
        draft.loading = false
        draft.signed = true
        draft.profile = action.payload.ong
        draft.token = action.payload.token
        break
      }
      case '@signin/SIGN_IN_FAILURE': {
        draft.loading = false
        break
      }
      case '@signin/SIGN_OUT' : {
        draft.signed = false
        draft.profile = []
        draft.token = null
        break
      }
      default:
    }
  })
}
