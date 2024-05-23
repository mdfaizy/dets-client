import axios from 'axios';






export const deletePgStudent = async (id) => {
    try {

      const response = await axios.delete(`http://localhost:8000/api/v1/pgcourse/delete_id_pgstudent/${id}`);
      if (response.status === 200) {
        return true;
      } else {
        throw new Error(`Failed to delete PG student. Status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error deleting PG student: ${error.message}`);
    }
  };