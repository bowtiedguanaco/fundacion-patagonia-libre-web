'use client'

const styles = {
  // Global
  page: {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    color: '#1a1a2e',
    backgroundColor: '#fafafa',
    lineHeight: 1.7,
  } as React.CSSProperties,

  // Hero
  hero: {
    position: 'relative' as const,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    background: 'linear-gradient(135deg, #0a1628 0%, #16213e 40%, #1a3a5c 70%, #1e4d6b 100%)',
    color: '#ffffff',
    padding: '2rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 30% 80%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(147,197,253,0.05) 0%, transparent 50%)',
    pointerEvents: 'none' as const,
  },
  heroContent: {
    position: 'relative' as const,
    zIndex: 1,
    maxWidth: '800px',
  },
  heroLogoWrap: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'clamp(112px, 18vw, 140px)',
    height: 'clamp(112px, 18vw, 140px)',
    marginBottom: '1.5rem',
    borderRadius: '999px',
    overflow: 'hidden' as const,
    border: '2px solid rgba(147,197,253,0.32)',
    boxShadow: '0 12px 36px rgba(15, 23, 42, 0.22)',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  heroLogo: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  heroSubtitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 500,
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    color: '#93c5fd',
    marginBottom: '1.5rem',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
    fontWeight: 700,
    lineHeight: 1.15,
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  heroTagline: {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    fontWeight: 300,
    color: '#cbd5e1',
    maxWidth: '650px',
    margin: '0 auto 2.5rem',
    lineHeight: 1.8,
  },
  heroClaim: {
    display: 'inline-block',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: '#93c5fd',
    borderTop: '1px solid rgba(147,197,253,0.3)',
    borderBottom: '1px solid rgba(147,197,253,0.3)',
    padding: '0.6rem 1.5rem',
  },
  scrollIndicator: {
    position: 'absolute' as const,
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'rgba(255,255,255,0.4)',
    fontSize: '1.5rem',
    animation: 'none',
  },

  // Sections
  section: {
    padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem)',
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionDark: {
    backgroundColor: '#0f1729',
    color: '#e2e8f0',
    padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem)',
  },
  sectionDarkInner: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionLabel: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#3b82f6',
    marginBottom: '0.75rem',
  },
  sectionLabelLight: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: '#93c5fd',
    marginBottom: '0.75rem',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 600,
    marginBottom: '2rem',
    lineHeight: 1.2,
    color: '#1a1a2e',
  },
  sectionTitleLight: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 600,
    marginBottom: '2rem',
    lineHeight: 1.2,
    color: '#ffffff',
  },
  paragraph: {
    fontSize: '1.05rem',
    color: '#475569',
    marginBottom: '1.5rem',
    lineHeight: 1.8,
  },
  paragraphLight: {
    fontSize: '1.05rem',
    color: '#cbd5e1',
    marginBottom: '1.5rem',
    lineHeight: 1.8,
  },

  // Cards
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
    border: '1px solid #e8ecf1',
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#1a1a2e',
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.7,
  },

  // Topics list
  topicsGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.6rem',
    marginTop: '1.5rem',
  },
  topicTag: {
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#93c5fd',
    backgroundColor: 'rgba(59,130,246,0.1)',
    border: '1px solid rgba(59,130,246,0.15)',
    borderRadius: '6px',
    padding: '0.4rem 0.9rem',
  },

  // Consejo
  consejoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  consejoCard: {
    textAlign: 'center' as const,
    padding: '1.5rem',
  },
  consejoAvatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#1e3a5f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    fontSize: '1.3rem',
    color: '#93c5fd',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
  },
  consejoName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '0.3rem',
  },
  consejoCargo: {
    fontSize: '0.85rem',
    color: '#93c5fd',
    fontWeight: 500,
  },

  // Académico
  academicoBox: {
    marginTop: '2rem',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid rgba(147,197,253,0.15)',
    backgroundColor: 'rgba(59,130,246,0.05)',
    textAlign: 'center' as const,
  },
  academicoTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  academicoText: {
    fontSize: '0.95rem',
    color: '#94a3b8',
  },

  // Diferencia
  diferenciaDivider: {
    width: '60px',
    height: '2px',
    backgroundColor: '#3b82f6',
    margin: '0 0 2rem',
  },
  blockquote: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
    fontStyle: 'italic' as const,
    color: '#334155',
    borderLeft: '3px solid #3b82f6',
    paddingLeft: '1.5rem',
    margin: '2rem 0',
    lineHeight: 1.6,
  },

  // Contact
  contactSection: {
    backgroundColor: '#0a1628',
    color: '#e2e8f0',
    padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
    textAlign: 'center' as const,
  },
  contactTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '1rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#94a3b8',
    marginBottom: '0.3rem',
  },
  contactEmail: {
    display: 'inline-block',
    maxWidth: '100%',
    fontSize: '1.1rem',
    color: '#93c5fd',
    fontWeight: 500,
    textDecoration: 'none',
    overflowWrap: 'anywhere' as const,
    wordBreak: 'break-word' as const,
  },

  // Footer
  footer: {
    backgroundColor: '#060d1a',
    color: '#64748b',
    textAlign: 'center' as const,
    padding: '1.5rem',
    fontSize: '0.85rem',
  },
}

const consejo = [
  { nombre: 'Santiago Pauli', cargo: 'Presidente', iniciales: 'SP' },
  { nombre: 'Miguel Rodríguez', cargo: 'Vicepresidente', iniciales: 'MR' },
  { nombre: 'Ivana González', cargo: 'Directora ejecutiva', iniciales: 'IG' },
]

export default function Home() {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroLogoWrap}>
            <img
              src="/logo-patagonia-libre.jpg"
              alt="Logo de Fundación Patagonia Libre"
              style={styles.heroLogo}
            />
          </div>
          <h1 style={styles.heroTitle}>
            Impulsamos el desarrollo<br />de una Patagonia libre
          </h1>
          <p style={styles.heroTagline}>
            Somos la primera fundación liberal de Tierra del Fuego y la más austral del mundo.
            Nacimos con una firme convicción: el desarrollo genuino de la Patagonia solo es posible
            a partir de la educación, la generación de ideas y la propuesta de políticas públicas
            que amplíen las libertades de las personas.
          </p>
          <span style={styles.heroClaim}>
            La fundación liberal más austral del mundo
          </span>
        </div>
        <div style={styles.scrollIndicator}>↓</div>
      </section>

      {/* EDUCACIÓN */}
      <section style={styles.section}>
        <p style={styles.sectionLabel}>Eje I</p>
        <h2 style={styles.sectionTitle}>Educación</h2>
        <p style={styles.paragraph}>
          La educación es nuestro eje vertebral. No hay transformación duradera sin formación,
          y la Patagonia necesita más y mejores oportunidades de aprendizaje — dentro y fuera
          del sistema formal.
        </p>
        <div style={styles.cardsGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Educación formal</h3>
            <p style={styles.cardText}>
              Fortalecer la oferta educativa en la región, promoviendo carreras y programas
              académicos que respondan a las necesidades reales de la Patagonia y formen
              profesionales capaces de impulsar su desarrollo.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Educación no formal</h3>
            <p style={styles.cardText}>
              Llevar adelante ciclos de conferencias, programas de formación en liderazgo y
              emprendedurismo, talleres sobre finanzas personales, economía y políticas públicas,
              y contenidos digitales que promuevan el pensamiento crítico, la cultura emprendedora
              y los valores de la libertad individual en toda la Patagonia.
            </p>
          </div>
        </div>
      </section>

      {/* POLÍTICAS PÚBLICAS */}
      <section style={styles.sectionDark}>
        <div style={styles.sectionDarkInner}>
          <p style={styles.sectionLabelLight}>Eje II</p>
          <h2 style={styles.sectionTitleLight}>Políticas Públicas</h2>
          <p style={styles.paragraphLight}>
            Somos un centro de pensamiento dedicado a investigar, analizar y proponer iniciativas
            de legislación provincial y local para el desarrollo de la región patagónica.
          </p>
          <p style={styles.paragraphLight}>
            Nuestro objetivo es generar los diagnósticos, datos y propuestas que hoy nadie produce
            sobre la Patagonia desde una perspectiva liberal. Buscamos que las mejores ideas se
            traduzcan en políticas públicas concretas, construyendo influencia desde la sociedad
            civil y no desde el Estado.
          </p>
        </div>
      </section>

      {/* NUESTRA DIFERENCIA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestra diferencia</h2>
        <p style={styles.paragraph}>
          Ninguna otra fundación liberal argentina tiene foco territorial en la Patagonia.
          Combinamos la profundidad de un centro de pensamiento con la cercanía del trabajo
          educativo en el territorio.
        </p>
      </section>

      {/* CONSEJO DE ADMINISTRACIÓN */}
      <section style={styles.sectionDark}>
        <div style={styles.sectionDarkInner}>
          <p style={styles.sectionLabelLight}>Nosotros</p>
          <h2 style={styles.sectionTitleLight}>Consejo de Administración</h2>
          <div style={styles.consejoGrid}>
            {consejo.map((m) => (
              <div key={m.nombre} style={styles.consejoCard}>
                <div style={styles.consejoAvatar}>{m.iniciales}</div>
                <p style={styles.consejoName}>{m.nombre}</p>
                <p style={styles.consejoCargo}>{m.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Contacto</h2>
        <p style={styles.contactText}>Tierra del Fuego, Antártida e Islas del Atlántico Sur, Argentina</p>
        <p style={{ ...styles.contactText, marginTop: '1rem' }}>
          <a href="mailto:contacto@fundacionpatagonalibre.org" style={styles.contactEmail}>
            contacto@fundacionpatagonalibre.org
          </a>
        </p>
      </section>
    </div>
  )
}
