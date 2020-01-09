import React from "react";
import Nav from "../../lowLevel/navbar";
import Footer from "../../lowLevel/footer";
import styles from "../smallpage.module.css";

function AboutPage() {
    return (
        <div className={styles.body}>
            <Nav />
            <div className={styles.page}>
                <div className={styles.text}>
                    <h1>About Me</h1>
                    <p>
                        Heyo! I'm FIGBERT, a high school student with a passion for Computer Science and Engineering. I
                        use he/him pronouns, and spend my time coding side-projects, finishing schoolwork, and playing
                        the occasional videogame. My current goal is to become a full-stack developer, proficient in
                        everything from front-end design to cybersecurity.
                    </p>
                    <div style={{lineHeight: '150%'}}>
                        <h2>Skills</h2>
                        <ul>
                            <li>Programming</li>
                            <ul>
                                <li>Proficient</li>
                                <ul>
                                    <li>Python</li>
                                    <li>Javascript and ReactJS</li>
                                    <li>Swift</li>
                                    <li>HTML/CSS</li>
                                </ul>
                                <li>Familiar</li>
                                <ul>
                                    <li>Git</li>
                                    <li>RSA and PGP</li>
                                    <li>Computer security basics (i.e. XSS, SQLi, cryptography)</li>
                                    <li>System administration</li>
                                </ul>
                            </ul>
                            <li>Languages</li>
                            <ul>
                                <li>English</li>
                                <li>Hebrew</li>
                                <li>Mandarin Chinese</li>
                                <li>Arabic (learning)</li>
                            </ul>
                        </ul>
                        <h2>Projects</h2>
                        <ul>
                            <li><b>figbert.com</b></li>
                            <ul>
                                <li>Designed and developed this site using ReactJS to solidify my presence on the internet.</li>
                            </ul>
                            <li><b>figENC</b></li>
                            <ul>
                                <li>
                                    Developed a cross-platform application to provide RSA and symmetric key encryption to
                                    files of any size and type.
                                </li>
                                <li>Utilized the Python 3 <code>cryptography</code> library's <code>hazmat</code> objects to implement the encryption.</li>
                                <li>Utilized the <code>tkinter</code> library for Python 3 to provide an intuitive GUI.</li>
                            </ul>
                            <li><b>figbertMath</b></li>
                            <ul>
                                <li>Compiled several equation-solving algorithms programmed to solve common homework questions.</li>
                                <li>Programmed entirely in ReactJS, which I was learning at the time.</li>
                                <li>Implemented Gaussian elimination to solve multi-variable systems of equations of theoretically infinite size.</li>
                                <li>Utilized the <code>immutability-helper</code> module to change array deep copies in the ReactJS state property.</li>
                            </ul>
                            <li><b>daniel4tiburon</b></li>
                            <ul>
                                <li>Built the official campaign website for Daniel Amir's 2020 run for Tiburon Town Council.</li>
                                <li>Used iframes and ReactJS to embed Anedote's fundraising platform into the site.</li>
                            </ul>
                        </ul>
                        <p>For in-depth details of each project, navigate to its respective page using the Programs dropdown.</p>
                    </div>
                </div>
                <Footer smallPage={false} />
            </div>
        </div>
    );
}

export default AboutPage;