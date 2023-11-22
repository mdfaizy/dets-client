import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Home from "./components/Home";
import LoginFrom from "./components/LoginFrom";
import NewAdmission from "./components/NewAdmission";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SignupFrom from "./components/SignupFrom";
import { useState } from "react";
import ExitFrom from "./components/pages/exitRecord/ExitFrom";
import PgCource from "./components/pages/pgcource/PgCource";
import Job from './components/job/Job'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newadmission" element={<NewAdmission />} />
        <Route path='/exitfrom' element={<ExitFrom/>} />
        <Route path='/pgcource' element={<PgCource/>}/>
        <Route path='job' element={<Job/>} />
        <Route path='/loginfrom' element={<LoginFrom  setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signupfrom' element={<SignupFrom setIsLoggedIn={setIsLoggedIn}/>}/>
       
      </Routes>
    </>
  );
}

export default App;
