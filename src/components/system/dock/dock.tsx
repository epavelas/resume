import { useRef } from 'react'
import clsx from 'clsx'

import { Badge } from '@/components/catalyst-ui/badge'
import { Application, APPLICATIONS_LIST } from '@/constants/os'
import { useOs } from '@/hooks'
import { ApplicationModel } from '@/types/os'

const NORMAL_SIZE_IN_REM = 4
const EXPAND_SIZE_IN_REM = 5.5

export function Dock() {
  const { applications, launchApplication } = useOs()

  const container = useRef<HTMLDivElement>(null)

  const styles = {
    container: clsx(
      'shrink-0 w-max h-20 flex justify-center items-end mx-auto mt-0.5 mb-4 px-2.5 bg-transparent shadow-outline-white rounded-lg backdrop-blur',
    ),
  }

  const handleApplicationClick = (applicationId: Application) => () => {
    launchApplication(applicationId)
  }

  const handleItemsMouseEnter = (itemIndex: number) => () => {
    const buttonElements = container.current
      ?.children as HTMLCollectionOf<HTMLDivElement>

    buttonElements[itemIndex].style.width = `${EXPAND_SIZE_IN_REM}rem`

    if (itemIndex > 0 && buttonElements[itemIndex - 1]) {
      buttonElements[itemIndex - 1].style.width = `${EXPAND_SIZE_IN_REM - 1}rem`
    }

    if (
      itemIndex < APPLICATIONS_LIST.length - 1 &&
      buttonElements[itemIndex + 1]
    ) {
      buttonElements[itemIndex + 1].style.width = `${EXPAND_SIZE_IN_REM - 1}rem`
    }
  }

  const handleItemsMouseLeave = (itemIndex: number) => () => {
    const buttonElements = container.current
      ?.children as HTMLCollectionOf<HTMLDivElement>

    buttonElements[itemIndex].style.width = `${NORMAL_SIZE_IN_REM}rem`

    if (itemIndex > 0 && buttonElements[itemIndex - 1]) {
      buttonElements[itemIndex - 1].style.width = `${NORMAL_SIZE_IN_REM}rem`
    }

    if (
      itemIndex < APPLICATIONS_LIST.length - 1 &&
      buttonElements[itemIndex + 1]
    ) {
      buttonElements[itemIndex + 1].style.width = `${NORMAL_SIZE_IN_REM}rem`
    }
  }

  const renderDockItem = (
    { id, title, IconComponent }: ApplicationModel,
    index: number,
  ) => {
    const isApplicationEnabled = applications.some(
      (application) => application.id === id,
    )

    const scopedStyles = {
      button: clsx(
        'group relative',
        'w-16 flex flex-col items-center align-bottom p-1.5',
        'transform-gpu transition-all ease-out duration-200 will-change-auto',
      ),

      tooltip: clsx(
        'absolute hidden bottom-full mb-1.5 text-nowrap select-none',
        'group-hover:block',
      ),

      indictaor: clsx('block w-1 h-1 mt-1.5 rounded-full', {
        'bg-transparent': !isApplicationEnabled,
        'bg-zinc-400': isApplicationEnabled,
      }),
    }

    return (
      <button
        key={id}
        className={scopedStyles.button}
        onMouseEnter={handleItemsMouseEnter(index)}
        onMouseLeave={handleItemsMouseLeave(index)}
        onClick={handleApplicationClick(id)}
      >
        <div className={scopedStyles.tooltip}>
          <Badge>{title}</Badge>
        </div>
        <div className="w-full flex items-center justify-center aspect-square bg-zinc-900 rounded-md">
          <IconComponent className="w-auto h-[55%] text-zinc-100" />
        </div>
        <span className={scopedStyles.indictaor} />
      </button>
    )
  }

  return (
    <nav ref={container} className={styles.container}>
      {APPLICATIONS_LIST.map(renderDockItem)}
    </nav>
  )
}
