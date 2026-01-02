import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | Prime Toolings',
    description: 'Get in touch with Prime Toolings. Visit our manufacturing facility in Bangalore or contact us for internships and collaborations.',
};

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>
                    Visit our facility or reach out for general inquiries.
                </p>
            </header>

            <div className={styles.grid}>
                <div className={styles.infoCard}>
                    <div className={styles.infoSection}>
                        <span className={styles.label}>General Inquiry</span>
                        <p className={styles.value}>
                            Email: info@primetoolings.org<br />
                            Phone: +91 9110254764
                        </p>
                    </div>

                    <div className={styles.infoSection}>
                        <span className={styles.label}>Manufacturing Facility</span>
                        <p className={styles.value}>
                            Gubbanna Industrial Estate<br />
                            45/40, 10th C Main, 12th B Cross Road<br />
                            6th Block, Rajajinagar<br />
                            Bengaluru, Karnataka 560010
                        </p>
                    </div>

                    <div className={styles.infoSection}>
                        <span className={styles.label}>Specific Requirement?</span>
                        <p className={styles.value} style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                            For internships or technical proposals, please use our detailed forms.
                        </p>
                        <Link href="/enquiry" style={{ color: 'var(--color-thrust)', textDecoration: 'underline', marginTop: '0.5rem', display: 'block' }}>
                            Go to Enquiry Forms &rarr;
                        </Link>
                    </div>
                </div>

                <div className={styles.mapContainer}>
                    [Google Map Embed Pending]<br />
                    Location: Rajajinagar, Bangalore
                </div>
            </div>
        </div>
    );
}
