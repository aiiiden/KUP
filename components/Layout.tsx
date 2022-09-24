import { PropsWithChildren } from 'react'
import Box from './Box'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex-center">
      {children}
    </div>
  )
}

export default Layout
