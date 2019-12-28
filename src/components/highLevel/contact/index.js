import React from "react";
import Nav from "../../lowLevel/navbar";
import Footer from "../../lowLevel/footer";
import styles from "../smallpage.module.css";

function ContactPage() {
    return (
        <div>
            <Nav />
            <div className={styles.page}>
                <div className={styles.body}>
                    <h1>Contact Me</h1>
                    <p>
                        If you’re looking to reach me, you can find my Twitter, Reddit, Github, Stellar, Bitcoin, and
                        ZCash addresses on <a href="https://keybase.io/figbert">Keybase</a>. You can find my Keybase
                        proof for this site <a href="https://figbert.com/keybase.txt">here</a>.
                    </p>
                    <p>
                        You can also contact me via my email at: f1gb3rt at protonmail dot com. Feel free to encrypt any
                         messages to me with <a href="https://figbert.com/publickey-pgp.asc">this PGP key</a>.
                    </p>
                    <p>
                        Protecting my identity under the FIGBERT pseudonym was/is really hard, so let's hope linking all
                         of my profiles in the same place doesn't ruin that ;). Hello, bots + big data.
                    </p>
                </div>
                <div className={styles.bottom}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;