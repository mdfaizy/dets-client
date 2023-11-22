import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Job = () => {
  const [formData, setFormData] = useState({
    employee_name: "",
   
    select_company:"",
    apply_your_company_no:"",
    company_name:"",
    company_city:"",
    package_lpa:"",
    job_role:"",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
   <>
        <Col className="text-center">JOB</Col>

    <Container>
      <Row>
        <Form.Group as={Col} md="4">
          <Form.Label>
          Employee Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name=" employee_name"
            value={formData. employee_name}
            placeholder="Enter Employee Name.."
            onChange={changeHandler}
          />
        </Form.Group>
        {/* <Form.Group as={Col} md="4">
          <Form.Label>
          Select Company<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="name"
            name="select_company"
            id="select_company"
            value={formData.select_company}
            placeholder=""
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group> */}

        <Form.Group as={Col} md="4">
          <Form.Label>
          Company Name<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="company_name"
            id="company_name"
            value={formData.company_name}
            placeholder="Enter ..."
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>
          company_city<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="company_city"
            id="company_city"
            value={formData.company_city}
            placeholder=""
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>
          Package lpa<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="package_lpa"
            id="package_lpa"
            value={formData.package_lpa}
            placeholder=""
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>
            JOB ROLE<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            name="job_role"
            id="job_role"
            value={formData.job_role}
            placeholder=""
            onChange={changeHandler}
            className="rounded-2"
          />
        </Form.Group>

        <Form.Group as={Col} md="4" className="mb-3">
          <Form.Label htmlFor="select_company">
          Select Company <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            id="select_company"
            name="select_company"
            className="rounded-0"
            value={formData.select_company}
            onChange={changeHandler}
          >
            <option value="">Select Exam</option>
            <option value="IT">IT</option>
            <option value="EIE">EIE</option>
          </Form.Select>
        </Form.Group>
        {/* <Form.Group as={Col} md="4">
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
        </Form.Group> */}

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

export default Job;
