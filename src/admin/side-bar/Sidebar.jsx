import {
  FaTh,

  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import "./Sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = ({ sidebartoggle }) => {
  return (
    <div
      className="sidebar-container"
      style={{
        display: sidebartoggle ? "none" : "block",
      }}
    >
      <div className="p-2">
        <h1>Admin</h1>
        <hr />
      </div>
      
      <ul className="ul-sidebar">
        <li>
          <a href="">
            <FaTh /> Home
          </a>
          <Link to="/signupfrom"><FaThList/>Home1</Link>
          <a href="">
            <FaUserAlt /> Home
          </a>

          <a href="">
            <FaCommentAlt /> Home
          </a>

          <a href="">
            <FaThList/> Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
