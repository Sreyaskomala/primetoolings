import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoSymbol}>P</span>
                    PRIME TOOLINGS
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/capabilities" className={styles.link}>Capabilities</Link>
                    <Link href="/careers" className={styles.link}>Careers</Link>
                    <Link href="/infrastructure" className={styles.link}>Facility</Link>
                    <Link href="/internship" className={styles.link}>Internship</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </div>

                <Link href="/enquiry" className={styles.ctaButton}>
                    Apply / Enquire
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
