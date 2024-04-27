import style from "../../../adminsection/adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const ExitReport = () => {
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

            <label htmlFor="rollNo">Roll No:</label>
            <input
              type="checkbox"
              value="rollNo"
              name="rollNo"
              checked={checkeds.rollNo || false}
              onChange={handleChange}
            />

            <label htmlFor="stream">Stream:</label>
            <input
              type="checkbox"
              value="stream"
              name="stream"
              checked={checkeds.stream || false}
              onChange={handleChange}
            />

            <label htmlFor="Phone_no">Phone No:</label>
            <input
              type="checkbox"
              value="Phone_no"
              name="Phone_no"
              checked={checkeds.Phone_no || false}
              onChange={handleChange}
            />

            <label htmlFor="registrationNo">Registration No:</label>
            <input
              type="checkbox"
              value="registrationNo"
              name="registrationNo"
              checked={checkeds.registrationNo || false}
              onChange={handleChange}
            />

            <label htmlFor="session">Registration No:</label>
            <input
              type="checkbox"
              value="session"
              name="session"
              checked={checkeds.session || false}
              onChange={handleChange}
            />
            <label htmlFor="">First Year CGPA:</label>
            <input
              type="checkbox"
              value="year_cgpa_1th"
              name="year_cgpa_1th"
              checked={checkeds.year_cgpa_1th || false}
              onChange={handleChange}
            />

            <label htmlFor="year_cgpa_2th"> Second Year CGPA:</label>
            <input
              type="checkbox"
              value="year_cgpa_2th"
              name="year_cgpa_2th"
              checked={checkeds.year_cgpa_2th || false}
              onChange={handleChange}
            />

            <label htmlFor="year_cgpa_3rd"> Third Year CGPA:</label>
            <input
              type="checkbox"
              value="year_cgpa_3rd"
              name="year_cgpa_3rd"
              checked={checkeds.year_cgpa_3rd || false}
              onChange={handleChange}
            />

            <label htmlFor="year_cgpa_4th">Fouth Year CGPA</label>
            <input
              type="checkbox"
              value="year_cgpa_4th"
              name="year_cgpa_4th"
              checked={checkeds.year_cgpa_4th || false}
              onChange={handleChange}
            />

            <label htmlFor="final_cgpa"> Total CGPA:</label>
            <input
              type="checkbox"
              value="final_cgpa"
              name="final_cgpa"
              checked={checkeds.final_cgpa || false}
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
              <th>Roll No</th>
              <th>Date of Birth</th>
              <th>Stream</th>
              <th>Registration No</th>
              <th>Session</th>

              <th>Phone No</th>

              <th>First Year Cgps</th>
              <th>Second Year Cgpa</th>
              <th>Third Year Cgpa</th>
              <th>Fouth Year Cgpa</th>
              <th>Total Cgpa</th>
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

                <td>{student.email}</td>

                <td>{student.rollNo}</td>

                <td>{student.date_of_birth}</td>

                <td>{student.stream}</td>

                <td>{student.registrationNo}</td>

                <td>{student.session}</td>

                <td>{student.Phone_no}</td>
                <td>{student.year_cgpa_1th}</td>
                <td>{student.year_cgpa_2th}</td>
                <td>{student.year_cgpa_3rd}</td>
                <td>{student.year_cgpa_4th}</td>
                <td>{student.final_cgpa}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default ExitReport;
