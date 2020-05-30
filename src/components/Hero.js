import React from 'react';
// import { Link } from 'gatsby';

// import { Zoom, Fade } from 'react-reveal';
// import Typist from 'react-typist';

export default function Hero() {
    return (
        <div className="home hero container-fuid" id="home" style={{ minHeight: '60vh' }}>
            {/* <div className="container">
                <Zoom left duration={2000}>
                    <img src="/images/christopherliedtke_filter_500x500.jpg" alt="" />
                </Zoom>
                <div>
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
                            Hi! <strong>Ich bin Chris –</strong>
                            <Typist.Delay ms={500} />
                            <br />
                            <Typist.Delay ms={1500} />
                            <span className="highlight">Full Stack Webentwickler</span>
                            <Typist.Delay ms={800} />
                            <br /> aus Leidenschaft.
                        </Typist>
                    </h1>
                    <Fade bottom delay={11000}>
                        <Link to="/#projekte">
                            <button className="btn-primary">Meine Projekte</button>
                        </Link>
                    </Fade>
                </div>
            </div> */}
        </div>
    );
}
