import style from "./login.module.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { Container,Row,Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { toast } from "react-hot-toast";
const LoginFrom = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // toast.success("Login Success");
    console.log(formData);
    setIsLoggedIn(true);
    // navigate("/dashboard");
    navigate("/");
  }
  return (
    <div className={style.login_top_content}>
      <Container>
        <Row className="">
        <h1 className="text-center">SIGN IN</h1>
         <Col>
         <Form onSubmit={submitHandler}>
            <Form.Group as={Col} md="12">
              <Form.Label>
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
              <Form.Label>
                Password
                <span className="text-danger">*</span>
              </Form.Label>
              <Col className="input-group">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="Enter Password"
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

            <Link to="#">
              <p className="j">Forgot Password</p>
            </Link>

            {/* <Form.Group as={Col} md="4" className="rounded-2">
              <Button
                md="6"
                className="btn rounded-5 btn-primary btn-large centerButton my-2"
                type="submit"
              >
                Sign in
              </Button>
            </Form.Group> */}
           <Col md={6} lg={12}>
                  <Button
                    className="btn rounded-5 btn-primary btn-large centerButton my-4 w-100 text-black"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Col>
            {/* <Col className="">OR</Col> */}
            <Col md={16} lg={12}>
                  <Button
                    className="btn rounded-5 btn-primary btn-large centerButton my-2 w-100 text-black "
                    type="submit"
                    style={{ fontSize: "17px" }}
                  >
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
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginFrom;
