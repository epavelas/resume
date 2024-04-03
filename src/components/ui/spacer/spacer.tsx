import clsx from 'clsx'

type Size = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32' | '40'

type Props = {
  size: Size
}

const commonStyles = clsx('block w-px h-px')

export function Spacer({ size }: Props) {
  const SIZE_MAP: Record<Size, string> = {
    4: clsx('mt-1'),
    8: clsx('mt-2'),
    12: clsx('mt-3'),
    16: clsx('mt-4'),
    20: clsx('mt-5'),
    24: clsx('mt-6'),
    28: clsx('mt-7'),
    32: clsx('mt-8'),
    40: clsx('mt-10'),
  }

  const styles = clsx(commonStyles, SIZE_MAP[size])

  return <span className={styles} aria-hidden />
}
