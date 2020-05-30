import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import Head from "./head";
import Header from './Header';
import Footer from './Footer';
// import SideNavbar from "./sideNavbar";
// import SocialNavbar from "./socialNavbar";

// import "../styles/index.scss";

// if (typeof window !== "undefined") {
//     // eslint-disable-next-line global-require
//     require("smooth-scroll")('a[href*="#"]');
// }

export default function Layout({ children }) {
    return (
        <BrowserRouter>
            <Header />
            {/* <SideNavbar /> */}
            <main>{children}</main>
            {/* <SocialNavbar /> */}
            <Footer />
        </BrowserRouter>
    );
}
