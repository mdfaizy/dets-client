import { Container } from "react-bootstrap";
import "./exit.css";
import { useLocation } from "react-router-dom";
const PgCourseSubmitData = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log(apidata);
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Container className="custom-container">
        {/* <table > */}
        <table className="custom-table">
          <tr>
            <td className="top-heading">
              <span>
                <b className="custom-header">UNIVERSITY OF KALYANI</b>
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
                <tbody>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>First Name:</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.firstName}</td>
                          </tr>
                          <tr>
                            <td>Last Name</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.lastName}</td>
                          </tr>
                          <tr>
                            <td>Father Name</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.fatherName}</td>
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
                            <td>Exam</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.examType}</td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.category}</td>
                          </tr>
                          <tr>
                            <td>All India Rank</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.allIndiaRank}</td>
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
                            <td>Institute City</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.InstituteCity}</td>
                          </tr>
                          <tr>
                            <td>Institute Name</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{apidata.data.InstituteName}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>

        <button onClick={handlePrint} className="job_form_data_print">
          Print
        </button>
      </Container>
    </>
  );
};

export default PgCourseSubmitData;
