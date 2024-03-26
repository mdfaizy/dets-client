import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
const Allstudentjob = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/job/get_all_Job_student');
        if (response.status === 200) {
            console.log(response);
          setFormData(response.data.data);
          
        } else {
          console.error('Failed to fetch admission data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching admission data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id, index) => {
    console.log("delete ", id);
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/job/delete_newadmission/${id}`
      );
      console.log("responseDelete", responseDelete);
      const updatedFormData = [...formData];
      updatedFormData.splice(index, 1);
      setFormData(updatedFormData);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h2>All Jobs Students Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Stream</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.stream}</td>
              <td>{item.email}</td>
             
              <td>
              <button onClick={() => handleDelete(item._id, index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Allstudentjob

// 