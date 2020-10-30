import React, { useState, useEffect } from 'react';

import { withTranslation } from 'react-i18next';

import { Zoom, Fade } from 'react-reveal';
import Typist from 'react-typist';

function Hero({ t }) {
    const [typist, setTypist] = useState();

    useEffect(() => {
        setTypist('');
        setTimeout(() => {
            setTypist(repeatTypist());
        }, 100);
    }, [t]); // eslint-disable-line

    const repeatTypist = () => {
        return (
            <>
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
                        <Typist.Delay ms={1500} />
                        <br />
                        {t('hero.why1')}
                        <Typist.Delay ms={300} />
                        <br />
                        {t('hero.why2')}
                        <Typist.Delay ms={300} />
                        <br />
                        <Typist.Delay ms={500} />
                        <span className="highlight">{t('hero.desc')}</span>.
                    </Typist>
                </h1>
                <div className="mt-3">
                    <Fade bottom delay={11000}>
                        <a className="btn btn-primary mt-2 mr-2 align-self-md-start" role="button" href="/#projects">
                            {t('hero.myProjectsBtn')}
                        </a>
                    </Fade>
                    <Fade right delay={12000}>
                        <a className="btn btn-secondary mt-2 align-self-md-start" role="button" href="/#services">
                            {t('hero.servicesBtn')}
                        </a>
                    </Fade>
                </div>
            </>
        );
    };

    return (
        <div className="hero container-fuid pt-5 pt-md-0" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <Zoom left duration={2000}>
                            <img className="m-3" src="/img/christopherliedtke_filter_500x500.jpg" alt="Portrait Christopher Liedtke" />
                        </Zoom>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start align-items-md-stretch p-5 p-md-2">{typist}</div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Hero);
