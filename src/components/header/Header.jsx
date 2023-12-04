import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import logImg from "../../assets/log.jpg";
const Header = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className={style.header_content}>
      <div className={style.log_img}>
        <img src={logImg} alt="" />
      </div>
      <div className={style.header_content1}>
        <nav className={style.header_nav_text}>
          <li className={`${style.header_item} ${style.no_underline}`}>
            <NavLink to="/">Home</NavLink>
          </li>
          {!isLoggedIn && (
            <li className={style.header_item}>
              <NavLink to="/about">About</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={style.header_item}>
              <NavLink to="/newadmission">NewAdmissiom</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={style.header_item}>
              <NavLink to="/exitfrom">EXIT STUDENT</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={style.header_item}>
              <NavLink to="/pgcource">PG PROGRAM</NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li className={style.header_item}>
              <NavLink to="/job">JOB</NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li className={style.header_item}>
              <NavLink to="/showFormData">ShowFormData</NavLink>
            </li>
          )}
          {/*  */}
        </nav>

        <>
          <div className={style.login_and_signup}>
            {!isLoggedIn && (
              <li className={style.header_item}>
                <NavLink to="/loginfrom">
                  {/* <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"> */}
                  Log in
                  {/* </button> */}
                </NavLink>
              </li>
            )}

            {!isLoggedIn && (
              <li className={style.header_item}>
                <NavLink to="/signupfrom">
                  {/* <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"> */}
                  Sign up
                  {/* </button> */}
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li className={style.header_item}>
                <NavLink to="/">
                  <div
                    className=""
                    onClick={() => {
                      setIsLoggedIn(false);
                      // toast.success("Logged out");
                    }}
                  >
                    Log out
                  </div>
                </NavLink>
              </li>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;
