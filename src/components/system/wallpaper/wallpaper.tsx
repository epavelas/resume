import clsx from 'clsx'

import { CatalystIcon } from '@/components/icons'
import { Sparkles } from '@/components/ui/sparkles'

export function Wallpaper() {
  const styles = {
    section: clsx('-z-10 absolute inset-x-0 bottom-0'),

    container: clsx('flex justify-center'),

    logo: clsx('w-auto h-10 text-white/90'),

    mask: clsx(
      'relative w-full h-[32rem] -mt-32 overflow-hidden',
      '[mask-image:radial-gradient(50%_50%,white,transparent)]',
      'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40',
      'after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900',
    ),

    sparkles: clsx(
      'absolute inset-x-0 bottom-0 w-full h-full',
      '[mask-image:radial-gradient(50%_50%,white,transparent_85%)]',
    ),
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CatalystIcon className={styles.logo} />
      </div>
      <div className={styles.mask}>
        <Sparkles density={1200} className={styles.sparkles} />
      </div>
    </section>
  )
}
