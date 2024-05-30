import { useState, useEffect } from "react";
import style from "./exitdata.module.css";
import {getExitStudentByID} from '../../services/apiFunction/exitApi'
import { exitStudentEndpoints } from "../../services/apis";
import { useParams } from "react-router-dom";
const ExitPrintData = () => {
  const [formData, setFormData] = useState({});

  const { id } = useParams();
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
    
    const data=await  getExitStudentByID(id,token);
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
      <div className="addmission_top_contante">
        <table
          className="admission_table_contante"
          cellSpacing="0"
          cellPadding="0"
          border="0"
          align="center"
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
                    Exit Student
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
                            <td className="tbody_formData_info_name">Email</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.email}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Roll No:
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.rollNo}</td>
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
                            <td className="tbody_formData_info_name">Stream</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.stream}</td>
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
                              Registration No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.registrationNo}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.session}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.Phone_no}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.session}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              First Year
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.year_cgpa_1th}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Second Year
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.year_cgpa_2nd}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Third Year
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.year_cgpa_3rd}</td>
                          </tr>

                          <tr>
                            <td className="tbody_formData_info_name">
                              Fourthe Year
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.year_cgpa_4th}</td>
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

export default ExitPrintData;
