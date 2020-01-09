import React from "react";
import styles from "./styles.module.css";

function Footer(props) {
    return (
        <footer className={props.smallPage ? styles.absolute : styles.relative}>
            <p>2019 © FIGBERT. All rights reserved.</p>
        </footer>
    );
}

export default Footer;