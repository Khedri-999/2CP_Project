import './CSS/App.css';
import Home from "./pages/Home";
import Landing from './pages/Landing';
import Requests from './pages/Requests';
import MyClaims from './pages/MyClaims';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/Requests" element={<Requests />} />
        <Route path="/home/MyClaims" element={<MyClaims />} />
      </Routes>
    </Router>
  );
}

export default App;







