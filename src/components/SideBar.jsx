import '../CSS/SideBar.css';
import { Link } from 'react-router-dom';
import side1 from '../assets/side1.png';
import side2 from '../assets/side2.png';
import side3 from '../assets/side3.png';
import side4 from '../assets/side4.png';
import side5 from '../assets/side5.png';
import side6 from '../assets/side6.png';

function SideBar(){
  return(
    <div className='sidebar-container'>
      <dive class="sidebar">
        <Link to='/Home' className='Home-link'>
         
         <button className='sidebar-link'>
         <img src={side1} alt="side1" className='side1' />
          Home
          </button>
        </Link>

        <Link to='/Home/MyClaims' className='MyClaims-link'>
          
         <button className='sidebar-link'
         >
          <img src={side2} alt="side2" className='side2' />
          My Claims
         </button>
        </Link>

        <Link to='/Home/MyPosts' className='MyPosts-link'>
          
          <button className='sidebar-link'>
          <img src={side3} alt="side3" className='side3' />
          My Posts</button>
        </Link>
        
        <Link to='/Home/Requests' className='Requests-link'>
          
          <button className='sidebar-link'>
          <img src={side4} alt="side4" className='side4' />
          Requests</button>
        </Link>
        
        <Link to='/Home/Report' className='report-link'>
          
          <button className='sidebar-link'>
          <img src={side5} alt="side5" className='side5' />Report</button>
        </Link>
        
        <Link to='/' className='log-out-link'>
          
          <button className='sidebar-link'>
          <img src={side6} alt="side6" className='side6' />Log-out</button>
        </Link>

        
        </dive>

        
            
              
            
    </div>
  )
}

export default SideBar