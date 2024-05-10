import "./FaqsContent.css";

const FaqsContent = () => {
  return (
    <section className="faqs-content">
      <div className="group-g-faq">
        <div className="faqs-container">
          <div className="faqs-header">
            <h1 className="frequently-asked-questions">
              Frequently Asked Questions (FAQs)
            </h1>
            <h3 className="h3">.</h3>
          </div>
        </div>
        <div className="faqs-list">
          <div className="question">
            <div className="what-is-vitanet">
              What is VitaNet and does it work?
            </div>
            <div className="icon-containers">
              <div className="icon1">
                <div className="output-array" />
                <div className="icon-child" />
              </div>
            </div>
          </div>
          <div className="question1">
            <div className="is-the-platform">Is the platform free or paid?</div>
            <div className="icon-wrapper">
              <div className="icon2">
                <div className="icon-item" />
                <div className="icon-inner" />
              </div>
            </div>
          </div>
          <div className="question2">
            <div className="who-can-access">
              Who can access my information through VitaNet?
            </div>
            <div className="icon-container">
              <div className="icon3">
                <div className="rectangle-div" />
                <div className="icon-child1" />
              </div>
            </div>
          </div>
          <div className="question3">
            <div className="is-there-a">
              Is there a limit to the amount of information I can store on
              VitaNet?
            </div>
            <div className="icon-frame">
              <div className="icon4">
                <div className="icon-child2" />
                <div className="icon-child3" />
              </div>
            </div>
          </div>
          <div className="question4">
            <div className="contact-container">
              <div className="i-have-a-question-about-a-spec-parent">
                <div className="i-have-a">
                  I have a question about a specific feature. How can I get
                  help?
                </div>
                <div className="contact-icon-container">
                  <div className="icon5">
                    <div className="icon-child4" />
                  </div>
                </div>
              </div>
              <div className="contact-container-child" />
            </div>
            <div className="if-you-need">
              If you need help with a specific feature, you have several
              options. First, you can use our chatbot, accessible through our
              website, to get immediate assistance with your query. If you
              require further assistance, don't hesitate to contact our customer
              support team, who will be happy to help you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsContent;
