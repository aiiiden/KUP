import { ComponentProps, useCallback } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gray'
  loading?: boolean
}
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  onClick,
  children,
  className,
  ...rest
}) => {
  const variantClasses = {
    primary: 'bg-orange text-white',
    secondary: 'bg-main-default text-white',
    gray: 'bg-main-lightest',
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
        variantClasses[variant],
        'w-full h-10 flex justify-center items-center rounded disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed font-medium',
        loading && 'animate-pulse cursor-wait',
        className,
      ])}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button
