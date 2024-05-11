import Card1 from "../components/Card1";
import FaqsContent from "../components/FaqsContent";
import FooterGraphic from "../components/FooterGraphic";
import Navigation1 from "../components/Navigation1";
import FrameComponent from "../components/FrameComponent";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main className="background">
        <img className="light-effect-6" alt="" src="/light-effect-6@2x.png" />
        <section className="background-inner">
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="frame-group">
                <header className="frame-container">
                  <div className="vitanet-parent">
                    <h1 className="vitanet">VITANET</h1>
                    <nav className="navigation-wrapper">
                      <nav className="navigation">
                        <a href="an-intelligent-platform" className="home">Home</a>
                        <a href="#about" className="about">About</a>
                        <a href="#services" className="services">Services</a>
                        <a href="" className="policies">Survey</a>
                        <a href="#faq" className="faq">FAQ</a>
                      </nav>
                    </nav>
                  </div>
                </header>
                <div className="home1">
                  <div className="text">
                    <h1 className="safeguarding-the-confidentiali-container">
                      <span className="safeguarding-the">{`Unlocking Potential,Changing Lives:`}</span>
                      <span className="sensitive-healthcare">
                      Vitanet’s Revolutionary Approach to Clinical Trials
                      </span>
                    </h1>
                    <div className="buttons">
                      <button className="button" href="components/login.js">
                        <b className="boto">Login</b>
                      </button>
                      <button className="button1">
                        <b className="boto1">Sign up</b>
                      </button>
                    </div>
                    <h3 className="free-website-to">{`Free website to manage medication plans, log health data, store medical docs, track symptoms, share info with doctors for remote consultations, receive health advice & news.`}</h3>
                  </div>
                  <img className="img-icon" alt="" src="/img@2x.png" />
                </div>
              </div>
            </div>
            <div className="cards-parent">
              <div className="cards">
                <div className="card-1">
                  <div className="text1">
                    <img
                      className="img-icon1"
                      loading="lazy"
                      alt=""
                      src="/img-1@2x.png"
                    />
                    <h1 className="patient-empowerment">Patient Empowerment</h1>
                    <div className="patients-gain-control">
                       Patients gain control over their data and have a more
                      active role in research.
                    </div>
                  </div>
                  <div className="bttn">
                    <div className="text2">More Information</div>
                    <img
                      className="iconarrow"
                      loading="lazy"
                      alt=""
                      src="/iconarrow.svg"
                    />
                  </div>
                </div>
                <Card1
                  img="/img-2@2x.png"
                  faster="Faster"
                  researchProgress="Research Progress"
                  streamlinedProcessesAndAI="Streamlined processes and AI-powered analysis can expedite research timelines."
                />
                <Card1
                  img="/img-3@2x.png"
                  faster="Increased"
                  researchProgress="Trust"
                  streamlinedProcessesAndAI=" Patients and regulators can trust the integrity of clinical trial data due to blockchain's immutability."
                  propPadding="var(--padding-13xl) var(--padding-5xl) 15px"
                />
              </div>
              <div className="revolution-content">
                <div className="text3">
                  <h1 className="an-intelligent-platform">
                    An intelligent platform that will revolutionize your health
                    journey
                  </h1>
                  <button className="buttons1">
                    <div className="button2">
                      <b className="boto2">Know More</b>
                    </div>
                  </button>
                  
                  <h1 className="services1">Services</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="leafy-structure">
          <div className="tree-composition">
            <div className="tittle-wrapper">
              <div className="tittle">
                <h1 className="empowering-participation-acce-container">
                  <p className="empowering-participation">
                    Empowering Participation,
                  </p>
                  <p className="accelerating-discovery">
                    Accelerating Discovery
                  </p>
                </h1>
              </div>
            </div>
            <img className="app-home-bk" alt="" src="/app_home.png" />
          </div>
        </section>
        <FaqsContent />
        <FooterGraphic />
        <section className="light-effects">
          <img className="range-icon" alt="" src="/range.svg" />
          <img className="light-effect-4" alt="" src="/light-effect-4@2x.png" />
          <img className="light-effect-2" alt="" src="/light-effect-2@2x.png" />
          <img className="light-effect-1" alt="" src="/light-effect-2@2x.png" />
          <img
            className="light-effect-11"
            alt=""
            src="/light-effect-1-1@2x.png"
          />
          <img
            className="light-effect-8"
            alt=""
            src="/light-effect-1-1@2x.png"
          />
          <img
            className="chatbot-removebg-preview-1-icon"
            loading="lazy"
            alt=""
            src="/chatbotremovebgpreview-1@2x.png"
          />
          <div className="wrapper-light-effect-3-parent">
            <div className="wrapper-light-effect-3">
              <img
                className="light-effect-3"
                alt=""
                src="/light-effect-3@2x.png"
              />
            </div>
            <img
              className="ilustration-icon"
              loading="lazy"
              alt=""
              src="/ilustration.svg"
            />
          </div>
          <img
            className="logo-iasaude-icon"
            loading="lazy"
            alt=""
            src="/logo-iasaude@2x.png"
          />
        </section>
        <img className="light-effect-7" alt="" src="/light-effect-6@2x.png" />
      </main>
      <div className="app-home">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="home2">
            <b className="home-page">Home page</b>
            <div className="access-tools-and">Access tools and many more!</div>
            <div className="search">
              <div className="search-child" />
              <img
                className="search-normal-icon"
                alt=""
                src="/searchnormal.svg"
              />
              <div className="to-look-for">To look for..</div>
            </div>
          </div>
          <div className="premium-card">
            <img className="looper-2-icon" alt="" src="/looper-2@2x.png" />
            <img className="looper-1-icon" alt="" src="/looper-1@2x.png" />
            <img className="sphere-icon" alt="" src="/sphere@2x.png" />
            <img className="icon" alt="" src="/icon-2@2x.png" />
            <div className="premium-card-child" />
            <div className="premium-card-item" />
            <div className="buttons2" />
            <b className="safeguarding-the-confidentiali-container1">
              <p className="safeguarding-the1">{`Safeguarding the  Confidentiality  of `}</p>
              <p className="sensitive-healthcare1">{`Sensitive  Healthcare `}</p>
              <p className="information">Information!</p>
            </b>
          </div>
          <div className="frame-div">
            <div className="button-wrapper">
              <div className="button3">
                <div className="text4">Ver todas</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="logo-wrapper">
            <div className="logo">
              <img
                className="logo-iasaude-1-icon"
                alt=""
                src="/logo-iasaude-1-1@2x.png"
              />
              <div className="vitanet-group">
                <div className="vitanet1">VITANET</div>
                <div className="artificial-intelligence-system-wrapper">
                  <div className="artificial-intelligence-system">
                    Artificial Intelligence System
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-inner">
            <div className="vuesaxlineargraph-parent">
              <div className="vuesaxlineargraph">
                <img
                  className="vuesaxlineargraph-icon"
                  alt=""
                  src="/vuesaxlineargraph.svg"
                />
              </div>
              <div className="vuesaxlineargraph1">
                <img
                  className="vuesaxlineargraph-icon1"
                  alt=""
                  src="/vuesaxlineargraph-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="all-tools">All Tools</div>
          <div className="menu-child">
            <div className="vuesaxlinearchart-2-parent">
              <div className="vuesaxlinearchart-2">
                <img
                  className="vuesaxlinearchart-2-icon"
                  alt=""
                  src="/vuesaxlinearchart2.svg"
                />
              </div>
              <div className="vuesaxlinearchart-21">
                <img
                  className="vuesaxlinearchart-2-icon1"
                  alt=""
                  src="/vuesaxlinearchart2-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="dashboard">Dashboard</div>
          <div className="group-div">
            <div className="vuesaxlineardiagram-parent">
              <div className="vuesaxlineardiagram">
                <img
                  className="vuesaxlineardiagram-icon"
                  alt=""
                  src="/vuesaxlineardiagram.svg"
                />
              </div>
              <div className="vuesaxlineardiagram1">
                <img
                  className="vuesaxlineardiagram-icon1"
                  alt=""
                  src="/vuesaxlineardiagram-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="progress">Progress</div>
          <div className="vuesaxlinearsms">
            <img
              className="vuesaxlinearsms-icon"
              alt=""
              src="/vuesaxlinearsms.svg"
            />
          </div>
          <div className="message">Message</div>
          <div className="settings">Settings</div>
          <div className="home3">
            <div className="home-inner">
              <div className="vuesaxboldelement-4-parent">
                <div className="vuesaxboldelement-4">
                  <img
                    className="vuesaxboldelement-4-icon"
                    alt=""
                    src="/vuesaxboldelement4.svg"
                  />
                </div>
                <div className="vuesaxboldelement-41">
                  
          

                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
