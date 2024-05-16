import style from "../../admin/all-student/adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const PgReport = () => {
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

<label htmlFor="gender">Gender:</label>
            <input
              type="checkbox"
              value="gender"
              name="gender"
              checked={checkeds.gender || false}
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
 <label htmlFor="allIndiaRank">All India Rank:</label>
            <input
              type="checkbox"
              value="allIndiaRank"
              name="allIndiaRank"
              checked={checkeds.allIndiaRank || false}
              onChange={handleChange}
            />

<label htmlFor="stream"> Stream:</label>
            <input
              type="checkbox"
              value="stream"
              name="stream"
              checked={checkeds.stream || false}
              onChange={handleChange}
            />

<label htmlFor="session">Session:</label>
            <input
              type="checkbox"
              value="session"
              name="session"
              checked={checkeds.session || false}
              onChange={handleChange}
            />



            <label htmlFor="exameType">Exam Type:</label>
            <input
              type="checkbox"
              value="exameType"
              name="exameType"
              checked={checkeds.exameType || false}
              onChange={handleChange}
            />

            

           

           

           

           

            <label htmlFor="InstituteName">Institute Name</label>
            <input
              type="checkbox"
              value="InstituteName"
              name="InstituteName"
              checked={checkeds.InstituteName || false}
              onChange={handleChange}
            />

<label htmlFor="cource">Cource</label>
            <input
              type="checkbox"
              value="cource"
              name="cource"
              checked={checkeds.cource || false}
              onChange={handleChange}
            />
            <label htmlFor="InstituteCity"> Institute City:</label>
            <input
              type="checkbox"
              value="InstituteCity"
              name="InstituteCity"
              checked={checkeds.InstituteCity || false}
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
              <th>Gender</th>
              <th>Category</th>
              <th>All India Rank</th>
              <th>Stream</th>
              <th>Session</th>

              <th>Exam Type</th>
              <th>Institute Name</th>
              <th>Course</th>

              <th>Institute City</th>
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
              <td>{student.date_of_birth}</td>
              <td>{student.gender}</td>
              <td>{student.category}</td>
              <td>{student.allIndiaRank}</td>
              <td>{student.stream}</td>
              <td>{student.session}</td>
              <td>{student.exameType}</td>
              <td>{student.InstituteName}</td>
              <td>{student.cource}</td>
              <td>{student.InstituteCity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default PgReport;
