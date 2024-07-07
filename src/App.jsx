// import "./App.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./components/pages/about/About";
// import Home from "./components/home/Home";
// import Footer from "./components/common/footer/Footer";
// import Header from "./components/common/header/Header";
// import LoginForm from "./components/pages/login/LoginForm";
// import SignupForm from "./components/pages/signup/SignupForm";
// import VerifyOtp from "./components/pages/EmailVerify/VerifyOtp"
// import NewAdmission from "./routes/newstudent/newadmission/NewAdmission";
// import ExitForm from "./routes/exitstudent/exit/ExitForm";
// import PgCourse from "./routes/pgcourse/pg/PgCourse";
// import Job from "./routes/job/Job";

// import AdmissionData from "./components/core/Dashboard/studentDashboard/ugApplicationData/AdmissionData";
// import ExitData from "./components/core/Dashboard/studentDashboard/ugApplicationData/ExitData";
// import PgData from "./components/core/Dashboard/studentDashboard/ugApplicationData/PgData";
// import JobData from "./components/core/Dashboard/studentDashboard/ugApplicationData/JobData";

// import ForgatePassword from "./components/pages/forgatepassword/ForgatePassword";
// import ReasetPassword from "./components//pages/forgatepassword/resetPassword/ResetPassword";
// import Exit from "./routes/exitstudent/Exit";

// import NewStudent from "./routes/newstudent/PageNewStudent.jsx";

// import PageBtechJob from "./routes/job/pagesSoftwarejobUi/PageBtechJob.jsx";

// import PgCoursePage from "./routes/pgcourse/PgCoursePage.jsx";
// import PgCourseSubmitData from "./containers/sumbitdata/PgCourseSubmitData";
// import ExitSubmitData from "./containers/sumbitdata/ExitSubmitData";

// import NewStudentReport from "./components/core/Report/newStudent/NewStudentReport";
// import ExitReport from "./components/core/Report/exit/ExitReport";
// import Report from "./components/core/ReportPage/ReportPageLink/Report";
// import PgReport from "./components/core/Report/PgReport";
// import JobReport from "./components/core/Report/JobReport";
// import FetchUserData from "./data/FetchUserData";

// import EditJob from "./adminsection/job/EditJob";
// import JobDataPrint from "./adminsection/job/JobDataPrint";
// import PrintNewStudent from "./adminsection/admission/PrintNewStudent";
// import EditNewStudent from "./adminsection/admission/EditNewStudent";
// import DeleteAdmissin from "./adminsection/admission/DeleteAdmissin";
// import ExitEdit from "./adminsection/exitdata/ExitEdit";
// import ExitPrintData from "./adminsection/exitdata/ExitPrintData";
// import DeleteJob from "./adminsection/job/DeleteJob";
// import NewAdmissionData from "./containers/sumbitdata/NewAdmission";
// import JobSubmitData from "./containers/sumbitdata/Jobsumbitdata.jsx";

// import PgDataDelete from "./adminsection/pgadmission/PgDataDelete";
// import PgDataEdit from "./adminsection/pgadmission/PgDataEdit";
// import PgPrint from "./adminsection/pgadmission/PgPrint";
// import DeleteExit from "./adminsection/exitdata/DeleteExit";

// import Acoount from "./components/pages/createAccount/Acoount";
// import TeacherAccount from "./components/pages/teacherSignupAccount/TeacherAccoutn";
// import OpenRoute from "./components/core/Auth/OpenRoute";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";
// import Sidebar from "./components/layout/Sidebar";
// import NewStudentTable from "./components/core/Dashboard/newStudentTable/NewStudentTable";
// import ExitStudentTableData from "./components/core/Dashboard/exitStudentTable/ExitStudentTableData";
// import JobDataTable from "./components/core/Dashboard/JobTableData/JobDataTable";
// import PgStudentDataTable from "./components/core/Dashboard/PgStudentDataTable/PgStudentDataTable";

// import FeedbackForm from "./components/core/feedbackForm/feedbackPost/FeedbackForm";
// import GetFeedback from "./components/core/feedbackForm/feedbackGet/GetFeedback";
// import MyProfile from "./components/core/MyProfile";
// import Settings from "./components/core/Settings";
// import AllShortDetails from "./components/core/Dashboard/adminDashboard/AllShortDetails";
// import AdminContent from "./components/core/Dashboard/adminDashboard/AdminContent";
// import { ACCOUNT_TYPE } from "./utils/constant.js";
// import { useSelector } from "react-redux";
// function App() {

//   const user = useSelector((state) => state.profile.user);
//   const [isAdmin, setIsAdmin] = useState(false);

//   return (
//     <div style={{ backgroundColor: "#000814" }}>

//       {/* {  user?.accountType === ACCOUNT_TYPE.STUDENT &( */}
//         <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
//       {/* )} */}
//       {/* <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} /> */}
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* User route */}
//         <Route path="/verify-email" element={<VerifyOtp/>} />
//         <Route path="/signupfrom" element={<SignupForm />} />
//         <Route
//           path="/loginfrom"
//           element={
//             <OpenRoute>
//               <LoginForm setIsAdmin={setIsAdmin} />
//             </OpenRoute>
//           }
//         />
//         <Route path="/forgot-password" element={<ForgatePassword />} />
//         <Route path="/update-password/:id" element={<ReasetPassword />} />
//         <Route path="/account" element={<Acoount />} />
//         <Route path="/teacher-account" element={<TeacherAccount />} />
//         {/* Admission route */}
//         <Route
//           path="/newadmission"
//           element={
//             <PrivateRoute>
//               <NewAdmission />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/exitfrom"
//           element={
//             <PrivateRoute>
//               <ExitForm />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/pgcource"
//           element={
//             <PrivateRoute>
//               <PgCourse />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/job"
//           element={
//             <PrivateRoute>
//               <Job />
//             </PrivateRoute>
//           }
//         />

//         {/* from befor ui */}
//         <Route path="/newstudent" element={<NewStudent />} />
//         <Route path="/exit" element={<Exit />} />
//         <Route path="/btechjob" element={<PageBtechJob />} />
//         <Route path="/pgcourses" element={<PgCoursePage />} />
//         {/* Sumbit after show data */}
//         <Route path="/newAdmissiondata" element={<NewAdmissionData />} />
//         <Route path="/exitsumbitdata" element={<ExitSubmitData />} />
//         <Route path="/pgsumbitdata" element={<PgCourseSubmitData />} />
//         <Route path="/jobsumbitdata" element={<JobSubmitData />} />

//         <Route path="/fetchuserdata/:id" element={<FetchUserData />} />

//         {/* print and edit ,delete route new admission */}
//         <Route
//           path="/newadmissiondataprint/:id"
//           element={<PrintNewStudent />}
//         />
//         <Route path="/editnewstudent/:id" element={<EditNewStudent />} />
//         <Route path="/deleteNewstudent/:id" element={<DeleteAdmissin />} />
//         {/* print and edit ,delete route exit data */}
//         <Route path="/exit-data-edit/:id" element={<ExitEdit />} />
//         <Route path="/exit-data-print/:id" element={<ExitPrintData />} />
//         <Route path="/exit-data-delete/:id" element={<DeleteExit />} />

// <Route path="/pg-data-edit/:id" element={<PgDataEdit />} />
// <Route path="/pg-form-dataprint/:id" element={<PgPrint />} />
// <Route path="/pgcource-delete/:id" element={<PgDataDelete />} />
//         {/* print and edit ,delete route job data */}
//         <Route path="/job-data-print/:id" element={<JobDataPrint />} />
//         <Route path="/job-data-edit/:id" element={<EditJob />} />
//         <Route path="/delete-jobdata/:id" element={<DeleteJob />} />

//         {/* Feedback */}
//         <Route path="/feedback-post" element={<FeedbackForm />} />
//         {/* <Route path="/feedback-details" element={<Feedback />} /> */}
//         <Route path="/get-feedback" element={<GetFeedback />} />

//         {/* nestade route */}
//         <Route element={<Sidebar />}>
//           <Route
//             path="dashboard/all_new_addmission"
//             element={<NewStudentTable isAdmin={isAdmin} />}
//           />
//           <Route
//             path="dashboard/all_exit_student"
//             element={<ExitStudentTableData />}
//           />
//           <Route
//             path="dashboard/all_pg_student"
//             element={<PgStudentDataTable isAdmin={isAdmin} />}
//           />
//           <Route
//             path="dashboard/all_student_job"
//             element={<JobDataTable isAdmin={isAdmin} />}
//           />
//           <Route
//             path="dashboard/view-all-info-short"
//             element={<AllShortDetails />}
//           />
//           {/*view Data in user and Teacher , Dashboard in show the all navlink*/}
//           <Route
//             path="dashboard/new_admission"
//             element={<AdmissionData />}
//           />
//           <Route path="dashboard/exit_application" element={<ExitData />} />
//           <Route path="dashboard/pg_application" element={<PgData />} />
//           <Route path="dashboard/job_application" element={<JobData />} />
//           <Route path="dashboard/my-profile" element={

//             <PrivateRoute>
//               <MyProfile />
//             </PrivateRoute>} />
//           <Route path="dashboard/admin-content" element={<AdminContent />} />
//           <Route path="dashboard/settings" element={<Settings />} />
//           <Route path="dashboard/feedback-form" element={<FeedbackForm />} />
//           <Route path="dashboard/feedback-post" element={<FeedbackForm />} />
//           <Route
//             path="dashboard/teacher-account"
//             element={<TeacherAccount />}
//           />
//           {/* Filter Data  */}
//           <Route
//             path="dashboard/newstudentreport"
//             element={<NewStudentReport />}
//           />
//           <Route path="dashboard/createreport" element={<Report />} />
//           <Route path="dashboard/createexitreport" element={<ExitReport />} />
//           <Route path="dashboard/createpgreport" element={<PgReport />} />
//           <Route path="dashboard/createjobreport" element={<JobReport />} />
//         </Route>
//       </Routes>

//       <Footer  />
//     </div>
//   );
// }
// export default App;

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/about/About";
import Home from "./components/home/Home";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import LoginForm from "./components/pages/login/LoginForm";
import SignupForm from "./components/pages/signup/SignupForm";
import VerifyOtp from "./components/pages/EmailVerify/VerifyOtp";
import NewAdmission from "./routes/newstudent/newadmission/NewAdmission";
import ExitForm from "./routes/exitstudent/exit/ExitForm";
import PgCourse from "./routes/pgcourse/pg/PgCourse";
import Job from "./routes/job/Job";
import AdmissionData from "./components/core/Dashboard/studentDashboard/ugApplicationData/AdmissionData";
import ExitData from "./components/core/Dashboard/studentDashboard/ugApplicationData/ExitData";
import PgData from "./components/core/Dashboard/studentDashboard/ugApplicationData/PgData";
import JobData from "./components/core/Dashboard/studentDashboard/ugApplicationData/JobData";
import ForgatePassword from "./components/pages/forgatepassword/ForgatePassword";
import ReasetPassword from "./components/pages/forgatepassword/resetPassword/ResetPassword";
import Exit from "./routes/exitstudent/Exit";
import NewStudent from "./routes/newstudent/PageNewStudent.jsx";
import PageBtechJob from "./routes/job/pagesSoftwarejobUi/PageBtechJob.jsx";
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
import JobSubmitData from "./containers/sumbitdata/Jobsumbitdata.jsx";
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
import { ACCOUNT_TYPE } from "./utils/constant.js";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.profile.user);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ backgroundColor: "#000814" }}>
      <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* User routes */}
        <Route path="/verify-email" element={<VerifyOtp />} />
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

        {/* Admission routes */}
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

        {/* Additional routes */}
        <Route
          path="/newstudent"
          element={
            <PrivateRoute>
              <NewStudent />
            </PrivateRoute>
          }
        />
        <Route
          path="/exit"
          element={
            <PrivateRoute>
              <Exit />
            </PrivateRoute>
          }
        />
        <Route
          path="/btechjob"
          element={
            <PrivateRoute>
              <PageBtechJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/pgcourses"
          element={
            <PrivateRoute>
              <PgCoursePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/newAdmissiondata"
          element={
            <PrivateRoute>
              <NewAdmissionData />
            </PrivateRoute>
          }
        />
        <Route
          path="/exitsumbitdata"
          element={
            <PrivateRoute>
              <ExitSubmitData />
            </PrivateRoute>
          }
        />
        <Route
          path="/pgsumbitdata"
          element={
            <PrivateRoute>
              <PgCourseSubmitData />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobsumbitdata"
          element={
            <PrivateRoute>
              <JobSubmitData />
            </PrivateRoute>
          }
        />
        <Route
          path="/fetchuserdata/:id"
          element={
            <PrivateRoute>
              <FetchUserData />
            </PrivateRoute>
          }
        />

        {/* Print, edit, and delete routes for new admission */}
        <Route
          path="/newadmissiondataprint/:id"
          element={
            <PrivateRoute>
              <PrintNewStudent />
            </PrivateRoute>
          }
        />
        <Route
          path="/editnewstudent/:id"
          element={
            <PrivateRoute>
              <EditNewStudent />
            </PrivateRoute>
          }
        />
        <Route
          path="/deleteNewstudent/:id"
          element={
            <PrivateRoute>
              <DeleteAdmissin />
            </PrivateRoute>
          }
        />

        {/* Print, edit, and delete routes for exit data */}
        <Route
          path="/exit-data-edit/:id"
          element={
            <PrivateRoute>
              <ExitEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/exit-data-print/:id"
          element={
            <PrivateRoute>
              <ExitPrintData />
            </PrivateRoute>
          }
        />
        <Route
          path="/exit-data-delete/:id"
          element={
            <PrivateRoute>
              <DeleteExit />
            </PrivateRoute>
          }
        />
        {/* Print edit and delete routes for exit data */}

        <Route
          path="/pg-data-edit/:id"
          element={
            <PrivateRoute>
              <PgDataEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/pg-form-dataprint/:id"
          element={
            <PrivateRoute>
              <PgPrint />
            </PrivateRoute>
          }
        />
        <Route
          path="/pgcource-delete/:id"
          element={
            <PrivateRoute>
              <PgDataDelete />
            </PrivateRoute>
          }
        />
        {/* Print, edit, and delete routes for job data */}
        <Route
          path="/job-data-print/:id"
          element={
            <PrivateRoute>
              <JobDataPrint />
            </PrivateRoute>
          }
        />
        <Route
          path="/job-data-edit/:id"
          element={
            <PrivateRoute>
              <EditJob />
            </PrivateRoute>
          }
        />
        <Route
          path="/delete-jobdata/:id"
          element={
            <PrivateRoute>
              <DeleteJob />
            </PrivateRoute>
          }
        />

        {/* Feedback routes */}
        <Route
          path="/feedback-post"
          element={
            <PrivateRoute>
              <FeedbackForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/get-feedback"
          element={
            <PrivateRoute>
              <GetFeedback />
            </PrivateRoute>
          }
        />

        {/* Nested routes with Sidebar */}
        <Route element={<Sidebar />}>
          <Route
            path="dashboard/all_new_addmission"
            element={
              <PrivateRoute>
                <NewStudentTable isAdmin={isAdmin} />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/all_exit_student"
            element={
              <PrivateRoute>
                <ExitStudentTableData />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/all_pg_student"
            element={
              <PrivateRoute>
                <PgStudentDataTable isAdmin={isAdmin} />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/all_student_job"
            element={
              <PrivateRoute>
                <JobDataTable isAdmin={isAdmin} />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/view-all-info-short"
            element={
              <PrivateRoute>
                <AllShortDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/new_admission"
            element={
              <PrivateRoute>
                <AdmissionData />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/exit_application"
            element={
              <PrivateRoute>
                <ExitData />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/pg_application"
            element={
              <PrivateRoute>
                <PgData />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/job_application"
            element={
              <PrivateRoute>
                <JobData />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/my-profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/admin-content"
            element={
              <PrivateRoute>
                <AdminContent />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/feedback-form"
            element={
              <PrivateRoute>
                <FeedbackForm />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/teacher-account"
            element={
              <PrivateRoute>
                <TeacherAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/newstudentreport"
            element={
              <PrivateRoute>
                <NewStudentReport />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/createreport"
            element={
              <PrivateRoute>
                <Report />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/createexitreport"
            element={
              <PrivateRoute>
                <ExitReport />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/createpgreport"
            element={
              <PrivateRoute>
                <PgReport />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/createjobreport"
            element={
              <PrivateRoute>
                <JobReport />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
