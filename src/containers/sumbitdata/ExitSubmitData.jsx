import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./exit.css";
const ExitSubmitData = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log(apidata);
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Container className="custom_container">
        <table className="custom_table">
          <tbody>
            <tr>
              <td className="top_heading">
                <span>
                  <b className="custom_header">UNIVERSITY OF KALYANI</b>
                  <br />
                  ( Department of Engineering and Technological Studies(DETS))
                  <br />
                  (Kalyani, West Bengal,741235)
                </span>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">
                <table className="inner-table">
                  <tr className="data_info_row">
                    <td width="20%">Info</td>
                    <td>
                      <b>:</b>
                    </td>
                    <td width="80%">Details</td>
                  </tr>
                  <tbody>
                    <tr>
                      <td width="20%">First Name:</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td width="70%">{apidata.data.firstName}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.lastName}</td>
                    </tr>

                    <tr>
                      <td>Email</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.email}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.date_of_birth}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.gender}</td>
                    </tr>
                    <tr>
                      <td>Domicile</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.domicile}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.category}</td>
                    </tr>

                    <tr>
                      <td>Phone No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.phone_no}</td>
                    </tr>

                    <tr>
                      <td>Father Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.fatherName}</td>
                    </tr>
                    <tr>
                      <td>Mother Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.motherName}</td>
                    </tr>

                    <tr>
                      <td>Stream</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.stream}</td>
                    </tr>
                    <tr>
                      <td>Session</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.session}</td>
                    </tr>

                    <tr>
                      <td>Roll No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.rollNo}</td>
                    </tr>
                    <tr>
                      <td>Registration No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.registrationNo}</td>
                    </tr>

                    <tr>
                      <td>Session</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.session}</td>
                    </tr>
                    <tr>
                      <td>First Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_1st}</td>
                    </tr>

                    <tr>
                      <td>Second Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_2nd}</td>
                    </tr>

                    <tr>
                      <td>Third Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_3rd}</td>
                    </tr>
                    <tr>
                      <td>Final Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_4th}</td>
                    </tr>
                    <tr>
                      <td>Total CGPA</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.final_cgpa}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          <p
            style={{ fontSize: "12px", color: "#444444", textAlign: "center" }}
          >
            Block C, Nadia, Kalyani, West Bengal 741245
            <br />
            UNIVERSITY OF KALYANI, E-mail:
          </p>
        </table>
      </Container>
      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>
    </>
  );
};

export default ExitSubmitData;
