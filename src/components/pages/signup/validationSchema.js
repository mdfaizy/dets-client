// import * as yup from "yup";
// const validationSchema = yup.object().shape({
//   firstName: yup
//     .string()
//     .required("First Name is required")
//     .min(2, "First Name should be at least 2 characters")
//     .max(50, "First Name should not exceed 50 characters"),
//   lastName: yup
//     .string()
//     .required("Last Name is required")
//     .min(2, "Last Name should be at least 2 characters")
//     .max(50, "Last Name should not exceed 50 characters"),
//   email: yup.string().email("Invalid email address").required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(8, "Password should be at least 8 characters")
//     .max(15, "Password should not exceed 15 characters"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//     instructorKey: yup.string().when('accountType', {
//       is: 'Instructor',
//       then: yup.string()
//         .matches(/^ukdets@#1234$/, 'Invalid Instructor Key'),
//     }),
// });


// export default validationSchema;




import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  instructorKey: Yup.string().when('accountType', {
    is: 'Instructor',
    then: Yup.string().required('Teacher Key is required'),
    otherwise: Yup.string()
  })
});

export default validationSchema;
