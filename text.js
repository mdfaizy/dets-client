// import React, { useState } from 'react';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');

//   const handleForgotPassword = async () => {
//     try {
//       // Make a POST request to your backend to initiate the forgot password process
//       const response = await fetch('/api/v1/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();
//       console.log(result); // Log the response from the server
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <button onClick={handleForgotPassword}>Submit</button>
//     </div>
//   );
// };

// export default ForgotPassword;















// import React, { useState } from 'react';

// const ResetPassword = () => {
//   const [token, setToken] = useState('');
//   const [password, setPassword] = useState('');

//   const handleResetPassword = async () => {
//     try {
//       // Make a POST request to your backend to reset the password
//       const response = await fetch('/api/v1/reset-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token, password }),
//       });

//       const result = await response.json();
//       console.log(result); // Log the response from the server
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <label>Token:</label>
//       <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
//       <label>New Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleResetPassword}>Reset Password</button>
//     </div>
//   );
// };

// export default ResetPassword;
