import { useRef, useState } from 'react'
import clsx from 'clsx'

import { FLAT_NOTES_LIST, NOTES_LIST } from '@/constants/notes'
import type { NoteGroupModel, NoteModel } from '@/types/notes'

export function NotesApp() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [selectedNoteId, setSelectedNoteId] = useState(FLAT_NOTES_LIST[0].id)

  const { title, ContentComponent } =
    FLAT_NOTES_LIST.find(({ id }) => id === selectedNoteId) ||
    FLAT_NOTES_LIST[0]

  const styles = {
    section: clsx('w-full h-full flex border-t border-white/5'),

    aside: clsx(
      'min-w-52 max-w-64 h-full overflow-y-scroll bg-zinc-950/50 border-r border-white/5',
    ),

    container: clsx('h-full overflow-y-scroll grow'),

    nav: clsx('flex flex-col gap-y-1.5 p-1.5'),

    article: clsx('max-w-screen-md p-6', 'prose prose-invert'),
  }

  const handleNoteSelect = (noteId: string) => () => {
    setSelectedNoteId(noteId)
    containerRef.current?.scrollTo({ top: 0 })
  }

  const renderNoteItem = ({
    id,
    title,
    description,
    IconComponent,
  }: NoteModel) => {
    const isActive = selectedNoteId === id

    const scopedStyles = {
      button: clsx(
        'relative w-full px-3 py-2 bg-transparent rounded text-left',
        'hover:bg-zinc-900',
        {
          'bg-zinc-900': isActive,
        },
      ),

      iconContainer: clsx('absolute top-2.5 right-3'),

      icon: clsx('shrink-0 w-4 h-4 text-zinc-400'),

      title: clsx('text-sm', {
        'font-semibold': isActive,
        'font-medium': !isActive,
      }),

      description: clsx('text-xs/6 text-zinc-400 truncate'),
    }

    return (
      <li key={id}>
        <button
          type="button"
          className={scopedStyles.button}
          onClick={handleNoteSelect(id)}
        >
          <span className={scopedStyles.iconContainer}>
            <IconComponent className={scopedStyles.icon} />
          </span>
          <p className={scopedStyles.title}>{title}</p>
          <p className={scopedStyles.description}>{description}</p>
        </button>
      </li>
    )
  }

  const renderNoteGroup = ({ title, notes }: NoteGroupModel) => {
    const scopedStyles = {
      title: clsx(
        'p-1.5 text-xs font-semibold text-zinc-400 cursor-default select-none',
      ),

      ul: clsx('flex flex-col gap-y-1.5'),
    }

    return (
      <div key={title}>
        <div className={scopedStyles.title}>{title}</div>
        <ul className={scopedStyles.ul}>{notes.map(renderNoteItem)}</ul>
      </div>
    )
  }

  return (
    <section className={styles.section}>
      <aside className={styles.aside}>
        <nav className={styles.nav}>{NOTES_LIST.map(renderNoteGroup)}</nav>
      </aside>
      <div ref={containerRef} className={styles.container}>
        <article className={styles.article}>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <ContentComponent />
        </article>
      </div>
    </section>
  )
}
