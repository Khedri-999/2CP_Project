import '../CSS/SideBar.css';
import { Link } from 'react-router-dom';
import side1 from '../assets/side1.png';
import side2 from '../assets/side2.png';
import side3 from '../assets/side3.png';
import side4 from '../assets/side4.png';
import side5 from '../assets/side5.png';
import side6 from '../assets/side6.png';
import { useState,useEffect } from 'react';

function SideBar(selectedSide) {
    const [side, setSide] = useState(selectedSide);
  
    const handleSide = (side) => {
        setSide(side);
        selectedSide(side);
    }

    return (
        <div className="sidebar">
            <Link to='/Home' className='Home-link'>
                <button 
                    className={side === 'Home' ? 'active' : ''} 
                    onClick={() => handleSide('Home')}
                >
                    <img src={side1} alt="Home" />
                    Home
                </button>
            </Link>

            <Link to='/Home/MyClaims' className='MyClaims-link'>
                <button
                    onClick={() => handleSide('MyClaims')}
                    className={side === 'MyClaims' ? 'active' : ''}
                >
                    <img src={side2} alt="My Claims" />
                    My Claims
                </button>
            </Link>

            <Link to='/Home/MyPosts' className='MyPosts-link'>
                <button 
                    onClick={() => handleSide('MyPosts')}
                    className={side === 'MyPosts' ? 'active' : ''}
                >
                    <img src={side3} alt="My Posts" />
                    My Posts
                </button>
            </Link>
            
            <Link to='/Home/Report' className='report-link'>         
                <button 
                    onClick={() => handleSide('Report')}
                    className={side === 'Report' ? 'active' : ''}
                >
                    <img src={side4} alt="Report" />
                    Report
                </button>
            </Link>
            
            <Link to='/Home/Profile' className='Profile-link'> 
                <button  
                    onClick={() => handleSide('Profile')}
                    className={side === 'Profile' ? 'active' : ''}
                >
                    <img src={side5} alt="Profile" />
                    Profile
                </button>
            </Link>
        
            
            <Link to='/' className='log-out-link'>         
                <button 
                    onClick={() => handleSide('Log-out')}
                    className={side === 'Log-out' ? 'active' : ''}
                >
                    <img src={side6} alt="Log out" />
                    Log-out
                </button>
            </Link>
        </div>
    );
}


export default SideBar;