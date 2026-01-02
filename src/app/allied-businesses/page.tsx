import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Allied Businesses | Prime Toolings',
    description: 'Our ecosystem includes Sri Marulasiddeshwara Agencies (Industrial Tools) and Santhosh Traders (Pneumatic Systems).',
};

export default function AlliedPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Allied Businesses</h1>
                <p className={styles.subtitle}>
                    A comprehensive industrial ecosystem supporting aerospace, construction, and precision manufacturing.
                </p>
            </header>

            <div className={styles.businessList}>
                {/* SMA */}
                <div className={styles.businessCard}>
                    <div className={styles.content}>
                        <h2 className={styles.bizName}>Sri Marulasiddeshwara Agencies (SMA)</h2>
                        <span className={styles.bizTagline}>Industrial Power Tools & Hardware</span>
                        <p className={styles.bizDesc}>
                            Supplying industrial-grade tools and materials to the aerospace and precision manufacturing sectors. We ensure our engineers have access to the best equipment.
                        </p>
                        <div className={styles.productList}>
                            <h4>Key Offerings</h4>
                            <ul>
                                <li>Precision Torque Wrenches</li>
                                <li>Electric Die Grinders</li>
                                <li>Ultrasonic Cutters</li>
                                <li>Rotary Hammers</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.viz}>[SMA Logo / Tools Image]</div>
                </div>

                {/* Santhosh Traders */}
                <div className={styles.businessCard}>
                    <div className={styles.content}>
                        <h2 className={styles.bizName}>Santhosh Traders</h2>
                        <span className={styles.bizTagline}>Pneumatic Systems & Valves</span>
                        <p className={styles.bizDesc}>
                            Specializing in high-precision pneumatic actuators, oil-free lab compressors, and solenoid valve systems critical for aerospace testing.
                        </p>
                        <div className={styles.productList}>
                            <h4>Product Lines</h4>
                            <ul>
                                <li>Pneumatic Actuators</li>
                                <li>Silent Lab Compressors</li>
                                <li>Flow Controllers</li>
                                <li>Solenoid Valves</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.viz}>[Pneumatic Systems Image]</div>
                </div>

                {/* Real Estate */}
                <div className={styles.businessCard}>
                    <div className={styles.content}>
                        <h2 className={styles.bizName}>Grihya Gangamkote Real Estate</h2>
                        <span className={styles.bizTagline}>Infrastructure Development</span>
                        <p className={styles.bizDesc}>
                            Developing industrial and residential infrastructure that supports our growing manufacturing needs and team accommodation.
                        </p>
                    </div>
                    <div className={styles.viz}>[Infrastructure Image]</div>
                </div>
            </div>
        </div>
    );
}
