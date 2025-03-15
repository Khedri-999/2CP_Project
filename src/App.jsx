import './CSS/App.css';
import Home from "./pages/Home";
import Landing from './pages/Landing';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StrictMode } from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;







