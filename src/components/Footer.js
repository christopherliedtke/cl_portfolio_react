import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <nav>
                <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
                <Link to="/impressum">Impressum</Link>
            </nav>
        </footer>
    );
}
