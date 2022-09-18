interface LoginPayload {
  email: string
  password: string
}
interface LoginFormData {
  email: string
  password: string
}

declare namespace Auth {
  namespace Login {
    type FormData = LoginFormData
    type Payload = LoginPayload
  }
}
