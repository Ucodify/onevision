import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./components/Location/Location";
import User from "./components/User/User";
import Lesson from "./components/Lesson/Lesson";
import Role from "./components/Role/Role";
import "./App.css";
import MyCourses from "./components/MyCourses/MyCourses";
import Quizes from "./components/MyCourses/Quizes";
import CoursesFeedback from "./components/CoursesFeedback/CoursesFeedback";
import ViewDetails from "./components/CoursesFeedback/ViewDetails";
import Grading from "./components/Grading/Grading";
import ViewGradingDetails from "./components/Grading/ViewGradingDetails";
import Library from "./components/Library/library";
import AddLesson from "./components/Library/AddLesson";
import Settings from "./components/Settings/Settings";
import Earning from "./components/Earning/Earning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Location />} />
        <Route path='/users' element={<User />} />
        <Route path='/lessons' element={<Lesson />} />
        <Route path='/role' element={<Role />} />
        <Route path='/my-courses' element={<MyCourses />} />
        <Route path='/quizes' element={<Quizes />} />
        <Route path='/feedback' element={<CoursesFeedback />} />
        <Route path='/viewDetails' element={<ViewDetails />} />
        <Route path='/grading' element={<Grading />} />
        <Route path='/gradingdetails' element={<ViewGradingDetails />} />
        <Route path='/library' element={<Library />} />
        <Route path='/addLesson' element={<AddLesson />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/earning' element={<Earning />} />
      </Routes>
    </Router>
  );
}

export default App;
