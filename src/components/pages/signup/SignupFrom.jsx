
// // //===============---------------

// import style from "./sign.module.css";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup"
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// import { setSignupData } from "../../../redux/slices/authSlice";
// import { signUpFrom } from "../../../services/apiFunction/authApi";
// const SignupForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState({
//     createPassword: false,
//     confirmPassword: false,
//   });
//     const handleClick = (buttonName) => {
//       setShowPassword({
//         ...showPassword,
//         [buttonName]: !showPassword[buttonName],
//       });
//     };
//     const handleClick1 = (buttonName) => {
//       setShowPassword({
//         ...showPassword,
//         [buttonName]: !showPassword[buttonName],
//       });
//     };
//   const [accountType, setAccountType] = useState('Student');
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     confirmPassword: "",
  
//     instructorKey: "", // Assuming you have an initial value for accountType
//   });
//   const { firstName, lastName, email, password, confirmPassword } = formData;
//   // Handle input fields, when some value changes
//   const changeHandler = (e) => {
//     const { name, value } = e.target;
  
//     if (name === 'accountType') {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const signupData = { ...formData }; // Store form data in signupData object
//     dispatch(setSignupData(signupData)); // Dispatch setSignupData action
//     dispatch(signUpFrom(formData)); // Dispatch signUpFrom action
//     setFormData({ // Reset form fields after submission
//       email: "",
//       password: "",
//       firstName: "",
//       lastName: "",
//       confirmPassword: "",
//       accountType: "Student",
//       instructorKey: "",
//     });
   
//   };





//   return (
//     <div className={style.sinnup_content}>
//       <Container className={style.sinnup_all_content}>
//         <Row lg={12}>
//           <h1 className={style.create_account}>CREATE ACCOUNT</h1>
//           <Row>
//             <Col className="">
//               <div className="d-flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
//                 <Button
//                   variant={accountType === "Student" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setAccountType("Student")}
//                 >
//                   Student
//                 </Button>

//                 <Button
//                   variant={accountType === "Instructor" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setAccountType("Instructor")}
//                 >
//                   Teacher
               
//                 </Button>
//               </div>




// {/* <div className="d-flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
//                 <Button
//                   variant={accountType === "Student" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setFormData((prevData) => ({ ...prevData, accountType: "Student" }))}
//                 >
//                   Student
//                 </Button>
//                 <Button
//                   variant={accountType === "Instructor" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setFormData((prevData) => ({ ...prevData, accountType: "Instructor" }))}
//                 >
//                   Teacher
//                 </Button>
//               </div> */}

//               <Form onSubmit={submitHandler}>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label className="text-white">
//                         First Name<span className="text-danger">*</span>
//                       </Form.Label>
//                       <Form.Control
//                         value={formData.firstName}
//                         // value={firstName}
//                         name="firstName"
//                         placeholder="Enter First name"
//                         onChange={changeHandler}
//                         className="rounded-2"
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label className="text-white">
//                         Last Name<span className="text-danger">*</span>
//                       </Form.Label>
//                       <Form.Control
//                         value={formData.lastName}
//                         // value={lastName}
//                         name="lastName"
//                         placeholder="Enter Last name"
//                         onChange={changeHandler}
//                         className="rounded-2"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>


//                 <Form.Group as={Col} md="12">
//                   <Form.Label className="text-white">
//                     Email Address<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     value={formData.email}
//                     // value={email}
//                     placeholder="Enter Email address"
//                     onChange={changeHandler}
//                     name="email"
//                     className="rounded-2"
//                   />
//                 </Form.Group>

//     <Form.Group as={Col} md="12">
//       <Form.Label className="text-white">
//         Create Password<span className="text-danger">*</span>
//       </Form.Label>
//       <Col className="input-group">
//         <Form.Control
//           value={formData.password}
//   // value={password}
//           placeholder="Enter Password"
//           onChange={changeHandler}
//           name="password"
//           type={showPassword.password ? "text" : "password"}
//           className="rounded-2"
//         />
//          <span
//         className="input-group-text"
//         onClick={() => handleClick("password")}
//       >
//         {showPassword.password ? (
//           <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//         ) : (
//           <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//         )}
//       </span>
//       </Col>
//     </Form.Group>

// <Form.Group as={Col} md="12">
//                  <Form.Label>
//                    Confirm Password<span className="text-danger">*</span>
//                  </Form.Label>
//                  <Col className="input-group">
//                    <Form.Control
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

//                 {accountType === 'Instructor' && (
//                   <Form.Group as={Col} md="12">
//                     <Form.Label className="text-white">
//                       Teacher Key<span className="text-danger">*</span>
//                     </Form.Label>
//                     <Form.Control
//                       // value={formData.instructorKey}
// value={instructorKey}
//                       placeholder="Enter Instructor Key"
//                       onChange={changeHandler}
//                       name="instructorKey"
//                       className="rounded-2"
//                     />
//                   </Form.Group>
//                 )}

//                 <Button
//                   className={style.create_signup_button}
//                   type="submit"
//                 >
//                   Create Account
//                 </Button>

//                 <Button
//                   className={style.create_signup_google_button}
//                   type="submit"
//                   style={{ fontSize: "17px" }}
//                 >
//                   <FcGoogle
//                     className="px-1"
//                     style={{ width: "50px", height: "25px" }}
//                   />
//                   Sign in with Google
//                 </Button>

//               </Form>
//             </Col>
//             <Col xs={12} sm={6} md={6} lg={6}>
//               <img
//                 src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
//                 alt=""
//                 loading="lazy"
//                 style={{ width: "600px", height: "400px", paddingLeft: "20px" }}
//               />
//             </Col>
//           </Row>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SignupForm;























import style from "./sign.module.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignupData } from "../../../redux/slices/authSlice";
import { signUpFrom } from "../../../services/apiFunction/authApi";

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
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   confirmPassword: "",
  //   instructorKey: "",
  // });

  // const { firstName, lastName, email, password, confirmPassword, instructorKey } = formData;

  // const changeHandler = (e) => {
  // //   const { name, value } = e.target;
  // //   if (name === 'accountType') {
  // //     setAccountType(value);
  // //   } else {
  // //     setFormData((prevData) => ({
  // //       ...prevData,
  // //       [name]: value,
  // //     }));
  // //   }
  // // };

  // const { name, value } = e.target;

  //   if (name === 'accountType') {
  //     setAccountType(value);
  //   } else {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   }
  // };

  // // const submitHandler = (e) => {
  // //   e.preventDefault();
  // //   const signupData = { ...formData };
  // //   dispatch(setSignupData(signupData));
  // //   dispatch(signUpFrom(formData, navigate));
  // //   setFormData({
  // //     email: "",
  // //     password: "",
  // //     firstName: "",
  // //     lastName: "",
  // //     confirmPassword: "",
  // //     accountType: "Student",
  // //     instructorKey: "",
  // //   });
  // // };



  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const signupData = { ...formData };
  //   dispatch(setSignupData(signupData));
  //   dispatch(signUpFrom(formData, navigate));
  //   setFormData({
  //     email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     confirmPassword: "",
  //     instructorKey: "",
  //   });
  //   setAccountType("Student"); 
  // };



















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

  const { firstName, lastName, email, password, confirmPassword, instructorKey, accountType } = formData;

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
    dispatch(setSignupData(signupData));
    dispatch(signUpFrom(formData, navigate));

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
                  onClick={() => setFormData({ ...formData, accountType: "Student" })}
                >
                  Student
                </Button>
                <Button
                  variant={accountType === "Instructor" ? "dark" : "outline-dark"}
                  className="rounded-full"
                  onClick={() => setFormData({ ...formData, accountType: "Instructor" })}
                >
                  Teacher
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

                {accountType === 'Instructor' && (
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


// ---------++++++++++++++++++++++++





//  Without Redux     use in function--------------++++++++++++
// import style from "./sign.module.css";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup"
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignupForm = (props) => {
//   const setIsLoggedIn = props.setIsLoggedIn;
//   const navigate = useNavigate();

//   const [accountType, setAccountType] = useState('Student');
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",

//     firstName: "",
//     lastName: "",
//     confirmPassword: "",
//   });

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
//   const handleClick1 = (buttonName) => {
//     setShowPassword({
//       ...showPassword,
//       [buttonName]: !showPassword[buttonName],
//     });
//   };
     

//   function changeHandler(event) {
//     const { name, value } = event.target;

//     if (name === 'accountType') {
//       setAccountType(value);
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   }

//   const submitHandler = async (event) => {
//     // event.preventDefault();
//     // try {
//     //   console.log('Submitting Data:', { accountType, formData });
//     //   const response = await axios.post(
//     //     "http://localhost:8000/api/v1/signup",
//     //     formData,
//     //     {
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );


//     event.preventDefault();
//     try {
//       const dataToSend = {
//         ...formData,
//         accountType: accountType,
//       };

//       console.log('Submitting Data:', dataToSend);

//       const response = await axios.post(
//         "http://localhost:8000/api/v1/signup",
//         dataToSend,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Response:", response.data);
//       setIsLoggedIn(false);
//       navigate("/LoginFrom");
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   };

//   return (
//     <div className={style.sinnup_content}>
//       <Container className={style.sinnup_all_content}>
//         <Row lg={12}>
//           <h1 className={style.create_account}>CREATE ACCOUNT</h1>
//           <Row>
//             <Col className="">
//               <div className="d-flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
//                 <Button
//                   variant={accountType === "Student" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setAccountType("Student")}
//                 >
//                   Student
//                 </Button>

//                 <Button
//                   variant={accountType === "Instructor" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setAccountType("Instructor")}
//                 >
//                   Teacher
//                   {/* Instructor */}
//                 </Button>
//               </div>

//               <Form onSubmit={submitHandler}>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label className="text-white">
//                         First Name<span className="text-danger">*</span>
//                       </Form.Label>
//                       <Form.Control
//                         value={formData.firstName}
//                         name="firstName"
//                         placeholder="Enter First name"
//                         onChange={changeHandler}
//                         className="rounded-2"
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label className="text-white">
//                         Last Name<span className="text-danger">*</span>
//                       </Form.Label>
//                       <Form.Control
//                         value={formData.lastName}
//                         name="lastName"
//                         placeholder="Enter Last name"
//                         onChange={changeHandler}
//                         className="rounded-2"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>


//                 <Form.Group as={Col} md="12">
//                   <Form.Label className="text-white">
//                     Email Address<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     value={formData.email}
//                     placeholder="Enter Email address"
//                     onChange={changeHandler}
//                     name="email"
//                     className="rounded-2"
//                   />
//                 </Form.Group>

//     <Form.Group as={Col} md="12">
//       <Form.Label className="text-white">
//         Create Password<span className="text-danger">*</span>
//       </Form.Label>
//       <Col className="input-group">
//         <Form.Control
//           value={formData.password}
//           placeholder="Enter Password"
//           onChange={changeHandler}
//           name="password"
//           type={showPassword.password ? "text" : "password"}
//           className="rounded-2"
//         />
//          <span
//         className="input-group-text"
//         onClick={() => handleClick("password")}
//       >
//         {showPassword.password ? (
//           <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//         ) : (
//           <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//         )}
//       </span>
//       </Col>
//     </Form.Group>

// <Form.Group as={Col} md="12">
//                  <Form.Label>
//                    Confirm Password<span className="text-danger">*</span>
//                  </Form.Label>
//                  <Col className="input-group">
//                    <Form.Control
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

//                 {accountType === 'Instructor' && (
//                   <Form.Group as={Col} md="12">
//                     <Form.Label className="text-white">
//                       Teacher Key<span className="text-danger">*</span>
//                     </Form.Label>
//                     <Form.Control
//                       value={formData.instructorKey}
//                       placeholder="Enter Instructor Key"
//                       onChange={changeHandler}
//                       name="instructorKey"
//                       className="rounded-2"
//                     />
//                   </Form.Group>
//                 )}

//                 <Button
//                   className={style.create_signup_button}
//                   type="submit"
//                 >
//                   Create Account
//                 </Button>

//                 <Button
//                   className={style.create_signup_google_button}
//                   type="submit"
//                   style={{ fontSize: "17px" }}
//                 >
//                   <FcGoogle
//                     className="px-1"
//                     style={{ width: "50px", height: "25px" }}
//                   />
//                   Sign in with Google
//                 </Button>

//               </Form>
//             </Col>
//             <Col xs={12} sm={6} md={6} lg={6}>
//               <img
//                 src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
//                 alt=""
//                 loading="lazy"
//                 style={{ width: "600px", height: "400px", paddingLeft: "20px" }}
//               />
//             </Col>
//           </Row>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SignupForm;









// --------------================

// import style from "./sign.module.css";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup"
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";



// // import { useState } from "react";
// import { useDispatch } from "react-redux";
// // import { Button, Col, Container, Form, Row } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";
// import { setSignupData } from "../../../redux/slices/authSlice";
// import { signUpFrom } from "../../../services/apiFunction/authApi";

// const SignupForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [showPassword, setShowPassword] = useState({
//     createPassword: false,
//     confirmPassword: false,
//   });

//   const handleClick = (buttonName) => {
//     setShowPassword((prevShowPassword) => ({
//       ...prevShowPassword,
//       [buttonName]: !prevShowPassword[buttonName],
//     }));
//   };

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     confirmPassword: "",
//     accountType: "Student",
//     instructorKey: "",
//   });

//   const { firstName, lastName, email, password, confirmPassword, accountType, instructorKey } = formData;

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const signupData = { ...formData };
//     dispatch(setSignupData(signupData));
//     dispatch(signUpFrom(firstName, lastName, email, password, confirmPassword, navigate));
//     setFormData({
//       email: "",
//       password: "",
//       firstName: "",
//       lastName: "",
//       confirmPassword: "",
//       accountType: "Student",
//       instructorKey: "",
//     });
//   };

//   return (
//     <div className={style.signup_content}>
//       <Container className={style.signup_all_content}>
//         <Row lg={12}>
//           <h1 className={style.create_account}>CREATE ACCOUNT</h1>
//           <Row>
//             <Col className="">
//               <div className="d-flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
//                 <Button
//                   variant={accountType === "Student" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setFormData((prevData) => ({ ...prevData, accountType: "Student" }))}
//                 >
//                   Student
//                 </Button>
//                 <Button
//                   variant={accountType === "Instructor" ? "dark" : "outline-dark"}
//                   className="rounded-full"
//                   onClick={() => setFormData((prevData) => ({ ...prevData, accountType: "Instructor" }))}
//                 >
//                   Teacher
//                 </Button>
//               </div>
//               <Form onSubmit={submitHandler}>
//                 <Row>
//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label className="text-white">
//                         First Name<span className="text-danger">*</span>
//                       </Form.Label>
//                       <Form.Control
//                         value={firstName}
//                         name="firstName"
//                         placeholder="Enter First name"
//                         onChange={changeHandler}
//                         className="rounded-2"
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label className="text-white">
//                         Last Name<span className="text-danger">*</span>
//                       </Form.Label>
//                       <Form.Control
//                         value={lastName}
//                         name="lastName"
//                         placeholder="Enter Last name"
//                         onChange={changeHandler}
//                         className="rounded-2"
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Form.Group as={Col} md="12">
//                   <Form.Label className="text-white">
//                     Email Address<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Form.Control
//                     value={email}
//                     placeholder="Enter Email address"
//                     onChange={changeHandler}
//                     name="email"
//                     className="rounded-2"
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col} md="12">
//                   <Form.Label className="text-white">
//                     Create Password<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Col className="input-group">
//                     <Form.Control
//                       value={password}
//                       placeholder="Enter Password"
//                       onChange={changeHandler}
//                       name="password"
//                       type={showPassword.password ? "text" : "password"}
//                       className="rounded-2"
//                     />
//                     <span
//                       className="input-group-text"
//                       onClick={() => handleClick("password")}
//                     >
//                       {showPassword.password ? (
//                         <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                       ) : (
//                         <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                       )}
//                     </span>
//                   </Col>
//                 </Form.Group>
//                 <Form.Group as={Col} md="12">
//                   <Form.Label>
//                     Confirm Password<span className="text-danger">*</span>
//                   </Form.Label>
//                   <Col className="input-group">
//                     <Form.Control
//                       type={showPassword.confirmPassword ? "text" : "password"}
//                       name="confirmPassword"
//                       onChange={changeHandler}
//                       value={confirmPassword}
//                       placeholder="Confirm Password"
//                     />
//                     <span
//                       className="input-group-text"
//                       onClick={() => handleClick("confirmPassword")}
//                     >
//                       {showPassword.confirmPassword ? (
//                         <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                       ) : (
//                         <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                       )}
//                     </span>
//                   </Col>
//                 </Form.Group>
//                 {accountType === 'Instructor' && (
//                   <Form.Group as={Col} md="12">
//                     <Form.Label className="text-white">
//                       Teacher Key<span className="text-danger">*</span>
//                     </Form.Label>
//                     <Form.Control
//                       value={instructorKey}
//                       placeholder="Enter Instructor Key"
//                       onChange={changeHandler}
//                       name="instructorKey"
//                       className="rounded-2"
//                     />
//                   </Form.Group>
//                 )}
//                 <Button className={style.create_signup_button} type="submit">
//                   Create Account
//                 </Button>
//                 <Button className={style.create_signup_google_button} type="submit" style={{ fontSize: "17px" }}>
//                   <FcGoogle className="px-1" style={{ width: "50px", height: "25px" }} />
//                   Sign in with Google
//                 </Button>
//               </Form>
//             </Col>
//             <Col xs={12} sm={6} md={6} lg={6}>
//               <img src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg" alt="" loading="lazy" style={{ width: "600px", height: "400px", paddingLeft: "20px" }} />
//             </Col>
//           </Row>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SignupForm;


// =========================-


