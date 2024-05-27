// import {
//   FaTh,

//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList,
// } from "react-icons/fa";
// import "./Sidebar.css";

// import { Link } from "react-router-dom";

// const Sidebar = ({ sidebartoggle }) => {
//   return (
//     <div
//       className="sidebar-container"
//       style={{
//         display: sidebartoggle ? "none" : "block",
//       }}
//     >
//       <div className="p-2">
//         <h1>Admin</h1>
//         <hr />
//       </div>
      
//       <ul className="ul-sidebar">
//         <li>
//           <a href="">
//             <FaTh /> Home
//           </a>
//           <Link to="/signupfrom"><FaThList/>Home1</Link>
//           <a href="">
//             <FaUserAlt /> Home
//           </a>

//           <a href="">
//             <FaCommentAlt /> Home
//           </a>

//           <a href="">
//             <FaThList/> Home
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;











// Sidebar.js
import React from "react";
import { FaTh, FaUserAlt, FaCommentAlt, FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

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
          <Link to="/account">
            <FaTh /> Home
          </Link>
          <Link to="/signupform">
            <FaThList /> Signup Form
          </Link>
          <Link to="user">
            <FaUserAlt /> User
          </Link>
          <Link to="comments">
            <FaCommentAlt /> Comments
          </Link>
          <Link to="list">
            <FaThList /> List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
