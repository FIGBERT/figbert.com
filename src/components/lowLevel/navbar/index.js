import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import transparentWhiteBorder from "../../../logos/symbol/transparent-with-white-border.svg";

function Nav() {
    return (
        <nav>
            <Link to="/">
                <img
                    src={transparentWhiteBorder}
                    alt="FIGBERT white outline symbol logo"
                    className={styles.logoSymbol}
                />
            </Link>
            <div className={styles.dropdown}>
                <button className={styles.dropButton}>Programs</button>
                <div className={styles.dropdownContent}>
                    <Link to="/figENC" className={styles.linkText}>figENC</Link>
                    <Link to="/figbertMath" className={styles.linkText}>figbertMath</Link>
                </div>
            </div>
            <Link to="/blog" className={styles.linkText}>Blog</Link>
            <Link to="/world" className={styles.linkText}>World</Link>
            <Link to="/contact" className={styles.linkText}>Contact</Link>
            <Link to="/about" className={styles.linkText}>About</Link>
        </nav>
    );
}

export default Nav;
