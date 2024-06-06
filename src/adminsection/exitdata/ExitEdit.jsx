import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { exitStudentEndpoints } from "../../services/apis";

import axios from "axios";
const ExitEdit = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({});
  const [formData, setFormData] = useState({
    token: token,
    firstName: "",
    lastName: "",
    email: "",
    date_of_birth: "",
    gender: "",
    domicile: "",
    phone_no: "",

    category: "",

    fatherName: "",
    motherName: "",
    parentPhoneno: "",
    rollNo: "",

    stream: "",
    registrationNo: "",
    session: "",
    
    year_cgpa_1th: "",
    year_cgpa_2nd: "",
    year_cgpa_3rd: "",
    year_cgpa_4th: "",
    final_cgpa: "",
  });


  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const API_Url = `${exitStudentEndpoints.GET_EXIT_STUDENT_BY_ID}/${id}`;
      const { data: res } = await axios.get(API_Url, {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      });
      console.log(res.data);
      setStudentData(res.data);
      setFormData((prevData) => ({
        ...prevData,
        ...res.data,
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
      const API_Url = `${exitStudentEndpoints.UPDATE_EXIT_STUDENT}/${id}`;
      const { data: res } = await axios.put(API_Url, formData, {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
          // "Content-Type": "application/json",
        },
      });
      console.log("Form submitted successfully:", res);
      navigate("/job_application");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Col className="text-center">Exit-Student</Col>
      <Container fluid>
        <Row className="bg-dark text-white ">
          <>
            <Col className="text-center my-4">EXIT STUDENT</Col>
            {/* <Form onSubmit={submitHandler}>
              <Row className="px-5 outline-none">
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Frist Name<span className="text-danger">*</span>
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
                    type="text"
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
                    Roll No<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="rollNo"
                    id="rollNo"
                    value={formData.rollNo}
                    placeholder="Enter Roll No..."
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
                    Registration No<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="registrationNo"
                    id="registrationNo"
                    value={formData.registrationNo}
                    placeholder="Enter Your Session"
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
                    Phone No<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone_no"
                    id="phone_no"
                    value={formData.phone_no}
                    placeholder="Enter Phone No..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    1th Year CGPA<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="year_cgpa_1th"
                    id="year_cgpa_1th"
                    value={formData.year_cgpa_1th}
                    placeholder="Enter  1th year_cgpa..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    2th Year CGPA<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="year_cgpa_2nd"
                    id="year_cgpa_2nd"
                    value={formData.year_cgpa_2nd}
                    placeholder="Enter  2nd year_cgpa..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    3th Year CGPA<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="year_cgpa_3rd"
                    id="year_cgpa_3rd"
                    value={formData.year_cgpa_3th}
                    placeholder="Enter  3rd year_cgpa..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    4th Year CGPA<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="year_cgpa_4th"
                    id="year_cgpa_4th"
                    value={formData.year_cgpa_4th}
                    placeholder="Enter  Four year_cgpa..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>
                    Total CGPA<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="final_cgpa"
                    id="final_cgpa"
                    value={formData.final_cgpa}
                    placeholder="Enter Final  year cgpa..."
                    onChange={changeHandler}
                    className="rounded-2"
                  />
                </Form.Group>
                <Row>
                  <Col md="12" className="text-center">
                    <button
                      type="sumbit"
                      className="text-denger px-4 py-2 my-4 border-0  rounded-md"
                    >
                      SUMBIT
                    </button>
                  </Col>
                </Row>
              </Row>
            </Form> */}

<Form onSubmit={submitHandler}>
              <Row className="px-5 outline-none">
              
                      <Row>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Frist Name<span className="text-danger">*</span>
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
                            type="text"
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
                            Date of Birth
                            <span className="text-danger">*</span>
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
                        <Form.Group as={Col} md="4" className="mb-3">
                          <Form.Label htmlFor="gender">
                            Gender<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            id="gender"
                            name="gender"
                            className="rounded-0"
                            value={formData.gender}
                            onChange={changeHandler}
                          >
                            <option value="">Select Gender</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3">
                          <Form.Label htmlFor="category">
                            CATEGORY<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            id=" category"
                            name="category"
                            className="rounded-0"
                            value={formData.category}
                            onChange={changeHandler}
                          >
                            <option value="">Select Category</option>
                            <option value="GENERAL">GENERAL</option>
                            <option value="OBC-A">OBC-A</option>
                            <option value="OBC-B">OBC-B</option>
                            <option value="EWS">EWS</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="PWD">PWD</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Phone No<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="phone_no"
                            id="phone_no"
                            value={formData.phone_no}
                            placeholder="Enter Phone No..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3">
                          <Form.Label htmlFor="domicile">
                            Domicile<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            id="domicile"
                            name="domicile"
                            className="rounded-0"
                            value={formData.domicile}
                            onChange={changeHandler}
                          >
                            <option value="">Select Domicile</option>
                            <option value="YES">YES</option>
                            <option value="No">NO</option>
                          </Form.Select>
                        </Form.Group>
                      </Row>
                 

                  
                      <Row>
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
                            Parent Phone No
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="parentPhoneno"
                            id="parentPhoneno"
                            value={formData.parentPhoneno}
                            placeholder="Enter Mother Name..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                      </Row>
                  

                 
                      <Row>
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
                            Registration No
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="registrationNo"
                            id="registrationNo"
                            value={formData.registrationNo}
                            placeholder="Enter Your Session"
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
                            Roll No<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="rollNo"
                            id="rollNo"
                            value={formData.rollNo}
                            placeholder="Enter Your Session"
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                      </Row>
                   

                 
                      <Row>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            1th Year CGPA<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="year_cgpa_1th"
                            id="year_cgpa_1th"
                            value={formData.year_cgpa_1th}
                            placeholder="Enter  1th year_cgpa..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            2th Year CGPA<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="year_cgpa_2nd"
                            id="year_cgpa_2nd"
                            value={formData.year_cgpa_2nd}
                            placeholder="Enter  2nd year_cgpa..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            3th Year CGPA<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="year_cgpa_3rd"
                            id="year_cgpa_3rd"
                            value={formData.year_cgpa_3th}
                            placeholder="Enter  3rd year_cgpa..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            4th Year CGPA<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="year_cgpa_4th"
                            id="year_cgpa_4th"
                            value={formData.year_cgpa_4th}
                            placeholder="Enter  Four year_cgpa..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="4">
                          <Form.Label>
                            Total CGPA<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="final_cgpa"
                            id="final_cgpa"
                            value={formData.final_cgpa}
                            placeholder="Enter Final  year cgpa..."
                            onChange={changeHandler}
                            className="rounded-2"
                          />
                        </Form.Group>
                      </Row>
                   
                <Row>
                  <Col md="12" className="text-center">
                    <button
                      style={{ backgroundColor: "yellow" }}
                      type="sumbit"
                      className="text-denger px-4 py-2 my-4 border-0  rounded-md"
                    >
                      SUMBIT
                    </button>
                  </Col>
                </Row>
              </Row>
            </Form>
          </>
        </Row>
      </Container>
    </>
  );
};

export default ExitEdit;
