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
          <button className="how-btn">how</button>
          <button className="why-btn">why</button>
          <button className="FAQ-btn">FAQ</button>
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
      
      <div className="how-toUse">
        <h3>How To Use Our Platform</h3>
         <div className="how-steps">
           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div>
                <img src=''/>
                <h3>access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>
         </div>
       </div>

       <div>
          <div>
            
          </div>
       </div>
    </div>
  );
}

export default LandingPage;