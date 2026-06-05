export default function InstitutoPage() {
  const basePath = process.env.GITHUB_PAGES === 'true' ? '/fundacion-patagonia-libre-web' : ''
  const src = `${basePath}/instituto-static/index.html`

  return (
    <main style={styles.page}>
      <iframe
        title="Fundación Patagonia Libre · Instituto Terciario Río Gallegos"
        src={src}
        style={styles.iframe}
      />
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    background: '#06101f',
  },
  iframe: {
    display: 'block',
    width: '100%',
    minHeight: '100vh',
    height: '100dvh',
    border: 0,
    background: '#06101f',
  },
}
