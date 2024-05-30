/* eslint-disable react/no-unescaped-entities */
export default function Services() {
    return (
        <section className="services">
            <p className="title">Our Services</p>
            <div className="content">
                <div className="branding">
                    <h1>Branding</h1>
                    <p className="hope1">The brand is hope,
                        It is also the source of inspiration for everything you do when you
                        deal with your customers and that is the important and emotional
                        thing. Your Brand and Visual identity represents an intrinsic Value
                        to your company.</p>

                    <p className="provides">At Focal X Agency, we provide:</p>

                    <h2 className="list">
                        <ul>
                            <li>Visual identity design.</li>
                            <li>Define Brand Identity.</li>
                            <li>Define Brand personality.</li>
                            <li>Building Your brand strategy.</li>
                            <li>Market research and competitors study.</li>
                        </ul>
                    </h2>
                    <p className="walk">We walk with you from A to Z.</p>
                    <img className="img" src="https://www.focal-x.com/assets/img/ourservices/brandingpattren.png" alt="Branding Pattern" />
                </div>

                <div className="marketing">
                    <h1>Marketing</h1>

                    <p className="hope2">Talk to your customers and tell them you and your company's
                        story through us the way you want.
                        Let us plan the content that will bring your audience closer to you.</p>

                    <p className="agency">In our marketing agency, we provide:</p>

                    <h2 className="list">
                        <ul>
                            <li>E-mail marketing.</li>
                            <li>Affiliate marketing.</li>
                            <li>Influencer marketing.</li>
                            <li>Market research and Analysis.</li>
                            <li>App store optimization (ASO).</li>
                            <li>Search engine Marketing (SEM).</li>
                            <li>Search engine optimization (SEO).</li>
                            <li>Social media marketing & campaigns.</li>
                        </ul>
                    </h2>

                    <img className="img" src="https://www.focal-x.com/assets/img/ourservices/b2bpattren.png" alt="Marketing Pattern" />
                </div>
            </div>
        </section>
    );
}
