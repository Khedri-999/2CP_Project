import './CSS/App.css';
import Home from "./pages/Home";
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Terms from './pages/Terms';
import Requests from './pages/Requests';
import MyClaims from './pages/MyClaims';
import MyPosts from './pages/MyPosts';
import Report from './pages/Report';
import Profile from './pages/Profile';
import GoogleSuccess from './GoogleSuccess';
import {BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";


function App() {
   const token = localStorage.getItem("token");
  
  return (
    
    <Router>
      <Routes>

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/GoogleSuccess" element={<GoogleSuccess />} />
        <Route path="/Auth/Terms" element={<Terms />} />
        <Route path="/home" element={token ? <Home /> :<Navigate to="/Auth" replace/>} />
        <Route path="/home/MyPosts" element={token ? <MyPosts /> :<Navigate to="/Auth" replace/>} />
        <Route path="/home/Profile" element={token ? <Profile /> :<Navigate to="/Auth" replace/>} />
        <Route path="/home/MyClaims" element={token ? <MyClaims /> :<Navigate to="/Auth" replace/>} />
        <Route path="/home/Report" element={token ? <Report /> :<Navigate to="/Auth" replace/>} />
      </Routes>
      
      {/*
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/GoogleSuccess" element={<GoogleSuccess />} />
        <Route path="/Auth/Terms" element={<Terms />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/MyPosts" element={<MyPosts />} />
        <Route path="/home/Profile" element={<Profile />} />
        <Route path="/home/MyClaims" element={<MyClaims />} />
        <Route path="/home/Report" element={<Report />} />
      </Routes>
      */}
    </Router>
  );
}

export default App;







