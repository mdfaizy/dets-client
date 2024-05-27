// import Sidebar from "../side-bar/Sidebar";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";
// const Dassboars = ({ sidebartoggle, setSidebartoggle }) => {
//   return (
    
//     <div style={{ marginLeft: sidebartoggle ? "" : "64px", width: "100%" }}>
     

//       <Navbar
//         setSidebartoggle={setSidebartoggle}
//         sidebartoggle={sidebartoggle}
//       />
//        <Outlet />
//     </div>
//   );
// };

// export default Dassboars;




// import React from "react";
// import Sidebar from "../side-bar/Sidebar";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";

// const Dashboard = ({ sidebartoggle, setSidebartoggle }) => {
//   return (
//     <div style={{ marginLeft: sidebartoggle ? "0" : "64px", width: "100%" }}>
//       <Navbar setSidebartoggle={setSidebartoggle} sidebartoggle={sidebartoggle} />
//       <div style={{ display: "flex" }}>
//         <Sidebar sidebartoggle={sidebartoggle} />
//         <div style={{ flexGrow: 1 }}>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











// Dashboard.js

import Sidebar from "../side-bar/Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = ({ sidebartoggle, setSidebartoggle }) => {
  return (
    <div style={{ display: "flex", width: "100%" ,position:'relative'}}>
      <Sidebar sidebartoggle={sidebartoggle} />
      
      <div style={{ flexGrow: 1, marginLeft: sidebartoggle ? "0" : "64px" }}>
        <Navbar setSidebartoggle={setSidebartoggle} sidebartoggle={sidebartoggle} />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
