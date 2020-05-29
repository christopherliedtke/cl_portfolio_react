import React from 'react';
import logo from './assets/img/logo.svg';

import { withNamespaces } from 'react-i18next';

import { Button, Jumbotron } from 'react-bootstrap';

function App({ t }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <h1>{t('Welcome to React')}</h1>
            <Button variant="primary">Primary</Button>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default withNamespaces()(App);
