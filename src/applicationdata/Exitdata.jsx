import { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
// import { Container, Row, Col, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Col } from "react-bootstrap";
function Exitdata(props) {
  const [formData, setFormData] = useState({});
  const { istoken } = props;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const requestBody = {
  //         token: istoken,
  //       };

  //       const response = await fetch(
  //         "http://localhost:8000/api/v1/get_exitstudent",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(requestBody),
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setFormData(data.data);
  //       } else {
  //         console.error("Failed to fetch form data. Status:", response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching form data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [istoken]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          token: istoken,
        };
        const response = await axios.post(
          "http://localhost:8000/api/v1/get_exitstudent",
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
        Department of Engineering and Technological Studies <br />
        Exit Student
      </Col>
      <Table responsive="sm" striped bordered className="">
        <tbody className="">
          {/* <th className="text-center justify-center" style={{}}>
         
          </th> */}
          <tr>
            <th>First Name:</th>
            <th>{formData.firstName}</th>
            <th>Last Name:</th>
            <td>{formData.lastName}</td>
          </tr>
          <tr>
            <th>Father Name:</th>
            <td>{formData.fatherName}</td>
            <th>Mother Name:</th>
            <td>{formData.motherName}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{formData.email}</td>
            <th>Date of Birth:</th>
            <td>{formData.date_of_birth}</td>
          </tr>
          <tr>
            <th>Registration No:</th>
            <td>{formData.registrationNo}</td>
            <th>Phone No:</th>
            <td>{formData.Phone_no}</td>
          </tr>
          <tr>
            <th>Roll No</th>
            <td>{formData.rollNo}</td>

            <th>Session</th>
            <td>{formData.session}</td>
          </tr>
          <tr>
            <th>Stream</th>
            <td>{formData.stream}</td>
            <th>First Year Cgpa</th>
            <td>{formData.year_cgpa_1th}</td>
          </tr>
          <tr>
            <th>Second Year Cpga</th>
            <td>{formData.year_cgpa_2nd}</td>
            <th>Third Year Cpga</th>
            <td>{formData.year_cgpa_3rd}</td>
          </tr>
          <tr>
            <th>Forth Year Cpga</th>
            <td>{formData.year_cgpa_4th}</td>

            <th>Total Cgpa</th>
            <td>{formData.final_cgpa}</td>
          </tr>
          {/* <tr>
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
          </tr> */}

          <tr>
            <th>Place/Date</th>
            <td></td>
            <th>Student's Signature</th>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Exitdata;

//
