import { useState, useEffect } from "react";

import style from "./newAdmission.module.css";
import { Container } from "react-bootstrap";

import { useParams } from "react-router-dom";
// import { newadmissionEndpoints } from "../../services/apis";
import { getnewadmissionId } from "../../services/apiFunction/newadmissionApi";
const PrintNewStudent = () => {
  const [newAdmissionData, setNewAdmissionData] = useState({});
  const token = localStorage.getItem("token");
  // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();
  const fetchData = async () => {
    try {
      // const API_Url = `${newadmissionEndpoints.GET_NEW_ADMISSIOM_DATA}/${id}`;
      // const { data: res } = await axios.get(API_Url, {
      //   headers: {
      //     Authorization: `Bearer ${cleanToken}`,
      //   },
      // });
      // console.log(res);
      // setNewAdmissionData(res.
      //   Newadmission
      //   )
      const data = await getnewadmissionId(id, token);
      console.log(data);
      setNewAdmissionData(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
    <Container className={style.custom_container}>
          <table className={style.custom_table}>
            <tr>
              <td className={style.top_heading}>
                <span>
                  <b className={style.custom_header}>UNIVERSITY OF KALYANI</b>
                  <br />
                  ( Department of Engineering and Technological Studies(DETS))
                  <br />
                  (Kalyani, West Bengal,741235)
                </span>
              </td>
            </tr>
            <tr><td align="center" className="p-0">New Admission Application Data</td></tr>
            <tr>
              <tr className={style.table_row}>
                <td className={style.table_cell}>
                  <table width="60px" className={style.inner_table}>
                    <tr className={style.data_info_row}>
                      <td width='20%'>Info</td>
                      <td width="5%">
                        <b>:</b>
                      </td>
                      <td width='60%'>Details</td>
                    </tr>

                    <tbody>
                   
                      
                    <tr>
                      <td width="20%">First Name:</td>
                      <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td width="60%">{newAdmissionData.firstName}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.lastName}</td>
                    </tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Addhar Number
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.aadhar_number}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.email}</td>
                    </tr>

                    <tr>
                      <td>Date of Birth</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.date_of_birth}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>Gender</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.gender}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.category}</td>
                    </tr>

                    <tr>
                      <td>Phone No</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.phone_no}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Domicile
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.domicile}</td>
                    </tr>

                    <tr>
                      <td className="text-center">Parent Details</td>
                    </tr>
                    <tr>
                      <td>Father Name</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.fatherName}</td>
                    </tr>
                    <tr>
                      <td>Mother Name</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.motherName}</td>
                    </tr>

                    <tr>
                      <td>Parent Occoupation</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.parent_occupation}</td>
                    </tr>
                    <tr>
                      <td>Parent Icom</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.parent_incomee}</td>
                    </tr>

                    <tr>
                      <td>Parent Phone No</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.parent_phone_no}</td>
                    </tr>

                    <tr>Admission Details</tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Exame Type
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.examType}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Counselling
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.counselling}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Start Session
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.start_session}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        End Session
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.end_session}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Application No
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.application_exam_no}</td>
                    </tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>Rank</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.score_rank}</td>
                    </tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>Cource</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.course_name}</td>
                    </tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>Stream</td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.stream}</td>
                    </tr>

                    <tr>Address Details</tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Village
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.village}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Police Station
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.police_station}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Distric
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.districtt}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Pin Code
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.pin_code}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        State Name
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.state_name}</td>
                    </tr>

                    <tr>10th Info</tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        School Name
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.schoolName_10th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Roll No
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.roll_No_10th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Registration No
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.registration_no_10th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Board Name
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.board_Name_10th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Year of Passing
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.year_of_passing_10th}</td>
                    </tr>
                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Percentage
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.percentage_12th}</td>
                    </tr>

                    <tr>12th Info</tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        School Name
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.schoolName_12th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Roll No
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.roll_No_12th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Registration No
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.registration_no_12th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Board Name
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.board_Name_12th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Year of Passing
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.year_of_passing_12th}</td>
                    </tr>

                    <tr>
                      <td className={style.tbody_formData_info_name}>
                        Percentage
                      </td>
                     <td width="40px" align="center">
                          <b>:</b>
                        </td>
                      <td>{newAdmissionData.percentage_12th}</td>
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
        </Container>

      <button onClick={handlePrint} className={style.job_form_data_print}>
        Print
      </button>
    </>
  );
};

export default PrintNewStudent;
