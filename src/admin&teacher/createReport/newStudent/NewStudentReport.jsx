import style from "../../../adminsection/adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const NewStudentReport = () => {
  const [formData, setFormData] = useState([]);
  const [checkeds, setCheckeds] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/student/get_new_admission"
        );
        console.log("responce", response);
        if (response.data.success) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch admission data");
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckeds((prevCheckeds) => ({
      ...prevCheckeds,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedFields = Object.keys(checkeds).filter(
      (fieldName) => checkeds[fieldName]
    );
    const filteredFormData = formData.map((student) => {
      const filteredStudent = {};
      selectedFields.forEach((fieldName) => {
        filteredStudent[fieldName] = student[fieldName];
      });
      return filteredStudent;
    });
    setFilteredData(filteredFormData);
  };

  return (
    <Col className="bg-dark text-white">
      <form onSubmit={handleSubmit}>
        <div className="m-4 p-4 ">
          <Row as={Col} md="4">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="checkbox"
              value="firstName"
              name="firstName"
              checked={checkeds.firstName || false}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="checkbox"
              value="lastName"
              name="lastName"
              checked={checkeds.lastName || false}
              onChange={handleChange}
            />

            <label htmlFor="fatherName">Father Name:</label>
            <input
              type="checkbox"
              value="fatherName"
              name="fatherName"
              checked={checkeds.fatherName || false}
              onChange={handleChange}
            />

            <label htmlFor="motherName">Mother Name:</label>
            <input
              type="checkbox"
              value="motherName"
              name="motherName"
              checked={checkeds.motherName || false}
              onChange={handleChange}
            />

            <label htmlFor="email">email:</label>
            <input
              type="checkbox"
              value="email"
              name="email"
              checked={checkeds.email || false}
              onChange={handleChange}
            />

            <label htmlFor="date_of_birth">DOB:</label>
            <input
              type="checkbox"
              value="date_of_birth"
              name="date_of_birth"
              checked={checkeds.date_of_birth || false}
              onChange={handleChange}
            />

            <label htmlFor="examType">Exam Type:</label>
            <input
              type="checkbox"
              value="examType"
              name="examType"
              checked={checkeds.examType || false}
              onChange={handleChange}
            />

            <label htmlFor="application_exam_no">Application No:</label>
            <input
              type="checkbox"
              value="application_exam_no"
              name="application_exam_no"
              checked={checkeds.application_exam_no || false}
              onChange={handleChange}
            />

            <label htmlFor="phone_no">Phone No:</label>
            <input
              type="checkbox"
              value="phone_no"
              name="phone_no"
              checked={checkeds.phone_no || false}
              onChange={handleChange}
            />

            <label htmlFor="category">Category:</label>
            <input
              type="checkbox"
              value="category"
              name="category"
              checked={checkeds.category || false}
              onChange={handleChange}
            />

            <label htmlFor="schoolName_10th">Hs Schoole Name:</label>
            <input
              type="checkbox"
              value="schoolName_10th"
              name="schoolName_10th"
              checked={checkeds.schoolName_10th || false}
              onChange={handleChange}
            />

            <label htmlFor="roll_No_10th"> Hs Roll No:</label>
            <input
              type="checkbox"
              value="roll_No_10th"
              name="roll_No_10th"
              checked={checkeds.roll_No_10th || false}
              onChange={handleChange}
            />

            <label htmlFor="regisration_No_10th"> Hs Regisration No:</label>
            <input
              type="checkbox"
              value="regisration_No_10th"
              name="regisration_No_10th"
              checked={checkeds.regisration_No_10th || false}
              onChange={handleChange}
            />

            <label htmlFor="board_Name_10th">s Board Name</label>
            <input
              type="checkbox"
              value="board_Name_10th"
              name="board_Name_10th"
              checked={checkeds.board_Name_10th || false}
              onChange={handleChange}
            />

            <label htmlFor="year_of_passing_10th"> Hs Passing Year:</label>
            <input
              type="checkbox"
              value="year_of_passing_10th"
              name="year_of_passing_10th"
              checked={checkeds.year_of_passing_10th || false}
              onChange={handleChange}
            />

            <label htmlFor="schoolName_12th">Ss Schoole Name:</label>
            <input
              type="checkbox"
              value="schoolName_12th"
              name="schoolName_12th"
              checked={checkeds.schoolName_12th || false}
              onChange={handleChange}
            />

            <label htmlFor="roll_No_12th"> Ss Roll No:</label>
            <input
              type="checkbox"
              value="roll_No_12th"
              name="roll_No_12th"
              checked={checkeds.roll_No_12th || false}
              onChange={handleChange}
            />

            <label htmlFor="regisration_No_12th"> Ss Regisration No:</label>
            <input
              type="checkbox"
              value="regisration_No_12th"
              name="regisration_No_12th"
              checked={checkeds.regisration_No_12th || false}
              onChange={handleChange}
            />

            <label htmlFor="board_Name_12th">Ss Board Name</label>
            <input
              type="checkbox"
              value="board_Name_12th"
              name="board_Name_12th"
              checked={checkeds.board_Name_12th || false}
              onChange={handleChange}
            />

            <label htmlFor="year_of_passing_12th"> Ss Passing Year:</label>
            <input
              type="checkbox"
              value="year_of_passing_12th"
              name="year_of_passing_12th"
              checked={checkeds.year_of_passing_12th || false}
              onChange={handleChange}
            />
          </Row>

          <div className="py-2 text-center ">
            <button
              type="submit"
              className="bg-success p-2 rounded-4 border-0 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className={style.teacher_verify_new_admission}>
        <Table striped bordered hover>
          <thead>
            <tr className={style.teacher_verify_th}>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Exam Type</th>
              <th>CATEGORY</th>
              <th>Application No</th>
              <th>Rank</th>
              <th>Cource</th>
              <th>Stream</th>
              <th>Phone No</th>

              <th>Admission Session</th>
              <th>Domicile</th>
              <th>School Name</th>
              <th>Scc Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>
              <th>School Name</th>
              <th>Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>
              <th>Addhar Card</th>
              <th>Rank Card</th>

             
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>

                <td>{student.lastName}</td>

                <td>{student.fatherName}</td>

                <td>{student.motherName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default NewStudentReport;
