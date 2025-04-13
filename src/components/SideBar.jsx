import '../CSS/SideBar.css';
import { Link } from 'react-router-dom';

function SideBar(){
  return(
    <div className='sidebar-container'>
      <dive class="sidebar">
        <Link to='/Home' className='Home-link'>
         <button className='sidebar-link'>Home</button>
        </Link>

        <Link to='/Home/MyClaims' className='MyClaims-link'>
         <button className='sidebar-link'>My Claims</button>
        </Link>

        <Link to='/Home/MyPosts' className='MyPosts-link'>
          <button className='sidebar-link'>My Posts</button>
        </Link>
        
        <Link to='/Home/Requests' className='Requests-link'>
          <button className='sidebar-link'>requests</button>
        </Link>
        
        <Link to='/report' className='report-link'>
          <button className='sidebar-link'>report</button>
        </Link>
        
        <Link to='/' className='log-out-link'>
          <button className='sidebar-link'>log out</button>
        </Link>

        
        </dive>

        
            
              
            
    </div>
  )
}

export default SideBar