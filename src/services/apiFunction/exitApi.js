

import { toast } from "react-hot-toast";

// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
import { setLoading,setExitData } from "../../redux/slices/exitSlice.js";
import { apiConnector } from "../apiConnector";

import { exitStudentEndpoints } from "../apis.js";
const {
  GET_DATA_ALL_EXIT_STUDENT,
  GET_EXIT_STUDENT_BY_ID,
  // GET_USER_EXIT_PROFILE,
  UPDATE_EXIT_STUDENT,
  DELETE_JOB_DATA_BY_ID_API,
  SUMBIT_EXIT_STUDENT
} = exitStudentEndpoints;


export function submitExitForm(formData, navigate, token) {
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector(
        "POST",
        SUMBIT_EXIT_STUDENT,
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

      dispatch(setExitData(formData));
      toast.success("Job application submitted successfully", {
        duration: 2000,
      });

      const responseData = response.data;
      navigate("/exitsumbitdata", { state: { apidata: responseData } });
  
    } catch (error) {
      console.error("Error submitting job form:", error);
      toast.error("Failed to submit job application");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
// all exit student fetch allData
export const getAllExitStudent = async () => {
  // const API_URL=`${}`
  try {
    const response = await apiConnector("GET", GET_DATA_ALL_EXIT_STUDENT);
    console.log("respose", response);
    return response.data.data;
  } catch (error) {
    throw new Error(`Error fetching admission data: ${error.message}`);
  }
};

export const deleteexitStudent = async (id) => {
  const API_URL = `${DELETE_JOB_DATA_BY_ID_API}/${id}`;
  try {
    // const response = await axios.delete(
    //   `http://localhost:8000/api/v1/exit/delete_id_exitstudent/${id}`
    // );
    const response = await apiConnector("DELETE", API_URL);
    console.log(response);
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
//fetch data in exit student in basic on By  ID
export const getExitStudentByID = async (id, token) => {
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  try {
    const API_URL = `${GET_EXIT_STUDENT_BY_ID}/${id}`;
    const response = await apiConnector("GET", API_URL, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
      },
    });
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch new admission", error);
  }
};

export const updateExitDataById = async (e, id, formData, token, navigate) => {
  e.preventDefault();
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_Url = `${UPDATE_EXIT_STUDENT}/${id}`;

    // const { data: res } = await axios.put(
    const response = await apiConnector(API_Url, formData, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Form submitted successfully:", response);
    navigate("/", { state: { apidata: response } });
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
