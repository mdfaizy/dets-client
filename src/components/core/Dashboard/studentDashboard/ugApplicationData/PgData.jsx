import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { Container } from "react-bootstrap";
import { getpgStudentByOne } from "../../../../../services/apiFunction/pgApi";
import { useParams } from "react-router-dom";
function PgData() {
  const [formData, setFormData] = useState({});
  // const { token } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getpgStudentByOne(token);
      console.log(data.firstName);
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* {formData? ( */}
      <>
        <div className="custom_container">
          <div className="custom_container">
            <table className="custom_table">
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
              <tr>
                <td align="center" className="p-0">
                  Exit Student
                </td>
              </tr>
              <tr>
                <tr className="table_row">
                  <td className="table_cell">
                    <table width="60px" className="inner_table">
                      <tr className="data_info_row">
                        <td>Info</td>
                        <td width="5%">
                          <b>:</b>
                        </td>
                        <td>Details</td>
                      </tr>
                      <tbody>
                        <tr>
                          <td width="20%">First Name:</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td width="60%">{formData.firstName}</td>
                        </tr>
                        <tr>
                          <td>Last Name</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.lastName}</td>
                        </tr>
                        <tr>
                          <td>Father Name</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.fatherName}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.email}</td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.date_of_birth}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.gender}</td>
                        </tr>
                        <tr>
                          <td>Exam</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.examType}</td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.category}</td>
                        </tr>
                        <tr>
                          <td>All India Rank</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.allIndiaRank}</td>
                        </tr>
                        <tr>
                          <td>Stream</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.stream}</td>
                        </tr>
                        <tr>
                          <td>Session</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.session}</td>
                        </tr>
                        <tr>
                          <td>Institute City</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.InstituteCity}</td>
                        </tr>
                        <tr>
                          <td>Institute Name</td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{formData.InstituteName}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tr>

              <p
                style={{
                  fontSize: "12px",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                Block C, Nadia, Kalyani, West Bengal 741245
                <br />
                UNIVERSITY OF KALYANI, E-mail:
              </p>
            </table>
          </div>
        </div>
      </>

      {/* ) : (
   <div className="text-center text-xl">Data Pg Applicatopn data not found</div>
  )} */}
      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>
    </>
  );
}
export default PgData;
