import "./FooterGraphic.css";

const FooterGraphic = () => {
  return (
    <section className="footer-graphic">
      <div className="graphic-container">
        <img className="light-effect-5" alt="" src="/light-effect-5@2x.png" />
        <img className="circles-icon" alt="" src="/circles@2x.png" />
      </div>
      <div className="group-h-footer">
        <div className="footer-separator" />
        <div className="footer-content">
          <div className="content-rows">
            <div className="row-one">
              <div className="row-two">
                <div className="row-three">
                  <div className="logo-container">
                    <div className="logo-wrapper1">
                      <img
                        className="logo-iasaude-1-icon1"
                        loading="lazy"
                        alt=""
                        src="/logo-iasaude-1@2x.png"
                      />
                      <div className="vitanet-wrapper">
                        <h1 className="vitanet2">VITANET</h1>
                      </div>
                    </div>
                  </div>
                  <div className="separated-they-live-container">
                    <p className="dont-miss-the">
                      Don't miss the latest news and exclusive tips! Subscribe
                      to our newsletter now and stay ahead in the world of
                      health and technology.
                    </p>
                    <p className="blank-line">&nbsp;</p>
                    <p className="receive-updates-promotions">
                      Receive updates, promotions, notices, news and more!
                    </p>
                  </div>
                </div>
              </div>
              <div className="navigation-links">
                <div className="home4">Home</div>
                <div className="about1">About</div>
                <div className="services2">Services</div>
                <div className="policies1">Policies</div>
                <div className="faq1">FAQ</div>
              </div>
              <div className="legal-links">
                <div className="terms-conditions">{`Terms & Conditions`}</div>
                <div className="privacy-policy">Privacy Policy</div>
                <div className="cookies-policy">Cookies Policy</div>
              </div>
              <div className="social-media">
                <div className="social-media-handles">Social media handles</div>
                <div className="social-media-icons">
                  <div className="div">
                    <div className="placeholders" />
                    <img
                      className="instagram-1-icon"
                      loading="lazy"
                      alt=""
                      src="/instagram-1@2x.png"
                    />
                  </div>
                  <div className="div1">
                    <div className="div2" />
                    <img
                      className="instagram-1-icon1"
                      loading="lazy"
                      alt=""
                      src="/instagram-1-1@2x.png"
                    />
                  </div>
                  <div className="div3">
                    <div className="div4" />
                    <img
                      className="instagram-1-icon2"
                      loading="lazy"
                      alt=""
                      src="/instagram-1-2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="subscription">
              <div className="bttninput">
                <input
                  className="input-placeholder"
                  placeholder="Enter your Email"
                  type="text"
                />
                <img className="iconarrow2" alt="" src="/iconarrow-3.svg" />
              </div>
              <div className="danielle-fragas-todos">
                © 2024 Danielle Fragas. Todos Os Direitos Reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterGraphic;
