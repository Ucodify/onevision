import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import User from "./components/User/User";
import Lesson from "./components/Lesson/Lesson";
import Role from "./components/Role/Role";
import "./App.css";



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Location />} />
        <Route path='/users' element={<User />} />
        <Route path='/lessons' element={<Lesson />} />
        <Route path='/role' element={<Role />} />
      </Routes>
    </Router>
  );
}

export default App;
