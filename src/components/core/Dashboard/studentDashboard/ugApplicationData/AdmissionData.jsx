import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { getnewadmissionByOne } from "../../../../../services/apiFunction/newadmissionApi";

function AdmissionData() {
  const [formData, setFormData] = useState({});
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const data = await getnewadmissionByOne(token);
      console.log("new admission data", data.fatherName);
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
      {formData ? (
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
                      <tbody className="tbody_formData_info">
                        <tr>
                          <td width="20%">First Name</td>
                          <td width="40px">
                            <b>:</b>
                          </td>
                          <td width="60%">{formData.firstName}</td>
                        </tr>
                        <tr>
                          <td>Last Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.lastName}</td>
                        </tr>

                        <tr>
                          <td>Aadhar Number</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.aadhar_number}</td>
                        </tr>

                        <tr>
                          <td>Email</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.email}</td>
                        </tr>

                        <tr>
                          <td>Date of Birth</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.date_of_birth}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.gender}</td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.category}</td>
                        </tr>

                        <tr>
                          <td>Phone No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.phone_no}</td>
                        </tr>

                        <tr>
                          <td>Domicile</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.domicile}</td>
                        </tr>

                        <tr>
                          <td>Father Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.fatherName}</td>
                        </tr>
                        <tr>
                          <td>Mother Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.motherName}</td>
                        </tr>

                        <tr>
                          <td>Parent Occupation</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.parent_occupation}</td>
                        </tr>

                        <tr>
                          <td>Parent Incom</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.parent_incomee}</td>
                        </tr>

                        <tr>
                          <td>Parent Phone No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.parent_phone_no}</td>
                        </tr>

                        {/*Admission details */}
                        <tr>Admission Details</tr>
                        <tr>
                          <td>Exame Type</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.examType}</td>
                        </tr>

                        <tr>
                          <td>Counselling</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.counselling}</td>
                        </tr>

                        <tr>
                          <td>Start Session</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.start_session}</td>
                        </tr>

                        <tr>
                          <td>End Session</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.end_session}</td>
                        </tr>

                        <tr>
                          <td>Application No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.application_exam_no}</td>
                        </tr>
                        <tr>
                          <td>Rank</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.score_rank}</td>
                        </tr>
                        <tr>
                          <td>Cource</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.course_name}</td>
                        </tr>
                        <tr>
                          <td>Stream</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.stream}</td>
                        </tr>

                        {/* address details */}
                        <tr>Address Details</tr>
                        <tr>
                          <td>Village</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.village}</td>
                        </tr>

                        <tr>
                          <td>Police Station</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.police_station}</td>
                        </tr>

                        <tr>
                          <td>districtt</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.districtt}</td>
                        </tr>

                        <tr>
                          <td>Pin Code</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.pin_code}</td>
                        </tr>

                        <tr>
                          <td>State Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.state_name}</td>
                        </tr>

                        <tr>10th Info</tr>

                        <tr>
                          <td>School Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.schoolName_10th}</td>
                        </tr>

                        <tr>
                          <td>Roll No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.roll_No_10th}</td>
                        </tr>

                        <tr>
                          <td>Registration No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.registration_no_10th}</td>
                        </tr>

                        <tr>
                          <td>Board Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.board_Name_10th}</td>
                        </tr>

                        <tr>
                          <td>Year of Passing</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.year_of_passing_10th}</td>
                        </tr>
                        <tr>
                          <td>Percentage</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.percentage_12th}</td>
                        </tr>

                        <tr>12th Info</tr>

                        <tr>
                          <td>School Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.schoolName_12th}</td>
                        </tr>

                        <tr>
                          <td>Roll No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.roll_No_12th}</td>
                        </tr>

                        <tr>
                          <td>Registration No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.registration_no_12th}</td>
                        </tr>

                        <tr>
                          <td>Board Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.board_Name_12th}</td>
                        </tr>

                        <tr>
                          <td>Year of Passing</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.year_of_passing_12th}</td>
                        </tr>

                        <tr>
                          <td>Percentage</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{formData.percentage_12th}</td>
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
      ) : (
        <div className="text-center text-xl">Data not found</div>
      )}

      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>
    </>
  );
}

export default AdmissionData;
