'use client'
import { useState } from 'react'

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
    animation: 'bounce 1.5s ease-in-out infinite',
  },

  // Sections
  section: {
    padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionDark: {
    backgroundColor: '#0f1729',
    color: '#e2e8f0',
    padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
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
    color: '#475569',
    lineHeight: 1.7,
  },

  // Consejo
  consejoGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  consejoCard: {
    textAlign: 'center' as const,
    padding: '1.5rem',
    flex: '0 0 200px',
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

  // Redes Sociales
  redesSection: {
    backgroundColor: '#0f1729',
    color: '#e2e8f0',
    padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
    textAlign: 'center' as const,
  },
  redesTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '2rem',
  },
  redesIconsRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.5rem',
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

const consejoAcademico = [
  { nombre: 'Alberto Medina Méndez', iniciales: 'AM' },
  { nombre: 'Alejandro Bongiovanni', iniciales: 'AB' },
  { nombre: 'Manuel Guisone', iniciales: 'MG' },
  { nombre: 'Natalia Graciania', iniciales: 'NG' },
  { nombre: 'José Ramón Acosta Gómez', iniciales: 'JA' },
]

export default function Home() {
  const [twitterHover, setTwitterHover] = useState(false)
  const [igHover, setIgHover] = useState(false)

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>

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
          La educación es nuestro eje principal. No hay transformación duradera sin formación,
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
            civil.
          </p>
        </div>
      </section>

      {/* NUESTRA DIFERENCIA */}
      <section style={{ ...styles.section, padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 3rem)' }}>
        <h2 style={styles.sectionTitle}>Nuestra diferencia</h2>
        <p style={styles.paragraph}>
          Ninguna otra fundación liberal argentina tiene foco territorial en la Patagonia.
          Combinamos la profundidad de un centro de pensamiento con la cercanía del trabajo
          educativo en el territorio.
        </p>
      </section>

      {/* CONSEJO ADMINISTRATIVO */}
      <section style={styles.sectionDark}>
        <div style={styles.sectionDarkInner}>
          <p style={styles.sectionLabelLight}>Nosotros</p>
          <h2 style={styles.sectionTitleLight}>Consejo Administrativo</h2>
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

      {/* CONSEJO ACADÉMICO */}
      <section style={{ ...styles.sectionDark, paddingTop: 0 }}>
        <div style={styles.sectionDarkInner}>
          <h2 style={styles.sectionTitleLight}>Consejo Académico</h2>
          <div style={styles.consejoGrid}>
            {consejoAcademico.map((m) => (
              <div key={m.nombre} style={styles.consejoCard}>
                <div style={styles.consejoAvatar}>{m.iniciales}</div>
                <p style={styles.consejoName}>{m.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section style={styles.redesSection}>
        <h2 style={styles.redesTitle}>Seguinos en Redes Sociales</h2>
        <div style={styles.redesIconsRow}>
          <a
            href="https://twitter.com/patagonialib"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', opacity: twitterHover ? 1 : 0.85, display: 'inline-flex', cursor: 'pointer' }}
            aria-label="Twitter / X"
            onMouseEnter={() => setTwitterHover(true)}
            onMouseLeave={() => setTwitterHover(false)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/patagonialib"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff', opacity: igHover ? 1 : 0.85, display: 'inline-flex', cursor: 'pointer' }}
            aria-label="Instagram"
            onMouseEnter={() => setIgHover(true)}
            onMouseLeave={() => setIgHover(false)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
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
