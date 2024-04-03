import type { MouseEvent, ReactNode } from 'react'
import { Rnd } from 'react-rnd'
import { useWindowSize } from 'react-use'
import { MinusIcon, XMarkIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

import {
  Application,
  DEFAULT_WINDOW_HEIGHT,
  DEFAULT_WINDOW_WIDTH,
} from '@/constants/os'
import { useOs } from '@/hooks'

const DEFAULT_WINDOW_HEIGH_OFFSET = 140

type Props = {
  id: Application
  title: string
  position: number
  isMinimized: boolean
  index: number
  children: ReactNode
}

export function Window({
  id,
  title,
  position,
  isMinimized,
  index,
  children,
}: Props) {
  const { width, height } = useWindowSize()

  const { focusApplication, closeApplication, minimizeApplication } = useOs()

  const initialWidth = Math.min(DEFAULT_WINDOW_WIDTH, width)
  const initialHeight = Math.min(
    DEFAULT_WINDOW_HEIGHT,
    height - DEFAULT_WINDOW_HEIGH_OFFSET,
  )

  const initialX =
    Math.max(0, (width - initialWidth) / 2) + (Math.random() - 0.5) * 100
  const initialY =
    Math.max(0, (height - initialHeight - DEFAULT_WINDOW_HEIGH_OFFSET) / 2) -
    (index * 50 + (Math.random() - 0.5) * 50)

  const minWidth = Math.min(300, width)
  const minHeight = Math.min(200, height - DEFAULT_WINDOW_HEIGH_OFFSET)

  const styles = {
    window: clsx({
      '!hidden': isMinimized,
    }),

    container: clsx(
      'relative overflow-hidden w-full h-full flex flex-col',
      'bg-zinc-900/80 shadow-outline-white rounded-md backdrop-blur-lg',
      'will-change-auto',
    ),

    header: clsx(
      'relative h-11 shrink-0 flex items-center justify-center bg-zinc-950/50 select-none draggable',
    ),

    title: clsx('font-semibold text-sm text-white', 'cursor-default'),

    button: clsx(
      'group h-full px-3 hover:bg-zinc-800 transition-colors duration-150 ease-in-out',
    ),

    icon: clsx('stroke-2 text-zinc-400', 'group-hover:text-white'),

    content: clsx('overflow-scroll grow'),
  }

  const handleFocus = () => {
    focusApplication(id)
  }

  const handleClose = (event: MouseEvent) => {
    closeApplication(id)
    event.stopPropagation()
  }

  const handleMinimize = (event: MouseEvent) => {
    minimizeApplication(id)
    event.stopPropagation()
  }

  const renderControls = () => {
    const scopedStyles = {
      container: clsx('absolute left-0 top-0 h-full flex items-center'),
    }

    return (
      <div className={scopedStyles.container}>
        <button className={styles.button} onMouseDown={handleClose}>
          <XMarkIcon className={clsx('w-4 h-4', styles.icon)} />
        </button>
        <button className={styles.button} onMouseDown={handleMinimize}>
          <MinusIcon className={clsx('w-4 h-4', styles.icon)} />
        </button>
        {/* <button className={styles.button} onMouseDown={handleStopPropagation}>
          <ArrowsPointingOutIcon className={clsx('w-3 h-3', styles.icon)} />
        </button> */}
      </div>
    )
  }

  return (
    <Rnd
      id={id}
      className={styles.window}
      style={{ zIndex: position }}
      dragHandleClassName="draggable"
      bounds="parent"
      onMouseDown={handleFocus}
      minWidth={minWidth}
      minHeight={minHeight}
      default={{
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          {renderControls()}
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </Rnd>
  )
}
