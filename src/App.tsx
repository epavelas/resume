import { SessionProvider } from '@/contexts/session-context'
import { ScreensManager } from '@/screens/screens-manager'

export function App() {
  return (
    <SessionProvider>
      <ScreensManager />
    </SessionProvider>
  )
}
