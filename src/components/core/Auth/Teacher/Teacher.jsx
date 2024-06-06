import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import "./accoutType.css";
import { Container, Row } from "react-bootstrap";

const AccountTypeTeacher = () => {
  return (
    <Container>
      <Row>
        <div className="teacher-account-type">
          <div className="teacher-account-types">
            <fieldset className="">
              <legend className="legend">Teacher</legend>
              <div className="account-signup-login">
                <div className="account-option">
                  <SiGnuprivacyguard />
                  <p>
                    Create your teacher account easily. Access exclusive tools,
                    resources, and support to enhance your teaching experience
                    and student success.
                  </p>

                  <button>
                    <Link to="/teacher-account">Create Account</Link>
                  </button>
                </div>
                <div className="account-option">
                  <SiGnuprivacyguard />
                  <p>
                    Exclusive access for teachers to manage courses, track
                    student progress, and enhance their teaching experience.
                  </p>
                  <button>
                    <Link to="/loginfrom">Login</Link>
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AccountTypeTeacher;
