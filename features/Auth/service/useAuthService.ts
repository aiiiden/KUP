/**
 * Hook for Authentication with API call
 * @example login, logout, refresh token, validate token, ...
 */
export default function useAuthService() {
  const login = async (payload: Auth.Login.Payload) => {
    // TODO: API Call & Logic
    alert(`Welcome! ${payload.email}`)
  }

  return { login }
}
