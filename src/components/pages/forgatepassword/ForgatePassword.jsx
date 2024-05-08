// import  { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import { toast } from 'react-toastify'; // Import toast from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import the styles
// import { useNavigate } from 'react-router-dom';
// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);
// const navigator=useNavigate();
//   const handlePassword = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/auth/reset-password-token', {
//         //     forgotpassword
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         // If password reset is successful, navigate to the login page
//         navigator('/');
//       }
//       toast.success('Please check email', {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 2000,
//         closeButton: false,
//         style:{width:'200px'}
//       });

//       setMessage(result.message);
//       setShowAlert(true);
//     } catch (error) {
//       console.error('Error during forgot password:', error);

//       toast.error('An error occurred. Please try again later.', {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 3000,
//         closeButton: true,
//         style:{width:'200px'}
//       });
//     }
//   };

//   return (
//     <Container>
//       <Row className="mt-5">
//         <Col md={{ span: 6, offset: 3 }}>
//           <h2 className='text-center'>FORGOT PASSWORD</h2>
//           <Form>
//             <Form.Group controlId="formEmail">
//               <Form.Label>Email:</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary text-center mt-4 mb-2 " onClick={handlePassword}>
//               Submit
//             </Button>
//           </Form>
//           {showAlert && (
//             <Alert variant="info" className="mt-3">
//               {message}
//             </Alert>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ForgotPassword;

// import { Button, Form } from 'react-bootstrap';
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { forgotPassword } from "../../../services/apiFunction/authApi";
// import { useDispatch } from "react-redux";

// const ForgatePassword = () => {
//   const dispatch = useDispatch();
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     dispatch(forgotPassword(email, setemailSent));
//   };
//   const { loading } = useSelector((state) => state.auth);
//   const [emailSent, setemailSent] = useState(false);
//   const [email, setemail] = useState("");
//   return (
//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//       {loading ? (
//         <div className="custom-loader"></div>
//       ) : (
//         <div className="max-w-[500px] p-4 lg:p-8">
//           <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
//             {!emailSent ? "Reset your password" : "Check email"}
//           </h1>
//           <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
//             {!emailSent
//               ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
//               : `We have sent the reset email to ${email}`}
//           </p>
//           <Form onSubmit={handleOnSubmit}>
//             {!emailSent && (
//              <Row>

          

//                <Form.Group>
//                <Form.Label>
//                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                    Email Address <sup className="text-pink-200">*</sup>
//                  </p>
//                </Form.Label>
         
//                <Form.Control
//                  required
//                  type="email"
//                  name="email"
//                  placeholder="Enter email address"
//                  value={email}
//                  onChange={handleChange}
//                  className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full"
//                />
//              </Form.Group>

             
//               {/* <label className="w-full"> */}
//                 {/* <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                   Email Address <sup class="text-pink-200">*</sup>
//                 </p> */}
//                 {/* <input
//                   required=""
//                   type="email"
//                   name="email"
//                   placeholder="Enter email address"
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                   className="rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none w-full"
//                 ></input> */}
//               {/* </label> */}
//             )}
//             <button
//               type="submit"
//               className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
//             >
//               {!emailSent ? "Reset Password" : "Resend email"}
//             </button>

//             </Row>
//           </Form>
//           <div className="mt-6 flex items-center justify-between">
//             <Link to={"/login"}>
//               <p className="flex items-center gap-x-2 text-red">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   stroke-width="0"
//                   viewBox="0 0 24 24"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
//                 </svg>{" "}
//                 Back To Login
//               </p>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForgatePassword;

































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
            <Link to={"/login"}>
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
