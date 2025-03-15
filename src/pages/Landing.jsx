import "../CSS/Landing.css";
import fonditLogo from '../assets/Logo_2.png'
import AI from '../assets/ai-image.png'

function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="nav-bar">
        <img src={fonditLogo} alt="founfit-logo" className="logo"/>
        <div className="nav-links">
          <button className="nav-btn">About</button>
          <button className="nav-btn">Contact</button>
          <button className="signin-btn">Sign In</button>
        </div>
      </nav>
      <div className="content">
        <div className="text-section">
          <h1>Find & Return Lost Items Easily</h1>
          <p>Helping students recover their lost belongings with a trusted platform.</p>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="image-section">
          <img src={AI} alt="Lost and Found" className="AI-image"/>
        </div>
      </div>

      <hr></hr>
      
      <div>
        <p>
          hhhh
        </p>
      </div>
    </div>
  );
}

export default LandingPage;