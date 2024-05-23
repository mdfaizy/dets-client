import toast from "react-hot-toast";
import { setLoading, setJobData } from "../../redux/slices/jobSlice";
import { apiConnector } from "../apiConnector";
import { Jobs } from "../apis";
import axios from "axios";
import { BASE_URL } from "../apis";
const { POST_JOIN_JOB_API } = Jobs;
// const { Get_User_Data } = Jobs;

export function submitJobForm(formData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", POST_JOIN_JOB_API, formData);
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
//get job form data FindById
const getToken = () => localStorage.getItem("token")?.replace(/^"|"$/g, "");
export const fetchJobData = async (id) => {
  const token = getToken();
  try {
    const API_Url = `${BASE_URL}/job/getJob_ById/${id}`;
    const response = await axios.get(API_Url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log("response.data", response.data);
      return response.data.jobData;
    }
  } catch (error) {
    console.error("Error fetching job data:", error);
    throw new Error(`Error fetching job data: ${error.message}`);
  }
};

export const getAllJobStudents = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/job/get_all_Job_student");
    if (response.status === 200) {
      console.log("response.data.datajobdss",response.data.data)
      return response.data.data;
    } else {
      throw new Error(`Failed to fetch job students data. Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error fetching job students data: ${error.message}`);
  }
};

export const deleteJobStudent = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8000/api/v1/job/delete_id_jobstudent/${id}`);
    if (response.status === 200) {
      return true;
    } else {
      throw new Error(`Failed to delete PG student. Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error deleting PG student: ${error.message}`);
  }
};

