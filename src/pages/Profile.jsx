import '../CSS/Profile.css';
import fonditLogo from '../assets/Logo_2.png';


function Profile(){
  return(
    <div className='profile-container'>
      <div className='profile'>
        <img src={fonditLogo} alt="user picture"/>
        <p>hhhh</p>
        <button>LOG-OUT</button>
      </div>
    </div>
  );
}

export default Profile;