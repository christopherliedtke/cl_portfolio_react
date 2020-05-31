import React from 'react';
// import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

import { Navbar, Nav } from 'react-bootstrap';

let previousScrollPositionY = document.documentElement.scrollTop;

window.addEventListener('scroll', (e) => {
    const header = document.getElementById('header');
    let currentPositionY = document.documentElement.scrollTop;

    if (currentPositionY >= previousScrollPositionY && currentPositionY > header.offsetHeight && !header.classList.contains('hide')) {
        header.classList.add('hide');
    } else if (currentPositionY < previousScrollPositionY && header.classList.contains('hide')) {
        header.classList.remove('hide');
    }

    if (currentPositionY >= header.offsetHeight && !header.classList.contains('bg-header')) {
        header.classList.add('bg-header');
    } else if (currentPositionY < header.offsetHeight && header.classList.contains('bg-header')) {
        header.classList.remove('bg-header');
    }

    previousScrollPositionY = document.documentElement.scrollTop;
});

function Header({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header id="header">
            <Navbar collapseOnSelect bg="transparent" expand="false" className="px-lg-5 py-lg-3">
                <Navbar.Brand href="#home">CL</Navbar.Brand>
                <Navbar.Toggle className="ui-hamburger-05" aria-controls="basic-navbar-nav">
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Scrollspy items={['home', 'projects', 'services', 'contact']} currentClassName="is-current">
                            <Nav.Link href="#home">{t('menu.linkHome')}</Nav.Link>
                            <Nav.Link href="#projects">{t('menu.linkProjects')}</Nav.Link>
                            <Nav.Link href="#services">{t('menu.linkServices')}</Nav.Link>
                            <Nav.Link href="#contact">{t('menu.linkContact')}</Nav.Link>
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
