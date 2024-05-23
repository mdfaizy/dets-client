
import axios from "axios";


export const deleteexitStudent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/exit/delete_id_exitstudent/${id}`);
      console.log(response);
      if (response.status === 200) {
        return true;
      } else {
        throw new Error(`Failed to delete PG student. Status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error deleting PG student: ${error.message}`);
    }
  };