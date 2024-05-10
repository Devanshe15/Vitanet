import "./Navigation1.css";

const Navigation1 = () => {
  return (
    <div className="navigation1">
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <div className="home-navigation">
        <div className="home5">
          <div className="frame-parent1">
            <div className="home-page-wrapper">
              <b className="home-page1">Home page</b>
            </div>
            <div className="access-tools-and1">Access tools and many more!</div>
          </div>
          <div className="search1">
            <div className="search-item" />
            <img
              className="search-normal-icon1"
              alt=""
              src="/searchnormal.svg"
            />
            <input
              className="search-inner"
              placeholder="To look for.."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="premium-card1">
        <div className="premium-card2">
          <img className="looper-2-icon1" alt="" src="/looper-2@2x.png" />
          <div className="safeguarding-the-confidentiali-wrapper">
            <h3 className="safeguarding-the-confidentiali-container2">
              <p className="safeguarding-the2">{`Safeguarding the  Confidentiality  of `}</p>
              <p className="sensitive-healthcare2">{`Sensitive  Healthcare `}</p>
              <p className="information1">Information!</p>
            </h3>
          </div>
          <img className="icon6" alt="" src="/icon-2@2x.png" />
          <div className="element-one" />
          <div className="element-two" />
          <div className="buttons3" />
          <div className="card-decorations">
            <img className="looper-1-icon1" alt="" src="/looper-1@2x.png" />
            <img className="sphere-icon1" alt="" src="/sphere@2x.png" />
          </div>
        </div>
      </div>
      <div className="cards1">
        <div className="card-12">
          <img
            className="ilustration-icon1"
            loading="lazy"
            alt=""
            src="/ilustration-1@2x.png"
          />
          <div className="feature-descriptions">
            <div className="feature-titles">
              <div className="articles-title">
                <div className="health-articles">Health Articles</div>
              </div>
              <div className="get-more-information">{`Get more information about health advices. `}</div>
            </div>
          </div>
          <div className="button4">
            <div className="text7">Know more</div>
          </div>
        </div>
        <div className="card-21">
          <img
            className="card-2-child"
            loading="lazy"
            alt=""
            src="/group-2@2x.png"
          />
          <div className="space-for-users">
            Space for users to share experiences, ask questions, and support one
            another.
          </div>
          <div className="community">Community</div>
          <div className="button5">
            <div className="text8">Participate</div>
          </div>
          <img
            className="ilustration-icon2"
            alt=""
            src="/ilustration-2@2x.png"
          />
        </div>
        <div className="card-3">
          <img className="card-3-child" alt="" src="/group-2-1@2x.png" />
          <div className="frame-parent2">
            <div className="guides-and-tutorials-wrapper">
              <div className="guides-and-tutorials">Guides and Tutorials</div>
            </div>
            <div className="see-guides-and">
              See guides and step-by-step instructions on how to use our
              platform!
            </div>
          </div>
          <div className="button6">
            <div className="text9">Know More!</div>
          </div>
          <div className="cone-01-2-parent">
            <img className="cone-01-2-icon" alt="" src="/cone-01-2@2x.png" />
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="cone-01-3-parent">
              <img className="cone-01-3-icon" alt="" src="/cone-01-3@2x.png" />
              <img
                className="mask-group-icon1"
                alt=""
                src="/mask-group-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
