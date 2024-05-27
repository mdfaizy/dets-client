import axios from 'axios';

import { pgCourseEndpoints } from '../apis';
import { apiConnector } from '../apiConnector';

const {ALL_GET_STUDENT_PG_COURSE_BY_ID,DELETE_PG_STUDENT_BY_ID,GET_PG_COURSE_BY_ID}=pgCourseEndpoints;





export const getAllPgStudentData=async()=>{
  try{
    const API_URL=`${ALL_GET_STUDENT_PG_COURSE_BY_ID}`;
    const response= await apiConnector('GET',API_URL);
    return response.data;

  }catch(error){
    throw new Error(`Error deleting PG student: ${error.message}`);
  }
}





export const getPgCourseById = async (id, token) => {
  try {
    const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
    const API_URL=`${GET_PG_COURSE_BY_ID}/${id}`

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
const API_URL =`${DELETE_PG_STUDENT_BY_ID}/${id}`;
const response= await apiConnector('DELETE', API_URL)
      // const response = await axios.delete(`http://localhost:8000/api/v1/pgcourse/delete_id_pgstudent/${id}`);
      if (response.status === 200) {
        return true;
      } else {
        throw new Error(`Failed to delete PG student. Status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error deleting PG student: ${error.message}`);
    }
  };