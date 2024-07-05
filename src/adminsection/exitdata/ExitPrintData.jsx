import { useState, useEffect } from "react";
import style from "./exitdata.module.css";
import { getExitStudentByID } from "../../services/apiFunction/exitApi";
// import { exitStudentEndpoints } from "../../services/apis";
import { useParams } from "react-router-dom";
const ExitPrintData = () => {
  const [formData, setFormData] = useState({});

  const { id } = useParams();
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    try {
      const data = await getExitStudentByID(id, token);
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
      <>
        <div className={style.custom_container}>
          <table className={style.custom_table}>
            <tr>
              <td className={style.top_heading}>
                <span>
                  <b className={style.custom_header}>UNIVERSITY OF KALYANI</b>
                  <br />
                  ( Department of Engineering and Technological Studies(DETS))
                  <br />
                  (Kalyani, West Bengal,741235)
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" className="p-0">Exit Student</td>
            </tr>
            <tr>
              <tr className={style.table_row}>
                <td className={style.table_cell}>
                  <table width="60px" className={style.inner_table}>
                    <tr className={style.data_info_row}>
                      <td>Info</td>
                      <td width="5%">
                        <b>:</b>
                      </td>
                      <td>Details</td>
                    </tr>
                    <tbody className="tbody_formData_info">
                      <tr>
                        <td width="20%">First Name:</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td width="60%">{formData.firstName}</td>
                      </tr>
                      <tr>
                        <td width="20%">Last Name</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.lastName}</td>
                      </tr>
                      <tr>
                        <td width="20%">Father Name</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.fatherName}</td>
                      </tr>
                      <tr>
                        <td width="20%">Mother Name</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.motherName}</td>
                      </tr>
                      <tr>
                        <td width="20%">Email</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.email}</td>
                      </tr>
                      <tr>
                        <td width="20%">Roll No:</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.rollNo}</td>
                      </tr>
                      <tr>
                        <td width="20%">Date of Birth</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.date_of_birth}</td>
                      </tr>
                      <tr>
                        <td width="20%">Stream</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.stream}</td>
                      </tr>

                      <tr>
                        <td width="20%">Category</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.category}</td>
                      </tr>
                      <tr>
                        <td width="20%">Registration No</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.registrationNo}</td>
                      </tr>
                      <tr>
                        <td width="20%">Session</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.session}</td>
                      </tr>
                      <tr>
                        <td width="20%">Phone No</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.phone_no}</td>
                      </tr>
                      <tr>
                        <td width="20%">Session</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.session}</td>
                      </tr>
                      <tr>
                        <td width="20%">First Year</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.year_cgpa_1st}</td>
                      </tr>

                      <tr>
                        <td width="20%">Second Year</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.year_cgpa_2nd}</td>
                      </tr>

                      <tr>
                        <td width="20%">Third Year</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.year_cgpa_3rd}</td>
                      </tr>

                      <tr>
                        <td width="20%">Fourthe Year</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.year_cgpa_4th}</td>
                      </tr>

                      <tr>
                        <td>Total CGPA</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.final_cgpa}</td>
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
      </>
      <button onClick={handlePrint} className={style.job_form_data_print}>
        Print
      </button>
    </>
  );
};

export default ExitPrintData;
