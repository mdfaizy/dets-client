import axios from 'axios';

export const getAllJobStudents = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/job/get_all_Job_student");
    if (response.status === 200) {
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
      return response.data;
    } else {
      throw new Error(`Failed to delete job student. Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error deleting job student: ${error.message}`);
  }
};
