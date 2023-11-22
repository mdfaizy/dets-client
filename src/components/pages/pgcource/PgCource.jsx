import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const PgCource = () => {
  const [formData, setFormData] = useState({
    frist_name: "",
    last_name: "",
    father_name: "",
    mother_name: "",
    date_of_birth: "",
    email_id: "",
    institution:"",
    stream: "",
  
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
  <>

<Col className="text-center">PG COURCE</Col>
    <Container>
      <Row>
  
        <Form.Group as={Col} md="4">
          <Form.Label>
            Frist Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="frist_name"
            value={formData.frist_name}
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
            name="last_name"
            id="last_name"
            value={formData.last_name}
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
            name="father_name"
            id="father_name"
            value={formData.father_name}
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
            name="mother_name"
            id="mother_name"
            value={formData.mother_name}
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
            name="email_id"
            id="email_id"
            value={formData.email_id}
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
            Stream <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            id="stream"
            name="stream"
            className="rounded-0"
            value={formData.stream}
            onChange={changeHandler}
          >
            <option value="">Select Exam</option>
            <option value="IT">IT</option>
            <option value="EIE">EIE</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>
          Institution<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="institution"
            id="institution"
            value={formData.institution}
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
        <Row>
          <Col md="4" className="text-center">
            <button
              type="sumbit"
              className="text-denger px-4 py-2 my-4 border-0   rounded-md"
            >
              Next
            </button>
          </Col>
        </Row>
      </Row>
    </Container>
  </>
  );
};

export default PgCource;
