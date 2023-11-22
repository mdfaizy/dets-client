import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function NewAdmission() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const [formData, setFormData] = useState({
    frist_name: "",
    last_name: "",
    father_name: "",
    mother_name: "",
    date_of_birth: "",
    email_id: "",
    schoolName_10th: "",
    roll_No_10th: "",
    regisration_No_10th: "",
    board_Name_10th: "",
    year_of_passing_10th: "",
    Upload_Your_12th_Marksheet: "",
    rankcard: "",
    aadhar_card_file: "",
    schoolName_12th: "",
    roll_No_12th: "",
    regisration_No_12th: "",
    board_Name_12th: "",
    year_of_passing_12th: "",
    persentage_12th: "",
    Your_Residence_Certificate: "",
    Passport_Photo_Sizes: "",
    Signature_or_Thumb: "",
  });

  function changeHandler(event) {

    setFormData((prev) => ({


      ...prev,
      [event.target.name]: event.target.value,

    }));


  }

  const submitHandler = (event) => {

    event.preventDefault();
    alert("Saved Successfull - Your Data \n" + formData)
    console.log(formData);
    setFormData({
      frist_name: "",
      last_name: "",
      father_name: "",
      mother_name: "",
      date_of_birth: "",
      email_id: "",
      schoolName_10th: "",
      roll_No_10th: "",
      regisration_No_10th: "",
      board_Name_10th: "",
      year_of_passing_10th: "",
      Upload_Your_12th_Marksheet: "",
      rankcard: "",
      aadhar_card_file: "",
      schoolName_12th: "",
      roll_No_12th: "",
      regisration_No_12th: "",
      board_Name_12th: "",
      year_of_passing_12th: "",
      persentage_12th: "",
      Your_Residence_Certificate: "",
      Passport_Photo_Sizes: "",
      Signature_or_Thumb: "",
    })
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center pt-2">ONLINE FORM</h1>
            <Col>
              <Form onSubmit={submitHandler}>
                <Row>
                  {step === 1 && (
                    <>
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
                          Exam Type<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          id="exam-type"
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
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Application No<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="application_exam"
                          id="application_exam"
                          value={formData.application_exam}
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
                        Step 2: Higher Secondary
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
                          id="board_Name"
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
                          id="year_of_passing"
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
                          id="persentage"
                          value={formData.persentage_10th}
                          placeholder="Enater Persentage..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Row className="text-center my-4">
                        <Col >
                          <button
                            onClick={prevStep}
                            className="text-denger px-4 py-2  border-0    rounded-3"
                          >
                            Previous
                          </button>
                        </Col>
                        {/*  */}
                        <Col className="my-4">
                          <button
                            onClick={nextStep}
                            className="text-denger px-4 py-2  border-0   rounded-md"
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
                        Step 2: Higher Secondary
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
                          id="roll_No"
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
                          id="regisration_No"
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
                          id="board_Name"
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
                          id="persentage"
                          value={formData.persentage_12th}
                          placeholder="Enater Persentage..."
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>

                      <Row className="text-center my-4">
                        <Col className="my-4">
                          <button
                            onClick={prevStep}
                            className="text-denger px-4 py-2  border-0   rounded-2"

                          >
                            Previous
                          </button>
                        </Col>
                        <Col >
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
                        Step 2: Document
                      </h2>

                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Aadhar Card<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="aadhar_card_file"
                          id="persentage"
                          value={formData.aadhar_card_file}
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
                          name="rankcard"
                          id="rankcard"
                          value={formData.rankcard}
                          placeholder=""
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Upload Your 12th Marksheet
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="Upload_Your_12th_Marksheet"
                          id="persentage"
                          value={formData.Upload_Your_12th_Marksheet}
                          placeholder=""
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Your Residence Certificate
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="Your_Residence_Certificate"
                          id="Your_Residence_Certificate"
                          value={formData.Your_Residence_Certificate}
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
                          name="Passport_Photo_Size"
                          id="Passport_Photo_Size"
                          value={formData.Passport_Photo_Size}
                          placeholder=""
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>


                      <Form.Group as={Col} md="4">
                        <Form.Label>
                          Signature OR Thumb
                          <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="Signature_or_Thumb"
                          id="Signature_or_Thumb"
                          value={formData.Signature_or_Thumb}
                          placeholder=""
                          onChange={changeHandler}
                          className="rounded-2"
                        />
                      </Form.Group>
                      {/* Passport Photo Sizes
                      Signature or Thumb
                       */}

                      <Row className="text-center my-4">
                        <Col >
                          <button
                            onClick={prevStep}
                            className="text-denger px-4 py-2  border-0   rounded-md"

                          >
                            Previous
                          </button>
                        </Col>
                        <Col className="my-4">
                          <button
                            className="text-denger px-4 py-2  border-0   rounded-md"
                            type="submit"
                          >
                            Submit
                          </button>
                        </Col>
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
