// import  { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

//   const handlePassword = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/forgotpassword', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();
//       toast.success("Please check enail", {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 2000,
//         closeButton: false,
//         className: style.customToast,
//       });
//       setMessage(result.message);
//       setShowAlert(true);
//     } catch (error) {
//       console.error('Error during forgot password:', error);
//       toast.error("An error occurred. Please try again later.", {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 3000,
//         closeButton: true,
//         className: style.customErrorToast,
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






import  { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
const navigator=useNavigate();
  const handlePassword = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        // If password reset is successful, navigate to the login page
        navigator('/');
      }
      toast.success('Please check email', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: false,
        style:{width:'200px'}
      });

      setMessage(result.message);
      setShowAlert(true);
    } catch (error) {
      console.error('Error during forgot password:', error);

      toast.error('An error occurred. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        closeButton: true,
        style:{width:'200px'}
      });
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className='text-center'>FORGOT PASSWORD</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary text-center mt-4 mb-2 " onClick={handlePassword}>
              Submit
            </Button>
          </Form>
          {showAlert && (
            <Alert variant="info" className="mt-3">
              {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
