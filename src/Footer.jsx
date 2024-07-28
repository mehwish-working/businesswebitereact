import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-5 bg-blue-200 text-center text-black py-4">
            <div className="container">
                <div className="mb-4">
                    <a href="https://www.facebook.com" className="text-black mx-2">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" className="text-black mx-2">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com" className="text-black mx-2">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com" className="text-black mx-2">
                        <FaInstagram />
                    </a>
                </div>
                <p className="mb-0">&copy; 2024 Mehwish. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
