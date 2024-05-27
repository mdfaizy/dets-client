import ProfileDropdown from "../../pages/profile/ProfileDropdown";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Navbar,
  Row,
  Col,
  Nav,
  NavDropdown,
  Container,
  Dropdown,
} from "react-bootstrap";
import style from "./Header.module.css";
import logImg from "../../../assets/log.jpg";
import { useSelector } from "react-redux";
import BaseLayout from "../../layout/BaseLayout";

// const Header = (props) => {
//   const { isAdmin } = props;
//   // console.log("Teacher Prop Value:", teacher);
//   const { token, accountType } = useSelector((state) => state.auth);
//   // const { accountType } = useSelector((state) => state.auth);
//   console.log("Header AccountType", accountType);
//   console.log("Header Token", token);
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

//   const [show, setShow] = useState(false);
// const showDropdown = ()=>{
//     setShow(!show);
// }
// const hideDropdown = ()=> {
//     setShow(false);
// }
//   return (
//     <div className={style.header_top_content}>
//       <Navbar collapseOnSelect expand="lg" className={style.header_content}>
//         <Navbar.Brand>
//           <img src={logImg} alt="" className={style.logoImage} />
//         </Navbar.Brand>
//         <div>

//         {/* <Navbar.Toggle aria-controls="responsive-navbar-nav">
//           {click ? "Close" : "Menu"}
//         </Navbar.Toggle> */}
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className={`${click ? "show" : ""} ${style.nav_menu}`}
//           onClick={handleClick}
//         >
//           <Nav className={`ml-auto ${style.nav_links_container}`}>
//             <Nav.Link to="/" className={style.nav_links} onClick={handleClick}>
//               HOME
//             </Nav.Link>
//             <Nav.Link
//               to="/about"
//               className={style.nav_links}
//               onClick={handleClick}
//             >
//               ABOUT
//             </Nav.Link>

//                 <NavDropdown title="Dropdown"
//    id="collasible-nav-dropdown"
//    className={style.nav_links}
//    show={show}
//    onMouseEnter={showDropdown}
//    onMouseLeave={hideDropdown}
//  >
//                     <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
//                     <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
//                 </NavDropdown>

// {!isAdmin && token !== null && accountType === "Student" && (
//   // {/* {!isAdmin&& !teacher && isLoggedIn && ( */}
//   <>
//     <Nav.Link
//       to="/newstudent"
//       className={style.nav_links}
//       onClick={handleClick}
//     >
//       ADMISSION
//     </Nav.Link>
//     <Nav.Link
//       to="/exit"
//       className={style.nav_links}
//       onClick={handleClick}
//     >
//       EXIT STUDENT
//     </Nav.Link>
//     <li className={style.nav_links}>
//       <Nav.Link
//         to="/pgcourses"
//         className={style.nav_links}
//         onClick={handleClick}
//       >
//         POSTGRADUATE
//       </Nav.Link>
//     </li>
//     <li className={style.nav_links}>
//       <Nav.Link
//         to="/btechjob"
//         className={style.nav_links}
//         onClick={handleClick}
//       >
//         JOB
//       </Nav.Link>
//     </li>
//     <li className={style.nav_links} onClick={handleClick}>
//       <Nav.Link to="/showFormData" className={style.nav_links}>
//         SHOWFORMDATA
//       </Nav.Link>
//     </li>
//   </>
// )}

//             {isAdmin && (
//               <li className={style.nav_links} onClick={handleClick}>
//                 <Nav.Link to="/showFormData" className={style.nav_links}>
//                   A SHOWFORMDATA
//                 </Nav.Link>
//               </li>
//             )}
//             {/* {teacher && token!==null &&( */}
//             {token !== null && accountType === "Instructor" && (
//               <>
//                 <Nav.Link
//                   to="/studentallinfo"
//                   className={style.nav_links}
//                   onClick={handleClick}
//                 >
//                   STUDENT-INFO
//                 </Nav.Link>

//                 <Nav.Link className={style.nav_links} to="/createreport">
//                   REPORT CREATE
//                 </Nav.Link>

//                 <Nav.Link className={style.nav_links} to="/filterdataall">
//                   FILTER-DATA
//                 </Nav.Link>
//               </>
//             )}

//             <Nav
//               className={`${style.nav_links_container} ${
//                 click ? "mr-auto" : ""
//               }`}
//             >
//               {token === null && (
//                 <>
//     <Nav.Link
//       to="/loginfrom"
//       className={style.nav_links}
//       onClick={handleClick}
//     >
//       LOGIN
//     </Nav.Link>
//     <Nav.Link
//       to="/signupfrom"
//       className={style.nav_links}
//       onClick={handleClick}
//     >
//       SIGN UP
//     </Nav.Link>
//   </>
// )}

// {token !== null && <ProfileDropdown />}
//             </Nav>
//           </Nav>
//         </Navbar.Collapse>
//         </div>

//       </Navbar>
//     </div>
//   );
// };

// export default Header;

const Header = (props) => {
  const { isAdmin } = props;

  const { token } = useSelector((state) => state.auth);
  // const accountType=localStorage.getItem('accountType');
  // const token = localStorage.getItem("token");
  // const { accountType } = useSelector((state) => state.auth);
  // console.log("Header AccountType", accountType);
  console.log("Header Token", token);
  const [click, setClick] = useState(false);
const accountType=localStorage.getItem("accountType");
  const handleClick = () => {
    setClick(!click);
  };

  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  //   return (
  //     <>
  //       <Container fluid className={style.header_top_content}>
  //         <Row>
  //           <Col>
  //             <Navbar expand="sm">
  //               <Container expand="sm" bg='primary'   style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  //                 <div>
  //                 <Navbar.Brand>
  //                   <img src={logImg} alt="" className={style.logoImage} />
  //                 </Navbar.Brand>
  //                 </div>
  //                 <Navbar.Toggle aria-controls="my-nav" />

  //                 <Navbar.Collapse id="my-nav">
  //                   <Container className={style.nav_links} >
  //                     <Nav  expand="sm" bg='primary'>
  //                       <Nav.Link
  //                       as={Link}
  //                         to="/"
  //                         className={style.nav_links}

  //                       >
  //                         HOME
  //                       </Nav.Link>
  //                       <Nav.Link
  //                       as={Link}
  //                         to="/about"
  //                         className={style.nav_links}

  //                       >
  //                         ABOUT
  //                       </Nav.Link>

  // <NavDropdown
  //   title="Dropdown"
  //   id="collasible-nav-dropdown"
  //   className={style.nav_links}
  //   show={show}
  //   onMouseEnter={showDropdown}
  //   onMouseLeave={hideDropdown}
  // >
  //   <NavDropdown.Item to="#action/3.1">
  //     Action
  //   </NavDropdown.Item>
  //   <NavDropdown.Item to="#action/3.2">
  //     Another action
  //   </NavDropdown.Item>
  //   <NavDropdown.Item to="#action/3.3">
  //     Something
  //   </NavDropdown.Item>
  //   <NavDropdown.Divider />
  //   <NavDropdown.Item to="#action/3.4">
  //     Separated link
  //   </NavDropdown.Item>
  // </NavDropdown>

  //                       {!isAdmin &&
  //                         token !== null &&
  //                         accountType === "Student" && (
  //                           <>
  //                             <NavLink
  //                               to="/newstudent"
  //                               className={style.nav_links}
  //                               onClick={handleClick}
  //                             >
  //                               ADMISSION
  //                             </NavLink>
  //                             <NavLink
  //                               to="/exit"
  //                               className={style.nav_links}
  //                               onClick={handleClick}
  //                             >
  //                               EXIT STUDENT
  //                             </NavLink>
  //                             <li className={style.nav_links}>
  //                               <NavLink
  //                                 to="/pgcourses"
  //                                 className={style.nav_links}
  //                                 onClick={handleClick}
  //                               >
  //                                 POSTGRADUATE
  //                               </NavLink>
  //                             </li>
  //                             <li className={style.nav_links}>
  //                               <NavLink
  //                                 to="/btechjob"
  //                                 className={style.nav_links}
  //                                 onClick={handleClick}
  //                               >
  //                                 JOB
  //                               </NavLink>
  //                             </li>
  //                             <li
  //                               className={style.nav_links}
  //                               onClick={handleClick}
  //                             >
  //                               <NavLink
  //                                 to="/showFormData"
  //                                 className={style.nav_links}
  //                               >
  //                                 SHOWFORMDATA
  //                               </NavLink>
  //                             </li>
  //                           </>
  //                         )}

  //                     </Nav>

  //                     <Container className="p-2">

  // {token === null && (
  //   <Container>
  //     <NavLink
  //       to="/loginfrom"
  //       className={style.nav_links}
  //       onClick={handleClick}
  //     >
  //       LOGIN
  //     </NavLink>
  //     <NavLink
  //       to="/signupfrom"
  //       className={style.nav_links}
  //       onClick={handleClick}
  //     >
  //       SIGN UP
  //     </NavLink>
  //   </Container>
  // )}

  // </Container>
  // <Container>
  // {token !== null && <ProfileDropdown />}
  // </Container>
  //                   </Container>

  //                 </Navbar.Collapse>
  //               </Container>
  //             </Navbar>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </>
  //   );
  // };

  // export default Header;

  //   return (
  //     <>
  //       <Container fluid className={style.header_top_content}>
  //         <Row>
  //           <Col>
  //             <Navbar expand="md">
  //               <Container>
  //                 <Navbar.Brand>
  //                   <img src={logImg} alt="Logo" className={style.logoImage} />
  //                 </Navbar.Brand>
  //                 <Navbar.Toggle aria-controls="my-nav" />
  //                 <Navbar.Collapse id="my-nav" className="text-center">
  //                   <Container className="text-center mx-auto">
  //                     <Nav className="mx-auto">
  //                       <NavLink to="/" className={style.nav_links}>
  //                         HOME
  //                       </NavLink>
  //                       <NavLink to="/about" className={style.nav_links}>
  //                         ABOUT
  //                       </NavLink>
  //                       <Nav.Link
  //                         as={Link}
  //                         to="/about"
  //                         className={style.nav_links}
  //                       >
  //                         ABOUT!
  //                       </Nav.Link>
  //                       <Nav className=" text-center">
  //                         {" "}
  //                         {/* Aligning some Nav items to the left */}
  //                         {!isAdmin &&
  //                           token !== null &&
  //                           accountType === "Student" && (
  //                             <>
  //                               <NavLink
  //                                 to="/newstudent"
  //                                 className={style.nav_links}
  //                                 onClick={handleClick}
  //                               >
  //                                 ADMISSION
  //                               </NavLink>
  //                               <NavLink
  //                                 to="/exit"
  //                                 className={style.nav_links}
  //                                 onClick={handleClick}
  //                               >
  //                                 EXIT STUDENT
  //                               </NavLink>
  //                               <NavLink
  //                                 to="/pgcourses"
  //                                 className={style.nav_links}
  //                                 onClick={handleClick}
  //                               >
  //                                 POSTGRADUATE
  //                               </NavLink>
  //                               <NavLink
  //                                 to="/btechjob"
  //                                 className={style.nav_links}
  //                                 onClick={handleClick}
  //                               >
  //                                 JOB
  //                               </NavLink>
  //                             </>
  //                           )}
  //                       </Nav>

  //                       <Nav className="ms-auto">
  //                         {" "}
  //                         {/* Keeping login/signup or profile dropdown to the right */}
  //                         {token === null ? (
  //                           <>
  //                             <NavLink
  //                               to="/loginfrom"
  //                               className={style.nav_links}
  //                               onClick={handleClick}
  //                             >
  //                               LOGIN
  //                             </NavLink>
  //                             <NavLink
  //                               to="/signupfrom"
  //                               className={style.nav_links}
  //                               onClick={handleClick}
  //                             >
  //                               SIGN UP
  //                             </NavLink>
  //                           </>
  //                         ) : (
  //                           <ProfileDropdown />
  //                         )}
  //                       </Nav>
  //                     </Nav>
  //                   </Container>
  //                 </Navbar.Collapse>
  //               </Container>
  //             </Navbar>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </>
  //   );
  // };

  // export default Header;

  return (
    <>
      <Container fluid className={style.header_top_content}>
        <Row>
          <Col>
            <Navbar expand="sm">
              <Container>
                <Navbar.Brand>
                  <img src={logImg} alt="Logo" className={style.logoImage} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-nav" />
                <Navbar.Collapse id="my-nav">
                  <Nav className={`mx-auto ${style.left_nav}`}>
                    <Nav.Link as={Link} to="/" className={style.nav_links}>
                      HOME
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className={style.nav_links}>
                      ABOUT
                    </Nav.Link>
                    {/* <Nav> */}

                    {/* {!accountType== "Instructor" &&( */}

                      <>
                    <Nav.Link
                      as={Link}
                      to="/newstudent"
                      className={style.nav_links}
                      onClick={handleClick}
                    >
                      ADMISSION
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/exit"
                      className={style.nav_links}
                      onClick={handleClick}
                    >
                      EXIT STUDENT
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/pgcourses"
                      className={style.nav_links}
                      onClick={handleClick}
                    >
                      POSTGRADUATE
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/btechjob"
                      className={style.nav_links}
                      onClick={handleClick}
                    >
                      JOB
                    </Nav.Link>
                    </>
                    
                    {!isAdmin &&
                      token !== null &&
                      accountType === "Instructor" && (
                        <>
                       <BaseLayout/>
                          {/* <Nav.Link as={Link} to="/newstudent" className={style.nav_links} onClick={handleClick}>ADMISSION</Nav.Link> */}
                          {/* <Nav.Link as={Link} to="/exit" className={style.nav_links} onClick={handleClick}>EXIT STUDENT</Nav.Link>
                      <Nav.Link as={Link} to="/pgcourses" className={style.nav_links} onClick={handleClick}>POSTGRADUATE</Nav.Link>
                      <Nav.Link as={Link}  to="/btechjob" className={style.nav_links} onClick={handleClick}>JOB</Nav.Link> */}

                          <NavDropdown
                            title="REPORT"
                            id="collasible-nav-dropdown"
                            // className={style.nav_links}
                            className={`${style.nav_links}`}
                            show={show}
                            onMouseEnter={showDropdown}
                            onMouseLeave={hideDropdown}
                          >
                            <NavDropdown.Item className={style.avDropdown_Item}>
                              <Nav.Link as={Link} to="/feedback-form">
                                Feedback Form
                              </Nav.Link>
                              <Nav.Link as={Link} to="/feedback-details">
                                View Feedback
                              </Nav.Link>
                              <NavDropdown.Item to="#action/3.3">
                                Something
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item to="#action/3.4">
                                Separated link
                              </NavDropdown.Item>
                            </NavDropdown.Item>
                          </NavDropdown>
                        </>
                      )}
                  </Nav>

                  {/* </Nav> */}

                  <Nav className="">
                    {" "}
                    {/* Keeping login/signup or profile dropdown to the right */}
                    {token === null ? (
                      <>
                        <Nav.Link
                          as={Link}
                          to="/account"
                          className={style.nav_links}
                        >
                          Account
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/signupfrom" className={style.nav_links} onClick={handleClick}>SIGN UP</Nav.Link> */}
                      </>
                    ) : (
                      <ProfileDropdown />
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
