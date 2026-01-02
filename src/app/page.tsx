import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Advanced Propulsion Systems</span>
          <h1 className={styles.heroTitle}>
            Engineering <br />
            The Future of Flight
          </h1>
          <p className={styles.heroSubtitle}>
            Specialized manufacturing of Rotating Detonation Engines, Ramjets,
            and defense-grade micro-thrusters in Bangalore, India.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/capabilities" className={styles.primaryButton}>
              Our Capabilities
            </Link>
            <Link href="/enquiry" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <div className={styles.statSection}>
        <div className={styles.statGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>04</span>
            <span className={styles.statLabel}>Propulsion Types</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30</span>
            <span className={styles.statLabel}>Days Intensive Training</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>In-House Mfg</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>BLR</span>
            <span className={styles.statLabel}>Based Facility</span>
          </div>
        </div>
      </div>

      {/* Capabilities Overview */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Competencies</h2>
          <Link href="/capabilities" className={styles.cardLink}>View All Specs &rarr;</Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>01</span>
            <h3 className={styles.cardTitle}>RDE Systems</h3>
            <p className={styles.cardDesc}>
              Rotating Detonation Engines delivering 1-2 kN thrust for high-speed projectile applications.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardIcon}>02</span>
            <h3 className={styles.cardTitle}>Ramjet Engines</h3>
            <p className={styles.cardDesc}>
              Liquid and Solid fuel variants optimized for supersonic flight regimes (Mach 2-3).
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardIcon}>03</span>
            <h3 className={styles.cardTitle}>Micro Propulsion</h3>
            <p className={styles.cardDesc}>
              Precision micro-thrusters and RATO boosters for guided munitions and UAVs.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardIcon}>04</span>
            <h3 className={styles.cardTitle}>Manufacturing</h3>
            <p className={styles.cardDesc}>
              End-to-end aerospace fabrication facility with high-pressure testing infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Internship CTA */}
      <section className={styles.section}>
        <div style={{ background: 'var(--bg-secondary)', padding: '5rem', borderRadius: '4px', textAlign: 'center' }}>
          <span className={styles.label}>Hands-On Training</span>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>
            Aerospace Internship Program
          </h2>
          <p className={styles.heroSubtitle} style={{ margin: '0 auto 3rem auto' }}>
            Work directly on engine assembly and live fire testing. Designed for serious engineering students.
          </p>
          <Link href="/internship" className={styles.primaryButton}>
            View Program Details
          </Link>
        </div>
      </section>
    </div>
  );
}
