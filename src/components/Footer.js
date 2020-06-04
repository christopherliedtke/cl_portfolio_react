import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

function Footer({ t }) {
    return (
        <footer className="footer">
            <nav>
                <Link to="/privacy-policy">{t('footer.dataProtection')}</Link>
                <Link to="/impressum">{t('footer.impressum')}</Link>
            </nav>
        </footer>
    );
}

export default withTranslation()(Footer);
