export const recoverRequest = (email) => {
  return {
    type: '@recover/RECOVER_REQUEST',
    payload: { email }
  }
}

export const recoverFailure = () => {
  return {
    type: '@recover/RECOVER_FAILURE'
  }
}

export const recoverSuccess = () => {
  return {
    type: '@recover/RECOVER_SUCCESS'
  }
}

export const changePassword = ({ email, code, password, confirmPassword }) => {
  return {
    type: '@recover/CHANGE_PASSWORD',
    payload: { email, code, password, confirmPassword }
  }
}
