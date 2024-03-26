import { useState, useEffect } from "react";
import "./admissiondata.scss";
import axios from "axios";
// import { useLocation } from "react-router-dom";
function Pgdata(props) {
  // const location = useLocation()
  // const { apidata } = location.state || {}
  //   const [formData, setFormData] = useState({});
  //   const { istoken } = props;
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const requestBody = {
  //           token: istoken,
  //         };
  //         const response = await axios.post(
  //           "http://localhost:8000/api/v1/get_pg_cource",
  //           requestBody,
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         if (response.status === 200) {
  //           setFormData(response.data.data);
  //         } else {
  //           console.error("Failed to fetch form data. Status:", response.status);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching form data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, [istoken]);

  const [formData, setFormData] = useState({});
  const { istoken } = props;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const requestBody = {
  //           token: istoken,
  //         };
  //         const response = await axios.post(
  //           "http://localhost:8000/api/v1/get_pg_cource",
  //           requestBody,
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         if (response.status === 200) {
  //           setFormData(response.data.data);
  //         } else {
  //           console.error("Failed to fetch form data. Status:", response.status);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching form data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, [istoken]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          token: istoken,
        };

        const response = await axios.post(
          "http://localhost:8000/api/v1/pgcourse/get_pg_student",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch form data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };
    fetchData();
  }, [istoken]);

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
                  PG Student
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
                          <td>{formData.exameType}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Category</td>
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
                          <td className="tbody_formData_info_name">Session</td>
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
    </div>
  );
}
export default Pgdata;
