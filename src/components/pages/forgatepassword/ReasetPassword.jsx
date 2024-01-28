// // src/components/ResetPassword.js
// import  { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ResetPassword = () => {
//   const { token } = useParams();
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/v1/resetpassword', { token, password });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <input type="password" placeholder="Enter your new password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleResetPassword}>Submit</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default ResetPassword;


import  { useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { Container, Row, Col, Form, Button ,Alert} from 'react-bootstrap'; // Import Bootstrap components
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigator=useNavigate();
  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/resetpassword', { token, password });
      setMessage(response.data.message);

      if (response.data.success) {
        // If password reset is successful, navigate to the login page
        navigator('/loginfrom');
      }
      toast.success('Password seccusefull generate', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: false,
        style:{width:'300px'}
      });

    } catch (error) {
      setMessage(error.response.data.message);
      console.error("An error occurred",error);
      toast.error('An error occurred. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        closeButton: true,
        style:{width:'300px'}
      });
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className='text-center'>Reset Password</h2>
          <Form>
            <Form.Group controlId="formPassword">
              <Form.Label>New Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleResetPassword}>
              Submit
            </Button>
          </Form>
           {message && (
            <Alert variant="info" className="mt-3">
              {message}
            </Alert>
          )} 
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;


