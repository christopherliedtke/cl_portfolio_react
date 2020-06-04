import React from 'react';
import { Route } from 'react-router-dom';

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
            <Route
                exact
                path="/"
                render={() => (
                    <>
                        <Hero />
                        <ProjectsMain />
                        <ProjectsMore />
                        <Services />
                        <About />
                        <Contact />
                    </>
                )}
            />
        </Layout>
    );
}
