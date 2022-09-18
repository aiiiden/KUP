import { ComponentProps, useState } from 'react'
import useAuthValidation from '../utils/useAuthValidation'

interface LoginFormProps extends ComponentProps<'div'> {
  onFormSubmit: (formData: Auth.Login.FormData) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onFormSubmit }) => {
  // form state
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // use validation hook
  const { isLoginFormStateValid } = useAuthValidation()

  // form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      await isLoginFormStateValid({
        email,
        password,
      })
    ) {
      onFormSubmit({ email, password })
    } else {
      alert('Invalid form state')
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-400 font-medium">
          Email
        </label>
        <input
          autoComplete="email"
          className="border border-gray-300 rounded-sm px-2 py-1"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <label htmlFor="password" className="text-sm text-gray-400 font-medium">
          Password
        </label>
        <input
          autoComplete="current-password"
          className="border border-gray-300 rounded-sm px-2 py-1"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-pink-400 text-white p-1 rounded" type="submit">
          Login
        </button>
        <button
          className="bg-white text-gray-400 p-1 rounded hover:bg-gray-100"
          type="button"
        >
          Sign-up
        </button>
      </div>
    </form>
  )
}

export default LoginForm
