import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { useParams } from "react-router-dom";
import { getStudentForJobById } from "../../../../../services/apiFunction/job.js";
function JobData() {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  console.log(id);
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getStudentForJobById(id, token);
      console.log("job data name", data.JobData.email);
      console.log("job data name", data.JobData);
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
      {/* {formData?( */}
      <div>
        <div className="custom_container">
          <table className="custom_table">
            <tbody>
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
              <tr className="table-row">
                <td className="table-cell">
                  <table className="inner-table">
                    <tr className="data_info_row">
                      <td width="20%">Info</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td width="80%">Details</td>
                    </tr>
                    <tbody className="tbody_jobData_info">
                      <tr>
                        <td width="20%">Full Name:</td>
                        <td width="50px">
                          <b>:</b>
                        </td>
                        <td width="60%">{formData.fullName}</td>
                      </tr>
                      <tr>
                        <td width="150px">Company's Name</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.companies_name}</td>
                      </tr>
                      <tr>
                        <td width="150px">Email</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.email}</td>
                      </tr>
                      <tr>
                        <td width="150px">Date of Birth</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.date_of_birth}</td>
                      </tr>
                      <tr>
                        <td width="150px">Phone No</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.phone_no}</td>
                      </tr>
                      <tr>
                        <td width="150px">Home City</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.home_city}</td>
                      </tr>
                      <tr>
                        <td width="150px">Companies City</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.companies_city}</td>
                      </tr>
                      <tr>
                        <td width="150px">Package lpa</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.package_lpa}</td>
                      </tr>
                      <tr>
                        <td width="150px">Job Role</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.job_role}</td>
                      </tr>
                      <tr>
                        <td width="150px">Selection Type</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.selectType}</td>
                      </tr>
                      <tr>
                        <td
                          width="100px"
                          style={{
                            fontFamily: "calibri, helvetica, arial, sans-serif",
                            paddingLeft: "10px",
                          }}
                        >
                          Total Apply Companies
                        </td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.totalApplyCompanies}</td>
                      </tr>
                      <tr>
                        <td width="150px">No Of Select Interview</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.noOfSelectInterview}</td>
                      </tr>
                      <tr>
                        <td width="150px">Company's Type</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td>{formData.companiesType}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
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

      <button onClick={handlePrint} className="job_form_data_print">
        Print
      </button>

      {/* </div> */}
      {/* ) : (
  <div className="text-center text-xl">Data not found</div>
)} */}
    </>
  );
}

export default JobData;
