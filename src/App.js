import React from 'react';

import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectsMain from './components/ProjectsMain';
import ProjectsMore from './components/ProjectsMore';

export default function App() {
    return (
        <Layout>
            <Hero />
            <ProjectsMain />
            <ProjectsMore />
        </Layout>
    );
}
