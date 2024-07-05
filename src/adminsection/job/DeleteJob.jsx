import { useState, useEffect } from "react";
// import "../../form-data/applicationdata/admissiondata.scss";
import style from "./jobdata.module.css";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { deleteJobStudent } from "../../services/apiFunction/job";
// import { Jobs } from "../../services/apis";
import { getStudentForJobById } from "../../services/apiFunction/job";

const DeleteJob = () => {
  const [jobData, setJobData] = useState({});
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const token = localStorage.getItem("token");
  // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();
  const fetchData = async () => {
    try {
      // const API_Url = `${Jobs.Get_User_Data}/${id}`;
      // const { data: res } = await axios.get(API_Url, {
      //   headers: {
      //     Authorization: `Bearer ${cleanToken}`,
      //   },
      // });
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
  //delete function call
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteJobStudent(id);
      console.log(id);
      setJobData({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <table>
        <>
          <div>
            <div className={style.custom_container}>
              <table className={style.custom_table}>
                <tr>
                  <td className={style.top_heading}>
                    <span>
                      <b className={style.custom_header}>
                        UNIVERSITY OF KALYANI
                      </b>
                      <br />
                      ( Department of Engineering and Technological
                      Studies(DETS))
                      <br />
                      (Kalyani, West Bengal,741235)
                    </span>
                  </td>
                </tr>

                <tr>
                  <tr className={style.table_row}>
                    <td className={style.table_cell}>
                      <table width="60px" className={style.inner_table}>
                        <tr className={style.data_info_row}>
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
                            <td width="60%">{jobData.fullName}</td>
                          </tr>
                          <tr>
                            <td width="20%">Company's Name</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.companies_name}</td>
                          </tr>
                          <tr>
                            <td width="20%">Email</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.email}</td>
                          </tr>
                          <tr>
                            <td width="20%">Date of Birth</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.date_of_birth}</td>
                          </tr>
                          <tr>
                            <td width="20%">Phone No</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.phone_no}</td>
                          </tr>
                          <tr>
                            <td width="20%">Home City</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.home_city}</td>
                          </tr>
                          <tr>
                            <td width="20%">Companies City</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.companies_city}</td>
                          </tr>
                          <tr>
                            <td width="20%">Package lpa</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.package_lpa}</td>
                          </tr>
                          <tr>
                            <td width="20%">Job Role</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.job_role}</td>
                          </tr>
                          <tr>
                            <td width="20%">Selection Type</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.selectType}</td>
                          </tr>
                          <tr>
                            <td width="20%">Total Apply Companies</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.totalApplyCompanies}</td>
                          </tr>
                          <tr>
                            <td width="20%">No Of Select Interview</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.noOfSelectInterview}</td>
                          </tr>
                          <tr>
                            <td width="20%">Company's Type</td>
                            <td width="40px" align="center">
                              <b>:</b>
                            </td>
                            <td>{jobData.companiesType}</td>
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
            <div className="text-center">
              {!showDeleteButtons && (
                <button
                  onClick={() => setShowDeleteButtons(true)}
                  className={style.delete_button}
                >
                  Show Delete
                </button>
              )}
              {showDeleteButtons && (
                <div className={style.delete_cancle_button}>
                  <button
                    onClick={() => handleDelete(id)}
                    className={style.delete_button}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowDeleteButtons(false)}
                    className={style.cancle_button}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      </table>
    </>
  );
};

export default DeleteJob;
