type ExperienceModel = {
  company: string
  position: string
  years: string
  responsibilities: Array<string>
}

const EXPERIENCE_LIST: Array<ExperienceModel> = [
  {
    company: 'Onefuzz Lithuania',
    position: 'Full Stack Web Developer',
    years: '2012 - 2013',
    responsibilities: [
      'Developed full-stack web applications based on client requirements.',
      'Participated in peer code reviews and provided assistance in bug fixes and feature enhancements.',
      'Monitored and supervised web server, database server and other services.',
      'Designed and created a knowledge management platform for clients and developers.',
    ],
  },
  {
    company: 'GAMERHOUSE LP',
    position: 'Chief Executive Officer',
    years: '2014 - 2018',
    responsibilities: [
      'Developed gaming community servers, community forum, ecommerce website.',
      'Designed and developed digital goods management system.',
      'Integrated different third-party APIs, eBay, Amazon, payment gateways, other marketplaces.',
      'Automated the workflow of goods delivery, communication between suppliers and customers.',
      'Developed tools for price analysis, better customer communication, stock management.',
    ],
  },
  {
    company: 'Freelancer',
    position: 'Software Engineer',
    years: '2010 - 2021',
    responsibilities: [
      'Developed full-stack web applications: landing pages, blogs, ecommerce.',
      'Designed and developed native mobile applications for iOS and Android.',
      'Developed different command line interface tools.',
      'Developed software for MacOS and Windows.',
      'Worked with Telegram, Facebook Messenger and Discord bots.',
      'Gained experience working with Machine Learning and Neural Networks.',
      'Followed, learned, experimented with the latest technologies and current trends.',
    ],
  },
  {
    company: 'Telia Global Services Lithuania',
    position: 'Senior React Developer',
    years: '2021 - 2022',
    responsibilities: [
      'Building Telia Play next generation online streaming web application.',
      'Working closely with backend team during process of developing APIs.',
      'Building video players for Chromium based and Safari browsers.',
      'Integrated DRM for streams: Google Widevine, Microsoft PlayReady and Apple FairPlay.',
    ],
  },
  {
    company: 'Vinted',
    position: 'Frontend Software Engineer',
    years: '2022 - Present',
    responsibilities: [
      'Migrating core project and internal tools from Ruby on Rails to React.',
      'Building internal tools for fraud prevention and better customer support experience.',
      'Preparing core help center project codebase for Next.js and SSR.',
    ],
  },
]

export function ExperienceCommand() {
  const renderResponsibilitiesItem = (
    responsibility: string,
    index: number,
  ) => (
    <li key={index} className="leading-5">
      &middot; {responsibility}
    </li>
  )

  const renderExperienceItem = ({
    company,
    position,
    years,
    responsibilities,
  }: ExperienceModel) => (
    <div key={company}>
      <div className="flex justify-between">
        <div>
          <p className="text-white font-semibold leading-6">{company}</p>
          <p className="text-gray-400 font-semibold leading-6">{position}</p>
        </div>
        <p className="text-white leading-6 font-semibold">{years}</p>
      </div>
      <ul className="list-inside text-gray-400 text-xs">
        {responsibilities.map(renderResponsibilitiesItem)}
      </ul>
    </div>
  )

  return (
    <div className="mt-3 space-y-6">
      {EXPERIENCE_LIST.map(renderExperienceItem)}
    </div>
  )
}
