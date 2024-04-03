export function WhoAmICommand() {
  return (
    <div className="mt-3">
      <p className="text-white leading-6">
        My name is{' '}
        <span className="font-semibold bg-gray-900">Pavel Zablockij</span>, and
        I am a{' '}
        <span className="font-semibold bg-gray-900">Software Engineer</span>. I
        was born on{' '}
        <span className="font-semibold bg-gray-900">January 7th, 1996</span> and
        I grew up in{' '}
        <span className="font-semibold bg-gray-900">Vilnius, Lithuania</span>. I
        am fluent in three different languages:{' '}
        <span className="font-semibold bg-gray-900">Lithuanian</span>,{' '}
        <span className="font-semibold bg-gray-900">English</span> and{' '}
        <span className="font-semibold bg-gray-900">Russian</span>. My current
        professional position is{' '}
        <span className="font-semibold bg-gray-900">
          Frontend Software Engineer
        </span>{' '}
        at <span className="font-semibold bg-gray-900">Vinted</span>.
      </p>
      <p className="mt-3 text-white leading-6">
        Email address:{' '}
        <a
          href="mailto:pavel@zablockij.com"
          className="font-semibold underline hover:bg-white hover:text-gray-900"
        >
          pavel@zablockij.com
        </a>
      </p>
      <p className="text-white leading-6">
        Phone number:{' '}
        <a
          href="tel:+37067530400"
          className="font-semibold underline hover:bg-white hover:text-gray-900"
        >
          +37067530400
        </a>
      </p>
      <p className="text-white leading-6">
        <span className="text-gray-400">LinkedIn:</span>{' '}
        <a
          href="https://www.linkedin.com/in/pavel-zablockij/"
          target="_blank"
          className="font-semibold underline hover:bg-white hover:text-gray-900"
        >
          linkedin.com/in/pavel-zablockij
        </a>
      </p>
      <p className="text-white leading-6">
        <span className="text-gray-400">GitHub:</span>{' '}
        <a
          href="https://github.com/pavelas"
          target="_blank"
          className="font-semibold underline hover:bg-white hover:text-gray-900"
        >
          github.com/pavelas
        </a>
      </p>
    </div>
  )
}
