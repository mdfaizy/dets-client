import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Home from "./components/Home";
import LoginFrom from "./components/LoginFrom";
// import NewAdmission from "./components/NewAdmission";
import NewAdmission from './components/NewAdmission';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SignupFrom from "./components/SignupFrom";
import { useState } from "react";
import ExitFrom from "./components/pages/exitRecord/ExitFrom";
import PgCource from "./components/pages/pgcource/PgCource";
import Job from './components/job/Job'
import Footer from './components/footer/Footer';
import ShowFormData from './components/ShowFormData'
// import ShowFormData from './components/ShowFormData';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   // Check if the user is logged in by verifying the authentication cookie
  //   const authToken = getCookie('token'); // Replace 'authToken' with your authentication cookie name
  //   console.log(authToken);
  //   if (authToken) {
  //     // Validate the authentication cookie with your backend or decode it to determine authentication status
  //     // If the cookie is valid, set the user as authenticated
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // // Function to get a specific cookie by name
  // const getCookie = (name) => {
  //   const cookies = document.cookie.split(';');
  //   for (let cookie of cookies) {
  //     const [cookieName, cookieValue] = cookie.split('=');
  //     if (cookieName.trim() === name) {
  //       return cookieValue;
  //     }
  //   }
  //   return null;
  // };


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
        <Route path='showFormData/:id' element={<ShowFormData/>}/>
        <Route path='/loginfrom' element={<LoginFrom  setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signupfrom' element={<SignupFrom setIsLoggedIn={setIsLoggedIn}/>}/>
       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
