import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { useParams } from "react-router-dom";
import { getStudentForJobById } from "../../../../../services/apiFunction/job.js";
function JobData() {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  console.log(id);
  // const token = localStorage.getItem("token");
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getStudentForJobById(id, token);
      console.log("job data name", data.fullName);
      setFormData(data);
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
    {formData?(
      <div>
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
                        <tbody style={{ paddingLeft: "20px" }}>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Full Name:
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.fullName}</td>
                          </tr>

                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Father Name
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.father_Name}</td>
                          </tr>

                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Gender
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.gender}</td>
                          </tr>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Email
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.email}</td>
                          </tr>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Category
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.Category}</td>
                          </tr>

                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Date of Birth
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.date_of_birth}</td>
                          </tr>

                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Home Town
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.home_city}</td>
                          </tr>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Company's Name
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.companies_name}</td>
                          </tr>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Companies Loacation
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.companies_city}</td>
                          </tr>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Job Role
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.job_role}</td>
                          </tr>
                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Package
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.package_lpa}</td>
                          </tr>

                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Selection
                            </td>
                            <td width="40px" align="center">
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
                              }}
                            >
                              Applied For Jobs
                            </td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{formData.totalApplyCompanies}</td>
                          </tr>

                          <tr>
                            <td
                              width="100px"
                              style={{
                                fontFamily:
                                  "calibri, helvetica, arial, sans-serif",
                              }}
                            >
                              Company's Type
                            </td>
                            <td width="40px" align="center">
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

      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>

      </div>
    ) : (
  <div className="text-center text-xl">Data not found</div>
)}
    </>
  );
}

export default JobData;
