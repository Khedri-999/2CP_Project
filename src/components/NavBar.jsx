
import '../CSS/NavBar.css';
import founditLogo from '../assets/Logo_2.png';

function NavBar(){

  return(
      <nav className="navigationBar">
        <div>
          <img src={founditLogo} alt='estin logo'
          className='estin-logo'/>
        </div>
    
      </nav>
  )
}

export default NavBar