import { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import Cookies from "js-cookie"; // Import Cookies library
import './feedfrom.scss';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem("token"); // Get the token from local storage
  
    try {
      const response = await fetch("http://localhost:8000/api/v1/feedback/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData.data._id);
        // Handle success response
      } else {
        console.log("Form not submitted. Error status:", response.status);
        // Handle error response
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle network or other errors
    }
  };
  
  return (
    <div className="feedbaackTop-container">
     <div className="from-containt">

     <Form onSubmit={submitHandler} >
        <Form.Group controlId="title" as={Col} md="12">
          <Form.Label >Title<span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            placeholder="Enter Title.."
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" >
          <Form.Label>Description<span className="text-danger">*</span></Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            style={{ height: '150px' }}
            value={formData.description}
            placeholder="Enter description.."
            onChange={changeHandler}
            required
          />
        </Form.Group >

        <Button type="submit" className="reviewButton">Submit</Button>
      </Form>
     </div>
    </div>
  );
};

export default FeedbackForm;
