// import { NavLink } from "react-router-dom";
// import style from "./Header.module.css";
// import logImg from "../../assets/log.jpg";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState } from "react";
// const Header = (props) => {
//   const isLoggedIn = props.isLoggedIn;
//   const setIsLoggedIn = props.setIsLoggedIn;

//   const [click, setClick] = useState(false);
//   // const handleClick = () => setClick(!click);

//   const handleClick = () => {
//     setClick(!click);
//       };
//   // className={click ? "nav-menu active" : "nav-menu"}
//   //className={style.header_nav_text}
//   return (
//     <div className={style.header_content}>
//       <div className={style.log_img}>
//         <img src={logImg} alt="" />
//       </div>
//       <navbar className={style.header_content1}>
//       <ul className={click ? `${style.nav_menu} ${style.active}` : style.nav_menu} style={{ textAlign: 'center' }}>
//           {/* <li className={`${style.nav_links} ${style.no_underline}`}>*/}
//            <li className={`${style.nav_links} ${style.no_underline}`}>
//             <NavLink to="/"   className={style.nav_links}>Home</NavLink>
//           </li>
//           {!isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/about"   className={style.nav_links}>About</NavLink>
//             </li>
//           )}
//           {isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/newadmission"   className={style.nav_links}>NewAdmissiom</NavLink>
//             </li>
//           )}
//           {isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/exitfrom"   className={style.nav_links}>EXIT STUDENT</NavLink>
//             </li>
//           )}
//           {isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/pgcource"   className={style.nav_links}>PG PROGRAM</NavLink>
//             </li>
//           )}

//           {isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/job"   className={style.nav_links}>JOB</NavLink>
//             </li>
//           )}

//           {isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/showFormData"   className={style.nav_links}>ShowFormData</NavLink>
//             </li>
//           )}
//           {/*  */}

//         </ul>

//         <>
//           <div className={style.login_and_signup}>
//             {!isLoggedIn && (
//               <li className={style.nav_links}>
//                 <NavLink to="/loginfrom">
//                   {/* <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"> */}
//                   Log in
//                   {/* </button> */}
//                 </NavLink>
//               </li>
//             )}

//             {!isLoggedIn && (
//               <li className={style.nav_links}>
//                 <NavLink to="/signupfrom">
//                   {/* <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"> */}
//                   Sign up
//                   {/* </button> */}
//                 </NavLink>
//               </li>
//             )}

//             {isLoggedIn && (
//               <li className={style.nav_links}>
//                 <NavLink to="/">
//                   <div
//                     className=""
//                     onClick={() => {
//                       setIsLoggedIn(false);
//                       // toast.success("Logged out");
//                     }}
//                   >
//                     Log out
//                   </div>
//                 </NavLink>
//               </li>
//             )}
//           </div>
//         </>
//         <div className={style.nav_icon} onClick={handleClick}>
//               <span className={style.nav_btn} onClick={handleClick}>
//                 {click ? (
//                   <FaTimes className={style.icons} />
//                 ) : (
//                   <FaBars className={style.icons} />
//                 )}
//               </span>
//             </div>
//       </navbar>
//     </div>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import style from "./Header.module.css";
// import logImg from "../../../assets/log.jpg";

// const Header = (props) => {
//   const isLoggedIn = props.isLoggedIn;
//   const setIsLoggedIn = props.setIsLoggedIn;
//   const isAdmin = props.isAdmin;
//   const setIsAdmin = props.setIsAdmin;
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <div className={style.header_top_content}>
//     <Navbar collapseOnSelect expand="lg" className={style.header_content}>
//       <Navbar.Brand>
//         <img src={logImg} alt="" className={style.logoImage} />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav">
//         {click ? "Close" : "Menu"}
//       </Navbar.Toggle>
//       <Navbar.Collapse
//         id="responsive-navbar-nav"
//         className={`${click ? "show" : ""} ${style.nav_menu}`}
//         onClick={handleClick}
//       >
//         <Nav className={`ml-auto ${style.nav_links_container}`}>
//           <NavLink to="/" className={style.nav_links} onClick={handleClick}>
//             HOME
//           </NavLink>
//           <NavLink
//             to="/about" className={style.nav_links} onClick={handleClick}>
//             ABOUT
//           </NavLink>
//           {!isAdmin && isLoggedIn && (
//             <NavLink to="/newstudent"className={style.nav_links} onClick={handleClick}>
//               ADMISSION
//             </NavLink>
//           )}
//           {!isAdmin && isLoggedIn && (
//             // <li className={style.nav_links}>
//             <NavLink to="/exit" className={style.nav_links} onClick={handleClick}>
//               EXIT STUDENT
//             </NavLink>
//             // </li>
//           )}
//           {!isAdmin && isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/pgcourses" className={style.nav_links} onClick={handleClick}>
//               POSTGRADUATE
//               </NavLink>
//             </li>
//           )}

//           {!isAdmin && isLoggedIn && (
//             <li className={style.nav_links}>
//               <NavLink to="/btechjob" className={style.nav_links} onClick={handleClick}>
//                 JOB
//               </NavLink>
//             </li>
//           )}
//           {isLoggedIn && (
//             <li className={style.nav_links} onClick={handleClick}>
//               <NavLink to="/showFormData" className={style.nav_links}>
//                 SHOWFORMDATA
//               </NavLink>
//             </li>
//           )}
//         </Nav>
//         <Nav
//           className={`${style.nav_links_container} ${click ? "mr-auto" : ""}`}>
//           {!isLoggedIn && (
//             <>
//               <NavLink
//                 to="/loginfrom"
//                 className={style.nav_links}
//                 onClick={handleClick}
//               >
//                 LOGIN
//               </NavLink>
//               <NavLink
//                 to="/signupfrom"
//                 className={style.nav_links}
//                 onClick={handleClick}
//               >
//                 SIGN UP
//               </NavLink>
//               {/* <NavLink to='/exit'>Exit-Student</NavLink>

//               <NavLink to='/newstudent'>New-Admission</NavLink>

//               <NavLink to="/btechjob" >JOB</NavLink> */}
//               {/* <NavLink to="/pgcourse"
//               >
//                 POSTGRUATE
//               </NavLink> */}
//             </>

//           )}
//           {isLoggedIn && (
//             <NavLink
//               to="/"
//               className={style.nav_links}
//               onClick={() => {
//                 setIsAdmin(false);
//                 setIsLoggedIn(false)
//               }}
//             >
//               LOGOUT
//             </NavLink>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     </div>
//   );
// };

// export default Header;








// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import style from './Header.module.css';
// import logImg from '../../../assets/log.jpg';

// const Header = (props) => {
//   const {
//     isLoggedIn,
//     setIsLoggedIn,
//     isAdmin,
//     setIsAdmin,
//     teacher,
//     setTeacher,
//     handleLogout
//   } = props;
//   console.log("Teacher Prop Value:", teacher);


//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <div className={style.header_top_content}>
//       <Navbar collapseOnSelect expand="lg" className={style.header_content}>
//         <Navbar.Brand>
//           <img src={logImg} alt="" className={style.logoImage} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav">
//           {click ? 'Close' : 'Menu'}
//         </Navbar.Toggle>
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className={`${click ? 'show' : ''} ${style.nav_menu}`}
//           onClick={handleClick}
//         >
//           <Nav className={`ml-auto ${style.nav_links_container}`}>
//             <NavLink to="/" className={style.nav_links} onClick={handleClick}>
//               HOME
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={style.nav_links}
//               onClick={handleClick}
//             >
//               ABOUT
//             </NavLink>
//             {!isAdmin&& !teacher && isLoggedIn && (
//               <>
//                 <NavLink
//                   to="/newstudent"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   ADMISSION
//                 </NavLink>
//                 <NavLink
//                   to="/exit"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   EXIT STUDENT
//                 </NavLink>
//                 <li className={style.nav_links}>
//                   <NavLink
//                     to="/pgcourses"
//                     className={style.nav_links}
//                     onClick={handleClick}
//                   >
//                     POSTGRADUATE
//                   </NavLink>
//                 </li>
//                 <li className={style.nav_links}>
//                   <NavLink
//                     to="/btechjob"
//                     className={style.nav_links}
//                     onClick={handleClick}
//                   >
//                     JOB
//                   </NavLink>
//                 </li>
//                 <li className={style.nav_links} onClick={handleClick}>
//                   <NavLink
//                     to="/showFormData"
//                     className={style.nav_links}
//                   >
//                     SHOWFORMDATA
//                   </NavLink>
//                 </li>
//               </>
//             )}

// {isAdmin && (
//             <li className={style.nav_links} onClick={handleClick}>
//               <NavLink to="/showFormData" className={style.nav_links}>
//                 SHOWFORMDATA
//               </NavLink>
//             </li>
//           )}
// {teacher && (
//               <>
//                 <NavLink
//                   to="/studentallinfo"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   STUDENT-INFO
//                 </NavLink>
               
//               </>
//             )}


//        <Nav
//           className={`${style.nav_links_container} ${click ? "mr-auto" : ""}`}>
//           {!isLoggedIn && (
//             <>
//               <NavLink
//                 to="/loginfrom"
//                 className={style.nav_links}
//                 onClick={handleClick}
//               >
//                 LOGIN
//               </NavLink>
//               <NavLink
//                 to="/signupfrom"
//                 className={style.nav_links}
//                 onClick={handleClick}
//               >
//                 SIGN UP
//               </NavLink>
//             </>
//           )}
//           {isLoggedIn && (
//             <NavLink
//               to="/"
//               className={style.nav_links}
//               // onClick={() => {
//               //   setIsAdmin(false);
//               //   setIsLoggedIn(false)
//               //   setTeacher(false);
//               // }}
//               onClick={handleLogout}
//             >
//               LOGOUT
//             </NavLink>
//           )}
//         </Nav>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;


























import ProfileDropdown from "../../pages/profile/ProfileDropdown"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import style from './Header.module.css';
import logImg from '../../../assets/log.jpg';
import { useSelector } from "react-redux";

const Header = (props) => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin,
    teacher,
    setTeacher,
    handleLogout
  } = props;
  console.log("Teacher Prop Value:", teacher);
  const { token } = useSelector((state) => state.auth);
  // const { accountType } = useSelector((state) => state.auth);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className={style.header_top_content}>
      <Navbar collapseOnSelect expand="lg" className={style.header_content}>
        <Navbar.Brand>
          <img src={logImg} alt="" className={style.logoImage} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {click ? 'Close' : 'Menu'}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${click ? 'show' : ''} ${style.nav_menu}`}
          onClick={handleClick}
        >
          <Nav className={`ml-auto ${style.nav_links_container}`}>
            <NavLink to="/" className={style.nav_links} onClick={handleClick}>
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={style.nav_links}
              onClick={handleClick}
            >
              ABOUT
            </NavLink>
            {!isAdmin && !teacher && token !== null&&(
        

            // {/* {!isAdmin&& !teacher && isLoggedIn && ( */}

              <>
                <NavLink
                  to="/newstudent"
                  className={style.nav_links}
                  onClick={handleClick}
                >
                  ADMISSION
                </NavLink>
                <NavLink
                  to="/exit"
                  className={style.nav_links}
                  onClick={handleClick}
                >
                  EXIT STUDENT
                </NavLink>
                <li className={style.nav_links}>
                  <NavLink
                    to="/pgcourses"
                    className={style.nav_links}
                    onClick={handleClick}
                  >
                    POSTGRADUATE
                  </NavLink>
                </li>
                <li className={style.nav_links}>
                  <NavLink
                    to="/btechjob"
                    className={style.nav_links}
                    onClick={handleClick}
                  >
                    JOB
                  </NavLink>
                </li>
                <li className={style.nav_links} onClick={handleClick}>
                  <NavLink
                    to="/showFormData"
                    className={style.nav_links}
                  >
                    SHOWFORMDATA
                  </NavLink>
                </li>
              </>
            )}

{isAdmin && teacher!==null && (
            <li className={style.nav_links} onClick={handleClick}>
              <NavLink to="/showFormData" className={style.nav_links}>
               A  SHOWFORMDATA
              </NavLink>
            </li>
          )}
  {/* {token !== null && accountType === "Instructor" && ( */}
{teacher && token!==null &&(


              <>
                <NavLink
                  to="/studentallinfo"
                  className={style.nav_links}
                  onClick={handleClick}
                >
                  STUDENT-INFO
                </NavLink>
               

             
               <NavLink 
                className={style.nav_links}
               to='/createreport'>
               REPORT CREATE
               </NavLink>
              </>
            )}


       <Nav
          className={`${style.nav_links_container} ${click ? "mr-auto" : ""}`}>
          {token === null && (
            <>
              <NavLink
                to="/loginfrom"
                className={style.nav_links}
                onClick={handleClick}
              >
                LOGIN
              </NavLink>
              <NavLink
                to="/signupfrom"
                className={style.nav_links}
                onClick={handleClick}
              >
                SIGN UP
              </NavLink>
            </>
          )}
         
{token !== null && <ProfileDropdown />}
        </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;












//-----------------------without redux+=============================+++++++++++  

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap';
// import style from './Header.module.css';
// import logImg from '../../../assets/log.jpg';

// const Header = (props) => {
//   const {
//     isLoggedIn,
//     setIsLoggedIn,
//     isAdmin,
//     setIsAdmin,
//     teacher,
//     setTeacher,
//     handleLogout
//   } = props;
//   console.log("Teacher Prop Value:", teacher);


//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   return (
//     <div className={style.header_top_content}>
//       <Navbar collapseOnSelect expand="lg" className={style.header_content}>
//         <Navbar.Brand>
//           <img src={logImg} alt="" className={style.logoImage} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav">
//           {click ? 'Close' : 'Menu'}
//         </Navbar.Toggle>
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className={`${click ? 'show' : ''} ${style.nav_menu}`}
//           onClick={handleClick}
//         >
//           <Nav className={`ml-auto ${style.nav_links_container}`}>
//             <NavLink to="/" className={style.nav_links} onClick={handleClick}>
//               HOME
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={style.nav_links}
//               onClick={handleClick}
//             >
//               ABOUT
//             </NavLink>
//             {!isAdmin&& !teacher && isLoggedIn && (
//               <>
//                 <NavLink
//                   to="/newstudent"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   ADMISSION
//                 </NavLink>
//                 <NavLink
//                   to="/exit"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   EXIT STUDENT
//                 </NavLink>
//                 <li className={style.nav_links}>
//                   <NavLink
//                     to="/pgcourses"
//                     className={style.nav_links}
//                     onClick={handleClick}
//                   >
//                     POSTGRADUATE
//                   </NavLink>
//                 </li>
//                 <li className={style.nav_links}>
//                   <NavLink
//                     to="/btechjob"
//                     className={style.nav_links}
//                     onClick={handleClick}
//                   >
//                     JOB
//                   </NavLink>
//                 </li>
//                 <li className={style.nav_links} onClick={handleClick}>
//                   <NavLink
//                     to="/showFormData"
//                     className={style.nav_links}
//                   >
//                     SHOWFORMDATA
//                   </NavLink>
//                 </li>
//               </>
//             )}

// {isAdmin && (
//             <li className={style.nav_links} onClick={handleClick}>
//               <NavLink to="/showFormData" className={style.nav_links}>
//                 SHOWFORMDATA
//               </NavLink>
//             </li>
//           )}
// {teacher && (
//               <>
//                 <NavLink
//                   to="/studentallinfo"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   STUDENT-INFO
//                 </NavLink>
               
//               </>
//             )}


//        <Nav
//           className={`${style.nav_links_container} ${click ? "mr-auto" : ""}`}>
//           {!isLoggedIn && (
//             <>
//               <NavLink
//                 to="/loginfrom"
//                 className={style.nav_links}
//                 onClick={handleClick}
//               >
//                 LOGIN
//               </NavLink>
//               <NavLink
//                 to="/signupfrom"
//                 className={style.nav_links}
//                 onClick={handleClick}
//               >
//                 SIGN UP
//               </NavLink>
//             </>
//           )}
//           {isLoggedIn && (
//             <NavLink
//               to="/"
//               className={style.nav_links}
//               // onClick={() => {
//               //   setIsAdmin(false);
//               //   setIsLoggedIn(false)
//               //   setTeacher(false);
//               // }}
//               onClick={handleLogout}
//             >
//               LOGOUT
//             </NavLink>
//           )}
//         </Nav>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;