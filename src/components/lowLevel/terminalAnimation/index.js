import React from "react";
import TypeWriter from "react-typewriter";
import styles from "./styles.module.css";

function Terminal(props) {
    return (
        <div className={styles.typingFrame}>
            <div className={styles.console}>
                <TypeWriter
                    typing={1}
                    minDelay={200}
                    fixed={true}
                >
                    {props.children}
                </TypeWriter>
            </div>
        </div>
    );
}

export default Terminal;
