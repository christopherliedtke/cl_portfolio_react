import React from 'react';
// import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';
import { FaCaretRight, FaQuoteRight } from 'react-icons/fa';

import { Fade } from 'react-reveal';
import icons from '../utils/icons.json';

const projects = {
    mobileCarChecker: {
        hex: '#32E3A9',
        stackIcons: ['react', 'nodeJs', 'mongoDb', 'mui', 'js', 'html', 'css'],
    },
    zuckerrede: {
        hex: '#FEB5A2',
        stackIcons: ['bootstrap', 'js', 'php', 'html', 'css'],
    },
    mfaMalAnders: {
        hex: '#942445',
        stackIcons: ['wordpress', 'elementor', 'php', 'html', 'css'],
    },
};

function ProjectsMain({ t }) {
    return (
        <div className="projects container-fuid" id="projects">
            <div className="container project my-lg-5 py-lg-5" id="mobileCarChecker">
                <div className="row px-md-5">
                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/logo_mobilecarchecker_400x257.png)' }}>
                        <h2 style={{ color: projects.mobileCarChecker.hex }}>{t('projects.mobileCarChecker.title')}</h2>
                        <h3>{t('projects.mobileCarChecker.subtitle')}</h3>
                        <p>{t('projects.mobileCarChecker.intro')}</p>
                        <div className="d-flex align-items-center icon-box">
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
                        <div className="d-flex align-items-center icon-box">
                            {projects.zuckerrede.stackIcons.map((icon) => {
                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                            })}
                        </div>
                        <p>{t('projects.zuckerrede.descPar1')}</p>
                        <div className="btn-box">
                            <a className="btn btn-primary" role="button" href="https://www.zuckerrede.de" target="__blank noopener">
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
                                <img className="img-desktop" src="/img/Zuckerrede_notebook_800x450.png" alt="Zuckerrede Dektop Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={750}>
                                <img className="img-tablet " src="/img/Zuckerrede_tablet_400x553.png" alt="Zuckerrede Tablet Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={1500}>
                                <img className="img-mobile " src="/img/Zuckerrede_mobile_300x594.png" alt="Zuckerrede Mobile Landing Page" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container project my-lg-5 py-lg-5" id="mfaMalAnders">
                <div className="row px-md-5">
                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/logo_mfamalanders_800.png)' }}>
                        <h2 style={{ color: projects.mfaMalAnders.hex }}>{t('projects.mfaMalAnders.title')}</h2>
                        <h3>{t('projects.mfaMalAnders.subtitle')}</h3>
                        <p>{t('projects.mfaMalAnders.intro1')}</p>
                        <p>{t('projects.mfaMalAnders.intro2')}</p>
                        <div className="d-flex align-items-center icon-box">
                            {projects.mfaMalAnders.stackIcons.map((icon) => {
                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                            })}
                        </div>
                        <p>{t('projects.mfaMalAnders.descPar1')}</p>
                        <div className="btn-box">
                            <a className="btn btn-primary" role="button" href="https://www.mfa-mal-anders.de" target="__blank noopener">
                                {t('projects.btnPage')}
                            </a>
                        </div>
                        <Fade left duration={2000}>
                            <div className="testimonial">
                                <div className="testimonial-bg">
                                    <FaQuoteRight />
                                </div>
                                <div className="col-3 col-md-2 p-0 pl-3">
                                    <img className="img-fluid rounded-circle imgTestimonial" src="/img/KristinMaurach_testimonial_200x200.jpg" alt="Portrait Kristin Maurach" />
                                </div>
                                <div className="col-9 col-md-10">
                                    <blockquote className="blockquote text-right pr-lg-4">
                                        <p className="mb-2">{t('projects.mfaMalAnders.testimonial.text')}</p>
                                        <footer className="blockquote-footer">
                                            {t('projects.mfaMalAnders.testimonial.name')} | <cite title="Source Title">{t('projects.mfaMalAnders.testimonial.company')}</cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-12 col-lg-5 img-set pl-5 my-5 py-5">
                        <div className="img-background" style={{ backgroundColor: projects.mfaMalAnders.hex }}>
                            <Fade bottom duration={2000}>
                                <img className="img-desktop" src="/img/MfaMalAnders_notebook_800x450.png" alt="MFA mal anders Dektop Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={750}>
                                <img className="img-tablet " src="/img/MfaMalAnders_tablet_400x553.png" alt="MFA mal anders Tablet Landing Page" />
                            </Fade>
                            <Fade bottom duration={2000} delay={1500}>
                                <img className="img-mobile " src="/img/MfaMalAnders_mobile_300x594.png" alt="MFA mal anders Mobile Landing Page" />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(ProjectsMain);
