import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { useParams } from "react-router-dom";
import { getnewadmissionId } from "../../services/apiFunction/newadmissionApi";
function Addmissiondata() {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getnewadmissionId(id, token);
      setFormData(data);
      console.log(data);
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
      <div className="addmission_top_contante">
        <table
          className="admission_table_contante"
          cellSpacing="0"
          cellPadding="0"
        >
          <tr className="admission_top_tr_contante">
            <tr className="admission_top_tr2">
              <tr className="admission_top_tr3">
                <td className="admission_top_td1">
                  <span>
                    <b className="admission_top_unive_name">
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

          <tr className="table_contante">
            <td className="table_contante_td">
              <table
                className="table_table_data_contante"
                cellSpacing="0"
                cellPadding="0"
              >
                <tbody>
                  <tr className="table_tbody_hading">
                    Department of Engineering and Technological Studies <br />
                    New Admission Student
                  </tr>

                  <tr className="tbody_contante">
                    <td colSpan={3}>
                      <table
                        className="table_contante_table"
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
                        <tbody className="tbody_formData_info">
                          <tr>
                            <td className="tbody_formData_info_name">
                              First Name:
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.firstName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Last Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.lastName}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Addhar Number
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.addhar_number}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">Email</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.email}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Date of Birth
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.date_of_birth}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Gender</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.gender}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Category
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.category}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.phone_no}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Domicile
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.domicile}</td>
                          </tr>

                          {/* Admission details */}

                          <tr>
                            <td className="tbody_formData_info_name">
                              Father Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.fatherName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Mother Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.motherName}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Parent Occoupation
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.parent_occoupation}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Parent Incom
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.parent_incom}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Parent Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.parent_phone_no}</td>
                          </tr>

                          {/*Admission details */}
                          <tr>Admission Details</tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Exame Type
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.examType}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Counselling
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.counselling}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Start Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.start_session}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              End Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.end_session}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Application No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.application_exam_no}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Rank</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.scoure_rank}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Cource</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.cource_name}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">Stream</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.stream}</td>
                          </tr>

                          {/* address details */}
                          <tr>Address Details</tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Village
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.village}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Police Station
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.police_station}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Distric
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.distric}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Pin Code
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.pin_code}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              State Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.state_name}</td>
                          </tr>

                          <tr>10th Info</tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              School Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.schoolName_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Roll No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.roll_No_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Regisration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.regisration_No_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Board Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.board_Name_10th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Year of Passing
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.year_of_passing_10th}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Persentage
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.persentage_10th}</td>
                          </tr>

                          <tr>12th Info</tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              School Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.schoolName_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Roll No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.roll_No_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Regisration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.regisration_No_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Board Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.board_Name_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Year of Passing
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.year_of_passing_12th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Persentage
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.persentage_12th}</td>
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

      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>
    </>
  );
}

export default Addmissiondata;
