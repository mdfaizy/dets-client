
import { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";
import "./navbardas.css"
const Navbar = ({sidebartoggle,setSidebartoggle}) => {
 
  return (
    <div className="nabar-dasboard">
    {/* // <div style={{ display: sidebartoggle ? "none" : "block", backgroundColor: "black", justifyContent: "space-between", width: "100%" }}> */}

      <div style={{display:"flex"}}>
        <FaBars  onClick={()=>setSidebartoggle(!sidebartoggle)}/>
        <span>E-Cmmerce</span>
      </div>
      <div>
        <div >
          <button>Fa</button>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Navbar