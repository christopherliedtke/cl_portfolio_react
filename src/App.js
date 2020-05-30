import React from 'react';
import { withNamespaces } from 'react-i18next';

import Layout from './components/Layout';
import Hero from './components/Hero';

function App({ t }) {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
}

export default withNamespaces()(App);
