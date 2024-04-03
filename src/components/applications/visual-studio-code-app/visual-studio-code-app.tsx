import clsx from 'clsx'

export function VisualStudioCodeApp() {
  const styles = {
    iframe: clsx('size-full bg-[#202020]'),
  }

  return (
    <iframe
      src="https://vitejs.dev/"
      title="Visual Studio Code"
      className={styles.iframe}
    />
  )
}
