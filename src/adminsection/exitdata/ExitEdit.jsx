// import React from 'react'

// const ExitEdit = () => {
//   return (
//     <div>ExitEdit</div>
//   )
// }

// export default ExitEdit
import { useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
// import axios from "axios";
const ExitEdit = () =>{
  const { token } = useSelector((state) => state.auth);
  console.log(token);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    token: token,
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    email: "",
    rollNo:"",
    date_of_birth: "",
    stream: "",
    registrationNo: "",
    session: "",
    Phone_no: "",
    year_cgpa_1th: "",
    year_cgpa_2nd: "",
    year_cgpa_3rd: "",
    year_cgpa_4th: "",
    final_cgpa: "",
  });
  console.log("token",token);

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


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const requestBody = {
  //         token: token,
  //       };

  //       const response = await axios.post(
  //         "http://localhost:8000/api/v1/student/getnewadmissionId",
  //         requestBody,
          
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             // Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       console.log("responsetrtyrtr", response.data);
  //       if (response.status === 200) {
  //         setFormData(response.data.data);
  //       } else {
  //         console.error("Failed to fetch form data. Status:", response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching form data:", error.message);
  //     }
  //   };
  //   fetchData();
  // }, [token]);
  const submitHandler = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    // Append each form field to formDataToSend
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/exit/exitStudent",
        {
          method: "POST",
          body: formDataToSend, 
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData.data._id);
        Cookies.set("formData", JSON.stringify(formData));
        navigate("/exitsumbitdata", { state: { apidata: responseData } });
        // navigate("exitsumbitdata");
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
      {/* <Col className="text-center">Exit-Student</Col> */}
      <Container fluid>
        <Row className="bg-dark text-white ">
          <>
            <Col className="text-center my-4">EXIT STUDENT</Col>
            <Form onSubmit={submitHandler}>
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
                    name="Phone_no"
                    id="Phone_no"
                    value={formData.Phone_no}
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
            </Form>
          </>
        </Row>
      </Container>
    </>
  );
};

export default ExitEdit;
