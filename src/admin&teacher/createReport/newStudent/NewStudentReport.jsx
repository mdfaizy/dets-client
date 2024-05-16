import style from "../../../admin/all-student/adminsection.module.css";
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

            <label htmlFor="domicile">Domicile:</label>
            <input
              type="checkbox"
              value="domicile"
              name="domicile"
              checked={checkeds.domicile || false}
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

<label htmlFor="addhar_number">Addhar Number:</label>
            <input
              type="checkbox"
              value="addhar_number"
              name="addhar_number"
              checked={checkeds.addhar_number || false}
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

            
<label htmlFor="parent_phone_no">Parent Phone No:</label>
            <input
              type="checkbox"
              value="parent_phone_no"
              name="parent_phone_no"
              checked={checkeds.parent_phone_no || false}
              onChange={handleChange}
            />

<label htmlFor="parent_occoupation">Parent Occoupation:</label>
            <input
              type="checkbox"
              value="parent_occoupation"
              name="parent_occoupation"
              checked={checkeds.parent_occoupation || false}
              onChange={handleChange}
            />
            <label htmlFor="parent_incom">Parent Incom:</label>
            <input
              type="checkbox"
              value="parent_incom"
              name="parent_incom"
              checked={checkeds.parent_incom || false}
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
{/* admission_session */}

<label htmlFor="admission_session">Admission Session:</label>
            <input
              type="checkbox"
              value="admission_session"
              name="admission_session"
              checked={checkeds.admission_session || false}
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



<label htmlFor="scoure_rank">Rank</label>
            <input
              type="checkbox"
              value="scoure_rank"
              name="scoure_rank"
              checked={checkeds.scoure_rank || false}
              onChange={handleChange}
            />

<label htmlFor="cource_name">Course Name:</label>
            <input
              type="checkbox"
              value="cource_name"
              name="cource_name"
              checked={checkeds.cource_name || false}
              onChange={handleChange}
            />

<label htmlFor="stream">Stream</label>
            <input
              type="checkbox"
              value="stream"
              name="stream"
              checked={checkeds.stream || false}
              onChange={handleChange}
            />

{/*  */}




<label htmlFor="village">Village</label>
            <input
              type="checkbox"
              value="village"
              name="village"
              checked={checkeds.village || false}
              onChange={handleChange}
            />
            <label htmlFor="police_station">Police Stations</label>
            <input
              type="checkbox"
              value="police_station"
              name="police_station"
              checked={checkeds.police_station || false}
              onChange={handleChange}
            />

           

            <label htmlFor="distric">Distric</label>
            <input
              type="checkbox"
              value="distric"
              name="distric"
              checked={checkeds.distric || false}
              onChange={handleChange}
            />

            <label htmlFor="pin_code">Pin Code</label>
            <input
              type="checkbox"
              value="pin_code"
              name="pin_code"
              checked={checkeds.pin_code || false}
              onChange={handleChange}
            />



<label htmlFor="state_name">State</label>
            <input
              type="checkbox"
              value="state_name"
              name="state_name"
              checked={checkeds.state_name || false}
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


<label htmlFor="persentage_10th">Persentage:</label>
            <input
              type="checkbox"
              value="persentage_10th"
              name="persentage_10th"
              checked={checkeds.persentage_10th || false}
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


<label htmlFor="persentage_12th"> Ss Persentage:</label>
            <input
              type="checkbox"
              value="persentage_12th"
              name="persentage_12th"
              checked={checkeds.
                persentage_12th || false}
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
              {/* <th>No</th>
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
              <th>Rank Card</th> */}


<th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Addhar Number</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Phone No</th>
              <th>Domicile</th>

              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Parent Phone No</th>
              <th>Parent Incom</th>
              <th>Parent Occupation</th>

              <th>Exam Type</th>
              <th>Admission Session</th>
              <th>Application No</th>
              <th>Rank</th>
              <th>Cource</th>
              <th>Stream</th>

              <th>Village/City</th>
              <th>Police Station</th>
              <th>Distric</th>
              <th>Pin Code</th>
              <th>State</th>

              <th>Hs School Name</th>
              <th>Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>

              <th>Ss School Name</th>
              <th>Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>

             
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>

                <td>{student.lastName}</td>
               <td>{student.addhar_number}</td>
               <td>{student.email}</td>
               <td>{student.date_of_birth}</td>
               <td>{student.gender}</td>
               <td>{student.category}</td>
               <td>{student.phone_no}</td>
               <td>{student.domicile}</td>

                <td>{student.fatherName}</td>
                <td>{student.motherName}</td>
                <td>{student.parent_phone_no}</td>
                <td>{student.parent_incom}</td>
                <td>{student.parent_occoupation}</td>

                <td>{student.examType}</td>
                <td>{student.admission_session}</td>
                <td>{student.application_exam_no}</td>
                 <td>{student.scoure_rank}</td>
                 <td>{student.cource_name}</td>
                 <td>{student.stream}</td>

                 <td>{student.village}</td>
                 <td>{student.police_station}</td>
                 <td>{student.distric}</td>
                 <td>{student.pin_code}</td>
                 <td>{student.state_name}</td>

                 <td>{student.schoolName_10th}</td>
                 <td>{student.roll_No_10th}</td>
                 <td>{student.regisration_No_10th}</td>
                 <td>{student.board_Name_10th}</td>
                 <td>{student.year_of_passing_10th}</td>
                 <td>{student.persentage_10th}</td>


                 <td>{student.schoolName_12th}</td>
                 <td>{student.roll_No_12th}</td>
                 <td>{student.regisration_No_12th}</td>
                 <td>{student.board_Name_12th}</td>
                 <td>{student.year_of_passing_12th}</td>
                 <td>{student.persentage_12th}</td>


              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default NewStudentReport;
