import {
  CommandLineIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid'

import { BrowserApp } from '@/components/applications/browser-app'
import { NotesApp } from '@/components/applications/notes-app'
import { TerminalApp } from '@/components/applications/terminal-app'
import { VisualStudioCodeApp } from '@/components/applications/visual-studio-code-app'
import { VisualStudioCodeIcon } from '@/components/icons'
import type { ApplicationModel } from '@/types/os'

export enum Application {
  Browser = 'browser',
  Terminal = 'terminal',
  Notes = 'notes',
  VisualStudioCode = 'visual-studio-code',
}

export enum ApplicationStatus {
  Enabled = 'enabled',
  Disabled = 'disabled',
  Maximized = 'maximized',
  Minimized = 'minimized',
}

export const SYSTEM_PASSWORD = 'catalyst'

export const APPLICATIONS_LIST: Array<ApplicationModel> = [
  {
    id: Application.Notes,
    title: 'Notes',
    status: ApplicationStatus.Disabled,
    IconComponent: DocumentTextIcon,
    Component: NotesApp,
  },
  {
    id: Application.Browser,
    title: 'Browser',
    status: ApplicationStatus.Disabled,
    IconComponent: GlobeAltIcon,
    Component: BrowserApp,
  },
  {
    id: Application.Terminal,
    title: 'Terminal',
    status: ApplicationStatus.Disabled,
    IconComponent: CommandLineIcon,
    Component: TerminalApp,
  },
  {
    id: Application.VisualStudioCode,
    title: 'Visual Studio Code',
    status: ApplicationStatus.Disabled,
    IconComponent: VisualStudioCodeIcon,
    Component: VisualStudioCodeApp,
  },
]

export const DEFAULT_WINDOW_WIDTH = 800
export const DEFAULT_WINDOW_HEIGHT = 600
export const DEFAULT_WINDOW_HEIGH_OFFSET = 140
