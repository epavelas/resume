import { ComponentType, SVGProps } from 'react'

import type { Application, ApplicationStatus } from '@/constants/os'

export type ApplicationModel = {
  id: Application
  title: string
  status: ApplicationStatus
  IconComponent: ComponentType<SVGProps<SVGSVGElement>>
  Component: ComponentType | null
}

export type ApplicationWindowModel = {
  position: number
  isMinimized: boolean
} & ApplicationModel
