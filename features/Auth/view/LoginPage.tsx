import Layout from '@/components/Layout'
import LoginForm from '@/features/Auth/components/LoginForm'
import useAuthService from '../service/useAuthService'

export default function LoginPage() {
  // get the login function from the auth service
  const { login } = useAuthService()

  const handleFormSubmit = (formData: { email: string; password: string }) => {
    login(formData)
  }

  return (
    <Layout>
      <LoginForm onFormSubmit={handleFormSubmit} />
    </Layout>
  )
}
