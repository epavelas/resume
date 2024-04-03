import { TERMINAL_COMMANDS } from '@/constants/terminal'
import type { TerminalCommandModel } from '@/types/terminal'

export function HelpCommand() {
  const renderCommand = ({
    command,
    description,
    isHidden,
  }: TerminalCommandModel) => {
    if (isHidden) return null

    return (
      <tr key={command}>
        <td className="pl-3 pr-12 text-white">{command}</td>
        <td className="text-gray-400 whitespace-nowrap">{description}</td>
      </tr>
    )
  }

  return (
    <div>
      <p className="mt-3 text-gray-400">
        Usage: [<span className="font-semibold">command</span>] +{' '}
        <kbd className="px-1 bg-gray-900 border border-black uppercase">
          <span className="font-semibold">Enter</span>
        </kbd>
      </p>
      <div className="max-w-full overflow-x-scroll">
        <table className="mt-3">{TERMINAL_COMMANDS.map(renderCommand)}</table>
      </div>
    </div>
  )
}
