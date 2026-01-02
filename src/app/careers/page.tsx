import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Careers | Prime Toolings',
    description: 'Join the team building the future of supersonic flight. Open roles for propulsion engineers and designers.',
};

export default function CareersPage() {
    const jobs = [
        {
            title: "Senior Propulsion Engineer",
            type: "Full-Time",
            location: "Bangalore, KA",
            department: "RDE Development"
        },
        {
            title: "Mechanical Design Lead",
            type: "Full-Time",
            location: "Bangalore, KA",
            department: "Structures"
        },
        {
            title: "Avionics Systems Intern",
            type: "Internship",
            location: "Bangalore, KA",
            department: "Electronics"
        },
        {
            title: "Quality Assurance Specialist",
            type: "Full-Time",
            location: "Bangalore, KA",
            department: "Manufacturing"
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <h1 className={styles.heroTitle}>Build What Hasn't<br />Been Built.</h1>
                <p className={styles.heroSubtitle}>
                    At Prime Toolings, we don't just manufacture engines. We engineer the physics of high-speed flight.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Why Prime?</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <h3 className={styles.valueTitle}>Extreme Engineering</h3>
                        <p className={styles.valueDesc}>
                            Work on Rotating Detonation Engines and Ramjets. Solve thermal and structural challenges that define the bleeding edge of aerospace.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3 className={styles.valueTitle}>Total Ownership</h3>
                        <p className={styles.valueDesc}>
                            From CAD to live fire testing, you own your subsystems. No bureaucracy, just pure engineering execution.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3 className={styles.valueTitle}>Rapid Iteration</h3>
                        <p className={styles.valueDesc}>
                            We believe in testing early and often. Our in-house manufacturing facility allows us to iterate hardware in days, not months.
                        </p>
                    </div>
                </div>

                <h2 className={styles.sectionTitle} id="openings">Current Openings</h2>
                <div className={styles.jobList}>
                    {jobs.map((job, index) => (
                        <div key={index} className={styles.jobItem}>
                            <div>
                                <h3 className={styles.jobRole}>{job.title}</h3>
                                <div className={styles.jobMeta}>
                                    <span>{job.department}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                            <Link href="/contact" className={styles.applyLink}>
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <p>Don't see a role that fits? Email your portfolio to <a href="mailto:careers@primetoolings.com" style={{ textDecoration: 'underline', color: 'var(--accent-primary)' }}>careers@primetoolings.com</a></p>
                </div>
            </section>
        </div>
    );
}
