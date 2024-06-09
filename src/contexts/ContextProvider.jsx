import UserContextProvider from './UserContextProvider'

const ContextProvider = ({ children }) => {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  )
}

export default ContextProvider