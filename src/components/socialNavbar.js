import React from "react";

import { FaLinkedin, FaAngellist, FaGithub } from "react-icons/fa";

export default function SocialNavbar() {
    return (
        <div id="social-navbar">
            <a
                target="_blank noopener"
                href="https://www.linkedin.com/in/christopherliedtke"
            >
                <FaLinkedin size={20} />
                LinkedIn
            </a>
            <a
                target="_blank noopener"
                href="https://github.com/christopherliedtke"
            >
                <FaGithub size={20} />
                GitHub
            </a>
            <a
                target="_blank noopener"
                href="https://angel.co/christopher-liedtke"
            >
                <FaAngellist size={20} />
                Angellist
            </a>
        </div>
    );
}
