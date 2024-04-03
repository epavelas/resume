import clsx from 'clsx'

import { useOs } from '@/hooks'
import { ApplicationWindowModel } from '@/types/os'

import { Window } from '../window'

export function WindowsManager() {
  const { applications } = useOs()

  const styles = {
    section: clsx('w-full h-full grow'),
  }

  const renderApplicationWindow = (
    { id, title, position, isMinimized, Component }: ApplicationWindowModel,
    index: number,
  ) => {
    return (
      <Window
        key={id}
        id={id}
        title={title}
        position={position}
        isMinimized={isMinimized}
        index={index}
      >
        {Component ? <Component /> : null}
      </Window>
    )
  }

  return (
    <section className={styles.section}>
      {applications.map(renderApplicationWindow)}
    </section>
  )
}
