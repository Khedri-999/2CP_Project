import './CSS/App.css';
import Home from "./pages/Home";
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Terms from './pages/Terms';
import Requests from './pages/Requests';
import MyClaims from './pages/MyClaims';
import MyPosts from './pages/MyPosts';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Auth/Terms" element={<Terms />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/MyPosts" element={<MyPosts />} />
        <Route path="/home/Requests" element={<Requests />} />
        <Route path="/home/MyClaims" element={<MyClaims />} />
      </Routes>
    </Router>
  );
}

export default App;







