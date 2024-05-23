

// export const deleteJobStudent = async (id) => {
//   try {
//     const response = await axios.delete(`http://localhost:8000/api/v1/job/delete_id_jobstudent/${id}`);
//     if (response.status === 200) {
//      console.log("delete jov",response)
//       return response.data;

//     } else {
//       throw new Error(`Failed to delete job student. Status: ${response.status}`);
//     }
//   } catch (error) {
//     throw new Error(`Error deleting job student: ${error.message}`);
//   }
// };















export const getJobStudents = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/job/getJob_ById`);
    if (response.status === 200) {
      console.log("responsefg4r4.data.datahjhj",response.data)
      return response.data.data;
    } else {
      throw new Error(`Failed to fetch job students data. Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error fetching job students data: ${error.message}`);
  }
};

// const {token}=useSelector((state)=>state.auth);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestBody = {
//           token: token,
//         };
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/job/get_job_student",
//           requestBody,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.status === 200) {
//           setFormData(response.data.data);
//         } else {
//           console.error("Failed to fetch form data. Status:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };
//     fetchData();
//   }, [token]);