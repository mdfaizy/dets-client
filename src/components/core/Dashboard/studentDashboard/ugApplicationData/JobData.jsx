import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { useParams } from "react-router-dom";
import { getJobStudentByOne } from "../../../../../services/apiFunction/job.js";
function JobData() {
  const [formData, setFormData] = useState({});
 
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getJobStudentByOne(token);
      console.log("job data name", data.fullName);
      console.log("job data name", data);
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
      {/* {formData?( */}

      <div className="custom_container">
        <table className="custom_table">
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

          <tr>
            <tr className="table_row">
              <td className="table_cell">
                <table  className="inner_table">
                  <tr className="data_info_row">
                    <td width="20%">Info</td>
                    <td width="5%">
                      <b>:</b>
                    </td>
                    <td width="60%">Details</td>
                  </tr>

                  <tbody className="tbody_jobData_info">
                    <tr>
                      <td width="20%">Full Name:</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td width="60%">{formData.fullName}</td>
                    </tr>
                    <tr>
                      <td width="20%">Company's Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.companies_name}</td>
                    </tr>
                    <tr>
                      <td width="20%">Email</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.email}</td>
                    </tr>
                    <tr>
                      <td width="20%">Date of Birth</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.date_of_birth}</td>
                    </tr>
                    <tr>
                      <td width="20%">Phone No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.phone_no}</td>
                    </tr>
                    <tr>
                      <td width="20%">Home City</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.home_city}</td>
                    </tr>
                    <tr>
                      <td width="20%">Companies City</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.companies_city}</td>
                    </tr>
                    <tr>
                      <td width="20%">Package lpa</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.package_lpa}</td>
                    </tr>
                    <tr>
                      <td width="20%">Job Role</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.job_role}</td>
                    </tr>
                    <tr>
                      <td width="20%">Selection Type</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.selectType}</td>
                    </tr>
                    <tr>
                      <td width="20%">Total Apply Companies</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.totalApplyCompanies}</td>
                    </tr>
                    <tr>
                      <td width="30%">No Of Select Interview</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.noOfSelectInterview}</td>
                    </tr>
                    <tr>
                      <td width="20%">Company's Type</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{formData.companiesType}</td>
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
