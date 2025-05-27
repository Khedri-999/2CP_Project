import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../CSS/SideBar.css";
import side1 from "../assets/side1.png";
import side2 from "../assets/side2.png";
import side3 from "../assets/side3.png";
import side4 from "../assets/side4.png";
import side5 from "../assets/side5.png";
import side6 from "../assets/side6.png";

export default function SideBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <Link to="/Home">
          <button className={isActive("/Home") ? "active" : ""}>
            <img src={side1} alt="Home" />
            Home
          </button>
        </Link>
        <Link to="/Home/MyClaims">
          <button className={isActive("/Home/MyClaims") ? "active" : ""}>
            <img src={side2} alt="My Claims" />
            My Claims
          </button>
        </Link>
        <Link to="/Home/MyPosts">
          <button className={isActive("/Home/MyPosts") ? "active" : ""}>
            <img src={side3} alt="My Posts" />
            My Posts
          </button>
        </Link>
        <Link to="/Home/Report">
          <button className={isActive("/Home/Report") ? "active" : ""}>
            <img src={side4} alt="Report" />
            Report
          </button>
        </Link>
        <Link to="/Home/Profile">
          <button className={isActive("/Home/Profile") ? "active" : ""}>
            <img src={side5} alt="Profile" />
            Profile
          </button>
        </Link>
        <button onClick={handleLogout} className="log-out-btn">
          <img src={side6} alt="Log out" />
          Log-out
        </button>
      </div>
    </>
  );
}
