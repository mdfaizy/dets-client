import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
const PgCource = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fristName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    date_of_birth: "",
    email: "",
    InstituteName:"",
    stream: "",
    cource: "",
    gender:"",
    category:"",
    allIndiaRank:"",
    session:"",
    exameType:"",
    categoryRank:"",
    InstituteCity:"",
  });

  const changeHandler = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    // Append each form field to formDataToSend
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/pgcource", {
        method: "POST",
        body: formDataToSend, 
        // Send formDataToSend instead of JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigate("/");
      } else {
        console.log("Form not submitted. Error status:", response.status);
        // Handle the error or display a message to the user
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle other error cases (e.g., network errors)
    }
  };

  return (
  <>
    <Container>

<Col className="text-center">PG COURCE</Col>
     <Row>
     <Form onSubmit={submitHandler}>
      <Row>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Frist Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="fristName"
            value={formData.fristName}
            placeholder="Enter Name.."
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Last Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="name"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            placeholder="Enter Name.."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Father Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="fatherName"
            id="fatherName"
            value={formData.fatherName}
            placeholder="Enter Father Name..."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Mother Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="motherName"
            id="motherName"
            value={formData.motherName}
            placeholder="Enter Mother Name..."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Email<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter email..."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Date of Birth<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={formData.date_of_birth}
            placeholder=""
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3">
          <Form.Label htmlFor="gender">
            Gender <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            id="gender"
            name="gender"
            className="rounded-0"
            value={formData.gender}
            onChange={changeHandler}
          >
            <option value="">Select Gender</option>
            <option value="Meal">Meal</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3">
          <Form.Label htmlFor="gender">
            Exame Type <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            id="exameType"
            name="exameType"
            className="rounded-0"
            value={formData.exameType}
            onChange={changeHandler}
          >
            <option value="">Select Exam</option>
            <option value="gate">GATE</option>
            <option value="cate">CATE</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-3">
          <Form.Label htmlFor="category">
          Category  <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            id="category"
            name="category"
            className="rounded-0"
            value={formData.category}
            onChange={changeHandler}
          >
            <option value="">Select Exam</option>
            <option value="general">General</option>
            <option value="sc">SCs</option>
            <option value="st">STs</option>
            <option value="obcs">OBCs</option>

          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
          All India Rank<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="allIndiaRank"
            id="allIndiaRank"
            value={formData.allIndiaRank}
            placeholder="Enter All India Rank..."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
          Stream<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="stream"
            id="stream"
            value={formData.stream}
            placeholder="Enter Institution..."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
            Session<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="session"
            id="session"
            value={formData.session}
            placeholder="Enter Your Session"
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
          Institute City<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="InstituteCity"
            id="InstituteCity"
            value={formData. InstituteCity}
            placeholder="Enter InstituteCity"
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
          Institute Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="InstituteName"
            id="InstituteName"
            value={formData.InstituteName}
            placeholder="Enter Institute Name."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>
        <Row>

          <Col md="12" className="text-center">
            <button
              type="sumbit"
              className="text-denger px-4 py-2 my-4 border-0   rounded-md"
            >
              SUMBIT
            </button>
          </Col>
        </Row>
        </Row>
     </Form>
     
     </Row>
    </Container>
  </>
  );
};

export default PgCource;
