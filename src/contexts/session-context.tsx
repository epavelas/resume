import { createContext, ReactNode, useState } from 'react'

type SessionContextProps = {
  isAuthorized: boolean
  signIn: () => void
  signOut: () => void
}

export const SessionContext = createContext<SessionContextProps>({
  isAuthorized: false,
  signIn: () => {},
  signOut: () => {},
})

type ContextProviderProps = {
  children: ReactNode
}

export function SessionProvider({ children }: ContextProviderProps) {
  const [isAuthorized, setIsAuthorized] = useState(false)

  const signIn = () => {
    setIsAuthorized(true)
  }

  const signOut = () => {
    setIsAuthorized(false)
  }

  return (
    <SessionContext.Provider
      value={{
        isAuthorized,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
