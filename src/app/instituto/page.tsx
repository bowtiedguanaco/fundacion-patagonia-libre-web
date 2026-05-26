const carreras = [
  {
    titulo: 'Tecnicatura Superior en Logística',
    texto:
      'Formación orientada a operaciones, abastecimiento, distribución, gestión de inventarios y coordinación de cadenas de valor en territorios australes.',
  },
  {
    titulo: 'Tecnicatura Superior en Radiología',
    texto:
      'Propuesta pensada para fortalecer capacidades sanitarias regionales y ampliar trayectorias formativas vinculadas al sistema de salud.',
  },
  {
    titulo: 'Tecnicatura Superior en Geomática',
    texto:
      'Perfil estratégico para planificación territorial, información geográfica, catastro, ambiente, infraestructura y desarrollo productivo.',
  },
]

const etapas = [
  'Relevamiento de demanda territorial y mapa de instituciones comparables.',
  'Diseño académico preliminar y validación de pertinencia provincial/regional.',
  'Armado institucional, normativo y operativo para presentación formal.',
]

export default function InstitutoPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.kicker}>Fundación Patagonia Libre</div>
        <h1 style={styles.title}>Instituto Terciario FPL</h1>
        <p style={styles.subtitle}>
          Proyecto educativo de nivel superior para ampliar oportunidades de formación técnica en la Patagonia austral.
        </p>
        <div style={styles.badges}>
          <span style={styles.badge}>Educación</span>
          <span style={styles.badge}>Trabajo</span>
          <span style={styles.badge}>Desarrollo regional</span>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.lead}>
          El Instituto Terciario FPL se encuentra en etapa de formulación. Su objetivo es construir una oferta técnica pertinente,
          viable y conectada con necesidades concretas de Tierra del Fuego y Santa Cruz, priorizando carreras con demanda laboral,
          valor público y capacidad de inserción territorial.
        </p>
      </section>

      <section style={styles.sectionAlt}>
        <div style={styles.inner}>
          <div style={styles.kickerDark}>Oferta inicial en estudio</div>
          <h2 style={styles.h2}>Tres líneas de trabajo</h2>
          <div style={styles.grid}>
            {carreras.map((carrera) => (
              <article key={carrera.titulo} style={styles.card}>
                <h3 style={styles.h3}>{carrera.titulo}</h3>
                <p style={styles.cardText}>{carrera.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.kicker}>Estado del proyecto</div>
        <h2 style={styles.h2Light}>Hoja de ruta</h2>
        <ol style={styles.steps}>
          {etapas.map((etapa) => (
            <li key={etapa} style={styles.step}>{etapa}</li>
          ))}
        </ol>
        <p style={styles.note}>
          Sitio público operativo. La información académica definitiva se incorporará cuando el proyecto complete sus validaciones
          técnicas, institucionales y regulatorias.
        </p>
      </section>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    margin: 0,
    background: '#f8fafc',
    color: '#102033',
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  hero: {
    minHeight: '72vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem 1.5rem',
    color: '#fff',
    background: 'linear-gradient(135deg, #07111f 0%, #102a44 48%, #0f5d78 100%)',
  },
  kicker: {
    color: '#0f5d78',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontSize: '0.76rem',
    fontWeight: 800,
    marginBottom: '0.8rem',
  },
  kickerDark: {
    color: '#93c5fd',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontSize: '0.76rem',
    fontWeight: 800,
    marginBottom: '0.8rem',
  },
  title: {
    margin: 0,
    fontSize: 'clamp(2.6rem, 8vw, 5.4rem)',
    lineHeight: 0.95,
    letterSpacing: '-0.06em',
    maxWidth: '920px',
  },
  subtitle: {
    maxWidth: '760px',
    margin: '1.5rem auto 0',
    color: '#dbeafe',
    fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)',
    lineHeight: 1.7,
  },
  badges: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: '2rem',
  },
  badge: {
    border: '1px solid rgba(255,255,255,0.22)',
    borderRadius: 999,
    padding: '0.55rem 0.9rem',
    color: '#e0f2fe',
    background: 'rgba(255,255,255,0.08)',
    fontSize: '0.9rem',
  },
  section: {
    maxWidth: 980,
    margin: '0 auto',
    padding: '4.5rem 1.5rem',
  },
  sectionAlt: {
    background: '#0f172a',
    padding: '4.5rem 1.5rem',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
  },
  lead: {
    margin: 0,
    fontSize: 'clamp(1.15rem, 2.4vw, 1.45rem)',
    lineHeight: 1.8,
    color: '#334155',
  },
  h2: {
    margin: '0 0 2rem',
    color: '#fff',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    letterSpacing: '-0.04em',
  },
  h2Light: {
    margin: '0 0 1.5rem',
    color: '#102033',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    letterSpacing: '-0.04em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: 18,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  h3: {
    margin: '0 0 0.75rem',
    color: '#fff',
    fontSize: '1.15rem',
  },
  cardText: {
    margin: 0,
    color: '#cbd5e1',
    lineHeight: 1.7,
  },
  steps: {
    display: 'grid',
    gap: '0.9rem',
    paddingLeft: '1.4rem',
    margin: '0 0 2rem',
  },
  step: {
    paddingLeft: '0.5rem',
    fontSize: '1.05rem',
    color: '#334155',
    lineHeight: 1.6,
  },
  note: {
    borderTop: '1px solid #cbd5e1',
    paddingTop: '1.25rem',
    color: '#64748b',
    lineHeight: 1.7,
  },
}
