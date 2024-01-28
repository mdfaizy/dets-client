import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Job = (props) => {
  console.log(props.istoken);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    token: props.istoken,
    fullName: "",
    companies_name:"",
    email: "",
    date_of_birth: "",
    phone_no:"",
    home_city:"",
    companies_city: "",
    package_lpa: "",
    job_role: "",
    selectType: "",
    totalApplyCompanies: "",
    noOfSelectInterview: "",
    companiesType: "",
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
      const response = await fetch("http://localhost:8000/api/v1/job", {
        method: "POST",
        body: formDataToSend, // Send formDataToSend instead of JSON.stringify(formData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData.data._id);
        Cookies.set("formData", JSON.stringify(formData));
        // navigate("/Exitdata");
        navigate("/Jobdata/applicationdata");
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
  
      <Col className="text-center">JOB</Col>
     
      <Container>
        <Row>
          <Col>
            <Form onSubmit={submitHandler}>
              <Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Full Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    placeholder="Enter Full Name.."
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Companies Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="companies_name"
                    id="companies_name"
                    value={formData.companies_name}
                    placeholder="Enter  Companies Name..."
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
                    placeholder="Enter  Email..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Phone<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone_no"
                    id="phone_no"
                    value={formData.phone_no}
                    placeholder="Enter  Phone No..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                  
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Home City<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="home_city"
                    id="home_city"
                    value={formData.home_city}
                    placeholder="Enter Home City..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Companies City<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="companies_city"
                    id="companies_city"
                    value={formData.companies_city}
                    placeholder="Enter Companies ..."
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
                    type="text"
                    name="job_role"
                    id="job_role"
                    value={formData.job_role}
                    placeholder="Enter Your Role..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="mb-3">
                  <Form.Label htmlFor="selectType">
                    Select Companies <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    id="selectType"
                    name="selectType"
                    className="rounded-0"
                    value={formData.selectType}
                    onChange={changeHandler}
                  >
                    <option value="">Select Exam</option>
                    <option value="on">On Compuse</option>
                    <option value="Off">Off Compuse</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Apply Your Total Companies
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="totalApplyCompanies"
                    id="totalApplyCompanies"
                    value={formData.totalApplyCompanies}
                    placeholder=""
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>
                    No Of Select Interview<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="noOfSelectInterview"
                    id="noOfSelectInterview"
                    value={formData.noOfSelectInterview}
                    placeholder="Enter No Of Select Interview"
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="mb-3">
                  <Form.Label htmlFor="companiesType">
                    Type Of Companies <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    id="companiesType"
                    name="companiesType"
                    className="rounded-0"
                    value={formData.companiesType}
                    onChange={changeHandler}
                  >
                    <option value="">Select Type Of Companies</option>
                    <option value="Service">Service-based</option>
                    <option value="Product">Product-based</option>
                  </Form.Select>
                </Form.Group>
                {/* sumbit button */}
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Job;
