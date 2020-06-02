import React from 'react';

import Scrollspy from 'react-scrollspy';
import { Nav } from 'react-bootstrap';
import { FaHome, FaDesktop, FaTasks, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function SideNavbar() {
    return (
        <Nav id="side-navbar" className="d-none d-md-flex">
            <Scrollspy items={['home', 'projects', 'services', 'contact']} currentClassName="is-current">
                <Nav.Link href="/#home">
                    <FaHome size={20} />
                </Nav.Link>
                <Nav.Link href="/#projects">
                    <FaDesktop size={20} />
                </Nav.Link>
                <Nav.Link href="/#services">
                    <FaTasks size={20} />
                </Nav.Link>
                <Nav.Link href="/#about">
                    <FaInfoCircle size={20} />
                </Nav.Link>
                <Nav.Link href="/#contact">
                    <FaEnvelope size={20} />
                </Nav.Link>
            </Scrollspy>
        </Nav>
    );
}
