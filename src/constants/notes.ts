import {
  BriefcaseIcon,
  EnvelopeIcon,
  HeartIcon,
} from '@heroicons/react/16/solid'

import {
  CoverLetterNote,
  ExperienceNote,
  InterestsNote,
  TailwindCSSBackgroundNote,
} from '@/components/applications/notes-app/notes'
import { TailwindIcon } from '@/components/icons'
import { NoteGroupModel, NoteModel } from '@/types/notes'

export const PROFESSIONAL_NOTES: Array<NoteModel> = [
  {
    id: 'cover-letter',
    title: 'Cover Letter',
    description: 'My name is Pavel Zablockij and I am a Software Engineer.',
    ContentComponent: CoverLetterNote,
    IconComponent: EnvelopeIcon,
  },
  {
    id: 'experience',
    title: 'Experience',
    description:
      'Although I am currently employed as a Frontend Software Engineer, I also have a background in Full-Stack Development.',
    ContentComponent: ExperienceNote,
    IconComponent: BriefcaseIcon,
  },
]

export const TAILWIND_NOTES: Array<NoteModel> = [
  {
    id: 'tailwind-css-background',
    title: 'Me & Tailwind CSS',
    description:
      "I've mentioned before that Tailwind CSS is a unique tool for me.",
    ContentComponent: TailwindCSSBackgroundNote,
    IconComponent: TailwindIcon,
  },
]

export const PERSONAL_NOTES: Array<NoteModel> = [
  {
    id: 'interests',
    title: 'Interests & Hobbies',
    description:
      'I am a very curious person and interested in many different things.',
    ContentComponent: InterestsNote,
    IconComponent: HeartIcon,
  },
]

export const NOTES_LIST: Array<NoteGroupModel> = [
  {
    title: 'Professional',
    notes: PROFESSIONAL_NOTES,
  },
  {
    title: 'Tailwind Labs',
    notes: TAILWIND_NOTES,
  },
  {
    title: 'Personal',
    notes: PERSONAL_NOTES,
  },
]

export const FLAT_NOTES_LIST: Array<NoteModel> = NOTES_LIST.flatMap(
  ({ notes }) => notes,
)
