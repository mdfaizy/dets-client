import { useState, useEffect } from "react";
import "../../form-data/applicationdata/admissiondata.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
function JobDataPrint() {
  const [formData, setFormData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/job/get_job_student/${id}`
        );
        console.log("res", response.data.jobData);
        if (response.status === 200) {
          setFormData(response.data.jobData);
        } else {
          console.error("Failed to fetch form data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
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
                  JOB DETAILS
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
                            Full Name:
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.fullName}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Companies Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.companies_name}</td>
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
                          <td className="tbody_formData_info_name">Phone No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.phone_no}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Home City
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.home_city}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Companies City
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.companies_city}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Package lpa
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.package_lpa}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Job Role</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.job_role}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Selection Type
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.selectType}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Total Apply Companies
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.totalApplyCompanies}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            No Of Select Interview
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.noOfSelectInterview}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Companies Type
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.companiesType}</td>
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
  );
}

export default JobDataPrint;
