import { ComponentProps, useCallback } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  loading?: boolean
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  onClick,
  children,
  ...rest
}) => {
  const variantClasses = {
    primary: 'bg-orange text-white',
    secondary: 'bg-gray-300 text-gray-500',
    ghost: 'bg-white hover:bg-gray-100 text-gray-400',
  }

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault()
        return
      }

      onClick?.(e)
    },
    [loading, onClick],
  )

  return (
    <button
      className={clsx([
        'w-full h-10 flex justify-center items-center',
        'rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed',
        variantClasses[variant],
        loading && 'animate-pulse cursor-wait',
      ])}
      onClick={handleClick}
      {...rest}
    >
      <div>{children}</div>
    </button>
  )
}
export default Button
