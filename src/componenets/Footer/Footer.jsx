import { faBehance, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="contact1">
                    <img src="http://focal-x.com/assets/img/iconFotter/logo.png" alt="Focal X Logo" />
                    <span className="agency">.agency</span>
                    <div className="site">
                        <p>Head Office</p>
                        <p>Syria - Latakia - grh2+hjx35.5199518</p>
                    </div>
                </div>

                <div className="contact2">
                    <span className="sales">Sales</span>
                    <span><a href="mailto:contact@focal-x.com">contact@focal-x.com</a></span>
                    <span><a href="tel:+963953666056">+963 953 666 056</a></span>
                    <span className="public">Public Relations</span>
                    <span><a href="mailto:pr@focal-x.com">pr@focal-x.com</a></span>
                    <span><a href="tel:+963953666052">+963 953 666 052</a></span>
                </div>

                <div className="contact3">
                    <span className="customer">Customer Support</span>
                    <span><a href="mailto:info@focal-x.com">info@focal-x.com</a></span>
                    <span><a href="tel:+963953666054">+963 953 666 054</a></span>
                    <span className="human">Human Resources</span>
                    <span><a href="mailto:hr@focal-x.com">hr@focal-x.com</a></span>
                </div>

                <div className="contact4">
                    <span className="useful">Useful Links</span>
                    <span>Clients & Partners</span>
                    <span>Check Certificate ID</span>
                    <span>Verify Employee</span>
                    <span>Brand Guidelines</span>
                </div>

                <div className="contact5">
                    <span className="touch">Stay Connected</span>
                    <a href="https://www.facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.behance.net" aria-label="Behance"><FontAwesomeIcon icon={faBehance} /></a>
                    <a href="https://www.instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </footer>
            <p className="rights">
                © 2021 - 2023 Focal X L.L.C. All Rights Reserved <span className="liner"></span>
            </p>
        </>
    );
}
