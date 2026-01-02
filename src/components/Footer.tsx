import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>PRIME TOOLINGS</h3>
                        <p>Advancing aerospace propulsion through precision engineering and defense-grade manufacturing.</p>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.column}>
                            <h4>Explore</h4>
                            <div className={styles.links}>
                                <Link href="/about" className={styles.link}>About</Link>
                                <Link href="/capabilities" className={styles.link}>Capabilities</Link>
                                <Link href="/infrastructure" className={styles.link}>Infrastructure</Link>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <h4>Programs</h4>
                            <div className={styles.links}>
                                <Link href="/internship" className={styles.link}>Internship</Link>
                                <Link href="/enquiry" className={styles.link}>Technical Enquiry</Link>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <h4>Contact</h4>
                            <div className={styles.links}>
                                <Link href="/contact" className={styles.link}>Get in Touch</Link>
                                <a href="mailto:info@primetoolings.org" className={styles.link}>info@primetoolings.org</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Baletix Innovation Pvt. Ltd. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="/privacy" className={styles.link}>Privacy</Link>
                        <Link href="/terms" className={styles.link}>Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
