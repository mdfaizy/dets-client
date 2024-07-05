import { useState, useEffect } from "react";
// import "../../form-data/applicationdata/admissiondata.scss";
import axios from "axios";
import style from "./exitdata.module.css";
import { deleteexitStudent } from "../../services/apiFunction/exitApi";
import { useParams } from "react-router-dom";
import { exitStudentEndpoints } from "../../services/apis";
const DeleteExit = () => {
  const [formData, setFormData] = useState({});
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  const token = localStorage.getItem("token");
  const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const API_Url = `${exitStudentEndpoints.GET_EXIT_STUDENT_BY_ID}/${id}`;
      const { data: res } = await axios.get(API_Url, {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
        },
      });
      console.log(res);
      setFormData(res.data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteexitStudent(id);
      console.log(id);
      setFormData({});
    } catch (error) {
      console.error(error);
    }
  };

  //   const { token } = useSelector((state) => state.auth);
  //   console.log("admission token",token);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const requestBody = {
  //           token: token,
  //         };

  //         const response = await axios.get(
  //           "http://localhost:8000/api/v1/exit/get_exitstudent",
  //           requestBody,
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(requestBody),
  //           }
  //         );
  // console.log('hii');
  //         console.log(" exit response",response);
  //         if (response.ok) {
  //           const data = await response.json();
  //           setFormData(data.data);
  //         } else {
  //           console.error("Failed to fetch form data. Status:", response.status);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching form data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, [token]);

  return (
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
            style={{ fontSize: "12px", color: "#444444", textAlign: "center" }}
          >
            Block C, Nadia, Kalyani, West Bengal 741245
            <br />
            UNIVERSITY OF KALYANI, E-mail:
          </p>
        </table>
      </div>

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
    </>
  );
};

export default DeleteExit;
