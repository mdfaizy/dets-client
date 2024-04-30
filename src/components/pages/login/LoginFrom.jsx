// import style from "./login.module.css";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Cookies from "js-cookie";
// import axios from "axios";

// const LoginFrom = (props) => {
  // const setIsLoggedIn = props.setIsLoggedIn;
  // const setIsAdmin = props.setIsAdmin;
  // const setTeacher = props.setTeacher;
  // const navigate = useNavigate();

  // const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleClick = (buttonName) => {
  //   setShowPassword({
  //     ...showPassword,
  //     [buttonName]: !showPassword[buttonName],
  //   });
  // };

  // const changeHandler = (event) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/v1/signin",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     console.log(response.data);

  //     const token = response.data.token;

  //     if (response.status === 200) {
  //       const responseData = response.data;
  //       const token = responseData.token;

  //       // Save the token in local storage
  //       localStorage.setItem("token", token);
  //       console.log("faizy", responseData);

  //       props.sendDataToParent(token);

  //       if (
  //         responseData.user &&
  //         responseData.user.instructorKey === "ukdets@#1234" &&
  //         responseData.user.accountType === "Instructor"
  //       ) {
  //         setTeacher(true);
  //         console.log("Logged in as an Instructor", responseData.user.accountType);
  //       }

  //       if (import.meta.env.VITE_REACT_APP_ADMIN_TOKEN === token) {
  //         setIsAdmin(true);
  //       }
  //       setIsLoggedIn(true);
  //       navigate("/");
  //       toast.success("Login successful", {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 2000,
  //         closeButton: false,
  //         className: style.customToast,
  //       });
  //     } else {
  //       console.error("Login failed:", response.data);
  //       toast.error("Login failed. Please try again.", {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 2000,
  //         closeButton: false,
  //         style: { width: "300px" },
  //         className: style.customErrorToast,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //     toast.error("An error occurred. Please try again later.", {
  //       position: toast.POSITION.TOP_RIGHT,
  //       autoClose: 3000,
  //       closeButton: true,
  //       style: { width: "300px" },
  //       className: style.customErrorToast,
  //     });
  //   }
  // };



//-----------Redux 

// import style from "./login.module.css";
// import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import { useState } from "react";
// import { useDispatch } from "react-redux";
// // import {  useNavigate } from "react-router-dom";
// import { login } from "../../../services/apiFunction/authApi";

// const LoginFrom = ({ setIsAdmin, setTeacher }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   // const setIsAdmin = props.setIsAdmin;
//   // const setTeacher = props.setTeacher;
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//     const handleClick1 = (buttonName) => {
//       setShowPassword({
//         ...showPassword,
//         [buttonName]: !showPassword[buttonName],
//       });
//     };
//   const { email, password } = formData;
//   const changeHandler = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       // Dispatch login action
//       // await dispatch(login(email, password,setIsAdmin, setTeacher, navigate));
//       await dispatch(login(email, password, navigate, setIsAdmin, setTeacher));
//     } catch (error) {
//       console.error("Login error:", error);
//       // Handle login error
//     }
//   };

//   return (
//     <div className={style.login_top_content}>
//       <Container>
//         <Row className={style.login_content}>
//           <h1 className={style.login_heading_text}>SIGN IN</h1>
//           <Col>
//             <Form onSubmit={submitHandler}>
//               <Form.Group as={Col} md="12">
//                 <Form.Label className="text-white">
//                   Email Address
//                   <span className="text-danger">*</span>
//                 </Form.Label>
//                 <Form.Control
//                   value={formData.email}
//                   placeholder="Enter Email address"
//                   onChange={changeHandler}
//                   name="email"
//                   className="rounded-2"
//                 />
//               </Form.Group>

//               <Form.Group as={Col} md="12" className="rounded-2">
//                 <Form.Label className="text-white">
//                   Password
//                   <span className="text-danger">*</span>
//                 </Form.Label>
//                 <Col className="input-group">
//                   <Form.Control
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     placeholder="Enter Password..."
//                     onChange={changeHandler}
//                     name="password"
//                   />
//                   <span
//                     className="input-group-text"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                     ) : (
//                       <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                     )}
//                   </span>
//                 </Col>
//               </Form.Group>
//               <Link to="/forgatepassword" className={style.linkWithoutDecoration}>
//                 <p className={style.forgate_password}>Forgot Password</p>
//               </Link>
//               <Col md={6} lg={12}>
//                 <Button className={style.signin_button} type="submit">
//                   Sign in
//                 </Button>
//               </Col>
//               <Col md={16} lg={12}>
//                 <Button
//                   className={style.google_signin}
//                   type="submit"
//                 >
//                   <FcGoogle
//                     className="px-1"
//                     style={{ width: "50px", height: "25px" }}
//                   />
//                   Sign in with Google
//                 </Button>
//               </Col>
//             </Form>
//           </Col>
//           <Col xs={12} sm={6} md={6} lg={6}>
//             <img
//               src="https://img.freepik.com/premium-vector/business-data-information-illustration_251005-479.jpg"
//               alt=""
//               loading="lazy"
//               style={{
//                 width: "600px",
//                 height: "400px",
//                 paddingLeft: "20px",
//                 borderRadius: "10px",
//               }}
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default LoginFrom;





















///---------------------------------





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
import {login} from "../../../services/apiFunction/authApi";

const LoginFrom = ({ setIsAdmin, setTeacher }) => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [showPassword, setShowPassword] = useState(false);

  // const changeHandler = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };


  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Dispatch login action
  //     // await dispatch(login(email, password,setIsAdmin, setTeacher, navigate));
  //     await dispatch(login(email, password, navigate, setIsAdmin, setTeacher));
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     // Handle login error
  //   }
  // };


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

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(login(email, password,setIsAdmin, setTeacher, navigate));
  // };

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
              <Link to="/forgatepassword" className={style.linkWithoutDecoration}>
                <p className={style.forgate_password}>Forgot Password</p>
              </Link>
              <Col md={6} lg={12}>
                <Button className={style.signin_button} type="submit">
                  Sign in
                </Button>
              </Col>
              <Col md={16} lg={12}>
                <Button
                  className={style.google_signin}
                  type="submit"
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
