import clsx from 'clsx'

import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownSeparator,
} from '@/components/catalyst-ui/dropdown'
import { CatalystSmallIcon } from '@/components/icons'
import { useSession } from '@/hooks'

import { BatteryItem } from './battey-item'
import { TimeItem } from './time-item'

export function MenuBar() {
  const { signOut } = useSession()

  const styles = {
    header: clsx(
      'flex items-center justify-between px-1.5 py-1 bg-zinc-900/80 border-b border-white/5 backdrop-blur',
    ),

    actions: clsx('flex'),

    details: clsx('flex items-center'),
  }

  const renderCatalystNavigation = () => {
    return (
      <Dropdown>
        <DropdownButton plain aria-label="Catalyst OS Menu">
          <CatalystSmallIcon className="w-auto h-4 text-zinc-100" />
        </DropdownButton>
        <DropdownMenu className="z-100 -ml-1.5">
          <DropdownItem disabled>About Catalyst OS</DropdownItem>
          <DropdownSeparator />
          <DropdownItem onClick={signOut}>Lock Screen</DropdownItem>
          <DropdownItem onClick={signOut}>
            Log Out Tailwind Labs...
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.actions}>{renderCatalystNavigation()}</div>
      <div className={styles.details}>
        <BatteryItem />
        <TimeItem />
      </div>
    </header>
  )
}
