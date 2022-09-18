import * as Yup from 'yup'

export default function useAuthValidation() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  })

  const isLoginFormStateValid = async (formData: Auth.Login.FormData) => {
    const valid = await loginSchema.isValid(formData)
    return valid
  }

  return {
    loginSchema,
    isLoginFormStateValid,
  }
}
