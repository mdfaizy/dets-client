import toast from "react-hot-toast";
import { setLoading, setJobData } from "../../redux/slices/jobSlice";
import { apiConnector } from "../apiConnectors.js";
const token = localStorage.getItem("token");
import axios from "axios";
// const { POST_JOIN_JOB_API } = Jobs;
import { JpbEndpoints } from "../apis";
const {
  GET_USER_PROFILE_API,
  GET_STUDENT_JOB_BY_ID_API,
  DELETE_JOB_DETAIL_API,
  GET_ALL_STUDENT_FOR_JOB_API,
  UODATE_JOB_DETAIL_BY_ID_API,
  POST_FORM_DETAIL_BY_STUDENT_API,
  GET_JOB_APPLICATION_DATA_FINDBY_ONE
} = JpbEndpoints;
export function submitJobForm(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector(
        "POST",
        POST_FORM_DETAIL_BY_STUDENT_API,
        formData
      );
      console.log("response", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setJobData(formData));
      toast.success("Job application submitted successfully");
      navigate("/jobsumbitdata", { state: { apidata: response.data } });
    } catch (error) {
      console.error("Error submitting job form:", error);
      toast.error("Failed to submit job application");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

export const getJobUserDetailsById = async () => {
  const token = localStorage.getItem("token");
  const cleanToken = token.replace(/^"|"$/g, "");
  const api_URL = `${GET_USER_PROFILE_API}`;
  // const api_URL= "http://localhost:8000/api/v1/job/get_Profile"
  try {
    const response = await axios.get(api_URL, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
      },
    });
    console.log("Job Data", response.data);
    return response;
  } catch (error) {
    throw new Error(`Error fetching job students data: ${error.message}`);
  }
};
export const getJobStudentByOne = async () => {
  try {
    // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    // const API_Url = ` GE_DATA_ONLY_USER_EXIT_DATA_API`;
    const response = await apiConnector(
      "GET",
      GET_JOB_APPLICATION_DATA_FINDBY_ONE,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("exit dataa",response);
    return response.data
  } catch (error) {
    console.error("Failed to fetch job data", error);
  }
};

// fetch all data in Job Student
export const getAllJobStudents = async () => {
  try {
    const API_URL = `${GET_ALL_STUDENT_FOR_JOB_API}`;
    const response = await apiConnector("GET", API_URL);
    // await axios.get(
    //   "http://localhost:8000/api/v1/job/get_all_Job_student"
    // );
    console.log("getAllJobStudents", response.data.data);
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error(
        `Failed to fetch job students data. Status: ${response.status}`
      );
    }
  } catch (error) {
    throw new Error(`Error fetching job students data: ${error.message}`);
  }
};
// fetch student job form data FindById
export const getStudentForJobById = async (id, token) => {
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  try {
    const API_URL = `${GET_STUDENT_JOB_BY_ID_API}/${id}`;
    console.log(token, id);
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
      },
    });
    console.log(response.data.jobData);
    return response.data.jobData;
  } catch (error) {
    console.error("Failed to fetch new admission", error);
  }
};

export const deleteJobStudent = async (id) => {
  try {
    const API_URL = `${DELETE_JOB_DETAIL_API}/${id}`;
    const response = await axios.delete(
      // `http://localhost:8000/api/v1/job/delete_id_jobstudent/${id}`
      API_URL
    );
    if (response.status === 200) {
      return true;
    } else {
      throw new Error(
        `Failed to delete PG student. Status: ${response.status}`
      );
    }
  } catch (error) {
    throw new Error(`Error deleting PG student: ${error.message}`);
  }
};

// UODATE_JOB_DETAIL_BY_ID_API

export const updateJobStudentData = async (
  e,
  id,
  formData,
  token,
  navigate
) => {
  e.preventDefault();
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_Url = `${UODATE_JOB_DETAIL_BY_ID_API}/${id}`;

    const { data: res } = await axios.put(API_Url, formData, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Form submitted successfully:", res);
    navigate("/", { state: { apidata: res } });
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
