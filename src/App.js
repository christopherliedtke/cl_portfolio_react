import React from 'react';

import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectsMain from './components/ProjectsMain';
import ProjectsMore from './components/ProjectsMore';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
    return (
        <Layout>
            <Hero />
            <ProjectsMain />
            <ProjectsMore />
            <Services />
            <About />
            <Contact />
        </Layout>
    );
}
