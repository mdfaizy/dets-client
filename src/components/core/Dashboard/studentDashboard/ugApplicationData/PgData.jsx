import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { getPgCourseById } from "../../../../../services/apiFunction/pgApi";
import { useParams } from "react-router-dom";
function PgData() {
  const [formData, setFormData] = useState({});
  // const { token } = useSelector((state) => state.auth);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getPgCourseById(id, token);
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
    {formData?(
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
                    PG Student
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
                            <td className="tbody_formData_info_name">Exam</td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.examType}</td>
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
                              All India Rank
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.allIndiaRank}</td>
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
                              Session
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.session}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Institute City
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.InstituteCity}</td>
                          </tr>
                          <tr>
                            <td className="tbody_formData_info_name">
                              Institute Name
                            </td>
                            <td className="tbody_fromData_and_info_dot">
                              <b>:</b>
                            </td>
                            <td>{formData.InstituteName}</td>
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
      {/* </div> */}

      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>

</div>
  ) : (
    <div className="text-center text-xl">Data Pg Applicatopn data not found</div>
  )}
    
    </>
  );
}
export default PgData;
