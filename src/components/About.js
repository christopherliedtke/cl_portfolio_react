import React from 'react';

import { withTranslation } from 'react-i18next';

import { FaCaretRight } from 'react-icons/fa';

import { Fade } from 'react-reveal';

function About({ t }) {
    return (
        <div className="about container-fuid py-3 py-md-5 my-1" id="about">
            <div className="container my-5">
                <div className="row">
                    <Fade left duration={2000}>
                        <div className="col-12 col-lg-7 px-4 px-lg-5 mb-5 mb-lg-0 position-relative left">
                            <h3 className="h3-bg">{t('about.left.title')}</h3>
                            <h2>{t('about.left.title')}</h2>
                            <h3 className="">{t('about.left.subtitle')}</h3>
                            <p>{t('about.left.par1')}</p>
                            <p>{t('about.left.par2')}</p>
                            <p>{t('about.left.par3')}</p>
                            <p>{t('about.left.par4')}</p>
                            <p>{t('about.left.par5')}</p>
                            <a href="#projects" className="btn btn-primary mt-2 mr-2">
                                {t('about.left.btnProjects')}
                            </a>
                            <a href="#contact" className="btn btn-secondary mt-2">
                                {t('about.left.btnContact')}
                            </a>
                        </div>
                    </Fade>
                    <Fade right duration={2000}>
                        <div className="col-12 col-lg-5 right px-3 px-lg-5 d-flex align-items-center">
                            <div className="summary">
                                <img src="/img/christopherliedtke_filter_500x500.jpg" alt="Portrait Christopher Liedtke" />
                                <h3>{t('about.right.inShortTitle')}</h3>
                                <p>{t('about.right.inShortText')}</p>
                                <h3>{t('about.right.skillsTitle')}</h3>
                                <ul>
                                    <li>
                                        <FaCaretRight />
                                        {t('about.right.skillsList.item1')}
                                    </li>
                                    <li>
                                        <FaCaretRight />
                                        {t('about.right.skillsList.item2')}
                                    </li>
                                    <li>
                                        <FaCaretRight />
                                        {t('about.right.skillsList.item3')}
                                    </li>
                                    <li>
                                        <FaCaretRight />
                                        {t('about.right.skillsList.item4')}
                                    </li>
                                    <li>
                                        <FaCaretRight />
                                        {t('about.right.skillsList.item5')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(About);
