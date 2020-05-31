import React from 'react';

import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectsMain from './components/ProjectsMain';

export default function App() {
    return (
        <Layout>
            <Hero />
            <ProjectsMain />
        </Layout>
    );
}
