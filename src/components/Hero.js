import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

import { Zoom, Fade } from 'react-reveal';
import Typist from 'react-typist';

function Hero({ t }) {
    return (
        <div className="home hero container-fuid" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <Zoom left duration={2000}>
                            <img className="m-4" src="/img/christopherliedtke_filter_500x500.jpg" alt="" />
                        </Zoom>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center p-5 p-lg-2">
                        <h1>
                            <Typist
                                avgTypingDelay={80}
                                stdTypingDelay={50}
                                cursor={{
                                    show: true,
                                    blink: true,
                                    element: '|',
                                    hideWhenDone: true,
                                    hideWhenDoneDelay: 1000,
                                }}
                            >
                                <Typist.Delay ms={2000} />
                                Hi! <strong>{t('hero.me')}</strong>
                                <Typist.Delay ms={500} />
                                <br />
                                <Typist.Delay ms={1500} />
                                <span className="highlight">{t('hero.desc')}</span>
                                <Typist.Delay ms={800} />
                                <br /> {t('hero.why')}.
                            </Typist>
                        </h1>
                        <Fade bottom delay={11000}>
                            <Link to="/#projekte">
                                <button className="btn btn-primary mt-4">{t('hero.myProjectsBtn')}</button>
                            </Link>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Hero);
