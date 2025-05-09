
import '../CSS/Profile.css';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/picture.jpg';


function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    profilePicture: null,
    joinedDate: '',
  });
  
  const [editing, setEditing] = useState(false);
  const [newPhone, setNewPhone] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 🔐 Load token from localStorage
  const token = localStorage.getItem('token');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    setIsLoading(true);
  
    axios.get('/api/accounts/profile/', {
      headers: { Authorization: `Token ${token}` }
    })
    .then(res => {
      const d = res.data;
      setProfileData({
        name:           d.full_name || '',
        email:          d.email      || '',
        phoneNumber:    d.phone_number || '',
        profilePicture: d.profile_picture || null,
        joinedDate:     d.date_joined
                          ? new Date(d.date_joined).toLocaleDateString()
                          : '',
      });
      setNewPhone(d.phone_number || '');
    })
    .catch(err => console.error('Error fetching profile:', err))
    .finally(() => setIsLoading(false));
  }, []);
  
  
  

  const handleEditClick = () => {
    if (editing) {
      // 🔁 Update phone number on backend
      axios.patch('/api/accounts/profile/', { phone_number: newPhone }, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        setProfileData(prev => ({ ...prev, phoneNumber: newPhone }));
        console.log("Phone updated");
       })
      .catch(err => console.error("Failed to update phone:", err));
    }
    setEditing(!editing);
  };


  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <SideBar />
      <div className='profile-container'>
        <div className="profile-wrapper">
        <svg className="profile-background"
            viewBox="0 0 1213 731"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M654 30.1815C724.271 27.3618 777.614 27.0024 847.863 30.1814C939.763 34.3403 1065.07 40.2043 1132 92.5C1202.49 147.58 1212.5 261 1212.5 361C1212.5 407.5 1212.5 540.5 1174 609.046C1135.5 677.592 1074 712.365 1037 712.365C979.03 712.365 791.853 719.724 700 725.5C604.54 731.503 381.685 735.17 290 712.365C173.613 683.417 102.423 693.349 36.1169 609.046C-29.4159 525.726 15.649 415.928 19.9999 316.571C24.1624 221.518 -27.6042 96.4406 61.2075 36.0874C165.575 -34.8367 324.433 20.8998 459 30.1815C524.055 34.6686 588.796 32.7978 654 30.1815Z" fill="#E8F2FD" fillOpacity="0.9"/>
          </svg>

          <div className="profile-content">
            <div className="profile-image">
              <img
                src={profileData.profilePicture || img1}
                alt="user"
                className="user-picture"
              />
            </div>
            <h1 className="profile-name">{profileData.name}</h1>
            <p className="profile-email">{profileData.email}</p>

            <div className="profile-info">
              <div className="info-row">
                <span className="info-label">Joined on :</span>
                <span className="info-value">{profileData.joinedDate}</span>
                <br />
                <span className="info-label">Phone Number :</span>
                {editing ? (
                  <input
                    type="text"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="phone-input"
                  />
                ) : (
                  <span className="phone-value">{profileData.phoneNumber}</span>
                )}
              </div>
            </div>
            <div className="profile-buttons">
              <button className="edit-button" onClick={handleEditClick}>
                {editing ? "Save" : "Edit"}
              </button>
              <Link to='/' className='log-out-button'>
                <button onClick={() => {
                  localStorage.removeItem('token');
                  window.location.href = '/';
                }}>
                  Log-out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
