import clsx from 'clsx'

import { Desktop, Wallpaper } from '@/components/system'

export function OsScreen() {
  const styles = {
    main: clsx('w-full h-full relative flex flex-col justify-between'),
  }

  return (
    <main className={styles.main}>
      <Desktop />
      <Wallpaper />
    </main>
  )
}
