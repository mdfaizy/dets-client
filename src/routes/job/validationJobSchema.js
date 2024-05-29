// import * as yup from 'yup';

// // Define the validation schema using Yup
// const jobValidationSchema = yup.object().shape({
//   fullName: yup.yup
//   .string()
//   .required("Full  name is required")
//   .min(2, "Full  name should be at least 2 characters")
//   .max(50, "Full  name should not exceed 50 characters"),
//   companies_name: yup.string().
//   required('Companies Name is required')
//   .min(2, "Companies Name should be at least 2 characters")
//   .max(50, "Companies Name should not exceed 50 characters"),
//   email: yup.string().email('Invalid email address').required('Email is required'),
//   phone_no: yup
//     .string()
//     .required("Mobile number is required")
//     .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
//   home_city: yup.string()
//   .required('Home City is required')
//   .min(2, "Home City should be at least 2 characters")
//   .max(50, "Home City should not exceed 50 characters"),
 
//   companies_city: yup.string().required('Companies City is required'),
//   package_lpa: yup.string().required('Package LPA is required'),
//   job_role: yup.string().required('Job Role is required'),
//   selectType: yup.string().required('Select Type is required'),
//   totalApplyCompanies: yup.string().required('Total Apply Companies is required'),
//   noOfSelectInterview: yup.string().required('No Of Select Interview is required'),
//   companiesType: yup.string().required('Companies Type is required'),
// });

// export default jobValidationSchema;







import * as yup from 'yup';

// Define the validation schema using Yup
 const jobValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Full name should be at least 2 characters")
    .max(50, "Full name should not exceed 50 characters"),
  companies_name: yup.string()
    .required('Companies Name is required')
    .min(2, "Companies Name should be at least 2 characters")
    .max(50, "Companies Name should not exceed 50 characters"),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone_no: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  home_city: yup.string()
    .required('Home City is required')
    .min(2, "Home City should be at least 2 characters")
    .max(50, "Home City should not exceed 50 characters"),
  companies_city: yup.string().required('Companies City is required'),
  package_lpa: yup.string().required('Package LPA is required'),
  job_role: yup.string().required('Job Role is required'),
  selectType: yup.string().required('Select Type is required'),
  totalApplyCompanies: yup.string().required('Total Apply Companies is required'),
  noOfSelectInterview: yup.string().required('No Of Select Interview is required'),
  companiesType: yup.string().required('Companies Type is required'),
});

export default jobValidationSchema;
 


