import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import style from "./atudent.module.css";

const AccountTypeStudent = () => {
  return (
    <div className={style.student_account_type}>
      <div className={style.student_account_types}>
        <p className="text-center text-info fs-5"> 
          Join our university community by creating a new student account.
          Access a diverse selection of courses, track your progress, and
          utilize resources tailored to your educational needs. Log in anytime
          to continue your studies, interact with expert tutors, and achieve
          your academic goals efficiently. Start your journey with us today!
        </p>

        <fieldset className="">
          <legend className={style.legend}>Student:</legend>
          <div className={style.account_signup_login}>
            <div className={style.account_option}>
              <SiGnuprivacyguard />
              <p>
                Create your teacher account easily. Access exclusive tools,
                resources, and support to enhance your teaching experience and
                student success.
              </p>

              <button>
                <Link to="/signupfrom">Create Account</Link>
              </button>
            </div>
            <div className="account-option">
              <SiGnuprivacyguard />
              <p>
                Exclusive access for teachers to manage courses, track student
                progress, and enhance their teaching experience.
              </p>
              <button>
                <Link to="/loginfrom">Login</Link>
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default AccountTypeStudent;
