import React from 'react';
// import { Link } from 'react-router-dom';
import { Accordion, Button, Carousel } from 'react-bootstrap';

import { withTranslation } from 'react-i18next';
import { FaCaretRight, FaGithub, FaQuoteRight } from 'react-icons/fa';

import { Fade } from 'react-reveal';
import icons from '../utils/icons.json';

const projects = {
    stadtUndGruen: {
        hex: '#7CC66A',
        stackIcons: ['bootstrap', 'js', 'html', 'css', 'php'],
    },
    travelbook: {
        hex: '#66BEBA',
        stackIcons: ['react', 'socketio', 'nodeJs', 'postgre', 'aws', 'js', 'html', 'css'],
    },
    mountainView: {
        hex: '#EDA32F',
        stackIcons: ['vue', 'nodeJs', 'postgre', 'aws', 'js', 'html', 'css'],
    },
    freeOrcas: {
        hex: '#E0B080',
        stackIcons: ['postgre', 'nodeJs', 'js', 'html', 'css'],
    },
};

function ProjectsMore({ t }) {
    return (
        <div className="projects projects-more container mt-0 mb-5 mx-auto px-1">
            <Accordion className="">
                <Accordion.Toggle className="btn btn-primary mb-5" as={Button} variant="button" eventKey="0">
                    {t('projects.btnMoreProjects')}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Carousel indicators={false} interval={null}>
                        <Carousel.Item>
                            <div className="project px-0" id="stadtUndGruen">
                                <div className="row px-0 mx-0">
                                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/logo_stadtundgruen.png)' }}>
                                        <h2 style={{ color: projects.stadtUndGruen.hex }}>{t('projects.stadtUndGruen.title')}</h2>
                                        <h3>{t('projects.stadtUndGruen.subtitle')}</h3>
                                        <p>{t('projects.stadtUndGruen.intro1')}</p>
                                        <p>{t('projects.stadtUndGruen.intro2')}</p>
                                        <div className="d-flex align-items-center icon-box">
                                            {projects.stadtUndGruen.stackIcons.map((icon) => {
                                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                                            })}
                                        </div>
                                        <p>{t('projects.stadtUndGruen.descPar1')}</p>
                                        <div className="btn-box">
                                            <a className="btn btn-primary" role="button" href="https://www.stadtundgruen.com" target="__blank noopener">
                                                {t('projects.btnPage')}
                                            </a>
                                        </div>
                                        <Fade left duration={2000}>
                                            <div className="testimonial">
                                                <div className="testimonial-bg">
                                                    <FaQuoteRight />
                                                </div>
                                                <div className="col-3 col-md-2 p-0 pl-3">
                                                    <img className="img-fluid rounded-circle imgTestimonial" src="/img/MarcelFrischmuth_testimonial_200x200.jpg" alt="Portrait Marcel Frischmuth" />
                                                </div>
                                                <div className="col-9 col-md-10">
                                                    <blockquote className="blockquote text-right pr-lg-4">
                                                        <p className="mb-2">{t('projects.stadtUndGruen.testimonial.text')}</p>
                                                        <footer className="blockquote-footer">
                                                            {t('projects.stadtUndGruen.testimonial.name')} | <cite title="Source Title">{t('projects.stadtUndGruen.testimonial.company')}</cite>
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="col-12 col-lg-5 img-set my-5 py-5 pl-5">
                                        <div className="img-background" style={{ backgroundColor: projects.stadtUndGruen.hex }}>
                                            <Fade bottom duration={2000}>
                                                <img className="img-desktop" src="/img/StadtUndGruen_notebook_800x450.png" alt="Stadt und Grün Dektop Landing Page" />
                                            </Fade>
                                            <Fade bottom duration={2000} delay={750}>
                                                <img className="img-tablet " src="/img/StadtUndGruen_tablet_400x553.png" alt="Stadt und Grün Tablet Landing Page" />
                                            </Fade>
                                            <Fade bottom duration={2000} delay={1500}>
                                                <img className="img-mobile " src="/img/StadtUndGruen_mobile_300x594.png" alt="Stadt und Grün Mobile Landing Page" />
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="project px-0" id="travelbook">
                                <div className="row px-0 mx-0">
                                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/travelbook_logo.png)' }}>
                                        <h2 style={{ color: projects.travelbook.hex }}>{t('projects.travelbook.title')}</h2>
                                        <h3>{t('projects.travelbook.subtitle')}</h3>
                                        <p>{t('projects.travelbook.intro1')}</p>
                                        <p>{t('projects.travelbook.intro2')}</p>
                                        <div className="d-flex align-items-center icon-box">
                                            {projects.travelbook.stackIcons.map((icon) => {
                                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                                            })}
                                        </div>
                                        <h4>Features</h4>
                                        <ul>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.travelbook.features.feat1')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.travelbook.features.feat2')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.travelbook.features.feat3')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.travelbook.features.feat4')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.travelbook.features.feat5')}
                                            </li>
                                        </ul>
                                        <div className="btn-box">
                                            <a className="btn btn-primary mr-2 my-1" role="button" href="https://travelbook-network.herokuapp.com/" target="__blank noopener">
                                                {t('projects.btnPage')}
                                            </a>
                                            <a className="btn btn-primary d-flex align-items-center my-1" role="button" href="https://github.com/christopherliedtke/social-network_travelbook" target="__blank noopener">
                                                <FaGithub size="20" className="mr-2" /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5 img-set-2 px-4 px-md-5 py-5 py-md-3">
                                        <Fade bottom duration={2000}>
                                            <img className="img-fluid" src="/img/travelbook_register_800x600.jpg" alt="Travelbook - Registrierung" />
                                        </Fade>
                                        <Fade bottom duration={2000} delay={750}>
                                            <img className="img-fluid" src="/img/travelbook_search_800x600.jpg" alt="Travelbook - Suche nach anderen Nutzern" />
                                        </Fade>
                                        <Fade bottom duration={2000} delay={1500}>
                                            <img className="img-fluid" src="/img/travelbook_chat_800x600.jpg" alt="Travelbook - Privater Chat mit anderem Nutzer" />
                                        </Fade>
                                    </div>
                                </div>
                            </div>{' '}
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="project px-0" id="mountainView">
                                <div className="row px-0 mx-0">
                                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/mountainView_logo.png)' }}>
                                        <h2 style={{ color: projects.mountainView.hex }}>{t('projects.mountainView.title')}</h2>
                                        <h3>{t('projects.mountainView.subtitle')}</h3>
                                        <p>{t('projects.mountainView.intro1')}</p>
                                        <p>{t('projects.mountainView.intro2')}</p>
                                        <div className="d-flex align-items-center icon-box">
                                            {projects.mountainView.stackIcons.map((icon) => {
                                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                                            })}
                                        </div>
                                        <h4>Features</h4>
                                        <ul>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.mountainView.features.feat1')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.mountainView.features.feat2')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.mountainView.features.feat3')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.mountainView.features.feat4')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.mountainView.features.feat5')}
                                            </li>
                                        </ul>
                                        <div className="btn-box">
                                            <a className="btn btn-primary d-flex align-items-center my-1" role="button" href="https://github.com/christopherliedtke/imageboard_mountainview" target="__blank noopener">
                                                <FaGithub size="20" className="mr-2" /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5 img-set-2 px-4 px-md-5 py-5 py-md-3">
                                        <Fade bottom duration={2000}>
                                            <img className="img-fluid" src="/img/mountainView_home_800x600.jpg" alt="mountainView - Home" />
                                        </Fade>
                                        <Fade bottom duration={2000} delay={750}>
                                            <img className="img-fluid" src="/img/mountainView_byTag_800x600.jpg" alt="mountainView - Bilder nach Tag" />
                                        </Fade>
                                        <Fade bottom duration={2000} delay={1500}>
                                            <img className="img-fluid" src="/img/mountainView_modal_800x600.jpg" alt="mountainView - Detailansicht für Bild" />
                                        </Fade>
                                    </div>
                                </div>
                            </div>{' '}
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="project px-0" id="freeOrcas">
                                <div className="row px-0 mx-0">
                                    <div className="col-12 col-lg-7 px-lg-5 logo-bg" style={{ backgroundImage: 'url(/img/freeOrcas_logo.png)' }}>
                                        <h2 style={{ color: projects.freeOrcas.hex }}>{t('projects.freeOrcas.title')}</h2>
                                        <h3>{t('projects.freeOrcas.subtitle')}</h3>
                                        <p>{t('projects.freeOrcas.intro1')}</p>
                                        <p>{t('projects.freeOrcas.intro2')}</p>
                                        <div className="d-flex align-items-center icon-box">
                                            {projects.freeOrcas.stackIcons.map((icon) => {
                                                return <img key={icon} className="stack-icon" src={icons[icon].url} alt={icons[icon].alt} />;
                                            })}
                                        </div>
                                        <h4>Features</h4>
                                        <ul>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.freeOrcas.features.feat1')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.freeOrcas.features.feat2')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.freeOrcas.features.feat3')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.freeOrcas.features.feat4')}
                                            </li>
                                            <li>
                                                <FaCaretRight />
                                                {t('projects.freeOrcas.features.feat5')}
                                            </li>
                                        </ul>
                                        <div className="btn-box">
                                            <a className="btn btn-primary mr-2 my-1" role="button" href="http://free-willy.herokuapp.com/" target="__blank noopener">
                                                {t('projects.btnPage')}
                                            </a>
                                            <a className="btn btn-primary d-flex align-items-center my-1" role="button" href="https://github.com/christopherliedtke/petition_free-orcas" target="__blank noopener">
                                                <FaGithub size="20" className="mr-2" /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-5 img-set-2 px-4 px-md-5 py-5 py-md-3">
                                        <Fade bottom duration={2000}>
                                            <img className="img-fluid" src="/img/freeOrcas_register_800x600.jpg" alt="Free Orcas - Home" />
                                        </Fade>
                                        <Fade bottom duration={2000} delay={750}>
                                            <img className="img-fluid" src="/img/freeOrcas_signature_800x600.jpg" alt="Free Orcas - Signatur hinterlegen" />
                                        </Fade>
                                        <Fade bottom duration={2000} delay={1500}>
                                            <img className="img-fluid" src="/img/freeOrcas_signersByCity_800x600.jpg" alt="Free Orcas - Liste der Unterstützer nach Stadt" />
                                        </Fade>
                                    </div>
                                </div>
                            </div>{' '}
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Collapse>
            </Accordion>
        </div>
    );
}

export default withTranslation()(ProjectsMore);
