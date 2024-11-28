import React from 'react';
import '../styles/Footer.css';

function Footer()
{
    return(
        <div className="footer">
            <ul className="footer-menu">
            <li><a href="#" className="footerlink">About Us</a></li>
            <li><a href="#" className="footerlink"><img className="image" src="/public/facebook.png"/>Facebook</a></li>
            <li><a href="#" className="footerlink"><img className="image" src="/public/twiiterx.png"/>Twitter X</a></li>
            <li><a href="#" className="footerlink"><img className="image" src="/public/instagram.png"/>Instagram</a></li>
            </ul>
        </div>
        );
}

export default Footer;