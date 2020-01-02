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
                        If you’re looking to reach me, you can find my Twitter, Reddit, and Github profiles, as well as
                        my Stellar, Bitcoin, and ZCash addresses on <a href="https://keybase.io/figbert">Keybase</a> (my
                        Keybase proof for this site is <a href="https://figbert.com/keybase.txt">here</a>). If you want
                        to send me Monero, you can send it to <a href="https://figbert.com/monero-address.txt">this address</a>.
                    </p>
                    <p>
                        You can also contact me via my email at: f1gb3rt at protonmail dot com. Feel free to encrypt any
                         emails to me with <a href="https://figbert.com/publickey-pgp.asc">this PGP key</a>.
                    </p>
                    <p>
                        Protecting my identity under the FIGBERT pseudonym was/is really hard, so let's hope linking all
                         of my profiles in the same place doesn't ruin that ;). Hello, bots + big data.
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ContactPage;