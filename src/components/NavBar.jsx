import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'
import founditLogo from '../assets/Logo_2.png';

function NavBar(){

  return(
      <nav className="navigationBar">
        <div>
          <img src={founditLogo} alt='estin logo'
          className='estin-logo'/>
        </div>

        <div className='nav-buttons'>
            <Link to='/report' className='report-link'>
            <button className='report-btn'>report</button>
            </Link>  
            <Link to='/' className='log-out-link'>
            <button className='logout-btn'>log out</button>
            </Link>
        </div>
      </nav>
  )
}

export default NavBar