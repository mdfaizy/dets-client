// import "../../form-data/applicationdata/admissiondata.scss";
import { useState, useEffect } from "react";
import style from "./jobdata.module.css";
// import axios from "axios";
import { useParams } from "react-router-dom";
// import { Jobs } from "../../services/apis";
import { getStudentForJobById } from "../../services/apiFunction/job";
const JobDataPrint = () => {
  const [jobData, setJobData] = useState({});
  const token = localStorage.getItem("token");
  // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();
  const fetchData = async () => {
    try {
      // const API_Url = `${Jobs.GET_STUDENT_JOB_BY_ID_API}/${id}`;
      // const { data: res } = await axios.get(API_Url, {
      //   headers: {
      //     Authorization: `Bearer ${cleanToken}`,
      //   },
      // });
      // console.log(res);
      // setJobData(res.jobData);
      const data = await getStudentForJobById(id, token);
      console.log(data);
      setJobData(data);
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
      <div className="admission_top_content">
        <table
          className="admission_table_content"
          cellSpacing="0"
          cellPadding="0"
          border="0"
          align="center"
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
                    JOB DETAILS
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
                        <tbody className="tbody_jobData_info">
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Full Name:
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.fullName}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Company's Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.companies_name}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">Email</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.email}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Date of Birth
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.date_of_birth}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Phone No
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.phone_no}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Home City
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.home_city}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Companies City
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.companies_city}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Package lpa
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.package_lpa}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Job Role
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.job_role}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Selection Type
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.selectType}</td>
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
                            <td>{jobData.totalApplyCompanies}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              No Of Select Interview
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.noOfSelectInterview}</td>
                          </tr>
                          <tr>
                            <td className="tbody_jobData_info_name">
                              Company's Type
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{jobData.companiesType}</td>
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

export default JobDataPrint;
