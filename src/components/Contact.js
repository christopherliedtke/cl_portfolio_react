import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

import { FaEnvelope } from 'react-icons/fa';

import { Fade } from 'react-reveal';

function Contact({ t }) {
    const [status, setStatus] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        };
        xhr.send(data);
    };

    return (
        <div className="contact container-fuid py-3 py-md-5" id="contact">
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-lg-5 px-4 px-lg-5 left d-none d-lg-flex"></div>
                    <div className="col-12 col-lg-6 px-4 px-lg-5 right">
                        <h3 className="h3-bg">{t('contact.right.title')}</h3>
                        <h2>{t('contact.right.title')}</h2>
                        <h3 className="">{t('contact.right.subtitle')}</h3>
                        <p>{t('contact.right.par1')}</p>
                        <p>{t('contact.right.par2')}</p>
                        <Fade right duration={2000}>
                            <div className="my-4">
                                <a className="a-primary" href="mailto:christopherliedtke@gmx.com">
                                    <FaEnvelope className="mr-3" size={35} />
                                    christopherliedtke@gmx.com
                                </a>
                            </div>
                        </Fade>
                        <form onSubmit={submitForm} className="my-3" method="POST" action="https://formspree.io/xdozaolp" target="_self" id="contactForm">
                            <div className="form-group">
                                <label for="inputName">{t('contact.right.form.name')}</label>
                                <input type="text" name="name" className="form-control" id="inputName" required />
                            </div>
                            <div className="form-group">
                                <label for="inputEmail">{t('contact.right.form.email')}</label>
                                <input type="email" name="email" className="form-control" id="inputEmail" required />
                            </div>
                            <div className="form-group">
                                <label for="inputPhone">{t('contact.right.form.phone')}</label>
                                <input type="tel" name="phone" className="form-control" id="inputPhone" />
                            </div>
                            <div className="form-group">
                                <label for="inputSubject">{t('contact.right.form.subject')}</label>
                                <input type="text" name="subject" className="form-control" id="inputSubject" required />
                            </div>
                            <div className="form-group">
                                <label for="inputMessage">{t('contact.right.form.msg')}</label>
                                <textarea name="message" className="form-control" id="inputMessage" rows="5" required></textarea>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" name="checkbox" className="form-check-input" id="inputCheckbox" required />
                                <label className="form-check-label" for="inputCheckbox"></label>
                                <p>
                                    {t('contact.right.form.checkbox.preLink')}
                                    <Link to="/privacy-policy">{t('contact.right.form.checkbox.link')}</Link>
                                    {t('contact.right.form.checkbox.postLink')}
                                </p>
                            </div>
                            <button type="submit" value="Send" className="btn btn-primary" id="contactFormSubmit">
                                {t('contact.right.form.btnSubmit')}
                            </button>
                            {status === 'SUCCESS' && (
                                <div className="alert alert-success my-4" id="contactFormSuccessMessage" role="alert">
                                    {t('contact.right.form.success')}
                                </div>
                            )}
                            {status === 'ERROR' && (
                                <div className="alert alert-danger my-4" id="contactFormErrorMessage" role="alert">
                                    {t('contact.right.form.error')}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Contact);
