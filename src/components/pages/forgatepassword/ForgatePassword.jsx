import './forgot.scss';
import { Button, Form,Col } from 'react-bootstrap';
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../../services/apiFunction/authApi";
import { useDispatch } from "react-redux";

const ForgatePassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email, setEmailSent));
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="forgate-password-container">
      {loading ? (
        <div className="custom-loader"></div>
      ) : (
        <div className="forgot-container">
          <div className='forgot-second-container'>

          
          <h1 className="forgot-heading">
            {!emailSent ? "Reset your password" : "Check email"}
          </h1>
          <p className="forgot-paragraph">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <Form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <Col className=''>
              <Form.Group md={6}>
                <Form.Label >
                  <p className="lable">
                    Email Address <sup className="text-danger">*</sup>
                  </p>
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={handleChange}
                  className="input-group"
                />
              </Form.Group>
              </Col>
            )}
            <Button
              type="submit"
              className="reset-button"
            >
              {!emailSent ? "Reset Password" : "Resend email"}
            </Button>
          </Form>
          <div className="back-button">
            <Link to={"/loginfrom"}>
              <p className="back-link">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                </svg>{" "}
                Back To Login
              </p>
            </Link>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgatePassword;
