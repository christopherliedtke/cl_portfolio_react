import React from 'react';

import { withTranslation } from 'react-i18next';

// import { Zoom, Fade } from 'react-reveal';

function Contact({ t }) {
    return (
        <div className="contact container-fuid pt-5 pt-md-0" id="contact">
            <div className="container">CONTACT</div>
        </div>
    );
}

export default withTranslation()(Contact);
