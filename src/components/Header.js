import React from 'react';
// import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

import { Navbar, Nav } from 'react-bootstrap';

function Header({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header id="header">
            <Navbar bg="transparent" expand="false" fixed="top" className="px-lg-5 py-lg-3">
                <Navbar.Brand href="#home">CL</Navbar.Brand>
                <Navbar.Toggle className="ui-hamburger-05" aria-controls="basic-navbar-nav">
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Scrollspy items={['home', 'projects', 'services', 'contact']} currentClassName="is-current">
                            <Nav.Link to="#home">{t('menu.linkHome')}</Nav.Link>
                            <Nav.Link to="#projects">{t('menu.linkProjects')}</Nav.Link>
                            <Nav.Link to="#services">{t('menu.linkServices')}</Nav.Link>
                            <Nav.Link to="#contact">{t('menu.linkContact')}</Nav.Link>
                        </Scrollspy>
                        <div className="lang-selector">
                            <span onClick={() => changeLanguage('de')}>DE</span>
                            {' | '}
                            <span onClick={() => changeLanguage('en')}>EN</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default withTranslation()(Header);
