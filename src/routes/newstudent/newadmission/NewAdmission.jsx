import { useState ,useEffect} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import ShowFormData from '../components/ShowFormData';
import Cookies from "js-cookie";
function NewAdmission(props) {
  const navigate = useNavigate();
  console.log(props.istoken);
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  // const [emailExists, setEmailExists] = useState(false); // State to track email existence

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const [formData, setFormData] = useState({
    token: props.istoken,
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    email: "",
    date_of_birth: "",
    examType: "",
    application_exam_no: "",
    scoure_rank: "",
    cource_name: "",
    stream: "",
    phone_no: "",
    category: "",
    schoolName_10th: "",
    roll_No_10th: "",
    regisration_No_10th: "",
    board_Name_10th: "",
    year_of_passing_10th: "",
    persentage_10th: "",

    schoolName_12th: "",
    roll_No_12th: "",
    regisration_No_12th: "",
    board_Name_12th: "",
    year_of_passing_12th: "",
    persentage_12th: "",
    //file
    rankcardFile: "",
    aadhar_card_file: "",
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

  const submitHandler = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    // Append each form field to formDataToSend
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/newAdmission",
        {
          method: "POST",
          // body:JSON.stringify(formData) ,
          // body: formDataToSend,
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);

        console.log(responseData.data._id);
        
        Cookies.set("formData", JSON.stringify(formData));
        navigate("/");
        // navigate(`/ShowFormData/${responseData.data._id}`);
      } else {
        console.log("Form not submitted. Error status:", response.status);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };


  // const handleUpdate = async (id) => {
  //   console.log("update", id);
  //   try {
  //     const Updateresponse = await fetch(`http://localhost:8000/api/v1/updateAdmission/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData) // Assuming formData contains updated admission details
  //     });
  
  //     if (Updateresponse.ok) {
  //       const updatedData = await Updateresponse.json();
  //       console.log('Admission updated:', updatedData);
  //       // Handle success or update UI accordingly
  //     } else {
  //       console.log('Update failed. Error status:', Updateresponse.status);
  //       // Handle update failure or display error message
  //     }
  //   } catch (error) {
  //     console.error('Error occurred while updating:', error);
  //     // Handle error or display error message to the user
  //   }
  // };
  





  // useEffect(() => {
  //   const fetchData = async (id) => {
  //     try {
  //       const response = await fetch(`http://localhost:8000/api/v1/getsigin_By_Id${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${props.istoken}`,
  //         },
  //       });
  
  //       if (response.ok) {
  //         const data = await response.json();
  //         // Conditionally set the fetched data while preserving existing 'token' or other fields
  //         setFormData((prevData) => ({
  //           ...prevData,
  //           ...data, // Assuming 'data' contains the user details fetched from the API
  //         }));
  //       } else {
  //         console.log('Failed to fetch user data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, [props.istoken]);
  


  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('hi');
  //     try {
  //       const response = await fetch(`http://localhost:8000/api/v1/getsigin_By_Id`, {
  //         headers: {
  //           Authorization: `Bearer ${props.istoken}`,
  //         },
  //       });
  
  //       if (response.ok) {
  //         const data = await response.json();
  //         // Conditionally set the fetched data while preserving existing 'token' or other fields
  //         setFormData((prevData) => ({
  //           ...prevData,
  //           ...data, // Assuming 'data' contains the user details fetched from the API
  //         }));
  //       } else {
  //         console.log('Failed to fetch user data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };
  
  //   fetchData(); // The issue might be here - no 'id' provided
  // }, [props.istoken]);
  

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
                  {step === 1 && (
                    <>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          First Name<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          id="firstName"
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
                          <option value="wbjee">WBJEE</option>
                          <option value="jelet">JElETE</option>
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
                          <option value="general">General</option>
                          <option value="obc">OBCs</option>
                          <option value="sc">SCs</option>
                          <option value="st">STs</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Application No<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="application_exam_no"
                          id="application_exam_no"
                          value={formData.application_exam_no}
                          placeholder="Enater Application No..."
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
                          placeholder="Enater Your Rank..."
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
                          placeholder="Enater Cource Name..."
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
                          placeholder="Enater Stream..."
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
                          placeholder="Enater Phone No..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Row>
                        <Col md="4">
                          <button
                            onClick={nextStep}
                            className="text-denger px-4 py-2 my-4 border-0   rounded-md"
                          >
                            Next
                          </button>
                        </Col>
                      </Row>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h2 className="text-xl font-semibold mb-4">
                        Step 2: Higher Secondary Education
                      </h2>
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
                          placeholder="Enater Roll No..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Regisration No<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="regisration_No_10th"
                          id="regisration_No"
                          value={formData.regisration_No_10th}
                          placeholder="Enater Regisration No..."
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
                          placeholder="Enater Board Name..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Year of Passing<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="year_of_passing_10th"
                          id="year_of_passing_10th"
                          value={formData.year_of_passing_10th}
                          placeholder="Enater Passing Year..."
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
                          placeholder="Enater Persentage..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Row className="text-center my-4">
                        <Col>
                          <button
                            onClick={prevStep}
                            className="text-denger px-4 py-2  border-0    rounded-3"
                          >
                            Previous
                          </button>
                        </Col>
                        {/*  */}
                        <Col className="my-0">
                          <button
                            onClick={nextStep}
                            className="text-denger px-4 py-2  border-0   rounded-3"
                          >
                            Next
                          </button>
                        </Col>
                      </Row>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <h2 className="text-xl font-semibold mb-4">
                        Step 3: Senior Secondary Education
                      </h2>
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
                          placeholder="Enater Roll No..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Regisration No<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="regisration_No_12th"
                          id="regisration_No_12th"
                          value={formData.regisration_No_12th}
                          placeholder="Enater Regisration No..."
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
                          placeholder="Enater Board Name..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Year of Passing<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="year_of_passing_12th"
                          id="year_of_passing_12th"
                          value={formData.year_of_passing_12th}
                          placeholder="Enater Passing Year..."
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
                          placeholder="Enater Persentage..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Row className="text-center my-4">
                        <Col className="my-1">
                          <button
                            onClick={prevStep}
                            className="text-denger px-4 py-2  border-0   rounded-2"
                          >
                            Previous
                          </button>
                        </Col>
                        <Col>
                          <button
                            onClick={nextStep}
                            className="text-denger px-4 py-2  border-0 rounded-2"
                          >
                            Next
                          </button>
                        </Col>
                      </Row>
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <h2 className="text-xl font-semibold mb-4">
                        Step 4: Document
                      </h2>
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
                      <Row className="text-center my-3">
                        <Col>
                          <button
                            onClick={prevStep}
                            className="text-denger px-4 py-2  border-0   rounded-md"
                          >
                            Previous
                          </button>
                        </Col>
                        <Col className="my-1">
                          <button
                            className="text-denger px-4 py-2  border-0   rounded-md"
                            type="submit"
                          >
                            Submit
                          </button>
                        </Col>
                        {/* <Col className="my-1">
                          <button
                            className="text-denger px-4 py-2  border-0   rounded-md"
                            type="update"
                            // onClick={() => {
                              
                            //   handleUpdate(item._id); 
                            // }}
                            onClick={ handleUpdate}
                          >
                            UPDATE NOW
                          </button>
                        </Col> */}
                      </Row>
                    </>
                  )}
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
