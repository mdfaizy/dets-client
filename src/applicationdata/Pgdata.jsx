import { useState, useEffect } from "react";
// import "./ShowFormData.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
function Pgdata(props) {
//   const [formData, setFormData] = useState({});
//   const { istoken } = props;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestBody = {
//           token: istoken,
//         };
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/get_pg_cource",
//           requestBody,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.status === 200) {
//           setFormData(response.data.data);
//         } else {
//           console.error("Failed to fetch form data. Status:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };
//     fetchData();
//   }, [istoken]);

const [formData, setFormData] = useState({});
  const { istoken } = props;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestBody = {
//           token: istoken,
//         };
//         const response = await axios.post(
//           "http://localhost:8000/api/v1/get_pg_cource",
//           requestBody,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.status === 200) {
//           setFormData(response.data.data);
//         } else {
//           console.error("Failed to fetch form data. Status:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching form data:", error);
//       }
//     };
//     fetchData();
//   }, [istoken]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          token: istoken,
        };

        const response = await axios.post(
          "http://localhost:8000/api/v1/get_pg_student",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch form data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };
    fetchData();
  }, [istoken]);
  
  return (
    <div className="form-data-container">
      <Col className="text-center">
      Department of Engineering and Technological Studies <br/>
         PG Addmission 
      </Col>
      <Table responsive="sm" striped bordered className="">
        <tbody className="">
          <tr>
            <th>
              <strong>First Name:</strong>
            </th>
            <th>{formData.firstName}</th>
            <th>
              <strong>Last Name:</strong>
            </th>
            <td>{formData.lastName}</td>
          </tr>
          <tr>
            <th>
              <strong>Email:</strong>
            </th>
            <td>{formData.email}</td>
            <th>
              <strong>Date of Birth:</strong>
            </th>
            <td>{formData.date_of_birth}</td>
          </tr>
          <tr>
            <th>
              <strong>Exame Type:</strong>
            </th>
            <td>{formData.examType}</td>
            <th>
              <strong>Category:</strong>
            </th>
            <td>{formData.category}</td>
          </tr>
          <tr>
            <th>
              <strong>Father Name:</strong>
            </th>
            <td>{formData.fatherName}</td>
            <th>
              <strong>Mother Name:</strong>
            </th>
            <td>{formData.motherName}</td>
          </tr>
          <tr>
            <th>Application No</th>
            <td>{formData.application_exam_no}</td>

            <th>Rank</th>
            <td>{formData.scoure_rank}</td>
          </tr>
          <tr>
            <th>Cource</th>
            <td>{formData.cource_name}</td>
            <th>Stream</th>
            <td>{formData.stream}</td>
          </tr>
          <tr>
            <th>Phone No</th>
            <td>{formData.phone_no}</td>
            <th>Application No</th>
            <td>{formData.category}</td>
          </tr>
          <tr>
            <th>Higher Secondary School Name</th>
            <td>{formData.schoolName_10th}</td>

            <th>Roll No</th>
            <td>{formData.roll_No_10th}</td>
          </tr>
          <tr>
            <th>Regisration No</th>
            <td>{formData.regisration_No_10th}</td>

            <th>Board Name</th>
            <td>{formData.board_Name_10th}</td>
          </tr>
          <tr>
            <th>Year of Passing</th>
            <td>{formData.year_of_passing_10th}</td>
            <th>Persentage</th>
            <td>{formData.persentage_10th}</td>
          </tr>
          <tr>
            <th>Senior Secondary Name</th>
            <td>{formData.schoolName_12th}</td>
            <th>Roll No</th>
            <td>{formData.roll_No_12th}</td>
          </tr>
          <tr>
            <th>Regisration No</th>
            <td>{formData.regisration_No_12th}</td>

            <th>S S Board Name</th>
            <td>{formData.board_Name_12th}</td>
          </tr>
          <tr>
            <th>Year of Passing</th>
            <td>{formData.year_of_passing_12th}</td>
            <th>Persentage</th>
            <td>{formData.persentage_12th}</td>
          </tr>
         
        </tbody>
      </Table>
    </div>
  );
}
export default Pgdata
