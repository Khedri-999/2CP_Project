import "../CSS/Landing.css";
import fonditLogo from '../assets/Logo_2.png';
import AI from '../assets/ai-image.png';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.jfif';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';
import step6 from '../assets/step6.png';
import why1 from '../assets/why1.jfif';
import why2 from '../assets/why2.png';
import why3 from '../assets/why3.jfif';
import why4 from '../assets/why4.jfif';
import why5 from '../assets/why5.png';

function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="nav-bar">
        <img src={fonditLogo} alt="founfit-logo" className="logo"/>
        <div className="nav-links">
          <a href='#about'>          
            <button className="nav-btn">About</button>
          </a>
          <a href='#contact'>
          <button className="nav-btn">Contact</button>
          </a>
          <a href='#how'>
          <button className="how-btn">how</button>
          </a>
          <a href='#why'>
          <button className="why-btn">why</button>
          </a>
          <a href='#faq'>
          <button className="FAQ-btn">FAQ</button>
          </a>
          <button className="signin-btn">Sign-In</button>
        </div>
      </nav>
      <div className="content" id='about'>
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
      
      <div className="how-toUse" id='how'>
        <h3>How To Use Our Platform</h3>

         <div className="how-steps">

           <div>
              <div className="step-title">
                <img src={step1}/>
                <h3>1-access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step2}/>
                <h3>2-access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step3}/>
                <h3>3-access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step4}/>
                <h3>4-access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step5}/>
                <h3>5-access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>

           <div>
            <div className="step-title">
                <img src={step6}/>
                <h3>6-access your account</h3>
              </div>
              <p>
                log in whith your @estin.dz , then add your phone number to make it easier for others to reach you.
              </p>
           </div>
         </div>
       </div>

       <div className="why-container" id="why">
          <h1>Why should you use our platform</h1>
            <div className="why-right">
             <div className="why-text">
                <h3>kgsbdzi uaibcaf oluancljo</h3>
                <p>wSDUB KUCBAIWE JHBCDIUU ksv uhoucae knxcohq oichae lcnc ohcdnoew jndsue awdlne sndoaw knzxhl</p>
             </div>
             <div>
              <img src={why1} className="why-image"></img>
             </div>
            </div>

            <div className="why-left">
             <div>
              <img src={why2} className="why-image"></img>
             </div>
             <div className="why-text">
                <h3>kgsbdzi uaibcaf oluancljo</h3>
                <p>wSDUB KUCBAIWE JHBCDIUU ksv uhoucae knxcohq oichae lcnc ohcdnoew jndsue awdlne sndoaw knzxhl</p>
             </div>
            </div>

            <div className="why-right">
             <div className="why-text">
                <h3>kgsbdzi uaibcaf oluancljo</h3>
                <p>wSDUB KUCBAIWE JHBCDIUU ksv uhoucae knxcohq oichae lcnc ohcdnoew jndsue awdlne sndoaw knzxhl</p>
             </div>
             <div>
              <img src={why3} className="why-image"></img>
             </div>
            </div>

            <div className="why-left">
             <div>
              <img src={why4} className="why-image"></img>
             </div>
             <div className="why-text">
                <h3>kgsbdzi uaibcaf oluancljo</h3>
                <p>wSDUB KUCBAIWE JHBCDIUU ksv uhoucae knxcohq oichae lcnc ohcdnoew jndsue awdlne sndoaw knzxhl</p>
             </div>
            </div>

            <div className="why-right">
             <div className="why-text">
                <h3>kgsbdzi uaibcaf oluancljo</h3>
                <p>wSDUB KUCBAIWE JHBCDIUU ksv uhoucae knxcohq oichae lcnc ohcdnoew jndsue awdlne sndoaw knzxhl</p>
             </div>
             <div>
              <img src={why5} className="why-image"></img>
             </div>
            </div>
       </div>

       <div className="FAQ-container" id="faq">
         <h1>FAQs</h1>
         <div className="faq-box">
           <h3>lhdzciybdz kchabkeb kcaic ?</h3>
           <p>hello my name ix varmwb wensted im pakleuyinnf fienfortenirw all fay </p>
         </div>

         <div className="faq-box">
           <h3>lhdzciybdz kchabkeb kcaic ?</h3>
           <p>hello my name ix varmwb wensted im pakleuyinnf fienfortenirw all fay </p>
         </div>

         <var>
         <div className="faq-box">
           <h3>lhdzciybdz kchabkeb kcaic ?</h3>
           <p>hello my name ix varmwb wensted im pakleuyinnf fienfortenirw all fay </p>
         </div>

         <div className="faq-box">
           <h3>lhdzciybdz kchabkeb kcaic ?</h3>
           <p>hello my name ix varmwb wensted im pakleuyinnf fienfortenirw all fay </p>
         </div>

         <div className="faq-box">
           <h3>lhdzciybdz kchabkeb kcaic ?</h3>
           <p>hello my name ix varmwb wensted im pakleuyinnf fienfortenirw all fay </p>
         </div>

         <div className="faq-box">
           <h3>lhdzciybdz kchabkeb kcaic ?</h3>
           <p>hello my name ix varmwb wensted im pakleuyinnf fienfortenirw all fay </p>
         </div>
         
         </var>
       </div>

    </div>
  );
}

export default LandingPage;