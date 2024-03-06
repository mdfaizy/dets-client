import "./App.css";
import { useState } from "react";
import About from "./routes/About";
import Home from "./components/home/Home";
import Job from "./routes/job/Job";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginFrom from "./components/pages/login/LoginFrom";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import { Route, Routes } from "react-router-dom";
import SignupFrom from "./components/pages/signup/SignupFrom";
import NewAdmission from "./routes/newstudent/newadmission/NewAdmission";
import ExitFrom from "./routes/exitstudent/exit/ExitFrom";
import PgCource from "./routes/pgcourse/pg/PgCource";
import ShowFormData from "./components/ShowFormData";
import Addmissiondata from "./applicationdata/Addmissiondata";
import Exitdata from "./applicationdata/Exitdata";
import Pgdata from "./applicationdata/Pgdata";
import Jobdata from "./applicationdata/Jobdata";
import Allnewstudent from "./adminsection/Allnewstudent";
import Allexitstudent from "./adminsection/Allexitstudent";
import Allpgstudent from "./adminsection/Allpgstudent";
import Allstudentjob from "./adminsection/Allstudentjob";
import ForgatePassword from "./components/pages/forgatepassword/ForgatePassword";
import ReasetPassword from "./components/pages/forgatepassword/ReasetPassword";
import Exit from "./routes/exitstudent/Exit";
import Newstudent from "./routes/newstudent/Newstudent";
// import Newstudent from "./routes/newstudent/Newstudent.module";
import Btechjob from "./routes/job/softwarejob/Btechjob";
import Pgcourse from "./routes/pgcourse/Pgcourse";
import PgCourseSumbitData from "./components/sumbitdata/PgCourseSumbitData";
import Exitsumbitdata from "./components/sumbitdata/Exitsumbitdata";
import StudentAllInfo from "./routes/StudentDetails/StudentAllInfo";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [istoken, setToken] = useState("");
  const [teacher, setTeacher] = useState(false);
  // useEffect(() => {
  //   // Check if the user is logged in by verifying the authentication cookie
  //   const authToken = setToken('token'); // Replace 'authToken' with your authentication cookie name
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
  // const handleDataFromChild = (token) => {
  //   // Handle the received data from the child component
  //   console.log("Data from child:", token);
  //   setToken(token);
  // };

 
  const handleDataFromChild = (token) => {
    console.log("Data from child:", token);
    setToken(token);
    console.log("Teacher state in App.js:", teacher);
  };
  return (
    <>
      {/* <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      /> */}


<Header
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
  isAdmin={isAdmin}
  setIsAdmin={setIsAdmin}
  teacher={teacher} 
  setTeacher={setTeacher}

   // Pass the teacher state to the Header component
/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route
          path="/newadmission"
          element={<NewAdmission istoken={istoken} />}
        />
        <Route path="/exitfrom" element={<ExitFrom istoken={istoken} />} />
        <Route path="/pgcource" element={<PgCource istoken={istoken} />} />
        <Route path="job" element={<Job istoken={istoken} />} />
        <Route
          path="/showFormData"
          element={<ShowFormData istoken={istoken} isAdmin={isAdmin} />}
        />
        <Route
          path="/loginfrom"
          element={
            <LoginFrom
              sendDataToParent={handleDataFromChild}
              setIsLoggedIn={setIsLoggedIn}
              setIsAdmin={setIsAdmin}
              setTeacher={setTeacher}
            />}
        />
        <Route
          path="/signupfrom"
          element={<SignupFrom setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/new_addmission"
          element={<Addmissiondata istoken={istoken} />}
        />
        <Route
          path="/exit_application"
          element={<Exitdata istoken={istoken} />}
        />
        <Route path="/pg_application" element={<Pgdata istoken={istoken} />} />
        <Route
          path="/job_application"
          element={<Jobdata istoken={istoken} />}
        />
        {/* <Route path='/all_new_addmission/:id' element={<Allnewstudent/>}/> */}
        <Route
          path="/all_new_addmission/:id"
          element={<Allnewstudent istoken={istoken} />}
        />
        <Route path="/all_exit_student/:id" element={<Allexitstudent />} />
        <Route path="/all_pg_student/:id" element={<Allpgstudent />} />
        <Route path="/all_student_job/:id" element={<Allstudentjob />} />
        <Route path="/forgatepassword" element={<ForgatePassword/>}/>
        <Route path="/reasetpassword/:token" element={<ReasetPassword />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="newstudent" element={<Newstudent/>}/>
        <Route path="/btechjob" element={<Btechjob/>}/>
        <Route path="/pgcourses" element={<Pgcourse/>}/>
        <Route path="/pgsumbitdata" element={<PgCourseSumbitData/>}/>
        <Route path='/exitsumbitdata' element={<Exitsumbitdata/>}/>
      <Route path='/studentallinfo' element={<StudentAllInfo teacher={teacher} istoken={istoken}/>}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
