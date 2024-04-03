import { useContext } from 'react'

import { OsContext } from '@/contexts/os-context'

export function useOs() {
  const osContext = useContext(OsContext)

  if (!osContext) {
    throw new Error('useOs must be used within an OsProvider')
  }

  return osContext
}
