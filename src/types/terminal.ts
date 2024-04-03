import type { ComponentType } from 'react'

export type TerminalCommandModel = {
  command: string
  description: string
  isHidden?: boolean
  ContentComponent: ComponentType
}
