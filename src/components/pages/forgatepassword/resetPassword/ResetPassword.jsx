import "./resetpassemail.scss";

import { Button, Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { resetPassword } from "../../../../services/apiFunction/authApi";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = location.pathname.split("/").at(-1);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(
        resetPassword(
          formData.password,
          formData.confirmPassword,
          token,
          setresetComplete
        )
      );
    } else {
      alert("Passwords do not match");
    }
  };

  const handleOnChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setformData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { loading } = useSelector((state) => state.auth);
  const [resetComplete, setresetComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="reset-password-container">
      {loading ? (
        <div className="custom-loader"></div>
      ) : (
        <div className="reset-container ">
          <div className="reset-second-container">

          <h1 className="reset-heading">
            {!resetComplete ? "Choose  new password" : "Reset complete!"}
          </h1>

          <p className="reset-paragraph">
            {!resetComplete
              ? "Almost done. Enter your new password and youre all set."
              : `All done! We have sent an email to ${"nn"} to confirm`}
          </p>
          <Form onSubmit={handleOnSubmit}>
            {!resetComplete && (
              <Row>
                <Form.Group as={Col} md="12">
                  <Form.Label className="text-white">
                    New Password<span className="text-danger">*</span>
                  </Form.Label>
                  <Col className="input-group">
                    <Form.Control
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleOnChange}
                      placeholder="Enter Password"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                    />
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="input-confirm-password-icon"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible
                          fontSize={24}
                          fill="#AFB2BF"
                          color="white"
                          className=""
                        />
                      ) : (
                        <AiOutlineEye
                          fontSize={24}
                          fill="#AFB2BF"
                          color="white"
                        />
                      )}
                    </span>
                  </Col>
                </Form.Group>

                <Form.Group as={Col} md="12">
                  <Form.Label className="text-white">
                    Confirm Password<span className="text-danger">*</span>
                  </Form.Label>
                  <Col className="input-group">
                    <Form.Control
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleOnChange}
                      placeholder="Enter Password"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="input-group-confirm-password"
                    />
                    <span
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="input-confirm-password-icon"
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEyeInvisible
                          fontSize={24}
                          fill="#AFB2BF"
                          color="white"
                        />
                      ) : (
                        <AiOutlineEye
                          fontSize={24}
                          fill="#AFB2BF"
                          color="white"
                        />
                      )}
                    </span>
                  </Col>
                </Form.Group>
              </Row>
            )}
            {!resetComplete ? (
              <Button
                type="submit"
                className="reset-password-button"
              >
                Reset Password
              </Button>
            ) : (
              <Link to={"/loginfrom"}>
                <button className="reset-password-button-back-login">
                  Return to login
                </button>
              </Link>
            )}
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

export default ResetPassword;

















