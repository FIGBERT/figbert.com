import React from 'react';
import { Nav } from "../lowLevel/navbar";
import { Terminal } from "../lowLevel/terminalAnimation";

export class Homepage extends React.Component {
    render() {
        const input = {
            color: '#B494C7',
            fontWeight: 'bolder'
        }

        return (
            <div>
                <Nav />
                <Terminal>
                    <p><span style={input}>homepage:~$ </span>start figbert.com</p>
                    <p>. . . . .</p>
                    <p>Site live!</p>
                    <br />
                    <p><span style={input}>homepage:~$ </span>echo ‘Welcome – Enjoy your stay!’</p>
                    <p>Welcome – Enjoy your stay!</p>
                    <br />
                    <p><span style={input}>homepage:~$ </span>sign</p>
                    <p>By FIGBERT</p>
                </Terminal>
            </div>
        );
    }
}
