export const authenticationRequest = (token) => {
  return {
    type: '@auth/AUTH_REQUEST',
    payload: { token }
  }
}
