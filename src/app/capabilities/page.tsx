import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Capabilities | Prime Toolings',
    description: 'Explore our high-speed propulsion systems (RDE, Ramjets) and precision manufacturing capabilities.',
};

export default function CapabilitiesPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Engineering Capabilities</h1>
                <p className={styles.subtitle}>
                    Advanced propulsion systems and defense-grade manufacturing solutions.
                </p>
            </header>

            {/* Propulsion Systems */}
            <section id="propulsion" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Propulsion Systems</h2>
                    <span className={styles.sectionNumber}>01</span>
                </div>

                <div className={styles.categoryGrid}>
                    {/* RDE */}
                    <div className={styles.itemCard}>
                        <span className={styles.badge}>Next-Gen Tech</span>
                        <h3 className={styles.itemTitle}>Rotating Detonation Engine (RDE)</h3>
                        <ul className={styles.specsList}>
                            <li><span>Thrust (Single)</span> <span>1-2 kN</span></li>
                            <li><span>Thrust (Dual)</span> <span>5-6 kN</span></li>
                            <li><span>Application</span> <span>High-speed Projectiles</span></li>
                        </ul>
                        <p className={styles.description}>
                            Innovative pressure-gain combustion technology delivering higher efficiency and compact power density for advanced defense applications.
                        </p>
                    </div>

                    {/* Ramjet - Liquid */}
                    <div className={styles.itemCard}>
                        <span className={styles.badge}>Supersonic</span>
                        <h3 className={styles.itemTitle}>Liquid Fuel Ramjet</h3>
                        <ul className={styles.specsList}>
                            <li><span>Chamber Pressure</span> <span>60 bar</span></li>
                            <li><span>Combustor</span> <span>Supersonic</span></li>
                            <li><span>State</span> <span>Operational</span></li>
                        </ul>
                        <p className={styles.description}>
                            High-pressure liquid fuel system designed for sustained supersonic flight regimes.
                        </p>
                    </div>

                    {/* Ramjet - Solid */}
                    <div className={styles.itemCard}>
                        <span className={styles.badge}>Long Range</span>
                        <h3 className={styles.itemTitle}>Solid Fuel Ramjet</h3>
                        <ul className={styles.specsList}>
                            <li><span>Range</span> <span>50-70 km</span></li>
                            <li><span>Altitude</span> <span>13-17 km</span></li>
                            <li><span>Mach Capability</span> <span>Mach 2-3</span></li>
                            <li><span>Dimensions</span> <span>155mm x 1.2m</span></li>
                        </ul>
                        <p className={styles.description}>
                            Solid fuel variant optimized for reliability and long-range tactical applications.
                        </p>
                    </div>

                    {/* Hybrid Rocket */}
                    <div className={styles.itemCard}>
                        <span className={styles.badge}>Versatile</span>
                        <h3 className={styles.itemTitle}>Hybrid Rocket Engine</h3>
                        <ul className={styles.specsList}>
                            <li><span>Thrust Range</span> <span>800N to 8 kN</span></li>
                            <li><span>Control</span> <span>Throttleable</span></li>
                            <li><span>Application</span> <span>Loitering Munitions</span></li>
                        </ul>
                        <p className={styles.description}>
                            Combines the simplicity of solid fuel with the controllability of liquid oxidizers. Ideal for staged boosters and heavy drone landing assistance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Micro Systems */}
            <section id="micro" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Micro Systems</h2>
                    <span className={styles.sectionNumber}>02</span>
                </div>

                <div className={styles.categoryGrid}>
                    {/* Micro Thrusters */}
                    <div className={styles.itemCard}>
                        <span className={styles.badge}>Precision</span>
                        <h3 className={styles.itemTitle}>Micro Thrusters & RATO</h3>
                        <ul className={styles.specsList}>
                            <li><span>Peak Thrust</span> <span>~7.3 kN</span></li>
                            <li><span>Total Impulse</span> <span>~38,818 N·s</span></li>
                            <li><span>Dimensions</span> <span>850mm x 76mm</span></li>
                        </ul>
                        <p className={styles.description}>
                            Rocket Assisted Take-Off (RATO) boosters and micro thrusters for guided projectiles and ejector seats.
                        </p>
                    </div>

                    {/* Injectors */}
                    <div className={styles.itemCard}>
                        <span className={styles.badge}>Component</span>
                        <h3 className={styles.itemTitle}>SERPENT X3 Injector</h3>
                        <ul className={styles.specsList}>
                            <li><span>Nozzle Diameter</span> <span>0.9mm</span></li>
                            <li><span>Atomization</span> <span>Fine Mist</span></li>
                            <li><span>Application</span> <span>Torch Igniters</span></li>
                        </ul>
                        <p className={styles.description}>
                            Advanced fuel injector system ensuring faster vaporization, superior mixing, and shorter ignition delays for nano/micro thrusters.
                        </p>
                    </div>
                </div>
            </section>

            {/* Manufacturing */}
            <section id="manufacturing" className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Manufacturing & Testing</h2>
                    <span className={styles.sectionNumber}>03</span>
                </div>

                <div className={styles.categoryGrid}>
                    <div className={styles.itemCard}>
                        <h3 className={styles.itemTitle}>Fabrication Capabilities</h3>
                        <ul className={styles.specsList}>
                            <li><span>Precision Machining</span> <span>Aerospace Grade</span></li>
                            <li><span>Materials</span> <span>Superalloys, Titanium</span></li>
                            <li><span>Pressure Systems</span> <span>High Bar Design</span></li>
                        </ul>
                        <p className={styles.description}>
                            Custom manufacturing of injectors, combustion chambers, and high-pressure feed systems with defense-grade precision.
                        </p>
                    </div>

                    <div className={styles.itemCard}>
                        <h3 className={styles.itemTitle}>Quality Assurance</h3>
                        <p className={styles.description}>
                            rigorous testing protocols include static fire testing, pressure endurance, and flow calibration. All components undergo strict quality checks before integration.
                        </p>
                        <p className={styles.description} style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--color-thrust)' }}>
                            * Detailed technical specifications available upon request for verified collaborators.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
