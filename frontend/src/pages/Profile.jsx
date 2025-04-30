import '../CSS/Profile.css';
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Profile(){
  const [profileData, setProfileData] = useState({
    name: "Mehdi Mezerreg",
    email: "m_mezerreg@estin.dz",
    joinedDate: "11 March 2025",
    phoneNumber: "+213 6 96 94 43 24",
  });

  const [editing, setEditing] = useState(false);
  const [newPhone, setNewPhone] = useState(profileData.phoneNumber);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = () => {
    if (editing) {
      // Save new phone number
      setProfileData(prev => ({ ...prev, phoneNumber: newPhone }));
      // Optionally send update to backend:
      
      axios.post('/api/update-phone', { phoneNumber: newPhone })
        .then(response => console.log("Updated"))
        .catch(error => console.error("Error:", error));
      
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
              <img src={''} alt="user" className="user-picture" />
            </div>
            <h1 className="profile-name">{profileData.email}</h1>
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
             <button className="log-out-button">LOG-OUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
