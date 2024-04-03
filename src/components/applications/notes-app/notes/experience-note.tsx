import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

type ExperienceModel = {
  id: string
  companyTitle: string
  position: string
  logo?: string
  from: string
  to: string
}

const EXPERIENCE_LIST: Array<ExperienceModel> = [
  {
    id: 'vinted',
    companyTitle: 'Vinted',
    position: 'Frontend Software Engineer',
    logo: '/images/vinted-logo.png',
    from: '2022',
    to: 'Present',
  },
  {
    id: 'bit-and-byte',
    companyTitle: 'bit&Byte',
    position: 'Mentor (Part-time)',
    logo: '/images/bit-and-byte-logo.png',
    from: '2022',
    to: '2023',
  },
  {
    id: 'telia',
    companyTitle: 'Telia Global Services Lithuania',
    position: 'Senior React Developer',
    logo: '/images/telia-logo.png',
    from: '2021',
    to: '2022',
  },
  {
    id: 'nfq',
    companyTitle: 'NFQ',
    position: 'Student & Full Stack Software Engineer',
    logo: '/images/nfq-logo.png',
    from: '2015',
    to: '2015',
  },
  {
    id: 'onefuzz',
    companyTitle: 'Onefuzz Lithuania',
    position: 'Full Stack Web Developer',
    logo: '/images/onefuzz-logo.jpg',
    from: '2012',
    to: '2013',
  },
  {
    id: 'freelance',
    companyTitle: 'Freelance & Small Business',
    position: 'Software Engineer',
    from: '2010',
    to: '2021',
  },
]

export function ExperienceNote() {
  const renderExperienceSummaryItem = ({
    id,
    companyTitle,
    position,
    logo,
    from,
    to,
  }: ExperienceModel) => {
    const scopedStyles = {
      container: clsx('flex gap-x-4'),

      figure: clsx(
        'shrink-0 overflow-hidden w-10 h-10 flex items-center justify-center mt-1.5 rounded-md',
        {
          'bg-zinc-800': !logo,
        },
      ),

      logo: clsx('object-cover w-full h-full'),
    }

    return (
      <div key={id} className={scopedStyles.container}>
        <figure className={scopedStyles.figure}>
          {logo ? (
            <img src={logo} alt={companyTitle} className={scopedStyles.logo} />
          ) : (
            <BriefcaseIcon className="w-6 h-6 text-zinc-100" />
          )}
        </figure>
        <div>
          <h4 className="font-bold text-white">{companyTitle}</h4>
          <p className="text-sm text-zinc-100">{position}</p>
          <div className="flex items-center gap-x-1.5 mt-1.5 text-xs">
            <CalendarDaysIcon className="shrink-0 w-4 h-4" />
            <span>{from}</span>
            <span>&ndash;</span>
            <span>{to}</span>
          </div>
        </div>
      </div>
    )
  }

  const renderExperienceSummary = () => {
    const scopedStyles = {
      container: clsx('not-prose flex flex-col gap-y-4'),
    }

    return (
      <div className={scopedStyles.container}>
        {EXPERIENCE_LIST.map(renderExperienceSummaryItem)}
      </div>
    )
  }

  return (
    <>
      <p>
        Although I am currently employed as a{' '}
        <strong>Frontend Software Engineer</strong>, I also have a background in{' '}
        <strong>Full-Stack Development</strong>. Having been introduced to
        technology from a young age, I have accumulated experience working with
        a wide variety of technologies.
      </p>
      <h3>Summary 📋</h3>
      {renderExperienceSummary()}
      <h3>Timeline 📆</h3>
      <p>
        In case if you're interested in a more detailed timeline of my
        experience, I've prepared a brief summary of my engineering journey.
      </p>
      <h4>2008 - 2010 👶</h4>
      <p>
        The school had a knowledge sharing initiative, the older ones taught the
        younger ones various skills. At that time, I became very interested in
        website development courses. After a few lessons, I've learned how to
        create a simple website using HTML and CSS and deploy it to the internet
        using{' '}
        <a href="https://filezilla-project.org/" target="_blank">
          FileZilla
        </a>{' '}
        and Free Web Hosting.{' '}
        <span className="text-zinc-400">(I was hooked and super excited)</span>
      </p>
      <p>
        During those years, I learned a lot. Most of my time was spent on
        forums, learning from others and sharing my knowledge.
      </p>
      <ul>
        <li>
          <strong>Web Development</strong> - Learned HTML, CSS, PHP, JavaScript{' '}
          <span className="text-zinc-400">(And of course jQuery)</span> and most
          of the time was building websites using{' '}
          <a href="https://www.phpfusion.com" target="_blank">
            PHPFusion
          </a>{' '}
          and WordPress CMS. 🌐
        </li>
        <li>
          <strong>Scripting</strong> - Learned plugins for game servers using{' '}
          <a href="https://wiki.alliedmods.net/Pawn_Tutorial" target="_blank">
            Pawn
          </a>{' '}
          and{' '}
          <a
            href="https://wiki.multitheftauto.com/wiki/Lua_compilation_API"
            target="_blank"
          >
            Lua
          </a>{' '}
          scripting languages. 🎮
        </li>
      </ul>
      <h4>2011 - 2014 👦</h4>
      <p>
        It was the most exciting and intense time of my life. I was trying to
        balance between school and engineering. I was learning a lot and started
        to earn money from various projects and freelance work.
      </p>
      <ul>
        <li>
          <strong>Summer Job</strong> - I managed to secure a Full Stack Web
          Developer position at the Onefuzz Lithuania agency. 🌞
        </li>
        <li>
          <strong>Java</strong> - I've learned Java when I started playing{' '}
          <a href="https://dev.bukkit.org/" target="_blank">
            Minecraft
          </a>{' '}
          and building my own servers. ☕
        </li>
        <li>
          <strong>Successful Projects</strong> - I've managed to build one of
          the most popular game server projects{' '}
          <span className="text-zinc-400">
            (Counter-Strike, Minecraft, RuneScape Private Servers, San Andreas
            Multiplayer)
          </span>{' '}
          in Lithuania. I was building not only servers but also websites,
          forums and management systems. It was a great source of income for me.
          🚀
        </li>
        <li>
          <strong>Freelance</strong> - I started working on freelance projects
          and building websites for small businesses, mostly e-commerce. 🛒
        </li>
      </ul>
      <h4>2015 - 2018 👱‍♂️</h4>
      <p>
        I started studying at{' '}
        <a href="https://www.vu.lt/en" target="_blank">
          Vilnius University
        </a>{' '}
        and later moved to <strong>Copenhagen, Denmark</strong> to study at{' '}
        <a href="https://www.en.aau.dk/copenhagen" target="_blank">
          Aalborg University
        </a>
        . It was the most challenging and fast-growing period of my life.
      </p>
      <ul>
        <li>
          <strong>Academy</strong> - I've managed to get into the{' '}
          <a href="https://www.nfq.lt/nfq-academy" target="_blank">
            NFQ Academy
          </a>
          . I've learned a lot about{' '}
          <a href="https://symfony.com/" target="_blank">
            Symfony
          </a>{' '}
          and{' '}
          <a href="https://laravel.com/" target="_blank">
            Laravel
          </a>{' '}
          and got my first job offer which I declined, because I was studying
          abroad. 🎓
        </li>
        <li>
          <strong>Vue.js</strong> - I've learned about Vue.js and started using
          it actively in my projects. 💅
        </li>
        <li>
          <strong>Laravel</strong> - Since I started using Laravel actively, I
          was following the community and started exploring the Laravel
          ecosystem. This is how I discovered Tailwind CSS. ❤️
        </li>
        <li>
          <strong>Node.js</strong> - At that time I've started using Node.js a
          lot for tooling and performance sensitive parts of my applications.
        </li>
        <li>
          <strong>Python</strong> - I was very curious about Machine Learning
          and we were introduced to Python at the university. 🐍
        </li>
        <li>
          <strong>Hackathons</strong> - I've managed to win a few hackathons
          organized by Microsoft with my university friends. 🏆
        </li>
      </ul>
      <h4>2019 - 2020 🎒</h4>
      <p>
        After graduating from university, I was highly inspired by{' '}
        <a href="https://twitter.com/levelsio" target="_blank">
          @levelsio
        </a>{' '}
        and other indie hackers, so I decided to take a break, travel and work
        on my own projects.
      </p>
      <ul>
        <li>
          <strong>Ecommerce</strong> - I've managed to build a pretty successful
          e-commerce project where I was selling digital products. 🛍️{' '}
          <span className="text-zinc-400">
            (I was selling video games and prepaid gift cards, later my project
            got acquired)
          </span>
        </li>
        <li>
          <strong>Travel</strong> - I've traveled a lot in Asia and met many
          interesting people. 🌍
        </li>
        <li>
          <strong>React & React Native</strong> - It was the time when I started
          learning React and React Native actively. Later, I've built{' '}
          <a
            href="https://apps.apple.com/gb/app/yelcloud/id1565155572"
            target="_blank"
          >
            a mobile app
          </a>{' '}
          for IOT company in UK. 📱{' '}
          <span className="text-zinc-400">
            (I was using Tailwind CSS and Expo)
          </span>
        </li>
      </ul>
      <h4>2021 👨‍💻</h4>
      <p>
        I decided to move back to Lithuania because I wanted to work in a team.
        I had become a bit anxious working alone. There was an opportunity to
        join{' '}
        <a href="https://www.teliacompany.com/en" target="_blank">
          Telia Company
        </a>{' '}
        and build{' '}
        <a href="https://play.telia.lt/" target="_blank">
          Telia Play
        </a>{' '}
        <span className="text-zinc-400">
          (Essentially creating a Netflix-like service in Lithuania)
        </span>{' '}
        project from scratch. So, I decided to take the challenge.
      </p>
      <ul>
        <li>
          <strong>Next.js</strong> - I learned about Next.js and started using
          it for my side projects. ▲
        </li>
        <li>
          <strong>Web & Mobile apps</strong> - We've managed to build Web and a
          Mobile apps using{' '}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{' '}
          and{' '}
          <a href="https://reactnative.dev/" target="_blank">
            React Native
          </a>{' '}
          from scratch in less than 6 months. 📱
        </li>
        <li>
          <strong>Monorepos</strong> - I've learned about Monorepo
          software-development strategy and applied it{' '}
          <span className="text-zinc-400">
            (We've been using Lerna in our project)
          </span>{' '}
          to our project. 📦
        </li>
        <li>
          <strong>Video Streaming</strong> - Built a video player and integrated{' '}
          <a
            href="https://en.wikipedia.org/wiki/Digital_rights_management"
            target="_blank"
          >
            DRM
          </a>{' '}
          for streams:{' '}
          <a href="https://www.widevine.com/" target="_blank">
            Google Widevine
          </a>
          ,{' '}
          <a href="https://www.microsoft.com/playready/" target="_blank">
            Microsoft PlayReady
          </a>{' '}
          and{' '}
          <a href="https://developer.apple.com/streaming/fps/" target="_blank">
            Apple FairPlay
          </a>
          . 📺
        </li>
      </ul>
      <h4>2022 - Present 🧔‍♂️</h4>
      <p>
        I received an offer from{' '}
        <a href="https://www.vinted.com/" target="_blank">
          Vinted
        </a>
        , the largest second-hand fashion platform in the world and the first
        Lithuanian unicorn. So, I decided to join the team and contribute to the
        mission of making second-hand the first choice worldwide. ♻️
      </p>
      <ul>
        <li>
          <strong>Next.js</strong> - We're using Next.js for our projects, I've
          deepened my knowledge and learned a lot about SSR, server actions and
          App Router. ▲
        </li>
        <li>
          <strong>Internal Tools</strong> - I was working on different internal
          tools, building dashboards and improving the developer experience. 🛠️
        </li>
        <li>
          <strong>Ruby on Rails</strong> - I've started using Ruby on Rails and
          contributed to building APIs for our internal tools. 💎
        </li>
        <li>
          <strong>Mentorship</strong> - I'm participating in the mentorship
          program, aiming to help others and learn from them. 🎓
        </li>
      </ul>
      <h3>The Future 👴</h3>
      <p>
        Although I'm quite happy with my current position, I've always had a
        desire to build something that would benefit other developers. Given my
        extensive use of Tailwind CSS, it would be a dream to contribute to the
        project and assist others in building beautiful and accessible websites.
        🩵
      </p>
    </>
  )
}
