import { useSession } from '@/hooks'
import { LockScreen } from '@/screens/lock-screen'
import { OsScreen } from '@/screens/os-screen'

export function ScreensManager() {
  const { isAuthorized } = useSession()

  return isAuthorized ? <OsScreen /> : <LockScreen />
}
