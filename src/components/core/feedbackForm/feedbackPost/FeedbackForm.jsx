import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./feedback.css";
// import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const FeedbackForm = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleRatingChange = (rating) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     rating: rating,
  //   }));
  // };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/feedback/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData.data._id);
        navigate("/");
      } else {
        console.log("Form not submitted. Error status:", response.status);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="feedbaackTop-container">
      <div className="from-containt">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title" as={Col} md="12">
            <Form.Label>
              Title<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              placeholder="Enter Title.."
              onChange={changeHandler}
              required
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>
              Description<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              style={{ height: "130px" }}
              value={formData.description}
              placeholder="Enter description.."
              onChange={changeHandler}
              required
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>

            <Form.Control
              type="number"
              name="rating"
              value={formData.rating}
              placeholder="Enter Ratnig Point..."
              onChange={changeHandler}
              required
            />
          </Form.Group>
          {/* <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            
            <Form.Control
              type="number"
              name="rating"
              value={formData.rating}
              placeholder="Enter Ratnig Point..."
              onChange={changeHandler}
              required
            />
            //  <StarRating className="w-25"
            //   rating={formData.rating}
            //   onRatingChange={handleRatingChange}
            // /> 
          </Form.Group> */}
          <div className="reviewButton">
            <Button type="submit">Submit</Button>
          </div>
          {/* <Button type="submit" className="reviewButton">
            Submit
          </Button> */}
        </Form>
      </div>
    </div>
  );
};

export default FeedbackForm;
