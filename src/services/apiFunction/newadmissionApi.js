import { toast } from "react-hot-toast";
const token = localStorage.getItem("token");
import { apiConnector } from "../apiConnector.js";
import { newadmissionEndpoints } from "../apis.js";
import axios from "axios";
const {
  GET_NEW_ADMISSIOM_DATA,
  UPDATE_NEW_ADMISSION_FORM,
  GET_ALL_NEW_ADMISSION_DATA,
  DELETE_NEW_ADMISSION_DATA_BY_ID,
  GET_PROFILE,
  FETCH_SINGLE_STUDENT_APPLICATION_DATA,
} = newadmissionEndpoints;

export const submitNewStudentForm = async (formData, navigate,token, setLoading) => {
  const formDataToSend = new FormData();
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  // Append each form field to formDataToSend
  for (let key in formData) {
    formDataToSend.append(key, formData[key]);
  }
  const toastId = toast.loading("Loading...");
  try {
    setLoading(true);
    const response = await axios.post(
      // "http://localhost:8000/api/v1/student/newAdmission",
      newadmissionEndpoints.SUMBIT_NEW_STUDENT_API,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cleanToken}`,
        },
      }
    );
    setLoading(false);
    toast.dismiss(toastId);
    navigate("/newAdmissiondata", { state: { apidata: response.data } });
    toast.success("Form  Successfully", {
      autoClose: 1500, 
    });
  } catch (error) {
    setLoading(false);
    toast.dismiss(toastId);
    toast.error("Error submitting form");
    console.error("Error occurred:", error);
  }
};
 
export const getNewAdmissionUserDetailsById = async (id) => {
  const token = localStorage.getItem('token');
  const cleanToken = token.replace(/^"|"$/g, "");
  const api_URL=`${GET_PROFILE}/${id}`
// const api_URL= `http://localhost:8000/api/v1/student/get_Profile/${id}`
  try {
    const response = await axios.get(api_URL, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
      },
    });
    console.log("Job Data",response.data);
    return response;
  } catch (error) {
    throw new Error(`Error fetching job students data: ${error.message}`);
  }
};

//fetch newAdmission Data single
// FETCH_SINGLE_STUDENT_APPLICATION_DATA
export const getnewadmissionByOne = async () => {
  try {
    // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    // const API_Url = `${GET_NEW_ADMISSIOM_DATA}/${id}`;
    const response = await apiConnector("GET",FETCH_SINGLE_STUDENT_APPLICATION_DATA ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response: " + response.data.Newadmission);
    return response.data.Newadmission;
  } catch (error) {
    console.error("Failed to fetch new admission", error);
  }
};

//get Find All Student
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
   
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch admission data");
    }
  } catch (error) {
    throw new Error(`Error fetching admission data: ${error.message}`);
  }
};
// getData new student a By Ka basic per
export const getnewadmissionId = async (id, token) => {
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_Url = `${GET_NEW_ADMISSIOM_DATA}/${id}`;
    const response = await axios.get(API_Url, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
      },
    });
    console.log("response: " + response.data.Newadmission);
    return response.data.Newadmission;
  } catch (error) {
    console.error("Failed to fetch new admission", error);
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
// delete admission data  Id ka Basic per
export const deleteNewAdmission = async (id) => {
  try {
    const api_Url = `${DELETE_NEW_ADMISSION_DATA_BY_ID}/${id}`;

    const response = await axios.delete(
      api_Url
      // `http://localhost:8000/api/v1/student/delete_newadmission/${id}`
    );
    console.log(response.data.data);
    if (response.status === 200) {
      console.log("responseDelete", response.data.data);
      return response.data.data;
    }
  } catch (error) {
    throw new Error(`Error deleting admission: ${error.message}`);
  }
};
