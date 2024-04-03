import { OsProvider } from '@/contexts/os-context'

import { Dock } from '../dock'
import { MenuBar } from '../menu-bar'
import { WindowsManager } from '../windows-manager'

export function Desktop() {
  return (
    <OsProvider>
      <MenuBar />
      <WindowsManager />
      <Dock />
    </OsProvider>
  )
}
