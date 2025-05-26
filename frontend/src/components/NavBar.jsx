import Notification from '../components/Notification';
import '../CSS/NavBar.css';
import founditLogo from '../assets/Logo_2.png';

const sampleNotifications = [
  { message: "Your claim was accepted!", read: false },
  { message: "Your claim was rejected.", read: true },
];

function NavBar() {
  return (
    <nav className="navigationBar">
      <div>
        <img src={founditLogo} alt="estin logo" className="estin-logo" />
      </div>
      <Notification notifications={sampleNotifications} />
    </nav>
  );
}

export default NavBar;
