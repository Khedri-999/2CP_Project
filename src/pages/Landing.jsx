import "../CSS/Landing.css";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import fonditLogo from '../assets/Logo_2.png';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.jfif';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';
import step6 from '../assets/step6.png';
import bib from '../assets/estin-image.png';
import estin from '../assets/estin.png';
import features1 from '../assets/features1.png';
import features2 from '../assets/features2.png';
import features3 from '../assets/features3.png';
import features4 from '../assets/features4.png';
import features5 from '../assets/features5.png';
import features6 from '../assets/features6.png';
import email1 from '../assets/email1.png';
import email2 from '../assets/email2.png';
import email3 from '../assets/email3.png';
import email4 from '../assets/email4.png';
import estin1 from '../assets/estin-landing1.png';

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
          <button className="cta-btn">Get Started</button>
        </div>
        <img src={estin1} alt="estin" className="estin-image" loading="lazy"/>
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
        { img: features1, step: step1, title: "Reliable", desc: "Tailored and Dedicated Exclusively For ESTIN Students, FoundIt Offers a Trustworthy Platform With a Structured and Organized Process For Item Recovery." },
        { img: features2, step: step2, title: "Secure", desc: "Our platform Safeguards Your Information With Robust Encryption and Thorough Verification Processes, Ensuring That All Interactions Remain Private and Safe." },
        { img: features3, step: step3, title: "User-friendly", desc: "Features an Intuitive Design and Clear Instructions That Make It Simple and Easy To Use." },
        { img: features4, step: step4, title: "Monitored", desc: "Delivers Rapid Filtered Results and Real-Time Notifications, Helping You Promptly Report or Locate Items Instantly." },
        { img: features5, step: step5, title: "Efficient", desc: "It Seamlessly Blends Customizability, Adaptability, and Resiliency, Evolving With User Needs." },
        { img: features6, step: step6, title: "Dynamic", desc: "Dedicated administrators continuously oversee any issues and maintain a well-regulated environment." }
      ].map((feature, index) => (
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
      ))}

  </div>
</div>

       <div className="FAQ-container" id="faq">
         <h1>FAQs</h1>
         <div className="faq-box">
           <h3> How is My Data Protected?</h3>
           <p></p>
         </div>

         <div className="faq-box">
           <h3>What Happens If There is a Dispute Over an Item?</h3>
           <p></p>
         </div>

         <var>
         <div className="faq-box">
           <h3>How Can I Contact The Owner or Finder?</h3>
           <p></p>
         </div>

         <div className="faq-box">
           <h3>How Can I Report Suspicious or Fraudulent Activity?</h3>
           <p></p>
         </div>

         <div className="faq-box">
           <h3>How Would Users Stay Updated If They Do Not Visit The Website Regularly?</h3>
           <p></p>
         </div>
         
         </var>
       </div>

      <footer id="contact-us">
       <div >
        <img src={fonditLogo} alt="founfit-logo" className="logo"/>
        <p>2025 Foundit. All rights reserved</p>
       </div>
       <div>
        <p>Contact us</p>
        <p>+213 5 52 95 23 03</p>
        <p>foundit2025@protonmail.com</p>
        <p>Location:Estin,national road N75 ,amizour ,Bejaia,alger
        </p>
       </div>
       <div>
        <p>Term of use</p>
        <p>Privacy policy</p>
        <p>about us</p>
       </div>
       <div>
        <p>Follow us</p>
       </div>
      </footer>

    </div>);
}

export default LandingPage;