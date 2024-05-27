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
  GET_STUDENT_JOB_BY_ID_API: BASE_URL + "/job/getJob_ById",
  Get_User_Profile: BASE_URL + "/job/get_Profile",
  UPDATE_JOB_FORM: BASE_URL + "/job/update_job_form",
  // GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
};
//all api for new Admission
export const newadmissionEndpoints = {
  POST_NEW_ADMISSION_API: BASE_URL + "/student/newAdmission",
  GET_PROFILE: BASE_URL + "/student/get_Profile",
  GET_NEW_ADMISSIOM_DATA: BASE_URL + "/student/getnewadmissionId",
  UPDATE_NEW_ADMISSION_FORM: BASE_URL + "/student/update_Admission_form_data",
  GET_ALL_NEW_ADMISSION_DATA: BASE_URL + "/student/get_new_admission",
  DELETE_NEW_ADMISSION_DATA_BY_ID: BASE_URL + "/student/delete_newadmission",
};
//all api for student jo
export const JpbEndpoints = {
  POST_FORM_DETAIL_BY_STUDENT_API: BASE_URL + "/job/job",
  GET_USER_DETAILS_API: BASE_URL + "/job/getUserDetails",
  GET_STUDENT_JOB_BY_ID_API: BASE_URL + "/job/getJob_ById",
  DELETE_JOB_DETAIL_API: BASE_URL + "/job/delete_id_jobstudent",
  GET_ALL_STUDENT_FOR_JOB_API: BASE_URL + "/job/get_all_Job_student",
  UODATE_JOB_DETAIL_BY_ID_API: BASE_URL + "/job/update_job_form",
};

export const exitStudentEndpoints = {
  GET_USER_EXIT_PROFILE: BASE_URL + "/exit/getStudent",
  GET_EXIT_STUDENT_BY_ID: BASE_URL + "/exit/getExitStudentByID",
  UPDATE_EXIT_STUDENT: BASE_URL + "/exit/updateExitStudentById",
  DELETE_JOB_DATA_BY_ID_API: BASE_URL + "/exit/delete_id_exitstudent",
  GET_DATA_ALL_EXIT_STUDENT: BASE_URL + "/exit/get_all_exit_student",
};
export const pgCourseEndpoints = {
  GET_PG_USER_PROFILE: BASE_URL + "/pgcourse/getstudent_profile",
  GET_PG_COURSE_BY_ID: BASE_URL + "/pgcourse/getPgCourseById",
  UPDATE_PG_STUDENT_BY_ID: BASE_URL + "/pgcourse/update-pgCourse-By-id",
  ALL_GET_STUDENT_PG_COURSE_BY_ID:
    BASE_URL + "/pgcourse/get_all_pgcource_student",
  DELETE_PG_STUDENT_BY_ID: BASE_URL + "pgcourse/delete_id_pgstudent",
};
