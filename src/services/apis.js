export const BASE_URL = "http://localhost:8000/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  //   VERIFY_USER: BASE_URL + "/auth/:id/verify/:token"
  GET_USER: BASE_URL + "/auth/Get_Profile",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
};

//Job

export const Jobs = {
  POST_JOIN_JOB_API: BASE_URL + "/job/job",
  Get_User_Data: BASE_URL + "/job/getJob_ById",
  Get_User_Profile: BASE_URL + "/job/get_Profile",
  UPDATE_JOB_FORM: BASE_URL + "/job/update_job_form",
  // GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
};
export const newadmissionEndpoints = {
  POST_NEW_ADMISSION_API: BASE_URL + "/student/newAdmission",
  GET_PROFILE: BASE_URL + "/student/get_Profile",
  GET_NEW_ADMISSIOM_DATA: BASE_URL + "/student/getnewadmissionId",
  UPDATE_NEW_ADMISSION_FORM: BASE_URL + "/student/update_Admission_form_data",
};

export const Endpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  DELETE_JOB_DETAIL_API: BASE_URL + "/job/delete_id_jobstudent",
};

export const exitStudentEndpoints = {
  GET_USER_EXIT_PROFILE: BASE_URL + "/exit/getStudent",
  GET_EXIT_STUDENT_BY_ID: BASE_URL + "/exit/getExitStudentByID",
  UPDATE_EXIT_STUDENT: BASE_URL + "/exit/updateExitStudentById",
};
export const pgCourseEndpoints = {
  GET_PG_USER_PROFILE: BASE_URL + "/pgcourse/getstudent_profile",
  GET_PG_COURSE_BY_ID: BASE_URL + "/pgcourse/getPgCourseById",
  UPDATE_PG_STUDENT_BY_ID:BASE_URL+"/pgcourse/update-pgCourse-By-id"

};
