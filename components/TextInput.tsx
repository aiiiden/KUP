import { ComponentProps } from 'react'

export interface TextInputProps extends ComponentProps<'input'> {}

const TextInput: React.FC<TextInputProps> = ({ type, ...rest }) => {
  return (
    <input
      type={type || 'text'}
      className="border border-gray-300 rounded-sm px-2 py-1"
      {...rest}
    />
  )
}

export default TextInput
