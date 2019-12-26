import React from 'react';
import { Nav } from "../lowLevel/navbar";
import { Terminal } from "../lowLevel/terminalAnimation";
import styles from './homepage.module.css'

export class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Terminal>
                    <p><span className={styles.account}>homepage:~$ </span>start figbert.com</p>
                    <p>. . . . .</p>
                    <p>Site live!</p>
                    <br />
                    <p><span className={styles.account}>homepage:~$ </span>echo ‘Welcome – Enjoy your stay!’</p>
                    <p>Welcome – Enjoy your stay!</p>
                    <br />
                    <p><span className={styles.account}>homepage:~$ </span>sign</p>
                    <p>By FIGBERT</p>
                </Terminal>
                <div className={styles.verticalContainer}>
                    <div className={styles.horizontalContainer}>
                        <div className={styles.description}>
                            <h1>General</h1>
                            <p>
                                Hey there user! You’ve stumbled upon my site – the official website and home of FIGBERT on
                                the clearnet. This site should server as a place for me to put finished programs, write-
                                throughs, things I find interesting, photos of me from around the world, and other
                                information about me. <span style={{textDecoration: 'line-through'}}>Also my resume cuz
                                self-promotion.</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.horizontalContainer}>
                        <div className={styles.verticalContainer}>
                            <div className={styles.description}>
                                <h2>Programs</h2>
                                <p>
                                    The ‘Programs’ dropdown leads to all of my public, finished projects. Each program’s
                                    page has a description of the program, links to any blog posts about it, and a link to a
                                     downloadable or live version.
                                </p>
                            </div>
                            <div className={styles.description}>
                                <h2>Blog</h2>
                                <p>
                                    The ‘Blog’ link leads to… my blog. Duh. I write about my experiences as a tech-y
                                    individual, my adventures online, some programming walkthroughs, and other miscellaneous
                                    stuff. <span style={{textDecoration: 'line-through'}}>Fun fact: I can write about
                                    anything I want, because this is my site and I make the rules so suck it up</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.verticalContainer}>
                            <div className={styles.description}>
                                <h2>World</h2>
                                <p>
                                    One of my favorite pages on the site! The ‘World’ link leads to a bunch of photos of me
                                     from my journeys around our Earthly sphere – wearing my mask, of course.
                                </p>
                            </div>
                            <div className={styles.description}>
                                <h2>Contact & About</h2>
                                <p>
                                    These ones don’t need an explanation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
