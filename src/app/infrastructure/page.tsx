import styles from "./page.module.css";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Infrastructure | Prime Toolings',
    description: 'View our defense-grade manufacturing facility, test rigs, and precision engineering equipment in Bangalore.',
};

export default function InfrastructurePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Infrastructure & Facilities</h1>
                <p className={styles.subtitle}>
                    A world-class defense compliant manufacturing ecosystem in the heart of Bangalore.
                </p>
            </header>

            {/* Manufacturing */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Manufacturing Facility</h2>
                <div className={styles.gallery}>
                    <div className={styles.galleryItem}>
                        <div style={{ position: 'relative', width: '100%', height: '250px', backgroundColor: '#f3f4f6' }}>
                            <Image src="/images/hardware-setup.jpg" alt="Manufacturing Facility Setup" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.caption}>
                            <h3>Main Assembly Hall</h3>
                            <p>Dedicated zones for engine integration and precision assembly.</p>
                        </div>
                    </div>
                    <div className={styles.galleryItem}>
                        <div className={styles.imagePlaceholder}>[CNC Machines]</div>
                        <div className={styles.caption}>
                            <h3>Precision Machining</h3>
                            <p>Advanced CNC turning and milling centers for aerospace components.</p>
                        </div>
                    </div>
                    <div className={styles.galleryItem}>
                        <div className={styles.imagePlaceholder}>[Quality Control]</div>
                        <div className={styles.caption}>
                            <h3>Quality Control Station</h3>
                            <p>Metrology and inspection area ensuring micron-level precision.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Test & Calibration</h2>
                <div className={styles.gallery}>
                    <div className={styles.galleryItem}>
                        <div style={{ position: 'relative', width: '100%', height: '250px', backgroundColor: '#f3f4f6' }}>
                            <Image src="/images/fire-test-2.jpg" alt="Engine Test Stand" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.caption}>
                            <h3>Static Test Firing Stand</h3>
                            <p>Reinforced bunkers for safe engine firing tests.</p>
                        </div>
                    </div>
                    <div className={styles.galleryItem}>
                        <div className={styles.imagePlaceholder}>[Data Acquisition]</div>
                        <div className={styles.caption}>
                            <h3>Instrumentation Control</h3>
                            <p>High-speed data acquisition systems for thrust analysis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship in Action */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Internship in Action</h2>
                <div className={styles.gallery}>
                    <div className={styles.galleryItem}>
                        <div style={{ position: 'relative', width: '100%', height: '250px', backgroundColor: '#f3f4f6' }}>
                            <Image src="/images/team-photo.jpg" alt="Student Team Working" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.caption}>
                            <h3>Hands-on Assembly</h3>
                            <p>Students assembling a 1kN propulsion system.</p>
                        </div>
                    </div>
                    <div className={styles.galleryItem}>
                        <div className={styles.imagePlaceholder}>[Workshop Session]</div>
                        <div className={styles.caption}>
                            <h3>Practical Workshops</h3>
                            <p>Mentors guiding interns through complex engineering challenges.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
