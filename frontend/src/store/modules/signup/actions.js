export const signUpRequest = (name, email, password, confirmPassword, whatsapp, city, uf) => {
  return {
    type: '@signup/SIGN_UP_REQUEST',
    payload: { name, email, password, confirmPassword, whatsapp, city, uf }
  }
}

export const signUpSuccess = () => {
  return {
    type: '@signup/SIGN_UP_SUCCESS'
  }
}

export const signUpFailure = () => {
  return {
    type: '@signup/SIGN_UP_FAILURE'
  }
}
