import { useContext } from 'react'

import { SessionContext } from '@/contexts/session-context'

export function useSession() {
  const sessionContext = useContext(SessionContext)

  if (!sessionContext) {
    throw new Error('useSession must be used within an SessionProvider')
  }

  return sessionContext
}
