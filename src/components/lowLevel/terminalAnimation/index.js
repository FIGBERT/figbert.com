import React from 'react';
import TypeWriter from 'react-typewriter';
import styles from './styles.module.css';

export class Terminal extends React.Component {
    render() {
        return (
            <div className={styles.typingFrame}>
                <div className={styles.console}>
                    <TypeWriter
                        typing={1}
                        minDelay={200}
                        fixed={true}
                    >
                        {this.props.children}
                    </TypeWriter>
                </div>
            </div>
        );
    }
}
