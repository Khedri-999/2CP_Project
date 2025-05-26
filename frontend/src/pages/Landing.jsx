import "../CSS/Landing.css";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import fonditLogo from '../assets/Logo_2.png';
import step1 from '../assets/Light Mode/Home/How It Works/access.png';
import step2 from '../assets/Light Mode/Home/How It Works/browse.png';
import step3 from '../assets/Light Mode/Home/How It Works/Claim.png';
import step4 from '../assets/Light Mode/Home/How It Works/Connect.png';
import step5 from '../assets/Light Mode/Home/How It Works/Retrieve.png';
import step6 from '../assets/Light Mode/Home/How It Works/Submit.png';
import bib from '../assets/estin-image.png';
import estin from '../assets/estin.png';
import features1 from '../assets/features1.png';
import features2 from '../assets/features2.png';
import features3 from '../assets/features3.png';
import features4 from '../assets/features4.png';
import features5 from '../assets/features5.png';
import features6 from '../assets/features6.png';
import feat1 from '../assets/Light Mode/Home/Features/adaptability.png';
import feat2 from '../assets/Light Mode/Home/Features/clock.png';
import feat3 from '../assets/Light Mode/Home/Features/encrypted.png';
import feat4 from '../assets/Light Mode/Home/Features/glitter.png';
import feat5 from '../assets/Light Mode/Home/Features/reliability.png';
import feat6 from '../assets/Light Mode/Home/Features/research.png';
import feat7 from '../assets/Light Mode/Home/Features/user-friendly.png';
import email1 from '../assets/email1.png';
import email2 from '../assets/email2.png';
import email3 from '../assets/email3.png';
import email4 from '../assets/email4.png';
import estin1 from '../assets/estin-landing1.png';
import about1 from '../assets/Light Mode/Home/About/facebook.png';
import about2 from '../assets/Light Mode/Home/About/instagram 2.png';
import about3 from '../assets/Light Mode/Home/About/linkedin 2.png';
import about4 from '../assets/Light Mode/Home/About/twitter2.png';


function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="nav-bar">
        <img src={fonditLogo} alt="founfit-logo" className="logo"/>
        <div className="nav-links">
          <a href='#top'>
          <button className="nav-btn">top</button>
          </a>
          <a href='#how'>
          <button className="how-btn">how</button>
          </a>
          <a href='#why'>
          <button className="why-btn">why</button>
          </a>
          <a href='#features'>
          <button className="features-btn">features</button>
          </a>
          <a href='#faq'>
          <button className="FAQ-btn">FAQ</button>
          </a>
          <a href='#contact-us'>          
            <button className="nav-btn">contact-us</button>
          </a>
          <Link to='/Auth' className='Auth-link'>
          <button className="signin-btn">Sign-In</button>
          </Link>
          
        </div>
      </nav>


      <div className="content" id='top'>
       <div className="top-section">
        <div className="text-section">
          <h1>Recover Without Email Clutter</h1>
          <p>Dedicated For Reporting and Recovering Lost and Found Items In Amizour Campus, Helping <img src={estin} alt="estins" className="estins-logo"/> Students Reconnect With What Matters The Most.</p>
          <Link to='/Auth' className='Auth-link'>
           <button className="cta-btn">Get Started</button>
          </Link>
        </div>
       </div>
      </div>

      <hr></hr>
      
      <div className="how-toUse" id='how'>
        <h1>How To Use Our Platform</h1>

         <div className="how-steps">

           <div>
              <div className="step-title">
                <img src={step1}/>
                <h3>1-Account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step2}/>
                <h3>2-Browse</h3>
              </div>
              <p>
              view the latest lost and found items in an organized feed use filters to quickly find a specific item
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step3}/>
                <h3>3-Submit</h3>
              </div>
              <p>
              If you find something ,create a raport with details such as category, location and image to help others identify it.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step4}/>
                <h3>4-Claim</h3>
              </div>
              <p>
              If you find your lost item listed ,submit a claim with proof of ownership
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step5}/>
                <h3>5-Connect</h3>
              </div>
              <p>
              Communicate securely via ESTIN email or phone to arrange the recovery.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step6}/>
                <h3>6-Retrieve</h3>
              </div>
              <p>
              Meet with the finder to complete the handover    
              </p>
           </div>
         </div>
       </div>



       <div className="why-container" id="why">
          <h1>Why should you use our platform</h1>
            <div className="why-right">
             <div className="why-text">
                <p>-Every day, ESTIN students receive countless emails about lost and found items
                </p>
             </div>
             <div>
              <img src={email1} className="why-image"></img>
             </div>
            </div>

            <div className="why-left">
             <div>
              <img src={email2} className="why-image"></img>
             </div>
             <div className="why-text">
                <p>often written in unprofessional manner with informal language and inconsistent formatting 
                </p>
             </div>
            </div>

            <div className="why-right">
             <div className="why-text">
                <p>this flood of unstructured and poorly articulated emails is distracting and disrupts peace of mind.
                </p>
             </div>
             <div>
              <img src={email3} className="why-image"></img>
             </div>
            </div>

            <div className="why-left">
             <div>
              <img src={email4} className="why-image"></img>
             </div>
             <div className="why-text">
                <p>so FOUNDIT was created to solve this problem
                </p>
             </div>
            </div>

       </div>

       
       <div className="features-container" id="features">
          <h1>Features</h1>
          <div className="features-steps">

      {[
        { img: features1, step: feat5, title: "Reliable", desc: "Tailored and Dedicated Exclusively For ESTIN Students, FoundIt Offers a Trustworthy Platform With a Structured and Organized Process For Item Recovery." },
        { img: features2, step: feat3, title: "Secure", desc: "Our platform Safeguards Your Information With Robust Encryption and Thorough Verification Processes, Ensuring That All Interactions Remain Private and Safe." },
        { img: features3, step: feat7, title: "User-friendly", desc: "Features an Intuitive Design and Clear Instructions That Make It Simple and Easy To Use." },
        { img: features4, step: feat6, title: "Monitored", desc: "Delivers Rapid Filtered Results and Real-Time Notifications, Helping You Promptly Report or Locate Items Instantly." },
        { img: features5, step: feat2, title: "Efficient", desc: "It Seamlessly Blends Customizability, Adaptability, and Resiliency, Evolving With User Needs." },
        { img: features6, step: feat1, title: "Dynamic", desc: "Dedicated administrators continuously oversee any issues and maintain a well-regulated environment." }
      ].map((feature, index) =>(index % 2? 
        (
          <div className="features-step" key={index}>
            <div>
              <div className="features-title">
                <img src={feature.step} alt={`${feature.title} icon`} />
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.desc}</p>
            </div>
            <div>
              <img src={feature.img} className="features-img" alt={feature.title} />
            </div>
          </div>
        )
        : (
          <div className="features-step" key={index}>
            <div>
              <img src={feature.img} className="features-img" alt={feature.title} />
            </div>
            <div>
              <div className="features-title">
                <img src={feature.step} alt={`${feature.title} icon`} />
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.desc}</p>
            </div>
          </div>
        )
      ) )}

  </div>
</div>

<div className="FAQ-container" id="faq">
  <h1>FAQs</h1>

  {[
    {
      question: "How is My Data Protected?",
      answer:
        "We Use Robust Encryption and Strict Verification Processes To Ensure Your Information Remains Secure. Our Platform is Continuously Monitored By Administrators To Maintain a Safe Environment.",
    },
    {
      question: "What Happens If There is a Dispute Over an Item?",
      answer:
        "In Case of Any Disputes, Our Administrators Will Review The Case. We Encourage You To Provide All Relevant Information and Proof Of Ownership To Help Resolve Issues Promptly.",
    },
    {
      question: "How Can I Contact The Owner or Finder?",
      answer:
        "You Can Use Our Secure in-Platform Messaging System, You May Also Reach Out Via ESTIN Email or Phone Number.",
    },
    {
      question: "How Can I Report Suspicious or Fraudulent Activity?",
      answer:
        "Each Post Includes a Report Button, Once You Press The Button, You May Be Prompted To Provide Additional Details, and Our Administrators Will Review The Report Promptly.",
    },
    {
      question: "How Would Users Stay Updated If They Do Not Visit The Website Regularly?",
      answer:
        "Users Can Enable Browser Notifications To Receive Real-Time Alerts About New Claim Requests and Messages. Additionally, If These Notifications Go Unacknowledged For a Set Period, An Automated Email Will Be Sent To Ensure That Users Remain Informed.",
    },
  ].map((faq, index) => (
    <div className="faq-box" key={index}>
      <button
        className="faq-toggle"
        onClick={() =>
          document
            .getElementById(`faq-answer-${index}`)
            .classList.toggle("show")
        }
      >
        {faq.question}
      </button>
      <div className="faq-answer" id={`faq-answer-${index}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  ))}
</div>


       <footer id="contact-us" className="footer">
  <div className="footer-section brand">
    <img src={fonditLogo} alt="FoundIt logo" className="logo" />
    <p>&copy; 2025 FoundIt. All rights reserved.</p>
  </div>

  <div className="footer-section contact-info">
    <h4>Contact Us</h4>
    <p>📞 +213 5 52 95 23 03</p>
    <p>📧 foundit2025@protonmail.com</p>
    <p>📍 Estin, National Road N75, Amizour, Béjaïa, Algeria</p>
  </div>

  <div className="footer-section links">
    <h4>Quick Links</h4>
    <p><a href="#">Terms of Use</a></p>
    <p><a href="#">Privacy Policy</a></p>
    <p><a href="#">About Us</a></p>
  </div>

  <div className="footer-section follow-us">
    <h4>Follow Us</h4>
    <div className="social-icons">
      <img src={about1} alt="Facebook" className="social-icon" />
      <img src={about2} alt="Instagram" className="social-icon" />
      <img src={about3} alt="LinkedIn" className="social-icon" />
      <img src={about4} alt="Twitter" className="social-icon" />
    </div>
  </div>
</footer>


    </div>);
}

export default LandingPage;