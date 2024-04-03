import { useBattery } from 'react-use'
import { BoltIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

import {
  Dropdown,
  DropdownButton,
  DropdownHeader,
  DropdownMenu,
} from '@/components/catalyst-ui/dropdown'
import { BatteryIcon } from '@/components/icons'

export function BatteryItem() {
  const batteryStatus = useBattery()

  if (!batteryStatus.isSupported || !batteryStatus.fetched) {
    return null
  }

  const { charging, level } = batteryStatus

  const batteryLevel = Math.floor(level * 100)
  const batteryLevelWidth = batteryLevel - 29
  const batterySource = charging ? 'Power Adapter' : 'Battery'

  const styles = {
    dropdownHeader: clsx('flex flex-col gap-y-1.5 -mt-1.5'),

    batteryLevel: clsx('absolute inset-0 top-1/2 left-0.5 h-2 -mt-1', {
      'bg-green-400': charging,
      'bg-red-400': batteryLevel < 20 && !charging,
      'bg-amber-400': batteryLevel >= 20 && batteryLevel < 50 && !charging,
      'bg-zinc-100': batteryLevel >= 50 && !charging,
    }),
  }

  const renderChargingIndicator = () => {
    if (!charging) return null

    const scopedStyles = {
      container: clsx(
        'absolute inset-0 flex items-center justify-center -ml-0.5',
      ),

      icon: clsx('w-auto h-3 stroke-1 stroke-zinc-900 fill-white'),
    }

    return (
      <span className={scopedStyles.container}>
        <BoltIcon className={scopedStyles.icon} />
      </span>
    )
  }

  return (
    <Dropdown>
      <DropdownButton className="h-7" aria-label="Battery status" plain>
        <span className="text-xs">{batteryLevel}%</span>
        <div className="relative">
          <BatteryIcon className="w-auto h-6" />
          <span
            className={styles.batteryLevel}
            style={{ width: `${batteryLevelWidth}%` }}
          />
          {renderChargingIndicator()}
        </div>
      </DropdownButton>
      <DropdownMenu anchor="bottom end" className="z-100 min-w-48">
        <DropdownHeader className={styles.dropdownHeader}>
          <div className="flex justify-between">
            <div className="font-medium text-sm text-zinc-100">Battery</div>
            <div className="font-medium text-sm text-zinc-400">
              {batteryLevel}%
            </div>
          </div>
          <div className="text-xs text-zinc-400">Source: {batterySource}</div>
        </DropdownHeader>
      </DropdownMenu>
    </Dropdown>
  )
}
