import { toast } from "react-hot-toast";

// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
import { setLoading } from "../../redux/slices/authSlice";
import { apiConnector } from "../apiConnector.js";
// import { newadmissionEndpoints } from "../apis"
import { newadmissionEndpoints } from "../apis.js";

// import { setLoading } from "./path-to-your-profile-slice";

const {
  POST_NEW_STUDENT_API,
  GET_NEW_ADMISSIOM_DATA,
  UPDATE_NEW_ADMISSION_FORM,
  GET_ALL_NEW_ADMISSION_DATA,
  DELETE_NEW_ADMISSION_DATA_BY_ID,
} = newadmissionEndpoints;

export const addNewStudent = async (data, token, dispatch) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    dispatch(setLoading(true)); // Dispatch setLoading action to indicate loading state

    const response = await apiConnector("POST", POST_NEW_STUDENT_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    console.log("CREATE COURSE API RESPONSE............", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details");
    }

    toast.success("Course Details Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error);
    toast.error(error.message);
  } finally {
    dispatch(setLoading(false)); // Dispatch setLoading action to indicate loading state is false
    toast.dismiss(toastId);
  }
  return result;
};

import axios from "axios";
const token = localStorage.getItem("token");
export const getAllNewStudent = async () => {
  try {
    // const response = await axios.get(
    //   `http://localhost:8000/api/v1/student/get_new_admission`,
    // GET_ALL_NEW_ADMISSION_DATA:BASE_URL+'/student/get_new_admission',
    const response = await apiConnector("GET", GET_ALL_NEW_ADMISSION_DATA, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("responce", response);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch admission data");
    }
  } catch (error) {
    throw new Error(`Error fetching admission data: ${error.message}`);
  }
};
// get data new student a By Ka basic per
export const getnewadmissionId = async (id, token) => {
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_Url = `${GET_NEW_ADMISSIOM_DATA}/${id}`;

    const response = await axios.get(
      API_Url,
      // axios.get(`http://localhost:8000/api/v1/student/getnewadmissionId/${id}`,
      {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      }
    );

    console.log("response: " + response);
    return response.data.Newadmission;
  } catch (error) {
    console.error("Failed to fetch new admission", error);
  }
};
// delete admission data  Id ka Basic per
export const deleteNewAdmission = async (id) => {
  try {
    const api_Url = `${DELETE_NEW_ADMISSION_DATA_BY_ID}/${id}`;

    const response = await axios.delete(
      api_Url
      // `http://localhost:8000/api/v1/student/delete_newadmission/${id}`
    );
    // console.log(response);
    if (response.status === 200) {
      console.log("responseDelete", response.data.data);
      return response.data.data;
    }
  } catch (error) {
    throw new Error(`Error deleting admission: ${error.message}`);
  }
};

// updateNewAdmissionData
export const updateNewAdmissionData = async (
  e,
  id,
  formData,
  token,
  navigate
) => {
  e.preventDefault();
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_Url = `${UPDATE_NEW_ADMISSION_FORM}/${id}`;

    const { data: res } = await axios.put(API_Url, formData, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Form submitted successfully:", res);
    navigate("/newAdmissiondata", { state: { apidata: res } });
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
