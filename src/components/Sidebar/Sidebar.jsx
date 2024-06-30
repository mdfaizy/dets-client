import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { LIGHT_THEME } from "../../utils/constant";
import LogoBlue from "../../assets/Images/logo_blue.svg";
import LogoWhite from "../../assets/Images/logo_white.svg";
import "./Sidebar.scss";
import { ACCOUNT_TYPE } from "../../utils/constant";
import axios from "axios";
import {getJobUserDetailsById} from "../../services/apiFunction/job";
// import {
//   Jobs,
//   newadmissionEndpoints,
//   exitStudentEndpoints,
//   pgCourseEndpoints,
// } from "../../services/apis";
import {getPgUserDetailsById} from "../../services/apiFunction/pgApi";
import {getExitUserDetailsById} from "../../services/apiFunction/exitApi";
import {getNewAdmissionUserDetailsById} from "../../services/apiFunction/newadmissionApi";
const Sidebar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  // const accountType = localStorage.getItem("accountType");
  const { id } = useParams();
  // const closeSidebar = () => {
  //   dispatch({ type: "sidebar/closeSidebar" });
  // };

  const toggleSidebar = () => {
    dispatch({
      type: isSidebarOpen ? "sidebar/closeSidebar" : "sidebar/openSidebar",
    });
  };
  const user = useSelector((state) => state.profile.user);
  const [jobUser, setJobUser] = useState(null);
  const [newAdmissionUser, setNewAdmissionUser] = useState(null);
  const [exitUser, setExitUser] = useState(null);
  const [pgUser, setPgUser] = useState(null);
  const token=localStorage.getItem('token');
  

  // getExitUserDetailsById
  // const fetchJobUser = async () => {
  //   try {
  //     const { data: res } = await axios.get(Jobs.Get_User_Profile, { headers });
  //     setJobUser(res.jobData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchNewAdmissionUser = async () => {
    try {
      // const { data: res } = await axios.get(newadmissionEndpoints.GET_PROFILE, {
      //   headers,
      // });
      // console.log(res.data);
      console.log("getNewAdmissionUserDetailsByIdBefore")
      const data=await getNewAdmissionUserDetailsById(token);
      console.log("getNewAdmissionUserDetailsById",data)
      // setNewAdmissionUser(res.Newadmission);
      setNewAdmissionUser(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExitUser = async () => {
    try {
  //     const { data: res } = await axios.get(
  //       exitStudentEndpoints.GET_USER_EXIT_PROFILE,
  //       { headers }
  //     );
  //     setExitUser(res.exitData);
  //     console.log(res);
  const data=await getExitUserDetailsById(token);
      console.log("getExitUserDetailsById",data);
      setExitUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPGUser = async () => {
    try {
      // const { data: res } = await axios.get(
      //   pgCourseEndpoints.GET_PG_USER_PROFILE,
      //   { headers }
      // );
      // setPgUser(res.pgdata)
      const data=await getPgUserDetailsById(token);
      console.log("getPgUserDetailsById",data);
      setPgUser(data)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJobUser = async () => {
    try {
      const data = await getJobUserDetailsById();
      console.log("Job user",data);
      setJobUser(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
  
    fetchNewAdmissionUser();
    fetchExitUser();
    fetchPGUser();
    fetchJobUser();
  }, []);
  // const { accountType } = useSelector((state) => state.auth);
  return (
    <>
      <button className="sidebar-toggle-btn bar" onClick={toggleSidebar}>
        <MdOutlineGridView size={44} />
      </button>

      <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
            <span className="sidebar-brand-text">Profile</span>
          </div>
          {/* <button className="sidebar-close-btn" onClick={closeSidebar}>
            <MdOutlineClose size={24} />
          </button> */}
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/dashboard/my-profile" className="menu-link active">
                  <span className="menu-link-icon">
                    <MdOutlineGridView size={18} />
                  </span>
                  <span className="menu-link-text">My Profile</span>
                </Link>
              </li>
{/* show data in student */}
              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                 <>
              <li className="menu-item">
                <Link
                  to={`/dashboard/new_admission`}
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <MdOutlineBarChart size={20} />
                  </span>
                  <span className="menu-link-text">Admission Data</span>
                </Link>
              </li>

              <li className="">
                <Link to={`/dashboard/exit_application`} className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineAttachMoney size={20} />
                  </span>
                  <span className="menu-link-text">Exit Data</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to={`/dashboard/pg_application`} className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineCurrencyExchange size={18} />
                  </span>
                  <span className="menu-link-text">Pg Data</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to={`/dashboard/job_application`} className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineShoppingBag size={20} />
                  </span>
                  <span className="menu-link-text">Job Data</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/dashboard/feedback-post" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlinePeople size={20} />
                  </span>
                  <span className="menu-link-text">Feedback Form</span>
                </Link>
              </li>
              </>)}
              



{(user?.accountType === ACCOUNT_TYPE.INSTRUCTOR || user?.accountType === ACCOUNT_TYPE.ADMIN) && (
  <>
    <li className="menu-item">
      <Link to="/dashboard/all_new_addmission" className="menu-link">
        <span className="menu-link-icon">
          <MdOutlineMessage size={18} />
        </span>
        <span className="menu-link-text">All Student</span>
      </Link>
    </li>

    <li className="menu-item">
      <Link to="/dashboard/all_exit_student" className="menu-link">
        <span className="menu-link-icon">
          <MdOutlineMessage size={18} />
        </span>
        <span className="menu-link-text">All Exit Student</span>
      </Link>
    </li>
   
    
    <li className="menu-item">
      <Link to="/dashboard/all_pg_student" className="menu-link">
        <span className="menu-link-icon">
          <MdOutlineMessage size={18} />
        </span>
        <span className="menu-link-text">All Pg Student</span>
      </Link>
    </li>

    <li className="menu-item">
      <Link to="/dashboard/all_student_job" className="menu-link">
        <span className="menu-link-icon">
          <MdOutlineMessage size={18} />
        </span>
        <span className="menu-link-text">All Job Student</span>
      </Link>
    </li>

    <li className="menu-item">
      <Link to="/dashboard/view-all-info-short" className="menu-link">
        <span className="menu-link-icon">
          <MdOutlineMessage size={18} />
        </span>
        <span className="menu-link-text">All Info</span>
      </Link>
      </li>
      <li className="menu-item">
      <Link to="/dashboard/admin-content" className="menu-link">
        <span className="menu-link-icon">
          <MdOutlineMessage size={18} />
        </span>
        <span className="menu-link-text">All Page's</span>
      </Link>
      
    </li>
  </>
)}

            </ul>
          </div>

          <div className="sidebar-menu sidebar-menu2">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/dashboard/settings" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineSettings size={20} />
                  </span>
                  <span className="menu-link-text">Settings</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/logout" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineLogout size={20} />
                  </span>
                  <span className="menu-link-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;






















