import "./App.scss";
import { useState, useEffect } from "react";
import About from "./components/pages/about/About";
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
import ShowFormData from "./form-data/see-details/ShowFormData";
import Addmissiondata from "./form-data/applicationdata/Addmissiondata";
import Exitdata from "./form-data/applicationdata/Exitdata";
import Pgdata from "./form-data/applicationdata/Pgdata";
import Jobdata from "./form-data/applicationdata/Jobdata";
import Allnewstudent from "./admin/all-student/Allnewstudent";
import Allexitstudent from "./admin/all-student/Allexitstudent";
import Allpgstudent from "./admin/all-student/Allpgstudent";
import Allstudentjob from "./admin/all-student/Allstudentjob";
import ForgatePassword from "./components/pages/forgatepassword/ForgatePassword";
import ReasetPassword from "./components//pages/forgatepassword/resetPassword/ResetPassword";
import Exit from "./routes/exitstudent/Exit";
import Newstudent from "./routes/newstudent/Newstudent";

import Btechjob from "./routes/job/softwarejob/Btechjob";
import Pgcourse from "./routes/pgcourse/Pgcourse";
import PgCourseSumbitData from "./form-data/sumbitdata/PgCourseSumbitData";
import Exitsumbitdata from "./form-data/sumbitdata/Exitsumbitdata";
import StudentAllInfo from "./routes/StudentDetails/StudentAllInfo";

import FeedbackFullContent from "./adminDashboard/FeedbackFullContent";
import NewStudentReport from "./admin&teacher/createReport/newStudent/NewStudentReport";
import ExitReport from "./admin&teacher/createReport/exit/ExitReport";
import Report from "./admin&teacher/report/Report";
import PgReport from "./admin&teacher/createReport/PgReport";
import JobReport from "./admin&teacher/createReport/JobReport";
import FetchUserData from "../data/FetchUserData";
import AdmissionSummaryData from "./summaryData/AdmissionSummaryData";
import FilterData from "./admin&teacher/data/FilterData";
import VerifyOtp from "./components/pages/EmailVerify/verifyOtp";
import Sidebar from "./admin/side-bar/Sidebar";

import Dassboars from "./admin/dassbord/Dassboars";
import EditJob from "./adminsection/job/EditJob";
import JobDataPrint from "./adminsection/job/JobDataPrint";
import PrintNewStudent from "./adminsection/admission/PrintNewStudent";
import EditNewStudent from "./adminsection/admission/EditNewStudent";
import DeleteAdmissin from "./adminsection/admission/DeleteAdmissin";
import ExitEdit from "./adminsection/exitdata/ExitEdit";
import ExitPrintData from "./adminsection/exitdata/ExitPrintData";
import DeleteJob from "./adminsection/job/DeleteJob";
import NewAdmissionData from "./form-data/sumbitdata/NewAdmission";
import Jobsumbitdata from "./form-data/sumbitdata/Jobsumbitdata";

import PgDataDelete from "./adminsection/pgadmission/PgDataDelete";
import PgDataEdit from "./adminsection/pgadmission/PgDataEdit";
import PgPrint from "./adminsection/pgadmission/PgPrint";
import DeleteExit from "./adminsection/exitdata/DeleteExit";
import FeedbackForm from "./adminDashboard/feedback/feedbackfrom/Feedbackfrom";
import Feedback from "./adminDashboard/feedback/Feedback";
import Acoount from "./components/pages/createAccount/Acoount";
import TeacherAccount from "./components/pages/teacherSignupAccount/TeacherAccoutn";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import BaseLayout from "./components/layout/BaseLayout";

import { toggleTheme } from "./redux/slices/theamSlice";
import { useDispatch, useSelector } from "react-redux";
import { LIGHT_THEME, DARK_THEME } from "./utils/constant";
import MoonIcon from "./assets/Images/moon.svg";
import SunIcon from "./assets/Images/sun.svg";
import AreaTable from "./components/core/Dashboard/newStudentTable/NewStudentTable";
import ExitStudentTableData from "./components/core/Dashboard/exitStudentTable/ExitStudentTableData";
import JobDataTable from "./components/core/Dashboard/JobTableData/JobDataTable";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const accountType = localStorage.getItem("accountType");
  console.log(accountType);
  // Adding dark-mode class to the body tag if dark mode is set
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [sidebartoggle, setSidebartoggle] = useState(false);
  return (
    // style={{ backgroundColor: "#000814" }}
    <div>
      <Header
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        teacher={teacher}
        setTeacher={setTeacher}
      />

      {/* <div >
      
        <Dassboars  sidebartoggle={sidebartoggle}  setSidebartoggle={setSidebartoggle}/>
      </div> */}

      <button
        type="button"
        className="theme-toggle-btn"
        onClick={() => dispatch(toggleTheme())}
      >
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="theme-icon"
        />
      </button>
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route index element={<Home />} />

        <Route path="/about" element={<About />} />
        {/* User route */}

        <Route path="/verify-email" element={<VerifyOtp />} />
        <Route
          path="/signupfrom"
          element={<SignupFrom setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/loginfrom"
          element={
            <OpenRoute>
              <LoginFrom setIsAdmin={setIsAdmin} />
            </OpenRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgatePassword />} />
        <Route path="/update-password/:id" element={<ReasetPassword />} />
        <Route path="/account" element={<Acoount />} />
        <Route path="/teacher-account" element={<TeacherAccount />} />
        {/* Admission route */}
        <Route
          path="/newadmission"
          element={
            <PrivateRoute>
              <NewAdmission />
            </PrivateRoute>
          }
        />
        <Route
          path="/exitfrom"
          element={
            <PrivateRoute>
              <ExitFrom />
            </PrivateRoute>
          }
        />
        <Route
          path="/pgcource"
          element={
            <PrivateRoute>
              <PgCource />
            </PrivateRoute>
          }
        />
        <Route
          path="/job"
          element={
            <PrivateRoute>
              <Job />
            </PrivateRoute>
          }
        />
        {/*Show Application  */}
        <Route
          path="/showFormData"
          element={<ShowFormData isAdmin={isAdmin} />}
        />

        {/* <Route path="/new_addmission/:id" element={<Addmissiondata />} />
        <Route path="/exit_application/:id" element={<Exitdata />} />
        <Route path="/pg_application/:id" element={<Pgdata />} />
        <Route path="/job_application/:id" element={<Jobdata />} /> */}
        {/* Show Admin and teacher  */}
        <Route
          path="/all_new_addmission"
          element={<Allnewstudent isAdmin={isAdmin} teacher={teacher} />}
        />
        <Route
          path="/all_exit_student"
          element={<Allexitstudent isAdmin={isAdmin} teacher={teacher} />}
        />
        <Route
          path="/all_pg_student"
          element={<Allpgstudent isAdmin={isAdmin} teacher={teacher} />}
        />
        <Route
          path="/all_student_job"
          element={<Allstudentjob isAdmin={isAdmin} teacher={teacher} />}
        />

        {/* from befor ui */}
        <Route path="newstudent" element={<Newstudent />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/btechjob" element={<Btechjob />} />
        <Route path="/pgcourses" element={<Pgcourse />} />
        {/* Sumbit after show data */}
        <Route path="/newAdmissiondata" element={<NewAdmissionData />} />
        <Route path="/exitsumbitdata" element={<Exitsumbitdata />} />
        <Route path="/pgsumbitdata" element={<PgCourseSumbitData />} />
        <Route path="/jobsumbitdata" element={<Jobsumbitdata />} />
        <Route
          path="/studentallinfo"
          element={<StudentAllInfo teacher={teacher} />}
        />

        {/* get data by ID */}
        {/* <Route path="/new_addmission/:id" element */}
        {/* <Route exact path="/feedback/: component={Feedback} /> */}
        {/* student by feedback*/}
        <Route path="/feedback/:id" element={<FeedbackFullContent />} />
        <Route path="/newstudentreport" element={<NewStudentReport />} />
        <Route path="/createreport" element={<Report />} />
        <Route path="/createexitreport" element={<ExitReport />} />
        <Route path="/createpgreport" element={<PgReport />} />
        <Route path="/createjobreport" element={<JobReport />} />

        <Route path="/fetchuserdata/:id" element={<FetchUserData />} />
        <Route path="/filterdataall" element={<FilterData />} />
        <Route path="/admissionfilterdata" element={<AdmissionSummaryData />} />

        {/* print and edit ,delete route new admission */}
        <Route
          path="/newadmissiondataprint/:id"
          element={<PrintNewStudent />}
        />
        <Route path="/editnewstudent/:id" element={<EditNewStudent />} />
        <Route path="/deleteNewstudent/:id" element={<DeleteAdmissin />} />
        {/* print and edit ,delete route exit data */}
        <Route path="/exit-data-edit/:id" element={<ExitEdit />} />
        <Route path="/exit-data-print/:id" element={<ExitPrintData />} />
        <Route path="/exit-data-delete/:id" element={<DeleteExit />} />

        <Route path="/pg-data-edit/:id" element={<PgDataEdit />} />
        <Route path="/pg-form-dataprint/:id" element={<PgPrint />} />
        <Route path="/pgcource-delete/:id" element={<PgDataDelete />} />
        {/* print and edit ,delete route job data */}
        <Route path="/job-data-print/:id" element={<JobDataPrint />} />
        <Route path="/job-data-edit/:id" element={<EditJob />} />
        <Route path="/delete-jobdata/:id" element={<DeleteJob />} />

        {/* Feedback */}
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/feedback-details" element={<Feedback />} />

        {/* nestade route */}
        <Route
        
          element={<BaseLayout />}
        >
          <Route
            path="dashboard/all_new_addmission"
            element={<AreaTable isAdmin={isAdmin} teacher={teacher} />}
          />
          <Route
            path="dashboard/all_exit_student"
            element={<ExitStudentTableData />}
          />
          <Route
          path="dashboard/all_pg_student"
          element={<ExitStudentTableData isAdmin={isAdmin} teacher={teacher} />}
        />
        <Route
          path="dashboard/all_student_job"
          element={<JobDataTable isAdmin={isAdmin} teacher={teacher} />}
        />
          {/* JobDataTable */}
          <Route path="dashboard/new_addmission/:id" element={<Addmissiondata />} />
          <Route path="dashboard/exit_application/:id" element={<Exitdata />} />
          <Route path="dashboard/pg_application/:id" element={<Pgdata />} />
          <Route path="dashboard/job_application/:id" element={<Jobdata />} />
          <Route path="dashboard/my-profile" element={<About />} />
          <Route path="dashboard/feedback-form" element={<FeedbackForm />} />
          <Route
            path="dashboard/teacher-account"
            element={<TeacherAccount />}
          />
        </Route>
      </Routes>

      <Footer
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        teacher={teacher}
        setTeacher={setTeacher}
      />
    </div>
  );
}
export default App;
