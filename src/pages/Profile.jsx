import '../CSS/Profile.css';
import fonditLogo from '../assets/Logo_2.png';
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
  })
  return(
    <>
    <div className="header">
      <NavBar />
    </div>
    <SideBar/>
    <div className='profile-container'>
      <div className='profile'>
        <div className="profile-image">
          <img src={''} alt="user picture" className="user-picture"/>
        </div>
        <h1 className="profile-name">{profileData.name}</h1>
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">Email :</span>
            <span className="info-value">{profileData.email}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Joined on :</span>
            <span className="info-value">{profileData.joinedDate}</span>
          </div>

          <div className="info-row phone-row">
            <span className="info-label">Phone Number :</span>
            <div className="phone-container">
              <span className="phone-value">{profileData.phoneNumber}</span>
              <button className="edit-button">Edit</button>
            </div>
          </div>
          </div>
        <button className="log-out-button">LOG-OUT</button>
      </div>
    </div>
    </>
  );
}

export default Profile;