import React, { useState } from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

import { FaLaptopCode, FaGift, FaReact, FaCheckSquare, FaVuejs, FaElementor, FaMailchimp } from 'react-icons/fa';
import { DiReact, DiBootstrap, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiJsBadge, DiJqueryLogo, DiMongodb, DiNodejsSmall, DiPostgresql, DiPhp, DiRedis, DiSass, DiWordpress, DiGoogleAnalytics } from 'react-icons/di';
import { GrGatsbyjs } from 'react-icons/gr';
import { BsThreeDots } from 'react-icons/bs';
import ReactCardFlip from 'react-card-flip';
import icons from '../utils/icons.json';
// import { Zoom } from 'react-reveal';

const tooltip = (title) => {
    return <Tooltip id="tooltip">{title}</Tooltip>;
};

function Services({ t }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="services container-fuid py-3 py-md-5" id="services">
            <div className="container">
                <div className="row d-flex align-items-center p-0 px-md-5">
                    <div className="col-12 col-lg-6 col-xl-5 order-2 order-lg-1 mb-5 my-lg-5 pr-lg-5 left">
                        <div className="mb-4 d-flex justify-content-center">
                            <button onClick={() => setIsFlipped(false)} className={`btn btn-primary m-0 toggle-button toggle-button-left ${!isFlipped && 'active'}`} type="button" data-toggle="" data-target=".multi-collapse" aria-expanded="false" aria-controls="">
                                {t('services.right.btns.adv')}
                            </button>
                            <button onClick={() => setIsFlipped(true)} className={`btn btn-primary m-0 mr-2 toggle-button toggle-button-right ${isFlipped && 'active'}`} type="button" data-toggle="" data-target=".multi-collapse" aria-expanded="false" aria-controls="">
                                {t('services.right.btns.stack')}
                            </button>
                        </div>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className="flipcard front p-4">
                                <div className="d-flex align-items-start">
                                    <div className="icon mr-4">
                                        <FaLaptopCode size={40} />
                                    </div>
                                    <div>
                                        <h4 className="highlight">{t('services.flipcard.front.item1.title')}</h4>
                                        <p>
                                            {t('services.flipcard.front.item1.content1')}
                                            <span className="bold">{t('services.flipcard.front.item1.content2')}</span>
                                            {t('services.flipcard.front.item1.content3')}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="icon mr-4">
                                        <FaGift size={40} />
                                    </div>
                                    <div>
                                        <h4 className="highlight">{t('services.flipcard.front.item2.title')}</h4>
                                        <p>
                                            {t('services.flipcard.front.item2.content1')}
                                            <span className="bold">{t('services.flipcard.front.item2.content2')}</span>
                                            {t('services.flipcard.front.item2.content3')}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="icon mr-4">
                                        <FaReact size={40} />
                                    </div>
                                    <div>
                                        <h4 className="highlight">{t('services.flipcard.front.item3.title')}</h4>
                                        <p>
                                            {t('services.flipcard.front.item3.content1')}
                                            <span className="bold">{t('services.flipcard.front.item3.content2')}</span>
                                            {t('services.flipcard.front.item3.content3')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flipcard back p-4">
                                <OverlayTrigger placement="top" overlay={tooltip('React.js')}>
                                    <DiReact size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Vue.js')}>
                                    <FaVuejs size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Gatsby.js')}>
                                    <GrGatsbyjs size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('JQuery')}>
                                    <DiJqueryLogo size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('JavaScript')}>
                                    <DiJsBadge size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('CSS')}>
                                    <DiCss3 size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('HTML')}>
                                    <DiHtml5 size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Node.js')}>
                                    <DiNodejsSmall size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('PostgreSQL')}>
                                    <DiPostgresql size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('mongoDB')}>
                                    <DiMongodb size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Redis')}>
                                    <DiRedis size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('PHP')}>
                                    <DiPhp size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('socket.IO')}>
                                    <img src={icons.socketio.url} width="55" alt="" />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('SASS')}>
                                    <DiSass size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('GitHub')}>
                                    <DiGithubBadge size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Git')}>
                                    <DiGit size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Bootstrap')}>
                                    <DiBootstrap size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Material UI')}>
                                    <img src={icons.mui.url} width="55" alt="" />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Strapi')}>
                                    <img src={icons.strapi.url} width="55" alt="" />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('WordPress')}>
                                    <DiWordpress size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Elementor')}>
                                    <FaElementor size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Google Analytics')}>
                                    <DiGoogleAnalytics size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('Mailchimp')}>
                                    <FaMailchimp size={55} />
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={tooltip('more...')}>
                                    <BsThreeDots size={55} />
                                </OverlayTrigger>
                            </div>
                        </ReactCardFlip>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7 order-1 order-lg-2 my-5 px-4 px-lg-5 right position-relative">
                        <h3 className="h3-bg">{t('services.right.title')}</h3>
                        <h2>{t('services.right.title')}</h2>
                        <h3 className="">{t('services.right.subtitle')}</h3>
                        <p>{t('services.right.intro1')}</p>
                        <p>{t('services.right.intro2')}</p>
                        <h3 className=" underlined mt-5">{t('services.right.whatYouNeed')}</h3>
                        <ul>
                            <li>
                                <FaCheckSquare /> <span dangerouslySetInnerHTML={{ __html: t('services.right.list.item1') }}></span>
                            </li>
                            <li>
                                <FaCheckSquare /> <span dangerouslySetInnerHTML={{ __html: t('services.right.list.item2') }}></span>
                            </li>
                            <li>
                                <FaCheckSquare /> <span dangerouslySetInnerHTML={{ __html: t('services.right.list.item3') }}></span>
                            </li>
                            <li>
                                <FaCheckSquare /> <span dangerouslySetInnerHTML={{ __html: t('services.right.list.item4') }}></span>
                            </li>
                            <li>
                                <FaCheckSquare /> <span dangerouslySetInnerHTML={{ __html: t('services.right.list.item5') }}></span>
                            </li>
                            <li>
                                <FaCheckSquare /> <span dangerouslySetInnerHTML={{ __html: t('services.right.list.item6') }}></span>
                            </li>
                        </ul>
                        <p className="mt-5">{t('services.right.outro')}</p>
                        <a href="#contact" className="btn btn-secondary mt-2">
                            {t('services.right.btns.contact')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Services);
