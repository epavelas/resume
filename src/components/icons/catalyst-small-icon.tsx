import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export function CatalystSmallIcon(props: Props) {
  return (
    <svg
      viewBox="0 0 34 28"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.3311 0.166016L8.90235 0.408763L0.902352 13.7418L0.902344 14.2563L8.90234 27.5903L8.97771 27.6867L8.97871 27.6877L9.3321 27.834H25.3321L25.6857 26.9805L22.3527 23.6465L21.9991 23.5H12.2742L6.25596 14L12.2733 4.49902H21.9981L22.3517 4.35257L25.6847 1.01957L25.3311 0.166016H9.3311Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.836 5.07617L24.6 8.31317L24.5312 8.93422L27.7398 13.9997L24.5312 19.0651L24.6001 19.6862L27.8361 22.9222L28.6184 22.8259L33.7604 14.2569L33.7604 13.7424L28.6184 5.17242L27.836 5.07617Z"
      />
    </svg>
  )
}
