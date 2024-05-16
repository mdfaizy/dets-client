import style from "../../admin/all-student/adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const JobReport = () => {
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
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="checkbox"
              value="fullName"
              name="fullName"
              checked={checkeds.fullName || false}
              onChange={handleChange}
            />

            <label htmlFor="companies_name">Companies Name:</label>
            <input
              type="checkbox"
              value="companies_name"
              name="companies_name"
              checked={checkeds.companies_name || false}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="checkbox"
              value="email"
              name="email"
              checked={checkeds.email || false}
              onChange={handleChange}
            />

            <label htmlFor="phone_No">Phone:</label>
            <input
              type="checkbox"
              value="phone_No"
              name="phone_No"
              checked={checkeds.phone_No || false}
              onChange={handleChange}
            />

            <label htmlFor="home_city">Home City:</label>
            <input
              type="checkbox"
              value="home_city"
              name="home_city"
              checked={checkeds.home_city || false}
              onChange={handleChange}
            />

            <label htmlFor="companies_city">Companies City:</label>
            <input
              type="checkbox"
              value="companies_city"
              name="companies_city"
              checked={checkeds.companies_city || false}
              onChange={handleChange}
            />

            <label htmlFor="package_lpa">Package lpa:</label>
            <input
              type="checkbox"
              value="package_lpa"
              name="package_lpa"
              checked={checkeds.package_lpa || false}
              onChange={handleChange}
            />

            <label htmlFor="job_role">Job Role:</label>
            <input
              type="checkbox"
              value="job_role"
              name="job_role"
              checked={checkeds.job_role || false}
              onChange={handleChange}
            />

            

            <label htmlFor="selectType">Selection Type:</label>
            <input
              type="checkbox"
              value="selectType"
              name="selectType"
              checked={checkeds.selectType || false}
              onChange={handleChange}
            />
{/* totalApplyCompanies */}
{/*  */}
<label htmlFor="totalApplyCompanies">Apply Your Total Companies:</label>
            <input
              type="checkbox"
              value="totalApplyCompanies"
              name="totalApplyCompanies"
              checked={checkeds.totalApplyCompanies || false}
              onChange={handleChange}
            />

<label htmlFor="noOfSelectInterview">No Of SelectInterview:</label>
            <input
              type="checkbox"
              value="noOfSelectInterview"
              name="noOfSelectInterview"
              checked={checkeds.noOfSelectInterview || false}
              onChange={handleChange}
            />
            <label htmlFor="companiesType">companiesType:</label>
            <input
              type="checkbox"
              value="companiesType"
              name="companiesType"
              checked={checkeds.companiesType || false}
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
              <th>Full Name</th>
              <th>Companies Name</th>

              <th>Email</th>

              <th>Phone No</th>

              <th>Home City</th>
              <th>Companies City</th>
              <th>Package lpa</th>
              <th>Jon Role</th>
              <th>Select Companies</th>
              <th>Apply Your Total Companies</th>
              <th>No Of Select Interview</th>
              <th>Type Of Companies</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.fullName}</td>

                <td>{student.companies_name}</td>

                <td>{student.email}</td>

                <td>{student.phone_No}</td>
                <td>{student.home_city}</td>
                <td>{student.companies_city}</td>
                <td>{student.package_lpa}</td>
                <td>{student.job_role}</td>
                <td>{student.selectType}</td>
                <td>{student.totalApplyCompanies}</td>
                <td>{student.noOfSelectInterview}</td>
                <td>{student.companiesType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default JobReport;
