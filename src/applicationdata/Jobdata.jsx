import { useState, useEffect } from "react";
// import "./ShowFormData.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Jobdata(props) {
  const [formData, setFormData] = useState({});
  const { istoken } = props;
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestBody = {
//           token: istoken,
//         };

//         const response = await axios.post(
//           "http://localhost:8000/api/v1/get_dets_job",
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
        //   "http://localhost:8000/api/v1/get_exitstudent",
             "http://localhost:8000/api/v1/get_job_student",
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
        New Addmission Student
      </Col>
      <Table responsive="sm" striped bordered className="">
        <tbody className="">
          <tr>
            <th>
              <strong>Full Name:</strong>
            </th>
            <th>{formData.fullName}</th>
            <th>
              <strong>Companies Name:</strong>
            </th>
            <td>{formData.companies_name}</td>
          </tr>
          <tr>
            <th>
              <strong>Email:</strong>
            </th>
            <td>{formData.email}</td>
            <th>Companies Type</th>
            <td>{formData.companiesType}</td>
          </tr>
          <tr>
            <th>
              <strong>Phone No:</strong>
            </th>
            <td>{formData.phone_no}</td>
            <th>
              <strong>Home City:</strong>
            </th>
            <td>{formData.home_city}</td>
          </tr>
          <tr>
            <th>
              <strong>Companies City:</strong>
            </th>
            <td>{formData.companies_city}</td>
            <th>
              <strong>Package Lpa:</strong>
            </th>
            <td>{formData.package_lpa}</td>
          </tr>
          <tr>
            <th>Job Role</th>
            <td>{formData.job_role}</td>

            <th>Total Apply Companies</th>
            <td>{formData.totalApplyCompanies}</td>
          </tr>
          <tr>
            <th>No Of Select Interview</th>
            <td>{formData.noOfSelectInterview}</td>
            <th>Select Type</th>
            <td>{formData.selectType}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Jobdata;

// get_pg_cource
