import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Home from "./components/home/Home";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import LoginForm from "./components/pages/login/LoginForm";
import SignupForm from "./components/pages/signup/SignupForm";
import VerifyOtp from "./components/pages/EmailVerify/VerifyOtp"
import NewAdmission from "./routes/newstudent/newadmission/NewAdmission";
import ExitForm from "./routes/exitstudent/exit/ExitForm";
import PgCourse from "./routes/pgcourse/pg/PgCourse";
import Job from "./routes/job/Job";

import AdmissionData from "./components/core/Dashboard/studentDashboard/ugApplicationData/AdmissionData";
import ExitData from "./components/core/Dashboard/studentDashboard/ugApplicationData/ExitData";
import PgData from "./components/core/Dashboard/studentDashboard/ugApplicationData/PgData";
import JobData from "./components/core/Dashboard/studentDashboard/ugApplicationData/JobData";

import ForgatePassword from "./components/pages/forgatepassword/ForgatePassword";
import ReasetPassword from "./components//pages/forgatepassword/resetPassword/ResetPassword";
import Exit from "./routes/exitstudent/Exit";
// import NewStudent from "./routes/newstudent/NewStudent";
// import PageNewStudent from "./routes/newstudent/PageNewStudent.jsx";
import NewStudent from "./routes/newstudent/PageNewStudent.jsx"; 
// import BtechJob from "./routes/job/pagesSoftwarejobUi/PageBtechJob.jsx";
// import BtechJob from "./routes/job/pagesSoftwarejobUi/PageBtechJob.jsx";
import PageBtechJob from "./routes/job/pagesSoftwarejobUi/PageBtechJob.jsx";
// import Pgcourse from "./routes/pgcourse/PgCoursePage.jsx";
import PgCoursePage from "./routes/pgcourse/PgCoursePage.jsx";
import PgCourseSubmitData from "./containers/sumbitdata/PgCourseSubmitData";
import ExitSubmitData from "./containers/sumbitdata/ExitSubmitData";

import NewStudentReport from "./components/core/Report/newStudent/NewStudentReport";
import ExitReport from "./components/core/Report/exit/ExitReport";
import Report from "./components/core/ReportPage/ReportPageLink/Report";
import PgReport from "./components/core/Report/PgReport";
import JobReport from "./components/core/Report/JobReport";
import FetchUserData from "./data/FetchUserData";

import EditJob from "./adminsection/job/EditJob";
import JobDataPrint from "./adminsection/job/JobDataPrint";
import PrintNewStudent from "./adminsection/admission/PrintNewStudent";
import EditNewStudent from "./adminsection/admission/EditNewStudent";
import DeleteAdmissin from "./adminsection/admission/DeleteAdmissin";
import ExitEdit from "./adminsection/exitdata/ExitEdit";
import ExitPrintData from "./adminsection/exitdata/ExitPrintData";
import DeleteJob from "./adminsection/job/DeleteJob";
import NewAdmissionData from "./containers/sumbitdata/NewAdmission";
import JobSubmitData from "./containers/sumbitdata/ExitSubmitData";

import PgDataDelete from "./adminsection/pgadmission/PgDataDelete";
import PgDataEdit from "./adminsection/pgadmission/PgDataEdit";
import PgPrint from "./adminsection/pgadmission/PgPrint";
import DeleteExit from "./adminsection/exitdata/DeleteExit";

import Acoount from "./components/pages/createAccount/Acoount";
import TeacherAccount from "./components/pages/teacherSignupAccount/TeacherAccoutn";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Sidebar from "./components/layout/Sidebar";
import NewStudentTable from "./components/core/Dashboard/newStudentTable/NewStudentTable";
import ExitStudentTableData from "./components/core/Dashboard/exitStudentTable/ExitStudentTableData";
import JobDataTable from "./components/core/Dashboard/JobTableData/JobDataTable";
import PgStudentDataTable from "./components/core/Dashboard/PgStudentDataTable/PgStudentDataTable";

import FeedbackForm from "./components/core/feedbackForm/feedbackPost/FeedbackForm";
import GetFeedback from "./components/core/feedbackForm/feedbackGet/GetFeedback";
import MyProfile from "./components/core/MyProfile";
import Settings from "./components/core/Settings";
import AllShortDetails from "./components/core/Dashboard/adminDashboard/AllShortDetails";
import AdminContent from "./components/core/Dashboard/adminDashboard/AdminContent";
function App() {
  // const accountType = localStorage.getItem("accountType");

  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ backgroundColor: "#000814" }}>
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* User route */}
        <Route path="/verify-email" element={<VerifyOtp/>} />
        <Route path="/signupfrom" element={<SignupForm />} />
        <Route
          path="/loginfrom"
          element={
            <OpenRoute>
              <LoginForm setIsAdmin={setIsAdmin} />
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
              <ExitForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/pgcource"
          element={
            <PrivateRoute>
              <PgCourse />
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

        {/* from befor ui */}
        <Route path="/newstudent" element={<NewStudent />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/btechjob" element={<PageBtechJob />} />
        <Route path="/pgcourses" element={<PgCoursePage />} />
        {/* Sumbit after show data */}
        <Route path="/newAdmissiondata" element={<NewAdmissionData />} />
        <Route path="/exitsumbitdata" element={<ExitSubmitData />} />
        <Route path="/pgsumbitdata" element={<PgCourseSubmitData />} />
        <Route path="/jobsumbitdata" element={<JobSubmitData />} />

        <Route path="/fetchuserdata/:id" element={<FetchUserData />} />

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
        <Route path="/feedback-post" element={<FeedbackForm />} />
        {/* <Route path="/feedback-details" element={<Feedback />} /> */}
        <Route path="/get-feedback" element={<GetFeedback />} />

        {/* nestade route */}
        <Route element={<Sidebar />}>
          <Route
            path="dashboard/all_new_addmission"
            element={<NewStudentTable isAdmin={isAdmin} />}
          />
          <Route
            path="dashboard/all_exit_student"
            element={<ExitStudentTableData />}
          />
          <Route
            path="dashboard/all_pg_student"
            element={<PgStudentDataTable isAdmin={isAdmin} />}
          />
          <Route
            path="dashboard/all_student_job"
            element={<JobDataTable isAdmin={isAdmin} />}
          />
          <Route
            path="dashboard/view-all-info-short"
            element={<AllShortDetails />}
          />
          {/*view Data in user and Teacher , Dashboard in show the all navlink*/}
          <Route
            path="dashboard/new_admission"
            element={<AdmissionData />}
          />
          <Route path="dashboard/exit_application" element={<ExitData />} />
          <Route path="dashboard/pg_application" element={<PgData />} />
          <Route path="dashboard/job_application" element={<JobData />} />
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/admin-content" element={<AdminContent />} />
          <Route path="dashboard/settings" element={<Settings />} />
          <Route path="dashboard/feedback-form" element={<FeedbackForm />} />
          <Route path="dashboard/feedback-post" element={<FeedbackForm />} />
          <Route
            path="dashboard/teacher-account"
            element={<TeacherAccount />}
          />
          {/* Filter Data  */}
          <Route
            path="dashboard/newstudentreport"
            element={<NewStudentReport />}
          />
          <Route path="dashboard/createreport" element={<Report />} />
          <Route path="dashboard/createexitreport" element={<ExitReport />} />
          <Route path="dashboard/createpgreport" element={<PgReport />} />
          <Route path="dashboard/createjobreport" element={<JobReport />} />
        </Route>
      </Routes>

      <Footer  />
    </div>
  );
}
export default App;
