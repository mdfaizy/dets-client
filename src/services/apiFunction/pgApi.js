import axios from "axios";
import { setLoading, setPgData } from "../../redux/slices/pgStudentSlice";
import { pgCourseEndpoints } from "../apis";
import { apiConnector } from "../apiConnectors.js";
import toast from "react-hot-toast";
const {
  ALL_GET_STUDENT_PG_COURSE_BY_ID,
  DELETE_PG_STUDENT_BY_ID,
  GET_PG_COURSE_BY_ID,
  SUMBIT_PG_FORM_DATA,
  GET_PG_USER_PROFILE,
} = pgCourseEndpoints;
export function submitPGForm(formData, navigate, token) {
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector(
        "POST",
        SUMBIT_PG_FORM_DATA,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cleanToken}`,
          },
        }
      );
      console.log("response", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setPgData(formData));
      toast.success("Job application submitted successfully", {
        duration: 2000,
      });

      // Extract the necessary serializable data
      const responseData = response.data;

      navigate("/pgsumbitdata", { state: { apidata: responseData } });
    } catch (error) {
      console.error("Error submitting job form:", error);
      toast.error("Failed to submit job application");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

export const getPgUserDetailsById = async () => {
  const token = localStorage.getItem("token");
  const cleanToken = token.replace(/^"|"$/g, "");
  const api_URL = `${GET_PG_USER_PROFILE}`;
  // const api_URL= "http://localhost:8000/api/v1/job/get_Profile"
  try {
    const response = await axios.get(api_URL, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
      },
    });
    console.log("Pg Data", response.data);
    return response;
  } catch (error) {
    throw new Error(`Error fetching job students data: ${error.message}`);
  }
};

export const getAllPgStudentData = async () => {
  try {
    const API_URL = `${ALL_GET_STUDENT_PG_COURSE_BY_ID}`;
    const response = await apiConnector("GET", API_URL);
    return response.data.data;
  } catch (error) {
    throw new Error(`Error deleting PG student: ${error.message}`);
  }
};
export const getPgCourseById = async (id, token) => {
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_URL = `${GET_PG_COURSE_BY_ID}/${id}`;

    const response = await axios.get(
      API_URL,
      // axios.get(`http://localhost:8000/api/v1/student/getnewadmissionId/${id}`,
      {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      }
    );

    console.log("response: " + response);
    return response.data.pgdata;
  } catch (error) {
    console.error("Failed to fetch new admission", error);
  }
};
export const deletePgStudent = async (id) => {
  try {
    const API_URL = `${DELETE_PG_STUDENT_BY_ID}/${id}`;
    const response = await apiConnector("DELETE", API_URL);
    // const response = await axios.delete(`http://localhost:8000/api/v1/pgcourse/delete_id_pgstudent/${id}`);
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
