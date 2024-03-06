// import { FcGoogle } from "react-icons/fc";
// // import style from "./sign.module.css";
// // import Card from "react-bootstrap/Card";
// import { useState } from "react";
// // import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// // import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import validationSchema from "./validationSchema";
// import { useFormik } from "formik";
// const SignupForm = (props) => {
//   const setIsLoggedIn = props.setIsLoggedIn;

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//   //   firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   function changeHandler(event) {
//     setFormData((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   }

//   const [showPassword, setShowPassword] = useState({
//     createPassword: false,
//     confirmPassword: false,
//   });

//   const handleClick = (buttonName) => {
//     setShowPassword({
//       ...showPassword,
//       [buttonName]: !showPassword[buttonName],
//     });
//   };
//   // const handleClick1 = (buttonName) => {
//   //   setShowPassword({
//   //     ...showPassword,
//   //     [buttonName]: !showPassword[buttonName],
//   //   });
//   // };
//   const signupFormik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: validationSchema,
//     submitHandler: (event) => {
//       console.log("Form submitted successfully:", event);
//       event.preventDefault();
//       // Check if passwords match
//       if (formData.password !== formData.confirmPassword) {
//         window.alert("Passwords do not match");
//         return;
//       }
//       // Send data to backend for user registration
//       axios
//         .post("http://localhost:8000/api/v1/signup", formData)
//         .then((response) => {
//           console.log("Response:", response.data);
//           setIsLoggedIn(false);
//           navigate("/LoginFrom");
//         })
//         .catch((error) => {
//           console.error("Error:", error.response.data);
//         });
//     },
//   });

//   // const submitHandler = (event) => {
//   //   event.preventDefault();
//   //   // Check if passwords match
//   //   if (formData.password !== formData.confirmPassword) {
//   //     console.error("Passwords do not match");
//   //     return;
//   //   }
//   //   // Send data to backend for user registration
//   //   axios
//   //     .post("http://localhost:8000/api/v1/signup", formData)
//   //     .then((response) => {
//   //       console.log("Response:", response.data);
//   //       setIsLoggedIn(false);
//   //       navigate("/LoginFrom");
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error:", error.response.data);
//   //     });
//   // };
//   return (
//     // <>
//     <Container>
//       <Row lg={12}>
//         <h1 className="text-center">CREATE ACCOUNT</h1>

//         <Row>
//           <Col className="">
//             <form onSubmit={signupFormik.submitHandler}>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group md={6}>
//                     <Form.Label>
//                       First Name<span className="text-danger">*</span>
//                     </Form.Label>
//                     {/* <Form.Control
//                       type="text"
//                       name="firstName"
//                       // value={formData.firstName}
//                       value={signupFormik.values.firstName}
//                       defaultValue={signupFormik.values.email}
//                       // onChange={changeHandler}
//                       onChange={signupFormik.handleChange}
//                       placeholder="Enter First name"
//                       className="rounded-0"
//                       isInvalid={
//                         signupFormik.touched.name && signupFormik.errors.firstName
//                       }
//                     />
//                     <Form.Control.Feedback type="invalid">
//                     {signupFormik.errors.firstName}
//                   </Form.Control.Feedback> */}

//                     <Form.Control
//                       type="text"
//                       name="firstName"
//                       value={signupFormik.values.firstName}
//                       onChange={signupFormik.handleChange}
//                       onBlur={signupFormik.handleBlur}
//                       placeholder="Enter First name"
//                       className="rounded-0"
//                       isInvalid={
//                         signupFormik.touched.firstName &&
//                         signupFormik.errors.firstName
//                       }
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {signupFormik.errors.firstName}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group md={6}>
//                     <Form.Label>
//                       Last Name<span className="text-danger">*</span>
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="lastName"
//                       onChange={changeHandler}
//                       value={formData.lastName}
//                       placeholder="Enter Last name"
//                       className="rounded-0"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group as={Col} md="12">
//                 <Form.Label>
//                   Email Address<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   placeholder="Enter email address"
//                   onChange={changeHandler}
//                   className="rounded-2"
//                 />
//               </Form.Group>

//               <Form.Group as={Col} md="12">
//                 <Form.Label>
//                   Create Password<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Col className="input-group">
//                   <Form.Control
//                     type={showPassword.password ? "text" : "password"}
//                     name="password"
//                     id="password"
//                     onChange={changeHandler}
//                     value={formData.password}
//                     placeholder="Enter Password"
//                   />
//                   <span
//                     className="input-group-text"
//                     onClick={() => handleClick("password")}
//                   >
//                     {showPassword.password ? (
//                       <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                     ) : (
//                       <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                     )}
//                   </span>
//                 </Col>
//               </Form.Group>

//               <Form.Group as={Col} md="12">
//                 <Form.Label>
//                   Confirm Password<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Col className="input-group">
//                   <Form.Control
//                     type={showPassword.confirmPassword ? "text" : "password"}
//                     name="confirmPassword"
//                     id="confirmPassword"
//                     onChange={changeHandler}
//                     value={formData.confirmPassword}
//                     placeholder="Confirm Password"
//                   />
//                   <span
//                     className="input-group-text"
//                     onClick={() => handleClick("confirmPassword")}
//                   >
//                     {showPassword.confirmPassword ? (
//                       <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                     ) : (
//                       <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                     )}
//                   </span>
//                 </Col>
//               </Form.Group>

//               <Col md={6} lg={12}>
//                 <Button
//                   className="btn rounded-5 btn-primary btn-large centerButton my-4 w-100 text-black"
//                   type="submit"
//                 >
//                   Create Account
//                 </Button>
//               </Col>

//               {/* Sign in with Google Button */}
//               <Col md={16} lg={12}>
//                 <Button
//                   className="btn rounded-5 btn-primary btn-large centerButton my-2 w-100 text-black "
//                   type="submit"
//                   style={{ fontSize: "17px" }}
//                 >
//                   <FcGoogle
//                     className="px-1"
//                     style={{ width: "50px", height: "25px" }}
//                   />
//                   Sign in with Google
//                 </Button>
//               </Col>
//             </form>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={6}>
//             <img
//               src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
//               alt=""
//               loading="lazy"
//               style={{ width: "600px", height: "400px", paddingLeft: "20px" }}
//             />
//           </Col>
//         </Row>
//       </Row>
//     </Container>
//     // {/* </> */}
//   );
// };

// export default SignupForm;
// import Tab from './Tab';



{/* <Form.Group as={Col} md="12">
                <Form.Label className="text-white">
                  Email Address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={signupFormik.values.email}
                  placeholder="Enter email address"
                  onChange={signupFormik.handleChange}
                  onBlur={signupFormik.handleBlur}
                  className="rounded-2"
                  isInvalid={
                    signupFormik.touched.email && signupFormik.errors.email
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {signupFormik.errors.email}
                </Form.Control.Feedback>
              </Form.Group> */}


{/* <Form.Group as={Col} md="12">
                <Form.Label className="text-white">
                  Create Password<span className="text-danger">*</span>
                </Form.Label>
                <Col className="input-group">
                  <Form.Control
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    onChange={signupFormik.handleChange}
                    value={signupFormik.values.password}
                    placeholder="Enter Password"
                    isInvalid={
                      signupFormik.touched.password &&
                      signupFormik.errors.password
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
                    {signupFormik.errors.password}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group> */}
{/* <Form.Group as={Col} md="12">
                <Form.Label className="text-white">
                  Confirm Password<span className="text-danger">*</span>
                </Form.Label>
                <Col className="input-group">
                  <Form.Control
                    type={showPassword.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    onChange={signupFormik.handleChange}
                    value={signupFormik.values.confirmPassword}
                    placeholder="Confirm Password"
                    isInvalid={
                      signupFormik.touched.confirmPassword &&
                      signupFormik.errors.confirmPassword
                    }
                  />
                  <span
                    className="input-group-text"
                    onClick={() => handleClick("confirmPassword")}>
                    {showPassword.confirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>
                  <Form.Control.Feedback type="invalid">
                    {signupFormik.errors.confirmPassword}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group> */}


{/* {accountType === 'Instructor' && (
          <div>
            <label>Instructor Key:</label>
            <input
              type="text"
              name="instructorKey"
              value={instructorKey}
              onChange={(e) => setInstructorKey(e.target.value)}
            />
          </div>
        )} */}

{/* {accountType === 'Instructor' && (
              <div>
                <label>Instructor Key:</label>
                <input
                  type="text"
                  name="instructorKey"
                  value={signupFormik.values.instructorKey}
                  onChange={signupFormik.handleChange}
                  onBlur={signupFormik.handleBlur}
                />
                {signupFormik.touched.instructorKey && signupFormik.errors.instructorKey && (
                  <div className="text-danger">{signupFormik.errors.instructorKey}</div>
                )}
              </div>
            )} */}



//   const signupFormik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       accountType: "Instructor",
//       instructorKey:import.meta.env.VITE_REACT_APP_instructorKey||'',
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {


//         // if (values.accountType === 'Instructor' && values.instructorKey !== 'ukdets@#1234') {

//         //   console.error('Instructor key is incorrect');
//         //   return;
//         // }

//         const response = await axios.post(
//           "http://localhost:8000/api/v1/signup",
//           values
//         );
//         console.log('Account Type:', values.accountType);
// console.log('Instructor Key:', values.instructorKey);

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











import style from "./sign.module.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState('Student');
  const [formData, setFormData] = useState({
    email: "",
    password: "",

    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

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
  const handleClick1 = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };
     

  function changeHandler(event) {
    const { name, value } = event.target;

    if (name === 'accountType') {
      setAccountType(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  const submitHandler = async (event) => {
    // event.preventDefault();
    // try {
    //   console.log('Submitting Data:', { accountType, formData });
    //   const response = await axios.post(
    //     "http://localhost:8000/api/v1/signup",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );


    event.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        accountType: accountType,
      };

      console.log('Submitting Data:', dataToSend);

      const response = await axios.post(
        "http://localhost:8000/api/v1/signup",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setIsLoggedIn(false);
      navigate("/LoginFrom");
    } catch (error) {
      console.error("Error occurred:", error);
    }
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
                  onClick={() => setAccountType("Student")}
                >
                  Student
                </Button>

                <Button
                  variant={accountType === "Instructor" ? "dark" : "outline-dark"}
                  className="rounded-full"
                  onClick={() => setAccountType("Instructor")}
                >
                  Teacher
                  {/* Instructor */}
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
                        value={formData.firstName}
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
                        value={formData.lastName}
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
                    value={formData.email}
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
          value={formData.password}
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

                {accountType === 'Instructor' && (
                  <Form.Group as={Col} md="12">
                    <Form.Label className="text-white">
                      Teacher Key<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={formData.instructorKey}
                      placeholder="Enter Instructor Key"
                      onChange={changeHandler}
                      name="instructorKey"
                      className="rounded-2"
                    />
                  </Form.Group>
                )}

                <Button
                  className={style.create_signup_button}
                  type="submit"
                >
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








// export default SignupForm;
// import style from "./sign.module.css";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import validationSchema from "./validationSchema";
// import { useFormik } from "formik";
// const SignupForm = (props) => {
//   const setIsLoggedIn = props.setIsLoggedIn;
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState({
//     createPassword: false,
//     confirmPassword: false,
//   });
//   const handleClick = (buttonName) => {
//     setShowPassword({
//       ...showPassword,
//       [buttonName]: !showPassword[buttonName],
//     });
//   };
//   const signupFormik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/signup",
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
//     <div className={style.sinnup_content}>
//     <Container className={style.sinnup_all_content}>
//       <Row lg={12}>
//         <h1 className={style.create_account}>CREATE ACCOUNT</h1>
//         <Row>
//           <Col className="">
//             <Form onSubmit={signupFormik.handleSubmit}>
//               <Row>
//                 <Col md={6}>
//                   <Form.Group md={6}>
//                     <Form.Label className="text-white">
//                       First Name<span className="text-danger">*</span>
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="firstName"
//                       value={signupFormik.values.firstName}
//                       onChange={signupFormik.handleChange}
//                       onBlur={signupFormik.handleBlur}
//                       placeholder="Enter First name"
//                       className="rounded-0"
//                       isInvalid={
//                         signupFormik.touched.firstName &&
//                         signupFormik.errors.firstName
//                       }
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {signupFormik.errors.firstName}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group md={6}>
//                     <Form.Label className="text-white">
//                       Last Name<span className="text-danger">*</span>
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="lastName"
//                       value={signupFormik.values.lastName}
//                       onChange={signupFormik.handleChange}
//                       onBlur={signupFormik.handleBlur}
//                       placeholder="Enter Last name"
//                       className="rounded-0"
//                       isInvalid={
//                         signupFormik.touched.lastName &&
//                         signupFormik.errors.lastName
//                       }
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {signupFormik.errors.lastName}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Form.Group as={Col} md="12">
//                 <Form.Label className="text-white">
//                   Email Address<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={signupFormik.values.email}
//                   placeholder="Enter email address"
//                   onChange={signupFormik.handleChange}
//                   onBlur={signupFormik.handleBlur}
//                   className="rounded-2"
//                   isInvalid={
//                     signupFormik.touched.email && signupFormik.errors.email
//                   }
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {signupFormik.errors.email}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="12">
//                 <Form.Label className="text-white">
//                   Create Password<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Col className="input-group">
//                   <Form.Control
//                     type={showPassword.password ? "text" : "password"}
//                     name="password"
//                     onChange={signupFormik.handleChange}
//                     value={signupFormik.values.password}
//                     placeholder="Enter Password"
//                     isInvalid={
//                       signupFormik.touched.password &&
//                       signupFormik.errors.password
//                     }
//                   />
//                   <span
//                     className="input-group-text"
//                     onClick={() => handleClick("password")}
//                   >
//                     {showPassword.password ? (
//                       <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                     ) : (
//                       <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                     )}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {signupFormik.errors.password}
//                   </Form.Control.Feedback>
//                 </Col>
//               </Form.Group>
//               <Form.Group as={Col} md="12">
//                 <Form.Label className="text-white">
//                   Confirm Password<span className="text-danger">*</span>
//                 </Form.Label>
//                 <Col className="input-group">
//                   <Form.Control
//                     type={showPassword.confirmPassword ? "text" : "password"}
//                     name="confirmPassword"
//                     onChange={signupFormik.handleChange}
//                     value={signupFormik.values.confirmPassword}
//                     placeholder="Confirm Password"
//                     isInvalid={
//                       signupFormik.touched.confirmPassword &&
//                       signupFormik.errors.confirmPassword
//                     }
//                   />
//                   <span
//                     className="input-group-text"
//                     onClick={() => handleClick("confirmPassword")}>
//                     {showPassword.confirmPassword ? (
//                       <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                       ) : (
//                       <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                     )}
//                   </span>
//                   <Form.Control.Feedback type="invalid">
//                     {signupFormik.errors.confirmPassword}
//                   </Form.Control.Feedback>
//                 </Col>
//               </Form.Group>

//               <Button
//                 className={style.create_signup_button}
//                 type="submit"
//                 disabled={signupFormik.isSubmitting}
//               >
//                 Create Account
//               </Button>

//               <Button
//                 className={style.create_signup_google_button}
//                 type="submit"
//                 style={{ fontSize: "17px" }}
//               >
//                 <FcGoogle
//                   className="px-1"
//                   style={{ width: "50px", height: "25px" }}
//                 />
//                 Sign in with Google
//               </Button>
//             </Form>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={6}>
//             <img
//               src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
//               alt=""
//               loading="lazy"
//               style={{ width: "600px", height: "400px", paddingLeft: "20px" }}
//             />
//           </Col>
//         </Row>
//       </Row>
//     </Container>

//     </div>

//   );
// };

// export default SignupForm;