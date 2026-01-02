"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function EnquiryPage() {
    const [activeTab, setActiveTab] = useState<'internship' | 'technical' | 'collab'>('internship');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Enquiry & Application</h1>
                <p className={styles.subtitle}>
                    Connect with us for internships, technical requirements, or strategic collaborations.
                </p>
            </header>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'internship' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('internship')}
                >
                    Internship Application
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'technical' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('technical')}
                >
                    Technical Enquiry
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'collab' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('collab')}
                >
                    Collaboration
                </button>
            </div>

            <div className={styles.formContainer}>
                {activeTab === 'internship' && (
                    <form>
                        <h2 style={{ marginBottom: '2rem' }}>Internship Application</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Full Name *</label>
                            <input type="text" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address *</label>
                            <input type="email" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone Number *</label>
                            <input type="tel" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Engineering Discipline *</label>
                            <select className={styles.select} required>
                                <option value="">Select Discipline</option>
                                <option value="aero">Aeronautical / Aerospace</option>
                                <option value="mech">Mechanical</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Preferred Mode *</label>
                            <select className={styles.select} required>
                                <option value="offline">Offline (Bangalore) - ₹5,000</option>
                                <option value="online">Online - ₹3,000</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Aadhar Card Number (For Security Clearance) *</label>
                            <input type="text" className={styles.input} required placeholder="XXXX-XXXX-XXXX" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Areas of Interest</label>
                            <div className={styles.checkboxGroup}>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> CAD & Design</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Propulsion Testing</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Simulation</label>
                            </div>
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit Application</button>
                    </form>
                )}

                {activeTab === 'technical' && (
                    <form>
                        <h2 style={{ marginBottom: '2rem' }}>Technical Product Enquiry</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Organization / Name *</label>
                            <input type="text" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email *</label>
                            <input type="email" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Enquiry Type *</label>
                            <select className={styles.select} required>
                                <option value="specs">Product Specifications</option>
                                <option value="custom">Custom Development</option>
                                <option value="consult">Technical Consultation</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>System of Interest</label>
                            <div className={styles.checkboxGroup}>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> RDE Systems</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Ramjets</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Micro Thrusters</label>
                                <label className={styles.checkboxLabel}><input type="checkbox" /> Manufacturing</label>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Detailed Requirements *</label>
                            <textarea className={styles.textarea} required placeholder="Please describe your requirements..."></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Send Enquiry</button>
                    </form>
                )}

                {activeTab === 'collab' && (
                    <form>
                        <h2 style={{ marginBottom: '2rem' }}>Collaboration Request</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Organization Name *</label>
                            <input type="text" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Contact Person & Designation *</label>
                            <input type="text" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Organization Type *</label>
                            <select className={styles.select} required>
                                <option value="industry">Industry Partner</option>
                                <option value="defense">Defense Sector</option>
                                <option value="academic">Academic Institution</option>
                                <option value="research">Research Lab</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Collaboration Interest *</label>
                            <select className={styles.select} required>
                                <option value="rnd">Joint R&D</option>
                                <option value="manufacturing">Manufacturing Partnership</option>
                                <option value="academic">Academic Partnership / MOU</option>
                                <option value="transfer">Technology Transfer</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project Description *</label>
                            <textarea className={styles.textarea} required></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" /> NDA Required?
                            </label>
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit Proposal</button>
                    </form>
                )}
            </div>
        </div>
    );
}
