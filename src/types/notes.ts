import type { ComponentType, SVGProps } from 'react'

export type NoteModel = {
  id: string
  title: string
  description: string
  ContentComponent: ComponentType
  IconComponent: ComponentType<SVGProps<SVGSVGElement>>
}

export type NoteGroupModel = {
  title: string
  notes: Array<NoteModel>
}
