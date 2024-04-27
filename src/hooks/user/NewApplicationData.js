import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';

const NewApplicationData = () => {
  const [formData, setFormData] = useState({});
  const token = useSelector((state) => state.auth.token); // Move useSelector inside the component

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          token: token,
        };

        const response = await axios.post(
          "http://localhost:8000/api/v1/student/getnewadmissionId",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response);
        if (response.status === 200) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch form data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };
    fetchData();
  }, [token]); // Dependency array with token

  return (
    <>
    
    <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
};

export default NewApplicationData;
