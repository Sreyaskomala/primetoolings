import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Internship Program | Prime Toolings',
    description: 'Join our 30-day intensive aerospace engineering internship. Hands-on experience with real engines and live testing.',
};

export default function InternshipPage() {
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.title}>Aerospace Engineering Internship</h1>
                <p className={styles.subtitle}>
                    From Day 1: Real Engines, Real Tests, Real Experience
                </p>
                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>30</span>
                        Days Duration
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>5+</span>
                        Live Projects
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100%</span>
                        Hands-On
                    </div>
                </div>
            </header>

            {/* Curriculum */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>What You Will Learn</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Design & Simulation</h3>
                        <ul className={styles.list}>
                            <li>CAD Modeling (Part, Surface, Assembly)</li>
                            <li>Aeroelasticity & Aeroacoustics</li>
                            <li>Thermo-structural Analysis</li>
                            <li>Aerothermal Analysis</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Practical Experiments</h3>
                        <ul className={styles.list}>
                            <li>Rotating Detonation Engine Assembly</li>
                            <li>Universal Rocket Engine Calibration</li>
                            <li>Missile Solid Booster Stepper</li>
                            <li>Ramjet Engine Firing Tests</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Career Benefits</h3>
                        <ul className={styles.list}>
                            <li>Certificate of Completion</li>
                            <li>1-Year Experience Letter</li>
                            <li>Placement Assistance</li>
                            <li>Part-time Role Opportunities</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Fees */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Program Fee Structure</h2>
                <div className={styles.pricingGrid}>
                    <div className={styles.pricingCard}>
                        <h3 className={styles.mode}>Online Mode</h3>
                        <div className={styles.price}>₹3,000</div>
                        <ul className={styles.list} style={{ textAlign: 'left' }}>
                            <li>Live Virtual Sessions</li>
                            <li>Remote Simulation Access</li>
                            <li>Digital Certification</li>
                        </ul>
                    </div>

                    <div className={`${styles.pricingCard} ${styles.highlight}`}>
                        <h3 className={styles.mode}>Offline Mode</h3>
                        <div className={styles.price}>₹5,000</div>
                        <ul className={styles.list} style={{ textAlign: 'left' }}>
                            <li>Bangalore Facility Access</li>
                            <li>Hands-on Engine Assembly</li>
                            <li>Live Test Firing Participation</li>
                            <li>Hardware Interaction</li>
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                        Eligibility: Aeronautical, Aerospace, and Mechanical Engineering Students Only
                    </p>
                    <Link href="/enquiry" className={styles.applyButton}>
                        Apply for Internship
                    </Link>
                </div>
            </section>
        </div>
    );
}
