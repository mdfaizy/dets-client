
// LoginFrom.jsx
import style from "./login.module.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
// import { login } from "../../../services/apiFunction/authApi";
import { login } from "../../../services/apiFunction/authApi";

const LoginFrom = ({ setIsAdmin, setTeacher }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  // Handle input fields, when some value changes
  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  // Inside LoginFrom component
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password, setIsAdmin, setTeacher, navigate));
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };
  return (
    <div className={style.login_top_content}>
      <Container>
        <Row className={style.login_content}>
          <h1 className={style.login_heading_text}>SIGN IN</h1>
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group as={Col} md="12">
                <Form.Label className="text-white">
                  Email Address
                  <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={formData.email}
                  placeholder="Enter Email address"
                  onChange={changeHandler}
                  name="email"
                  className="rounded-2"
                />
              </Form.Group>

              <Form.Group as={Col} md="12" className="rounded-2">
                <Form.Label className="text-white">
                  Password
                  <span className="text-danger">*</span>
                </Form.Label>
                <Col className="input-group">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    placeholder="Enter Password..."
                    onChange={changeHandler}
                    name="password"
                  />
                  <span
                    className="input-group-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>
                </Col>
              </Form.Group>
              <Link
                to="/forgot-password"
                className={style.linkWithoutDecoration}
              >
                <p className={style.forgate_password}>Forgot Password</p>
              </Link>
              <Col md={6} lg={12}>
                <Button className={style.signin_button} type="submit">
                  Sign in
                </Button>
              </Col>
              <Col md={16} lg={12}>
                <Button className={style.google_signin} type="submit">
                  <FcGoogle
                    className="px-1"
                    style={{ width: "50px", height: "25px" }}
                  />
                  Sign in with Google
                </Button>
              </Col>
            </Form>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <img
              src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
              alt=""
              loading="lazy"
              style={{
                width: "600px",
                height: "400px",
                paddingLeft: "20px",
                borderRadius: "10px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginFrom;
