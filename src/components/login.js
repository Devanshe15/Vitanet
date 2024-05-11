import LoginForm from "../components/LoginForm";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <main className="background-parent">
        <img className="background-icon" alt="" src="/background@2x.png" />
        <div className="button">
          <div className="button-child" />
          <img
            className="logo-iasaude-icon"
            loading="lazy"
            alt=""
            src="/logo-iasaude@2x.png"
          />
        </div>
      </main>
      <div className="vitanet-wrapper">
        <h1 className="vitanet">VITANET</h1>
      </div>
      <div className="frame-parent">
        <div className="welcome-back-wrapper">
          <h1 className="welcome-back">Welcome Back !</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Desktop;
