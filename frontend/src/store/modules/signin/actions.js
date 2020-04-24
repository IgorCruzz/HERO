export const signInRequest = (email, password) => {
  return {
    type: '@signin/SIGN_IN_REQUEST',
    payload: { email, password }
  }
}

export const signInSuccess = (token, ong) => {
  return {
    type: '@signin/SIGN_IN_SUCCESS',
    payload: { token, ong }
  }
}

export const signInFailure = () => {
  return {
    type: '@signin/SIGN_IN_FAILURE'
  }
}

export const signOut = () => {
  return {
    type: '@signin/SIGN_OUT'
  }
}
