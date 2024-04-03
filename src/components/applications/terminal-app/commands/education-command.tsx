type EducationModel = {
  school: string
  education: string
  degree?: string
  years: string
}

const EDUCATION_LIST: Array<EducationModel> = [
  {
    school: 'Seskines Primary School',
    education: 'Primary education',
    years: '2002 - 2010',
  },
  {
    school: 'Gabijos Gymnasium',
    education: 'Secondary education',
    years: '2010 - 2014',
  },
  {
    school: 'Vilnius University',
    education: 'Software Engineering',
    degree: 'Bachelor Degree',
    years: '2014 - 2015',
  },
  {
    school: 'Aalborg University Copenhagen',
    education: 'IT, Communication and New Media',
    degree: 'Bachelor Degree',
    years: '2015 - 2018',
  },
]

export function EducationCommand() {
  const renderEducationItem = ({
    school,
    education,
    degree,
    years,
  }: EducationModel) => (
    <div key={school} className="flex">
      <div className="w-6/12">
        <p className="text-white font-semibold leading-6">{school}</p>
        <p className="text-gray-400 leading-6">{education}</p>
        {degree ? <p className="text-xs text-gray-400">{degree}</p> : null}
      </div>
      <div>
        <p className="text-white leading-6 font-semibold">{years}</p>
      </div>
    </div>
  )

  return (
    <div className="mt-3 space-y-3">
      {EDUCATION_LIST.map(renderEducationItem)}
    </div>
  )
}
