import './CSS/App.css';
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';

import Home from "./pages/Home";
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Terms from './pages/Terms';
import MyClaims from './pages/MyClaims';
import MyPosts from './pages/MyPosts';
import Report from './pages/Report';
import Profile from './pages/Profile';
import GoogleSuccess from './GoogleSuccess';

function App() {
  const { token ,loading} = useContext(AuthContext);

  if(loading){
    return <div></div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/GoogleSuccess" element={<GoogleSuccess />} />
        <Route path="/Auth/Terms" element={<Terms />} />
        <Route path="/home" element={token ? <Home /> : <Navigate to="/Auth" replace />} />
        <Route path="/home/MyPosts" element={token ? <MyPosts /> : <Navigate to="/Auth" replace />} />
        <Route path="/home/Profile" element={token ? <Profile /> : <Navigate to="/Auth" replace />} />
        <Route path="/home/MyClaims" element={token ? <MyClaims /> : <Navigate to="/Auth" replace />} />
        <Route path="/home/Report" element={token ? <Report /> : <Navigate to="/Auth" replace />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
