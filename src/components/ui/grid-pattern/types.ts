import type { ReactNode } from 'react'

export type GridPatternContextProps = {
  size: number
  offsetX: number
  offsetY: number
}

export type GridProps = {
  size?: number
  offsetX?: number
  offsetY?: number
  children?: ReactNode
  className?: string
}

export type BlockProps = {
  row?: number
  column?: number
  className?: string
}

export type BlockModel = [number, number]
