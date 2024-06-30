import { useState, useEffect } from "react";
// import "../../form-data/applicationdata/admissiondata.scss";
import style from "./newAdmission.module.css";

// import axios from "axios";
import { useParams } from "react-router-dom";
// import { newadmissionEndpoints } from "../../services/apis";
import { getnewadmissionId } from "../../services/apiFunction/newadmissionApi";
// import { getNewAdmissionData } from "../../services/apiFunction/newadmissionApi";
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
      <div className="admission_top_content">
        <table
          className="admission_table_content"
          cellSpacing="0"
          cellPadding="0"
        >
          <tr className="admission_top_tr_content">
            <tr className="admission_top_tr2">
              <tr className="admission_top_tr3">
                <td className="admission_top_td1">
                  <span>
                    <b className="admission_top_univ_name">
                      UNIVERSITY OF KALYANI
                    </b>
                    <br />
                    ( Department of Engineering and Technological Studies(DETS))
                    <br />
                    (Kalyani, West Bengal,741235)
                  </span>
                </td>
              </tr>
            </tr>
          </tr>

          <tr className="table_content">
            <td className="table_content_td">
              <table
                className="table_table_data_content"
                cellSpacing="0"
                cellPadding="0"
              >
                <tbody>
                  <tr className="table_tbody_heading">
                    Department of Engineering and Technological Studies <br />
                    New Admission Student
                  </tr>

                  <tr className="tbody_content">
                    <td colSpan={3}>
                      <table
                        className="table_content_table"
                        cellSpacing="0"
                        cellPadding="5"
                        border="0"
                        align="left"
                      >
                        <thead>
                          <tr className="thead_detail_info">
                            <th className="thead_heading_info" width="20%">
                              Info
                            </th>
                            <th width="5%">
                              <br />
                            </th>
                            <th className="thead_heading_info" width="65%">
                              Details
                            </th>
                          </tr>
                        </thead>
                        <tbody className="tbody_newAdmissionData_info">
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              First Name:
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.firstName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Last Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.lastName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Father Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.fatherName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Mother Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.motherName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Email
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.email}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Date of Birth
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.date_of_birth}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Exame Type
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.examType}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Category
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.category}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Application No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.application_exam_no}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Rank
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.score_rank}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Cource
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.course_name}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Stream
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.stream}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Parent Incom
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.parent_income}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.phone_no}</td>
                          </tr>

                          <tr>10th Info</tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              School Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.schoolName_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Roll No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.roll_No_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Regisration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.registration_no_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Board Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.board_Name_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Year of Passing
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.year_of_passing_10th}</td>
                          </tr>
                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Persentage
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.percentage_10th}</td>
                          </tr>

                          <tr>12th Info</tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              School Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.schoolName_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Roll No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.roll_No_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Regisration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.registration_no_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Board Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.board_Name_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Year of Passing
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.year_of_passing_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_newAdmissionData_info_name">
                              Persentage
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{newAdmissionData.percentage_12th}</td>
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
      </div>
      <button onClick={handlePrint} className={style.job_form_data_print}>
        Print
      </button>
    </>
  );
};

export default PrintNewStudent;
