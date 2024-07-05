import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
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
import { getJobUserDetailsById } from "../../services/apiFunction/job";
import { getPgUserDetailsById } from "../../services/apiFunction/pgApi";
import { getExitUserDetailsById } from "../../services/apiFunction/exitApi";
import { getNewAdmissionUserDetailsById } from "../../services/apiFunction/newadmissionApi";

const Sidebar = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.profile.user);
  const [jobUser, setJobUser] = useState(null);
  const [newAdmissionUser, setNewAdmissionUser] = useState(null);
  const [exitUser, setExitUser] = useState(null);
  const [pgUser, setPgUser] = useState(null);
  const token = localStorage.getItem('token');
  const [showText, setShowText] = useState(true); // Default to show text initially

  const fetchNewAdmissionUser = async () => {
    try {
      const data = await getNewAdmissionUserDetailsById(token);
      setNewAdmissionUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExitUser = async () => {
    try {
      const data = await getExitUserDetailsById(token);
      setExitUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPGUser = async () => {
    try {
      const data = await getPgUserDetailsById(token);
      setPgUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJobUser = async () => {
    try {
      const data = await getJobUserDetailsById();
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

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleText}>
        <MdOutlineGridView size={44} />
      </button>

      <nav className={`sidebar ${showText ? 'show-text' : ''}`}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
            {showText && <span className="sidebar-brand-text">Profile</span>}
          </div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/dashboard/my-profile" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineGridView size={18} />
                  </span>
                  {showText && <span className="menu-link-text">My Profile</span>}
                </Link>
              </li>
              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <li className="menu-item">
                    <Link to={`/dashboard/new_admission`} className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineBarChart size={20} />
                      </span>
                      {showText && <span className="menu-link-text">Admission Data</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to={`/dashboard/exit_application`} className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineAttachMoney size={20} />
                      </span>
                      {showText && <span className="menu-link-text">Exit Data</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to={`/dashboard/pg_application`} className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineCurrencyExchange size={18} />
                      </span>
                      {showText && <span className="menu-link-text">Pg Data</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to={`/dashboard/job_application`} className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineShoppingBag size={20} />
                      </span>
                      {showText && <span className="menu-link-text">Job Data</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/dashboard/feedback-post" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlinePeople size={20} />
                      </span>
                      {showText && <span className="menu-link-text">Feedback Form</span>}
                    </Link>
                  </li>
                </>
              )}
              {(user?.accountType === ACCOUNT_TYPE.INSTRUCTOR || user?.accountType === ACCOUNT_TYPE.ADMIN) && (
                <>
                  <li className="menu-item">
                    <Link to="/dashboard/all_new_addmission" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineMessage size={18} />
                      </span>
                      {showText && <span className="menu-link-text">All Student</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/dashboard/all_exit_student" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineMessage size={18} />
                      </span>
                      {showText && <span className="menu-link-text">All Exit Student</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/dashboard/all_pg_student" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineMessage size={18} />
                      </span>
                      {showText && <span className="menu-link-text">All Pg Student</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/dashboard/all_student_job" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineMessage size={18} />
                      </span>
                      {showText && <span className="menu-link-text">All Job Student</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/dashboard/view-all-info-short" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineMessage size={18} />
                      </span>
                      {showText && <span className="menu-link-text">All Info</span>}
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/dashboard/admin-content" className="menu-link">
                      <span className="menu-link-icon">
                        <MdOutlineMessage size={18} />
                      </span>
                      {showText && <span className="menu-link-text">All Page's</span>}
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
                    <MdOutlineSettings size={18} />
                  </span>
                  {showText && <span className="menu-link-text">Settings</span>}
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  <span className="menu-link-icon">
                    <MdOutlineLogout size={18} />
                  </span>
                  {showText && <span className="menu-link-text">Log Out</span>}
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
