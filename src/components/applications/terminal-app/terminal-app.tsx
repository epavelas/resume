import { ChangeEvent, useRef, useState } from 'react'
import clsx from 'clsx'

import { TERMINAL_COMMANDS } from '@/constants/terminal'

export function TerminalApp() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [inputValue, setInputValue] = useState('')
  const [currentCommand, setCurrentCommand] = useState('')

  const styles = {
    section: clsx(
      'overflow-y-scroll w-full h-full p-3 bg-gray-800 font-mono text-sm',
    ),

    input: clsx(
      'w-full bg-transparent border-gray-400 rounded-none lowercase text-white text-sm appearance-none',
      'focus:outline-none focus:border-l-0',
      {
        'border-l-4': inputValue.length === 0,
        'border-l-0': inputValue.length > 0,
      },
    ),
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!inputValue) {
      return
    }

    setCurrentCommand(inputValue)
    setInputValue('')
  }

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value.trim().toLowerCase())
  }

  const renderTerminalHeader = () => {
    return (
      <div>
        <div className="flex items-center gap-x-2.5">
          <span className="text-indigo-500">&#10095;</span>
          <p className="text-green-500 font-semibold leading-6">sudo login</p>
        </div>

        <p className="mt-3 text-white leading-6">
          <span className="text-gray-400">Welcome to</span>{' '}
          <span className="font-semibold">
            <span className="text-indigo-500 text-xs font-semibold">&lt;</span>
            Catalyst OS
            <span className="text-indigo-500 text-xs font-semibold">&gt;</span>
          </span>
        </p>

        <p className="mt-1.5 text-gray-400 leading-6">
          Type '<span className="font-semibold">help</span>' +{' '}
          <kbd className="px-1 bg-gray-900 border border-black uppercase">
            <span className="font-semibold">Enter</span>
          </kbd>{' '}
          -- in order to see all available commands.
        </p>
      </div>
    )
  }

  const renderCommandNotFound = () => {
    return (
      <div className="mt-3">
        <div className="flex items-center gap-x-2.5 text-red-500">
          <span>&#10095;</span>
          <p className="leading-6 font-semibold">{currentCommand}</p>
        </div>
        <p className="text-gray-400 leading-6">
          Command not found: {currentCommand}
        </p>
      </div>
    )
  }

  const renderCommandOutput = () => {
    if (!currentCommand) {
      return null
    }

    const command = TERMINAL_COMMANDS.find(
      ({ command }) => command === currentCommand,
    )

    if (!command) {
      return renderCommandNotFound()
    }

    const { ContentComponent } = command

    return (
      <div className="max-w-screen-md mt-3">
        <div className="flex items-center gap-x-2.5">
          <span className="text-indigo-500">&#10095;</span>
          <p className="text-green-500 font-semibold leading-6">
            {currentCommand}
          </p>
        </div>
        <ContentComponent />
      </div>
    )
  }

  const renderCommandInput = () => {
    return (
      <div className="flex items-center gap-x-2.5 mt-3">
        <p className="text-pink-500">&#10095;</p>
        <div className="grow">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              className={styles.input}
              type="text"
              autoComplete="off"
              autoFocus
            />
          </form>
        </div>
      </div>
    )
  }

  return (
    <section className={styles.section} onClick={handleFocus}>
      {renderTerminalHeader()}
      {renderCommandOutput()}
      {renderCommandInput()}
    </section>
  )
}
