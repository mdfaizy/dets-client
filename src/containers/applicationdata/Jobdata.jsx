import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { useParams } from "react-router-dom";
import { getStudentForJobById } from "../../services/apiFunction/job.js";
function Jobdata() {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  console.log(id);
  // const token = localStorage.getItem("token");
const token=localStorage.getItem('token');
  const fetchData = async () => {
    try {
      const data = await getStudentForJobById(id,token);
      console.log(data.fullName);
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
                                  Categorie
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.categorie}</td>
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
                                  Companies Name
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
                                  Apply For Job
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
                                  Companies Type
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
</>
  );
}

export default Jobdata;
