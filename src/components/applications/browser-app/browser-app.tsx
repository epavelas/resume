import type { ComponentType, SVGProps } from 'react'
import clsx from 'clsx'

import {
  GitHubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from '@/components/icons'

type LinkModel = {
  url: string
  title: string
  className: string
  IconComponent: ComponentType<SVGProps<SVGSVGElement>>
}

const BOOKMARK_LINKS: Array<LinkModel> = [
  {
    url: 'https://www.linkedin.com/in/pavelzablockij/',
    title: 'LinkedIn',
    className: 'bg-[#0A66C2]',
    IconComponent: LinkedinIcon,
  },
  {
    url: 'https://github.com/pavelas',
    title: 'GitHub',
    className: 'bg-[#181717]',
    IconComponent: GitHubIcon,
  },
  {
    url: 'mailto:epavelas@gmail.com',
    title: 'Mail',
    className: 'bg-[#EA4335]',
    IconComponent: GmailIcon,
  },
  {
    url: 'https://twitter.com/epavelas',
    title: 'X',
    className: 'bg-[#000000]',
    IconComponent: XIcon,
  },
  {
    url: 'https://www.instagram.com/paavelas',
    title: 'Instagram',
    className: 'bg-[#E4405F]',
    IconComponent: InstagramIcon,
  },
]

export function BrowserApp() {
  const styles = {
    section: clsx(
      'w-full h-full flex flex-col gap-y-12 p-6 border-t border-white/5',
    ),
  }

  const renderLinkItem = ({
    url,
    title,
    className,
    IconComponent,
  }: LinkModel) => {
    const scopedStyles = {
      link: clsx('group flex flex-col items-center gap-y-1.5'),

      figure: clsx(
        'w-16 h-16 flex items-center justify-center rounded-md shadow-lg',
        className,
      ),

      icon: clsx(
        'w-auto h-10 transform transition-transform duration-150 ease-linear',
        'group-hover:scale-110',
      ),

      title: clsx(
        'font-medium text-sm text-zinc-300 transform transition-colors duration-150 ease-linear',
        'group-hover:text-zinc-100',
      ),
    }

    return (
      <a key={url} href={url} className={scopedStyles.link} target="_blank">
        <figure className={scopedStyles.figure}>
          <IconComponent className={scopedStyles.icon} />
        </figure>
        <span className={scopedStyles.title}>{title}</span>
      </a>
    )
  }

  const renderLinksGroup = (title: string, links: Array<LinkModel>) => {
    const scopedStyles = {
      title: clsx('font-bold text-2xl'),

      container: clsx('flex flex-wrap gap-6 mt-6'),
    }

    return (
      <div>
        <h1 className={scopedStyles.title}>{title}</h1>
        <div className={scopedStyles.container}>
          {links.map(renderLinkItem)}
        </div>
      </div>
    )
  }

  return (
    <section className={styles.section}>
      {renderLinksGroup('Bookmarks', BOOKMARK_LINKS)}
    </section>
  )
}
