import { FcGoogle } from "react-icons/fc";
// import style from "./sign.module.css";
// import Card from "react-bootstrap/Card";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

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

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   if (formData.createPassword != formData.confirmPassword) {
  //     //   toast.error("Passwords do not match");
  //     return;
  //   }
  //   setIsLoggedIn(false);

  //   // toast.success("Account Create Successfull");
  //   console.log(formData);

  //   console.log(formData.email);

  //   axios
  //     .post("http://localhost:8000/api/v1/signup", formData)
  //     .then((response) => {
  //       console.log("Response:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.response.data);
  //     });

  //   // const finalData = {
  //   //   ...formData,
  //   //   accountType
  //   // }

  //   // console.log(finalData);
  //   setIsLoggedIn(true);

  //   navigate("/");
  // };


  const submitHandler = (event) => {
    event.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      // Handle password mismatch (optional)
      console.error("Passwords do not match");
      // Display an error message or handle the mismatch scenario as needed
      return;
    }
  
    // Send data to backend for user registration
    axios
      .post("http://localhost:8000/api/v1/signup", formData)
      .then((response) => {
        console.log("Response:", response.data);
       
        // For example, show success message or redirect to login page
        setIsLoggedIn(false); // Change as per your requirements
        navigate("/"); // Redirect to login page after successful registration
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        // Handle error scenarios (optional)
        // For example, display error message to the user
      });
  };

  return (
    // <>
    <Container>
      <Row lg={12}>
        <h1 className="text-center">CREATE ACCOUNT</h1>

       
        <Row>
          <Col className="">
        
            <form onSubmit={submitHandler}>
             
              <Row>
                <Col md={6}>
                  <Form.Group md={6}>
                    <Form.Label>
                      First Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={changeHandler}
                      placeholder="Enter First name"
                      className="rounded-0"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group md={6}>
                    <Form.Label>
                      Last Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      onChange={changeHandler}
                      value={formData.lastName}
                      placeholder="Enter Last name"
                      className="rounded-0"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group as={Col} md="12">
                <Form.Label>
                  Email Address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="Enter email address"
                  onChange={changeHandler}
                  className="rounded-2"
                />
              </Form.Group>

              <Form.Group as={Col} md="12">
                <Form.Label>
                  Create Password<span className="text-danger">*</span>
                </Form.Label>
                <Col className="input-group">
                  <Form.Control
                    type={showPassword.createPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder="Enter Password"
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
                <Form.Label>
                  Confirm Password<span className="text-danger">*</span>
                </Form.Label>
                <Col className="input-group">
                  <Form.Control
                    type={showPassword.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={changeHandler}
                    value={formData.confirmPassword}
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

              <Col md={6} lg={12}>
                <Button
                  className="btn rounded-5 btn-primary btn-large centerButton my-4 w-100 text-black"
                  type="submit"
                >
                  Create Account
                </Button>
              </Col>

              {/* Sign in with Google Button */}
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
            </form>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6}>
            <img
              src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
              alt=""  loading="lazy"
              style={{ width: "600px" ,height:"400px", paddingLeft:"20px" }}
            />
          </Col>
        </Row>
      </Row>
    </Container>
    // {/* </> */}
  );
};

export default SignupForm;
