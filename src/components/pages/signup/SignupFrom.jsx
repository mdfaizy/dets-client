import style from "./sign.module.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {Container,Row,Col,Form,Button} from "react-bootstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../../../redux/slices/authSlice";
// import { signUpFrom } from "../../../services/apiFunction/authApi";
import { sendOtp } from "../../../services/apiFunction/authApi";
const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    createPassword: false,
    confirmPassword: false,
  });

  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };

  // const [accountType, setAccountType] = useState('Student');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    instructorKey: "",
    accountType: "Student", // Default to Student
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    instructorKey,
    accountType,
  } = formData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords Do Not Match");
      return;
    }

    const signupData = { ...formData };
    // dispatch(setSignupData(signupData));
    // dispatch(signUpFrom(formData, navigate));
    dispatch(setSignupData(signupData));
    // dispatch(sendOtp(formData.email, navigate));
    dispatch(sendOtp(formData.email, navigate));

    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
      instructorKey: "",
      accountType: "Student", // Reset accountType to Student
    });
  };
  return (
    <div className={style.sinnup_content}>
      <Container className={style.sinnup_all_content}>
        <Row lg={12}>
          <h1 className={style.create_account}>CREATE ACCOUNT</h1>
          <Row>
            <Col className="">
              <div className="d-flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
                <Button
                  variant={accountType === "Student" ? "dark" : "outline-dark"}
                  className="rounded-full"
                  onClick={() =>
                    setFormData({ ...formData, accountType: "Student" })
                  }
                >
                  Student
                </Button>
                
              </div>
              <Form onSubmit={submitHandler}>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-white">
                        First Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={firstName}
                        name="firstName"
                        placeholder="Enter First name"
                        onChange={changeHandler}
                        className="rounded-2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-white">
                        Last Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        value={lastName}
                        name="lastName"
                        placeholder="Enter Last name"
                        onChange={changeHandler}
                        className="rounded-2"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group as={Col} md="12">
                  <Form.Label className="text-white">
                    Email Address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    value={email}
                    placeholder="Enter Email address"
                    onChange={changeHandler}
                    name="email"
                    className="rounded-2"
                  />
                </Form.Group>

                <Form.Group as={Col} md="12">
                  <Form.Label className="text-white">
                    Create Password<span className="text-danger">*</span>
                  </Form.Label>
                  <Col className="input-group">
                    <Form.Control
                      value={password}
                      placeholder="Enter Password"
                      onChange={changeHandler}
                      name="password"
                      type={showPassword.password ? "text" : "password"}
                      className="rounded-2"
                    />
                    <span
                      className="input-group-text"
                      onClick={() => handleClick("password")}
                    >
                      {showPassword.password ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
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
                      type={showPassword.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      onChange={changeHandler}
                      value={confirmPassword}
                      placeholder="Confirm Password"
                    />
                    <span
                      className="input-group-text"
                      onClick={() => handleClick("confirmPassword")}
                    >
                      {showPassword.confirmPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                      )}
                    </span>
                  </Col>
                </Form.Group>

                {accountType === "Instructor" && (
                  <Form.Group as={Col} md="12">
                    <Form.Label className="text-white">
                      Teacher Key<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={instructorKey}
                      placeholder="Enter Instructor Key"
                      onChange={changeHandler}
                      name="instructorKey"
                      className="rounded-2"
                    />
                  </Form.Group>
                )}

                <Button className={style.create_signup_button} type="submit">
                  Create Account
                </Button>

                <Button
                  className={style.create_signup_google_button}
                  type="submit"
                  style={{ fontSize: "17px" }}
                >
                  <FcGoogle
                    className="px-1"
                    style={{ width: "50px", height: "25px" }}
                  />
                  Sign in with Google
                </Button>
              </Form>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <img
                src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
                alt=""
                loading="lazy"
                style={{ width: "600px", height: "400px", paddingLeft: "20px" }}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default SignupForm;
