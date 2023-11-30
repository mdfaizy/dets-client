import { Link } from "react-router-dom";
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
            {" "}
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && (
            <li className={style.header_item}>
            <Link to="/about">
              About
            </Link>
            </li>
          )}
          {isLoggedIn && (
 <li className={style.header_item}> 
            <Link to="/newadmission">
             NewAdmissiom
            </Link>
            </li>
          )}

          {isLoggedIn && (
            <li className={style.header_item}>
            <Link to="/exitfrom">
               EXIT STUDENT
            </Link>
            </li>
          )}

          {isLoggedIn && (
            <li className={style.header_item}>
              <Link to="/pgcource">
              PG PROGRAM
              </Link>
              </li>
          )}

          {isLoggedIn && (
            <li className={style.header_item}>
              <Link to="/job">
          
                
                JOB
          
              
              </Link>
              </li>
          )}
        </nav>

        <>
          <div className={style.login_and_signup}>
            {!isLoggedIn && (
               <li className={style.header_item}>
              <Link to="/loginfrom">
                {/* <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"> */}
                Log in
                {/* </button> */}
              </Link>
              </li>
            )}

            {!isLoggedIn && (
                <li className={style.header_item}>
              <Link to="/signupfrom">
                {/* <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"> */}
                Sign up
                {/* </button> */}
              </Link>
              </li>
            )}

            {isLoggedIn && (
                 <li className={style.header_item}>
              <Link to="/">
                <div
                  className=""
                  onClick={() => {
                    setIsLoggedIn(false);
                    // toast.success("Logged out");
                  }}
                >
                  Log out
                </div>
              </Link>
              </li>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default Header;
