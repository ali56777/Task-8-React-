import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/no-unescaped-entities */
export default function Navbar() {
    return (
        <section className="nav-bar">
            <div className="logo">
                <img src="http://focal-x.com/assets/img/home/logo.svg" alt="Focal X Logo" />
                <span>Digital Marketing Agency</span>
            </div>
            <ul className="lists">
                <li>
                    <a href="#" title="Home">Home</a>
                </li>
                <li>
                    <a href="#" title="Services">Services</a>
                </li>
                <li>
                    <a href="#" title="Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#" title="Clients & Partners">Clients & Partners</a>
                </li>
                <li className="academy">
                    <a href="#" title="X Academy">X Academy</a>
                </li>
                <li>
                    <a href="#" title="About Us">About Us</a>
                </li>
                <li>
                    <a href="#" title="Let's Talk">Let's Talk</a>
                </li>
            </ul>
            <span className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
            </span>
        </section>
    );
}
