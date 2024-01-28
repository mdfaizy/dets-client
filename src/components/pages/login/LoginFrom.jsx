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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axios from "axios"; // Import Axios
// import validationloginSchema from "./valiationloginSchema";
// import { useFormik } from "formik";
const LoginFrom = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const setIsAdmin = props.setIsAdmin;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      // ...formData,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      // Example JWT and secret key (in a real scenario, the secret key should be stored securely)
      const token = response.data.token;
      console.log(token);

      if (response.status === 200) {
        const responseData = response.data;

        // console.log(responseData.user._id);
        // Cookies.set("user", responseData.user._id); use karege loading
        props.sendDataToParent(token); // Call the callback function with the data
        // if(process.env.REACT_APP_admin_token==token){
        //   setIsAdmin(true);
        // }

        if (import.meta.env.VITE_REACT_APP_ADMIN_TOKEN === token) {
          setIsAdmin(true);
        }
        setIsLoggedIn(true);
        navigate("/");
        toast.success("Login successful", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          closeButton: false,
          className: style.customToast,
        });
      } else {
        console.error("Login failed:", response.data);
        toast.error("Login failed. Please try again.", {
          // position: toast.POSITION.TOP_CENTER,
          // autoClose: 3000,
          // closeButton: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          closeButton: false,
          style:{width:'300px'},
          className: style.customErrorToast,
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        closeButton: true,
        style:{width:'300px'},
        className: style.customErrorToast,
      });
    }
  };

  // const loginFormik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: validationloginSchema,
  //   onSubmit: async (values, { setSubmitting }) => {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8000/api/v1/signin",
  //         values
  //       );
  //       console.log("Response:", response.data);
  //       setIsLoggedIn(true); // Assuming this should be set to true upon successful login
  //       navigate("/"); // Redirect to the home page upon successful login
  //       toast.success("Login successful", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 2000,
  //         closeButton: false,
  //         className: style.customToast,
  //       });
  //     } catch (error) {
  //       console.error("Error:", error.response.data);
  //       toast.error("Login failed. Please try again.", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 3000,
  //         closeButton: true,
  //         className: style.customErrorToast,
  //       });
  //     }
  //     //finally {
  //     //   setSubmitting(false);
  //     // }
  //   },
  // });

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

              {/* <Form.Group as={Col} md="12">
                <Form.Label>
                  Email Address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={loginFormik.values.email}
                  placeholder="Enter email address"
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  className="rounded-2"
                  isInvalid={
                    loginFormik.touched.email && loginFormik.errors.email
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {loginFormik.errors.email}
                </Form.Control.Feedback>
              </Form.Group> */}

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

              {/* <Form.Group as={Col} md="12">
                <Form.Label>
                  Password<span className="text-danger">*</span>
                </Form.Label>
                <Col className="input-group">
                  <Form.Control
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.password}
                    placeholder="Enter Password"
                    isInvalid={
                      loginFormik.touched.password &&
                      loginFormik.errors.password
                    }
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
                  <Form.Control.Feedback type="invalid">
                    {loginFormik.errors.password}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group> */}

                <Link to="/forgatepassword" className={style.linkWithoutDecoration}>
                   <p className={style.forgate_password}>
                     Forgot Password
                   </p>
                   </Link>
              <Col md={6} lg={12}>
                <Button className={style.signin_button} type="submit" >
                  Sign in
                </Button>
              </Col>
              <Col md={16} lg={12}>
                <Button className={style.google_signin} type="submit"
                 
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

// import style from "./login.module.css";
// import { useState } from "react";
// // import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// // import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// // import Container from "react-bootstrap/Container";
// // import Row from "react-bootstrap/Row";
// // import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import Cookies from "js-cookie";
// import axios from "axios";
// import validationloginSchema from "./valiationloginSchema";
// import { useFormik } from "formik";

// const LoginFrom = (props) => {
//   const setIsLoggedIn = props.setIsLoggedIn;
//   // const setIsAdmin = props.setIsAdmin;
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const loginFormik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validationloginSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/signin",
//           values
//         );
//         console.log("Response:", response.data);
//         setIsLoggedIn(false);
//         navigate("/LoginFrom");
//       } catch (error) {
//         console.error("Error:", error.response.data);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div className={style.login_top_content}>
//       {/* Your form structure */}
//       <Form onSubmit={loginFormik.handleSubmit}>
//         {/* Email Field Component */}
//         <Form.Control
//           value={loginFormik.values.email}
//           placeholder="Enter email address"
//           onChange={loginFormik.handleChange}
//           onBlur={loginFormik.handleBlur}
//           name="email"
//           className="rounded-2"
//           isInvalid={loginFormik.touched.email && loginFormik.errors.email}
//         />
//         {loginFormik.touched.email && loginFormik.errors.email && (
//           <div>{loginFormik.errors.email}</div>
//         )}

//         {/* Password Field Component */}
//         <Form.Control
//           type={showPassword ? "text" : "password"}
//           value={loginFormik.values.password}
//           placeholder="Enter Password"
//           onChange={loginFormik.handleChange}
//           onBlur={loginFormik.handleBlur}
//           name="password"
//         />
//         {/* Password error display if touched */}
//         {loginFormik.touched.password && loginFormik.errors.password && (
//           <div>{loginFormik.errors.password}</div>
//         )}

//         {/* Submit button */}
//         <Button
//           className="btn rounded-5 btn-primary btn-large centerButton my-4 w-100 text-black"
//           type="submit"
//           disabled={loginFormik.isSubmitting}
//         >
//           {loginFormik.isSubmitting ? "Submitting..." : "Sign in"}
//         </Button>
//         {/* Other buttons and components */}
//       </Form>
//       {/* Image Column */}
//     </div>
//   );
// };

// export default LoginFrom;
