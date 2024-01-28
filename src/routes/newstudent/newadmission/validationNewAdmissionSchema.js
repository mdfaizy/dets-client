import * as yup from "yup";

const validationEducationSchema = yup.object().shape({
  university_name: yup
    .string()
    .required("University name is required")
    .min(2, "University name should be at least 2 characters")
    .max(50, "University name should not exceed 50 characters"),
  course_applied_pursuing: yup
    .string()
    .required("Course information is required")
    .min(2, "Course information should be at least 2 characters")
    .max(50, "Course information should not exceed 50 characters"),
  year_semester_fee: yup
    .number()
    .typeError("Fee must be a number")
    .required("Fee is required")
    .positive("Fee must be a positive number")
    .integer("Fee must be an integer"),
  last_qualification: yup
    .string()
    .required("Last qualification is required")
    .min(2, "Last qualification should be at least 2 characters")
    .max(50, "Last qualification should not exceed 50 characters"),

  applicant_name: yup
    .string()
    .required("Applicant name is required")
    .min(2, "Applicant name should be at least 2 characters")
    .max(50, "Applicant name should not exceed 50 characters"),
  gender: yup.string().required("Select gender"),
  age: yup.number().required("Age is required"),
  category: yup.string().required("category is required"),

  student_photo: yup
    .mixed()
    .required("Patient photo is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value && value.size <= 5000000
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  religion: yup
    .string()
    .matches(
      /^[A-Za-z]+$/,
      "Religion must only contain alphabetical characters"
    )
    .required("Religion is required"),
  father_husband_name: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Father/Husband's name must only contain alphabetical characters and spaces"
    )
    .required("Father/Husband's name is required"),
  motherName: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "Mother's name must only contain alphabetical characters and spaces"
    )
    .required("Mother's name is required"),

  permanent_address: yup
    .string()
    .required("Permanent address is required")
    .min(5, "Address should be at least 5 characters")
    .max(100, "Address should not exceed 100 characters"),
  aadhar_no: yup
    .string()
    .matches(/^[0-9]{12}$/, "Invalid Aadhar card number. It must be 12 digits")
    .required("Aadhar card number is required"),
  voter_id_no: yup
    .string()
    .required("Voter ID number is required")
    .matches(/^[A-Z]{3}[0-9]{7}$/, "Invalid Voter ID number format"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  monthly_family_income: yup
    .number()
    .positive("Income must be a positive number")
    .required("Income is required"),
  mobileNo: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  bank_name: yup
    .string()
    .required("Bank name is required")
    .min(2, "Bank name should be at least 2 characters")
    .max(50, "Bank name should not exceed 50 characters"),
  branch_name: yup
    .string()
    .required("Branch name is required")
    .min(2, "Branch name should be at least 2 characters")
    .max(50, "Branch name should not exceed 50 characters"),

  account: yup
    .string()
    .required("Account number is required")
    .matches(/^\d{9,18}$/, "Invalid account number format"),
  ifsc_code: yup
    .string()
    .required("IFSC code is required")
    .matches(/^([A-Za-z]{4}\d{7})$/, "Invalid IFSC code format"),
  account_holder_name: yup
    .string()
    .required("Account holder's name is required")
    .min(2, "Account holder's name should be at least 2 characters")
    .max(50, "Account holder's name should not exceed 50 characters"),

  parent_name: yup
    .string()
    .required("Parent's name is required")
    .min(2, "Parent's name should be at least 2 characters")
    .max(50, "Parent's name should not exceed 50 characters"),

  relationship_with_guardian: yup
    .string()
    .required("Relationship with guardian is required")
    .min(2, "Relationship should be at least 2 characters")
    .max(50, "Relationship should not exceed 50 characters"),
  parent_occupation: yup
    .string()
    .required("Parent's occupation is required")
    .min(2, "Occupation should be at least 2 characters")
    .max(50, "Occupation should not exceed 50 characters"),
  parent_address: yup
    .string()
    .required("Address is required")
    .min(5, "Address should be at least 5 characters")
    .max(100, "Address should not exceed 100 characters"),
  parent_email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  parent_mobile_no: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      "Invalid mobile number. It must be 10 digits and only contain numbers"
    )
    .required("Enter mobile number"),
  aadhar_card_checked: yup.boolean().oneOf([true], "Aadhar card required"),

  aadhar_card_check: yup
    .mixed()
    .required("Aadhar  photo is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value && value.size <= 5000000
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),

  voter_id_card_checkbox: yup
    .mixed()
    .required("")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value && value.size <= 5000000
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),

  income_certificate_checkbox: yup
    .mixed()
    .required("Income photo is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value && value.size <= 5000000
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  // domicile_certificate_checkbox

  domicile_certificate_checkbox: yup
    .mixed()
    .required("Domicile photo is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value && value.size <= 5000000
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),

  patient_thumb_impression: yup
    .mixed()
    .required("Patient signature/thump impression is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value && value.size <= 5000000
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),

  i_have_declared: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "I have declared must only contain alphabetical characters and spaces"
    )
    .required("I have declared is required"),

  s_o_w_o: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "S/o/W/o/D/o must name  only contain alphabetical characters and spaces"
    )
    .required("S/o/W/o/D/o name is required"),

  R_o: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "R/o must only contain alphabetical characters and spaces"
    )
    .required("R/o is required"),

  place: yup
    .string()
    .matches(
      /^[A-Za-z\s]+$/,
      "place must only contain alphabetical characters and spaces"
    )
    .required("place is required"),

  date: yup.string().required("Enter Date"),
});

export default validationEducationSchema;
