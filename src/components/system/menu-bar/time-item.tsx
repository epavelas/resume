import { useEffect, useState } from 'react'

import { Button } from '@/components/catalyst-ui/button'

export function TimeItem() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Button className="h-7 tabular-nums" plain>
      {currentTime.toLocaleTimeString('lt-LT', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </Button>
  )
}
