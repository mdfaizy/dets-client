import * as yup from "yup";
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name should be at least 2 characters")
    .max(50, "First Name should not exceed 50 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name should be at least 2 characters")
    .max(50, "Last Name should not exceed 50 characters"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters")
    .max(15, "Password should not exceed 15 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password should contain at least one digit, one lowercase letter, one uppercase letter"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default validationSchema;
