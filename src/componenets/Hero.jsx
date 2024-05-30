import { faBehance, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="side1">
                    <h2>Hey!! Mario is still here, but don't forget that</h2>
                    <p>At Focal X agency, we are working to build something different. Here you’ll find a group of creative people who specialize in:
                        Branding, Digital Marketing, Web/App Development, UI/UX,
                        Content Creation, Graphic Design, Social Media, and more...
                        So you can take a tour on our website, OR just <span>Press Start :</span>
                    </p>
                </div>

                <section>
                    <div className="imges">
                        <img className="img1" src="http://focal-x.com/assets/img/home/fotter.svg" alt="Footer Background" />
                        <img className="img2" src="https://www.focal-x.com/assets/img/home/gamefor-mobile.png" alt="Game for Mobile" />
                        <img className="img3" src="https://www.focal-x.com/assets/img/home/pattren.png" alt="Pattern Background" />
                    </div>

                    <div className="links">
                        <div className="icons">
                            <a href="#"><FontAwesomeIcon icon={faX} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                        <div className="copyright">© 2021 - 2023 Focal X agency. All Rights Reserved</div>
                    </div>
                </section>
            </section>
        </>
    );
}
