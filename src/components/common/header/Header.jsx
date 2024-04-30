import ProfileDropdown from "../../pages/profile/ProfileDropdown";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import style from "./Header.module.css";
import logImg from "../../../assets/log.jpg";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { isAdmin, setIsAdmin, teacher, setTeacher } = props;
  console.log("Teacher Prop Value:", teacher);
  const { token, accountType } = useSelector((state) => state.auth);
  // const { accountType } = useSelector((state) => state.auth);
  console.log("Header AccountType", accountType);
  console.log("Header Token", token);
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
          {click ? "Close" : "Menu"}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${click ? "show" : ""} ${style.nav_menu}`}
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
            {!isAdmin && token !== null && accountType === "Student" && (
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
                  <NavLink to="/showFormData" className={style.nav_links}>
                    SHOWFORMDATA
                  </NavLink>
                </li>
              </>
            )}

            {isAdmin && (
              <li className={style.nav_links} onClick={handleClick}>
                <NavLink to="/showFormData" className={style.nav_links}>
                  A SHOWFORMDATA
                </NavLink>
              </li>
            )}
            {/* {teacher && token!==null &&( */}
            {token !== null && accountType === "Instructor" && (
              <>
                <NavLink
                  to="/studentallinfo"
                  className={style.nav_links}
                  onClick={handleClick}
                >
                  STUDENT-INFO
                </NavLink>

                <NavLink className={style.nav_links} to="/createreport">
                  REPORT CREATE
                </NavLink>
              </>
            )}

            <Nav
              className={`${style.nav_links_container} ${
                click ? "mr-auto" : ""
              }`}
            >
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
