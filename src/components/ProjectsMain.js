import React from 'react';
// import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';
import { FaCaretRight, FaGithub, FaQuoteRight } from 'react-icons/fa';

import { Fade } from 'react-reveal';

const icons = {
    react: {
        url: '/img/icons/react-brands.svg',
        alt: 'React.js Logo',
    },
    nodeJs: {
        url: '/img/icons/node-js-brands.svg',
        alt: 'Node.js Logo',
    },
    mongoDb: {
        url: '/img/icons/mongoDB-brands.svg',
        alt: 'mongoDB Logo',
    },
    mui: {
        url: '/img/icons/mui-brands.svg',
        alt: 'MUI Logo',
    },
    js: {
        url: '/img/icons/js-brands.svg',
        alt: 'JavaScript Logo',
    },
    html: {
        url: '/img/icons/html5-brands.svg',
        alt: 'HTML5 Logo',
    },
    css: {
        url: '/img/icons/css3-brands.svg',
        alt: 'CSS3 Logo',
    },
    bootstrap: {
        url: '/img/icons/bootstrap-brands.svg',
        alt: 'Bootstrap Logo',
    },
    php: {
        url: '/img/icons/php-brands.svg',
        alt: 'PHP Logo',
    },
};

const projects = {
    mobileCarChecker: {
        hex: '#32E3A9',
        stackIcons: ['react', 'nodeJs', 'mongoDb', 'mui', 'js', 'html', 'css'],
    },
    zuckerrede: {
        hex: '#FEB5A2',
        stackIcons: ['bootstrap', 'js', 'php', 'html', 'css'],
    },
};

function ProjectsMain({ t }) {
    return (
        <div className="projects-main container-fuid" id="projects">
            <div className="container project my-lg-5 py-lg-5" id="mobileCarChecker">
                <div className="row px-md-5">
                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/logo_mobilecarchecker_400x257.png)' }}>
                        <h2 style={{ color: projects.mobileCarChecker.hex }}>{t('projects.mobileCarChecker.title')}</h2>
                        <h3>{t('projects.mobileCarChecker.subtitle')}</h3>
                        <p>{t('projects.mobileCarChecker.intro')}</p>
                        <div className="d-flex align-items-center mt-5 mb-4">
                            {projects.mobileCarChecker.stackIcons.map((icon) => {
                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                            })}
                        </div>
                        <p>{t('projects.mobileCarChecker.descPar1')}</p>
                        <p>{t('projects.mobileCarChecker.descPar2')}</p>
                        <h4>Features</h4>
                        <ul>
                            <li>
                                <FaCaretRight />
                                {t('projects.mobileCarChecker.features.feat1')}
                            </li>
                            <li>
                                <FaCaretRight />
                                {t('projects.mobileCarChecker.features.feat2')}
                            </li>
                            <li>
                                <FaCaretRight />
                                {t('projects.mobileCarChecker.features.feat3')}
                            </li>
                            <li>
                                <FaCaretRight />
                                {t('projects.mobileCarChecker.features.feat4')}
                            </li>
                        </ul>
                        <div className="btn-box">
                            <a className="btn btn-primary" role="button" href="https://www.mobilecarchecker.com" target="__blank noopener">
                                {t('projects.btnPage')}
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 img-set pl-5 my-5 py-5">
                        <div className="img-background" style={{ backgroundColor: projects.mobileCarChecker.hex }}>
                            <Fade bottom duration={2000}>
                                <img className="img-desktop" src="/img/mobileCarChecker_notebook_800x450.png" alt="Mobile Car Checker Dektop Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={750}>
                                <img className="img-tablet " src="/img/mobileCarChecker_tablet_400x553.png" alt="Mobile Car Checker Tablet Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={1500}>
                                <img className="img-mobile " src="/img/mobileCarChecker_mobile_300x594.png" alt="Mobile Car Checker Mobile Landing Page" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container project my-lg-5 py-lg-5" id="zuckerrede">
                <div className="row px-md-5">
                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/zuckerrede_logo.png)' }}>
                        <h2 style={{ color: projects.zuckerrede.hex }}>{t('projects.zuckerrede.title')}</h2>
                        <h3>{t('projects.zuckerrede.subtitle')}</h3>
                        <p>{t('projects.zuckerrede.intro1')}</p>
                        <p>{t('projects.zuckerrede.intro2')}</p>
                        <div className="d-flex align-items-center mt-5 mb-4">
                            {projects.zuckerrede.stackIcons.map((icon) => {
                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                            })}
                        </div>
                        <p>{t('projects.zuckerrede.descPar1')}</p>
                        <div className="btn-box">
                            <a className="btn btn-primary" role="button" href="https://www.zuckerrede.com" target="__blank noopener">
                                {t('projects.btnPage')}
                            </a>
                        </div>
                        <Fade left duration={2000}>
                            <div className="testimonial">
                                <div className="testimonial-bg">
                                    <FaQuoteRight />
                                </div>
                                <div className="col-3 col-md-2 p-0 pl-3">
                                    <img className="img-fluid rounded-circle imgTestimonial" src="/img/KatharinaAlbrecht_testimonial_200x200.jpg" alt="Portrait Katharina Albrecht" />
                                </div>
                                <div className="col-9 col-md-10">
                                    <blockquote className="blockquote text-right pr-lg-4">
                                        <p className="mb-2">{t('projects.zuckerrede.testimonial.text')}</p>
                                        <footer className="blockquote-footer">
                                            {t('projects.zuckerrede.testimonial.name')} | <cite title="Source Title">{t('projects.zuckerrede.testimonial.company')}</cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-12 col-lg-5 img-set pl-5 my-5 py-5">
                        <div className="img-background" style={{ backgroundColor: projects.zuckerrede.hex }}>
                            <Fade bottom duration={2000}>
                                <img className="img-desktop" src="/img/zuckerrede_notebook_800x450.png" alt="Mobile Car Checker Dektop Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={750}>
                                <img className="img-tablet " src="/img/zuckerrede_tablet_400x553.png" alt="Mobile Car Checker Tablet Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={1500}>
                                <img className="img-mobile " src="/img/zuckerrede_mobile_300x594.png" alt="Mobile Car Checker Mobile Landing Page" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(ProjectsMain);
