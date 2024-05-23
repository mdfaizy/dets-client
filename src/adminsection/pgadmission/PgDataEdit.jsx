import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { pgCourseEndpoints } from "../../services/apis";
import axios from "axios";
const PgDataEdit = () => {
  // const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [pgData, setPgData] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    email: "",
    date_of_birth: "",
    gender: "",
    category: "",
    allIndiaRank: "",
    stream: "",
    session: "",
    exameType: "",
    InstituteName: "",
    cource: "",
    InstituteCity: "",
    categoryRank: "",
  });

  const token = localStorage.getItem("token");
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const API_Url = `${pgCourseEndpoints.GET_PG_COURSE_BY_ID}/${id}`;
      const { data: res } = await axios.get(API_Url, {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      });
      console.log(res);
      setPgData(res.pgdata);
      setFormData((prevData) => ({
        ...prevData,
        ...res.pgdata,
      }));
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const API_Url = `${pgCourseEndpoints.UPDATE_PG_STUDENT_BY_ID}/${id}`;
      const { data: res } = await axios.put(API_Url, formData, {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
          // "Content-Type": "application/json",
        },
      });
      console.log("Form submitted successfully:", res);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Container>
        <Col className="text-center">PG COURCE</Col>
        <Row>
          <Form onSubmit={submitHandler}>
            <Row>
              {/* 
              <Accordion defaultActiveKey="0">

                <Accordion.Item eventKey="0">
                  <Accordion.Header>Presenal Information</Accordion.Header>

                    <Accordion.Body>
                        <Row>
                        <Form.Group as={Col} md="4">
                <Form.Label>
                  First Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
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
                <Form.Label htmlFor="category">
                  Category <span className="text-danger">*</span>
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
                        </Row>

                    </Accordion.Body>
                </Accordion.Item>
 


 <Accordion.Item eventKey="1">
  <Accordion.Header>Admission Infromation</Accordion.Header>

  <Accordion.Body>
    <Row>
    <Form.Group as={Col} md="4" className="mb-3">
                <Form.Label htmlFor="exametpe">
                  Exam Type <span className="text-danger">*</span>
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
                  value={formData.InstituteCity}
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

    </Row>
  </Accordion.Body>
 </Accordion.Item>

              </Accordion> */}
              <Form.Group as={Col} md="4">
                <Form.Label>
                  First Name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
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
                <Form.Label htmlFor="exametpe">
                  Exam Type <span className="text-danger">*</span>
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
                  Category <span className="text-danger">*</span>
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
                  value={formData.InstituteCity}
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

export default PgDataEdit;
