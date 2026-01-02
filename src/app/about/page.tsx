import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us | Prime Toolings',
    description: 'Learn about Prime Toolings, our vision for India\'s aerospace future, and our defense-grade manufacturing infrastructure.',
};

export default function AboutPage() {
    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>About Prime Toolings</h1>
                <p className={styles.subtitle}>
                    Prime Toolings specializes in high-speed propulsion systems, advanced manufacturing, and defense-grade engineering solutions. We bridge the gap between academic theory and industrial reality.
                </p>
            </header>

            {/* Vision & Mission */}
            <section className={styles.section}>
                <div className={styles.visionGrid}>
                    <div className={styles.visionCard}>
                        <h2 className={styles.visionTitle}>Our Vision</h2>
                        <p className={styles.visionText}>
                            To advance India&apos;s aerospace capabilities through indigenous innovation and practical engineering, creating a self-reliant ecosystem for defense technology.
                        </p>
                    </div>
                    <div className={styles.visionCard}>
                        <h2 className={styles.visionTitle}>Our Mission</h2>
                        <p className={styles.visionText}>
                            To bridge the gap between academia and industry by providing hands-on training on real defense hardware while delivering cutting-edge propulsion solutions to our partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Infrastructure Note */}
            <section className={styles.section}>
                <div className={styles.infraDetails}>
                    <div className={styles.infraText}>
                        <h3>Facility & Infrastructure</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                            Located in the industrial heart of Bangalore, our facility is equipped for end-to-end aerospace manufacturing and testing.
                        </p>
                        <ul className={styles.infraList}>
                            <li>Gubbanna Industrial Estate, Rajajinagar, Bangalore</li>
                            <li>Defense-compliant security protocols</li>
                            <li>High-precision machining center</li>
                            <li>Dedicated engine test firing zones</li>
                        </ul>
                    </div>
                    <div style={{
                        height: '300px',
                        background: 'var(--color-card-bg)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-text-muted)'
                    }}>
                        [Facility Map / Photo Placeholder]
                    </div>
                </div>
            </section>
        </div>
    );
}
