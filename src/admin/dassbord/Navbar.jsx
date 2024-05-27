
// import { useState } from "react";
// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList
// }from "react-icons/fa";
// import "./navbardas.css"
// const Navbar = ({sidebartoggle,setSidebartoggle}) => {
 
//   return (
//     <div className="nabar-dasboard">
//     {/* // <div style={{ display: sidebartoggle ? "none" : "block", backgroundColor: "black", justifyContent: "space-between", width: "100%" }}> */}

//       <div style={{display:"flex"}}>
//         <FaBars  onClick={()=>setSidebartoggle(!sidebartoggle)}/>
//         <span>Admission</span>
//       </div>
//       <div>
//         <div >
//           <button>Fa</button>
//           <input type="text" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar












import { FaBars } from "react-icons/fa";
import "./navbardas.css";

const Navbar = ({ sidebartoggle, setSidebartoggle }) => {
  return (
    <div className="navbar-dashboard">
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaBars onClick={() => setSidebartoggle(!sidebartoggle)} />
        <span style={{ marginLeft: "10px" }}>Admission</span>
      </div>
      {/* <div>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div> */}
    </div>
  );
};

export default Navbar;
