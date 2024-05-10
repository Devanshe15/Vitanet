import Card from "./Card";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="categories-header-parent">
      <div className="categories-header">
        <b className="categories1">Categories</b>
      </div>
      <div className="menu1">
        <div className="menu-content">
          <div className="logo-wrapper-parent">
            <div className="logo-wrapper2">
              <div className="logo1">
                <img
                  className="logo-iasaude-1-icon2"
                  loading="lazy"
                  alt=""
                  src="/logo-iasaude-1-1@2x.png"
                />
                <div className="vitanet-container">
                  <div className="vitanet3">VITANET</div>
                  <div className="logo-subtitle">
                    <div className="artificial-intelligence-system1">
                      Artificial Intelligence System
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-links1">
              <div className="nav-link">
                <button className="home6">
                  <div className="vuesaxboldelement-4-group">
                    <div className="vuesaxboldelement-42">
                      <img
                        className="vuesaxboldelement-4-icon2"
                        alt=""
                        src="/vuesaxboldelement4.svg"
                      />
                    </div>
                    <div className="vuesaxboldelement-43">
                      <img
                        className="vuesaxboldelement-4-icon3"
                        alt=""
                        src="/vuesaxboldelement4-1.svg"
                      />
                    </div>
                  </div>
                  <div className="a1">Home</div>
                  <div className="home-indicator" />
                </button>
                <div className="tools-link">
                  <div className="tools-content">
                    <div className="vuesaxlineargraph-group">
                      <div className="vuesaxlineargraph2">
                        <img
                          className="vuesaxlineargraph-icon2"
                          alt=""
                          src="/vuesaxlineargraph.svg"
                        />
                      </div>
                      <div className="vuesaxlineargraph3">
                        <img
                          className="vuesaxlineargraph-icon3"
                          alt=""
                          src="/vuesaxlineargraph-3.svg"
                        />
                      </div>
                    </div>
                    <div className="all-tools1">All Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-link">
          <div className="dashboard-content">
            <div className="vuesaxlinearchart-2-group">
              <div className="vuesaxlinearchart-22">
                <img
                  className="vuesaxlinearchart-2-icon2"
                  alt=""
                  src="/vuesaxlinearchart2.svg"
                />
              </div>
              <div className="vuesaxlinearchart-23">
                <img
                  className="vuesaxlinearchart-2-icon3"
                  alt=""
                  src="/vuesaxlinearchart2-1.svg"
                />
              </div>
            </div>
            <div className="dashboard1">Dashboard</div>
          </div>
        </div>
        <div className="progress-link">
          <div className="progress-content">
            <div className="vuesaxlineardiagram-group">
              <div className="vuesaxlineardiagram2">
                <img
                  className="vuesaxlineardiagram-icon2"
                  alt=""
                  src="/vuesaxlineardiagram.svg"
                />
              </div>
              <div className="vuesaxlineardiagram3">
                <img
                  className="vuesaxlineardiagram-icon3"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineardiagram-1.svg"
                />
              </div>
            </div>
            <div className="progress1">Progress</div>
          </div>
        </div>
        <div className="message-link">
          <div className="message-content">
            <div className="vuesaxlinearsms1">
              <img
                className="vuesaxlinearsms-icon1"
                loading="lazy"
                alt=""
                src="/vuesaxlinearsms.svg"
              />
            </div>
            <div className="message-label">
              <div className="message1">Message</div>
            </div>
          </div>
          <div className="settings-link">
            <div className="settings-content">
              <div className="settings-icon">
                <div className="vuesaxlinearsetting1">
                  <img
                    className="vuesaxlinearsetting-icon1"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearsetting.svg"
                  />
                </div>
                <img
                  className="settings-icon-child"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className="settings-label">
                <div className="settings1">Settings</div>
              </div>
            </div>
          </div>
        </div>
        <div className="confg-wrapper">
          <div className="confg1">
            <div className="wrapper-image-2-group">
              <div className="wrapper-image-21">
                <img className="image-2-icon2" alt="" src="/image-2@2x.png" />
              </div>
              <img
                className="image-2-icon3"
                loading="lazy"
                alt=""
                src="/image-2-1@2x.png"
              />
            </div>
            <div className="username-wrapper">
              <div className="username1">
                <p className="bandita1">Bandita</p>
                <p className="singh1">Singh</p>
              </div>
            </div>
            <div className="vuesaxbulkarrow-down-wrapper">
              <img
                className="vuesaxbulkarrow-down-icon1"
                loading="lazy"
                alt=""
                src="/vuesaxbulkarrowdown.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="browse-our-different1">Browse our different areas!</div>
      <div className="feature-overview">
        <div className="research-card">
          <Card
            researchAnd="Research and "
            analysis="Analysis"
            anonymousDataContribution="Anonymous Data Contribution: Allow users to contribute anonymized data for research purposes."
            aggregateInsightsProvideA="Aggregate Insights: Provide anonymized insights and trends based on user data for research and analysis."
          />
        </div>
        <Card
          researchAnd="Health Advice "
          analysis="and News"
          anonymousDataContribution="Health Tips and Articles: Provide curated health information and tips."
          aggregateInsightsProvideA="Health News Updates: Deliver latest health news relevant to users' interests."
          propAlignSelf="unset"
          propPadding="var(--padding-smi) var(--padding-4xs) var(--padding-57xl-5)"
          propFlex="0.8874"
          propPadding1="0px var(--padding-smi)"
        />
        <Card
          researchAnd="Doctor "
          analysis="Communication"
          anonymousDataContribution="Secure Messaging: Enable communication between users and their healthcare providers."
          aggregateInsightsProvideA="Teleconsultation Integration: Facilitate remote consultations with healthcare professionals."
          propAlignSelf="unset"
          propPadding="var(--padding-smi) var(--padding-4xs) var(--padding-43xl-4)"
          propFlex="0.8874"
          propPadding1="0px var(--padding-smi)"
        />
        <Card
          researchAnd="Medical Document"
          analysis="Storage"
          anonymousDataContribution="Secure Document Upload: Store medical records, test results, and other important documents."
          aggregateInsightsProvideA="Document Organization: Categorize documents by type (e.g., lab results, imaging reports, prescriptions)."
          propAlignSelf="unset"
          propPadding="var(--padding-smi) var(--padding-4xs) var(--padding-36xl-5)"
          propFlex="unset"
          propPadding1="0px var(--padding-base) 0px var(--padding-smi)"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
