import { type FormEvent, useState } from 'react'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import { Button } from '@/components/catalyst-ui/button'
import { Input } from '@/components/catalyst-ui/input'
import { Strong, Text } from '@/components/catalyst-ui/text'
import { TailwindIcon } from '@/components/icons'
import { GridPattern } from '@/components/ui/grid-pattern'
import { Spacer } from '@/components/ui/spacer'
import { SYSTEM_PASSWORD } from '@/constants/os'
import { useSession } from '@/hooks'
import { getRandomBlocks } from '@/utils/helpers'

const GRID_PATTERN_BLOCKS = getRandomBlocks(32, 32)

export function LockScreen() {
  const [inputPassword, setInputPassword] = useState('')
  const [errorsCount, setErrorsCount] = useState(0)
  const [hasErrorAnimation, setHasErrorAnimation] = useState(false)

  const { signIn } = useSession()

  const styles = {
    main: clsx(
      'overflow-hidden relative flex w-full h-full items-center justify-center',
    ),

    gridPattern: clsx(
      'absolute -inset-x-0.5 -top-1/4 h-[150%] w-full skew-y-12 stroke-white/5 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]',
    ),

    gridPatternBlock: clsx(
      'fill-white/5 transition duration-500',
      'hover:fill-white/10',
    ),

    form: clsx('relative flex flex-col items-center'),

    formGroup: clsx('flex gap-x-2', { 'animate-shake': hasErrorAnimation }),

    avatar: clsx(
      'size-28 flex items-center justify-center rounded-full bg-white border-2 border-white/10',
    ),
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputPassword.toLowerCase() === SYSTEM_PASSWORD) {
      signIn()

      return
    }

    setHasErrorAnimation(true)
    setInputPassword('')
    setErrorsCount((prevErrorsCount) => prevErrorsCount + 1)
  }

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setInputPassword(event.currentTarget.value)
  }

  const handleAnimationEnd = () => {
    setHasErrorAnimation(false)
  }

  const renderHint = () => {
    if (!errorsCount) {
      return (
        <Text>
          <Strong>Hint:</Strong> What's the one word for something that drives
          change?
        </Text>
      )
    }

    if (errorsCount === 1) {
      return (
        <Text>
          <Strong>Hint:</Strong> What is the name of the starter kit from
          Tailwind Labs?
        </Text>
      )
    }

    return (
      <Text>
        Nice try! Let me help you, just try: <Strong>{SYSTEM_PASSWORD}</Strong>
      </Text>
    )
  }

  return (
    <main className={styles.main}>
      <GridPattern
        offsetX={0}
        offsetY={0}
        size={96}
        className={styles.gridPattern}
      >
        {GRID_PATTERN_BLOCKS.map(([row, column], index) => (
          <GridPattern.Block
            key={index}
            row={row}
            column={column}
            className={styles.gridPatternBlock}
          />
        ))}
      </GridPattern>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="password">
          <div className={styles.avatar}>
            <TailwindIcon className="w-auto h-12 fill-[#38bdf8]" aria-hidden />
          </div>
          <Spacer size="28" />
          <h1 className="text-lg text-white font-semibold">Tailwind Labs</h1>
        </label>
        <Spacer size="12" />
        <div onAnimationEnd={handleAnimationEnd} className={styles.formGroup}>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={inputPassword}
            onChange={handlePasswordChange}
            autoFocus
          />
          <Button type="submit" aria-labelledby="submit-button-label" outline>
            <span id="submit-button-label" className="sr-only">
              Sign in
            </span>
            <ArrowRightEndOnRectangleIcon aria-hidden />
          </Button>
        </div>
        <div>
          <Spacer size="16" />
          {renderHint()}
        </div>
      </form>
    </main>
  )
}
