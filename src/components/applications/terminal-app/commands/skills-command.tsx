import clsx from 'clsx'

const PROGRAMMING_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'PHP',
  'Ruby',
  'SQL',
  'GraphQL',
]

const JAVASCRIPT_LIST = [
  'React',
  'React Native',
  'Expo',
  'Next.js',
  'RxJs',
  'Redux',
  'React Query',
  'Alpine.js',
  'Node.js',
  'Express.js',
]

const PHP_LIST = ['Laravel', 'Laravel Livewire', 'Symfony']

const PYTHON_LIST = ['Keras', 'TensorFlow']

const DATABASES = ['MySQL', 'SQLite', 'MongoDB', 'Redis']

const STYLING = ['Tailwind CSS', 'Sass', 'Styled components']

const DEVELOPMENT_TOOLS = [
  'Npm',
  'Yarn',
  'Pnpm',
  'Nx',
  'Composer',
  'Homebrew',
  'Git',
  'Webpack',
  'Babel',
  'ESLint',
  'Lerna',
  'Vite',
  'PostCSS',
  'Sketch',
  'Figma',
]

const WALL_OF_HONOUR = [
  'VSCode',
  'Sublime Text',
  'iTerm',
  'TablePlus',
  'Postman',
  'Chrome DevTools',
  'Browsersync',
  'HELO',
  'Tinkerwell',
  'GitHub',
  'Trello',
  'Todoist',
  'Bear',
  'DigitalOcean',
  'AWS',
  'Heroku',
  'Stripe',
  'Algolia',
  "Let's Encrypt",
  'Ubuntu',
  'Nginx',
  'Apache',
  'Docker',
  'OpenVPN',
  'Vim',
]

export function SkillsCommand() {
  const styles = {
    ul: clsx('flex flex-wrap gap-2 mt-1.5 text-white'),
  }

  const renderBadgeItem = (item: string) => (
    <li key={item} className="px-1 bg-gray-900">
      {item}
    </li>
  )

  return (
    <div className="mt-3">
      <p className="text-white font-semibold leading-6">
        Programming languages
      </p>
      <div className="mt-1">
        <ul className={styles.ul}>
          {PROGRAMMING_LANGUAGES.map(renderBadgeItem)}
        </ul>
      </div>

      <p className="mt-4 text-white font-semibold leading-6">
        Frameworks and libraries
      </p>

      <div className="mt-1">
        <ul className={styles.ul}>
          <li className="w-auto text-gray-400 underline">JavaScript:</li>
          {JAVASCRIPT_LIST.map(renderBadgeItem)}
        </ul>
      </div>

      <div className="mt-2.5">
        <ul className={styles.ul}>
          <li className="w-auto text-gray-400 underline">PHP:</li>
          {PHP_LIST.map(renderBadgeItem)}
        </ul>
      </div>

      <div className="mt-2.5">
        <ul className={styles.ul}>
          <li className="w-auto text-gray-400 underline">Python:</li>
          {PYTHON_LIST.map(renderBadgeItem)}
        </ul>
      </div>

      <div className="mt-2.5">
        <ul className={styles.ul}>
          <li className="w-auto text-gray-400 underline">Databases:</li>
          {DATABASES.map(renderBadgeItem)}
        </ul>
      </div>

      <div className="mt-2.5">
        <ul className={styles.ul}>
          <li className="w-auto text-gray-400 underline">Styling:</li>
          {STYLING.map(renderBadgeItem)}
        </ul>
      </div>

      <p className="mt-4 text-white font-semibold leading-6">
        Development tools
      </p>
      <div className="mt-1">
        <ul className={styles.ul}>{DEVELOPMENT_TOOLS.map(renderBadgeItem)}</ul>
      </div>

      <p className="mt-4 text-white font-semibold leading-6">
        Wall of Honour &hearts;
      </p>
      <div className="mt-1">
        <ul className={styles.ul}>{WALL_OF_HONOUR.map(renderBadgeItem)}</ul>
      </div>
    </div>
  )
}
