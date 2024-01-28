import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Allexitstudent = () => {
  const [formData, setFormData] = useState([]);

  //get data from back end a exit student
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/get_all_exit_student"
        );
        if (response.status === 200) {
          console.log(response); // Log the response object to the console
          setFormData(response.data.data); // Set the fetched data to the state variable 'formData'
        } else {
          console.error(
            "Failed to fetch admission data. Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData(); // Call the fetchData function when the component mounts (empty dependency array [])
  }, []);
  //   delete exit student function
  const handleDelete = async (id, index) => {
    console.log("delete ", id);
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/delete_id_exitstudent/${id}`
      );
      // delete_id_exitstudent
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
      <h2>All Exit Students Data</h2>
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

export default Allexitstudent;
