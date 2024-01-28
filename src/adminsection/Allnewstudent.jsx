import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
const AllNewStudents = () => {
  const [formData, setFormData] = useState([]);
//get data new Admission
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/get_new_admission"
        );
        if (response.data.success) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch admission data");
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);
//delete function 
  const handleDelete = async (id, index) => {
    console.log("delete ", id);
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/delete_newadmission/${id}`
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
      <h2>All New Students Data</h2>



      
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

export default AllNewStudents;
