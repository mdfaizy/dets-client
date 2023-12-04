// ShowFormData.js

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './ShowFormData.css';
// import Cookies from 'js-cookie';

function ShowFormData() {
  const [formData, setFormData] = useState({});

const {id} =useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/getnewadmission/${id}`, {
          method: 'GET',
        });
             console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setFormData(data.data);
        } else {
          console.error('Failed to fetch form data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="form-data-container">
      <h1>Form Data</h1>
      <div className="form-field">
        <p><strong>Name:</strong> {formData.firstName}</p>
      </div>
      
      <div className="form-field">
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
      <div className="form-field">
        <p><strong>Date of Birth:</strong> {formData.date_of_birth}</p>
      </div>
      {/* Render other form fields as needed */}
    </div>
  );
}

export default ShowFormData;
