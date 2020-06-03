import React from 'react';

import { withTranslation } from 'react-i18next';

// import { Zoom, Fade } from 'react-reveal';

function About({ t }) {
    return (
        <div className="about container-fuid pt-5 pt-md-0" id="about">
            <div className="container">ABOUT</div>
        </div>
    );
}

export default withTranslation()(About);
