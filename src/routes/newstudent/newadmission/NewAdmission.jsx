import { useState } from "react";
import { Container, Row, Col, Form, Accordion } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
// import axios from "axios";
import  './admission.css';
import {submitNewStudentForm} from "../../../services/apiFunction/newadmissionApi";
function NewAdmission() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [data,setData]=useState([null])
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    token: token,
    //personal details
    firstName: "",
    lastName: "",
    email: "",
    date_of_birth: "",
    gender: "",
    domicile: "",
    phone_no: "",
    addhar_number: "",
    category: "",

    //parent details
    fatherName: "",
    motherName: "",
    parent_phone_no: "",
    parent_incom: "",
    parent_occoupation: "",
    //admission
    examType: "",
    counselling: "",
    start_session: "",
    end_session: "",

    application_exam_no: "",
    scoure_rank: "",
    cource_name: "",
    stream: "",
    //address details
    village: "",
    police_station: "",
    distric: "",
    pin_code: "",
    state_name: "",
    //10th details

    schoolName_10th: "",
    roll_No_10th: "",
    regisration_No_10th: "",
    board_Name_10th: "",
    year_of_passing_10th: "",
    persentage_10th: "",
    //12th details
    schoolName_12th: "",
    roll_No_12th: "",
    regisration_No_12th: "",
    board_Name_12th: "",
    year_of_passing_12th: "",
    persentage_12th: "",
    //file
    aadhar_card_file: "",
    rankcardFile: "",
    your_Residence_Certificate: "",
    sc_MarksheetFile: "",
    hs_MarksheetFile: "",
    passport_Photo_Size: "",
    antiragging: "",
    signature_or_Thumb: "",
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
  const submitHandler = (event) => {
    event.preventDefault();
    submitNewStudentForm(formData, navigate,token,setLoading);
  };
  return (
    <>
      <Container>
        <Row
          className="text-white my-1 rounded-3"
          style={{ backgroundColor: "#2A4390" }}
        >
          <Col>
            <h1 className="text-center pt-2">NEW ADMISSION</h1>
            <Col>
              <Form onSubmit={submitHandler}>
                <Row>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      xs={12}
                      md={12}
                      className=""
                      style={{ backgroundColor: "gray" }}
                    >
                      <Accordion.Header>Personal information</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group as={Col} md={4}>
                            <Form.Label>
                              First Name<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name={"firstName"}
                              id="firstName"
                              value={formData.firstName}
                              // value={userData?.firstName || ""}
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
                              Addhar Number
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="addhar_number"
                              id="addhar_number"
                              value={formData.addhar_number}
                              placeholder="Enter Addhar Number.."
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
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" xs={12} md={12}>
                      <Accordion.Header>Perant Details</Accordion.Header>
                      <Accordion.Body>
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
                              name="parent_phone_no"
                              id="parent_phone_no"
                              value={formData.parent_phone_no}
                              placeholder="Parent Phone No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>

                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Parent Incom<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="parent_incom"
                              id="parent_incom"
                              value={formData.parent_incom}
                              placeholder="Parent Incom..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>

                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Parent Occupation
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="parent_occoupation"
                              id="parent_occoupation"
                              value={formData.parent_occoupation}
                              placeholder="Parent Occupation..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Admission Details</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group as={Col} md="4" className="mb-3">
                            <Form.Label htmlFor="gender">
                              Exam Type<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              id="examType"
                              name="examType"
                              className="rounded-0"
                              value={formData.examType}
                              onChange={changeHandler}
                            >
                              <option value="">Select Exam</option>
                              <option value="WBJEE">WBJEE</option>
                              <option value="JELETE">JElETE</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group as={Col} md="4" className="mb-3">
                            <Form.Label htmlFor="counselling">
                              Counselling
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              id="counselling"
                              name="counselling"
                              className="rounded-0"
                              value={formData.counselling}
                              onChange={changeHandler}
                            >
                              <option value="">Select Counselling</option>
                              <option value="central">
                                Central Counselling
                              </option>
                              <option value="decentralised">
                                Decentralised Counselling
                              </option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Session Start
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="start_session"
                              id="start_session"
                              value={formData.start_session}
                              placeholder="20XX"
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>

                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Session-End
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="end_session"
                              id="end_session"
                              value={formData.end_session}
                              placeholder="20XX"
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Application No
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="application_exam_no"
                              id="application_exam_no"
                              value={formData.application_exam_no}
                              placeholder="Enter Application No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>

                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Rank<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="scoure_rank"
                              id="scoure_rank"
                              value={formData.scoure_rank}
                              placeholder="Enter Your Rank..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Cource<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="cource_name"
                              id="cource_name"
                              value={formData.cource_name}
                              placeholder="Enter Cource Name..."
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
                              placeholder="Electronics and Instrumentation Engineering (EIE)/Information Technology (IT)"
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" xs={12} md={12}>
                      <Accordion.Header>Permanent Address</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Village/City<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="village"
                              id="village"
                              value={formData.village}
                              placeholder="Enter Father Name..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Police Station
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="police_station"
                              id="police_station"
                              value={formData.police_station}
                              placeholder="Enter Mother Name..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>

                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Distric
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="distric"
                              id="distric"
                              value={formData.distric}
                              placeholder="Enter Parent Phone No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Pin Code
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="pin_code"
                              id="pin_code"
                              value={formData.pin_code}
                              placeholder="Enter Parent Phone No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              State<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="state_name"
                              id="state_name"
                              value={formData.state_name}
                              placeholder="Enter Parent Incom..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Hs Details</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              School Name<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="schoolName_10th"
                              value={formData.schoolName_10th}
                              onChange={changeHandler}
                              placeholder="Enter School Name..."
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Roll No<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="roll_No_10th"
                              id="roll_No"
                              value={formData.roll_No_10th}
                              placeholder="Enter Roll No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Regisration No
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="regisration_No_10th"
                              id="regisration_No_10th"
                              value={formData.regisration_No_10th}
                              placeholder="Enter Regisration No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Board Name<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="board_Name_10th"
                              id="board_Name_10th"
                              value={formData.board_Name_10th}
                              placeholder="Enter Board Name..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Year of Passing
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="year_of_passing_10th"
                              id="year_of_passing_10th"
                              value={formData.year_of_passing_10th}
                              placeholder="Enter Passing Year..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Persentage<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="persentage_10th"
                              id="persentage_10th"
                              value={formData.persentage_10th}
                              placeholder="Enter Persentage..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        {" "}
                        Senior Secondary Education
                      </Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              School Name<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="schoolName_12th"
                              placeholder="Enter School Name..."
                              value={formData.schoolName_12th}
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
                              name="roll_No_12th"
                              id="roll_No_12th"
                              value={formData.roll_No_12th}
                              placeholder="Enter Roll No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Regisration No
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="regisration_No_12th"
                              id="regisration_No_12th"
                              value={formData.regisration_No_12th}
                              placeholder="Enter Regisration No..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Board Name<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="board_Name_12th"
                              id="board_Name_12th"
                              value={formData.board_Name_12th}
                              placeholder="Enter Board Name..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Year of Passing
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="year_of_passing_12th"
                              id="year_of_passing_12th"
                              value={formData.year_of_passing_12th}
                              placeholder="Enter Passing Year..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Persentage<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="persentage_12th"
                              id="persentage_12th"
                              value={formData.persentage_12th}
                              placeholder="Enter Persentage..."
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Row className="text-center my-4"></Row>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header> Document</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Aadhar Card<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="aadhar_card_file"
                              id="aadhar_card_file"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Rank Card<span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="rankcardFile"
                              id="rankcard"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Senior Secondary Marksheet
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="sc_MarksheetFile"
                              id="sc_Marksheet"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Higher Secondary Marksheet
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="hs_MarksheetFile"
                              id="hs_Marksheet"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Antiragging
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="antiragging"
                              id="antiragging"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Residence Certificate
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="your_Residence_Certificate"
                              id="your_Residence_Certificate"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Passport Photo Size
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="passport_Photo_Size"
                              id="passport_Photo_Size"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                          <Form.Group as={Col} md="4">
                            <Form.Label>
                              Signature/OR Thumb
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="signature_or_Thumb"
                              id="signature_or_Thumb"
                              placeholder=""
                              onChange={changeHandler}
                              className="rounded-2"
                            />
                          </Form.Group>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <Col className="my-1 text-center">
                    {/* <button
                      className="text-denger px-4 py-2  border-0   rounded-md"
                      type="submit"
                    >
                      Submit
                    </button> */}
                     <button type="submit" className="text-denger px-4 py-2  border-0   rounded-md"   disabled={loading}>
        {loading ? '' : 'Submit'}
      </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewAdmission;
