import { useState, useEffect } from "react";
// import "../../form-data/applicationdata/admissiondata.scss";
// import axios from "axios";
import style from "./pgdata.module.css";
import { deletePgStudent } from "../../services/apiFunction/pgApi";

// import { pgCourseEndpoints } from "../../services/apis";
import { getPgCourseById } from "../../services/apiFunction/pgApi";
import { useParams } from "react-router-dom";
const PgDataDelete = () => {
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const [formData, setFormData] = useState({});
  const token = localStorage.getItem("token");
  // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();

  const fetchData = async () => {
    try {
      // const API_Url = `${pgCourseEndpoints.GET_PG_COURSE_BY_ID}/${id}`;
      // const { data: res } = await axios.get(API_Url, {
      //   headers: {
      //     Authorization: `Bearer ${cleanToken}`,
      //   },
      // });
      // console.log("pgdata", res);
      // setFormData(res.pgdata);
      const data = await getPgCourseById(id, token);
      console.log("data", data);
      setFormData(data);
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
      await deletePgStudent(id);
      console.log(id);
      setFormData({});
    } catch (error) {
      console.error(error);
    }
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
              <td align="center" className="p-0">
                Pg Student
              </td>
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
                    <tbody width="60px">
                      <tr>
                        <td width="20%">First Name:</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td width="60%">{formData.firstName}</td>
                      </tr>
                      <tr>
                        <td>Last Name</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td className={style.formData}>{formData.lastName}</td>
                      </tr>
                      <tr>
                        <td>Father Name</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.fatherName}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.email}</td>
                      </tr>
                      <tr>
                        <td>Date of Birth</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.date_of_birth}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.gender}</td>
                      </tr>
                      <tr>
                        <td>Exam</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.examType}</td>
                      </tr>
                      <tr>
                        <td>Category</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.category}</td>
                      </tr>
                      <tr>
                        <td>All India Rank</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.allIndiaRank}</td>
                      </tr>
                      <tr>
                        <td>Stream</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.stream}</td>
                      </tr>
                      <tr>
                        <td>Session</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.session}</td>
                      </tr>
                      <tr>
                        <td>Institute City</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.InstituteCity}</td>
                      </tr>
                      <tr>
                        <td>Institute Name</td>
                        <td width="40px" align="center">
                          <b>:</b>
                        </td>
                        <td>{formData.InstituteName}</td>
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
export default PgDataDelete;
