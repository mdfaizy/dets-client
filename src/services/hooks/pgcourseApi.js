import axios from 'axios';

export const getAllPgStudents = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/pgcourse/get_all_pgcource_student');
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error(`Failed to fetch PG students data. Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error fetching PG students data: ${error.message}`);
  }
};

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

export const updatePgStudent = async (id, data) => {
  try {
    const response = await axios.put(`http://localhost:8000/api/v1/pgcourse/update_pg_cource/${id}`, data);
    if (response.status === 200) {
      return response.data.success;
    } else {
      throw new Error(`Failed to update PG student. Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error updating PG student: ${error.message}`);
  }
};
