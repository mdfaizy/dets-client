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
export default PgDataDelete;
