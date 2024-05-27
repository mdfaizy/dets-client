import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import axios from "axios";
import style from "./adminsection.module.css";
import "./showdataAdminandteacher.scss";
import ExitDropDown from "../../adminsection/exitdata/ExitDropDown";
import { getAllExitStudent } from "../../services/apiFunction/exitApi";
const Allexitstudent = () => {
  const [formData, setFormData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/exit/get_all_exit_student"
  //       );
  //       console.log(response);
  //       if (response.status === 200) {
  //         setFormData(response.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching admission data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const data = await getAllExitStudent();
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching admission data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2 className={style.heading}>All EXIT STUDENTS DATA</h2>
      <div className={style.teacher_verify}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Roll Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData && formData.length > 0 ? (
              formData.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.date_of_birth}</td>
                  <td>{item.gender}</td>
                  <td>{item.category}</td>
                  <td>{item.rollNumber}</td>
                  <td>
                    <ExitDropDown id={item._id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Allexitstudent;

{
  /* {item && (
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
                      ( Department of Engineering and Technological
                      Studies(DETS))
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
                      Exit Student
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
                              <td>
                                {isEditing
                                  ? isEditing.firstName
                                  : item.firstName}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Last Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.lastName : item.lastName}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Father Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.fatherName
                                  : item.fatherName}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Mother Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.motherName
                                  : item.motherName}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Email
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.email : item.email}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Roll No:
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.rollNo : item.rollNo}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Date of Birth
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.date_of_birth
                                  : item.date_of_birth}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Stream
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.stream : item.stream}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Category
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.category : item.category}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Registration No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.registrationNo
                                  : item.registrationNo}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Session
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.isEditing : item.session}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Phone No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.Phone_no : item.Phone_no}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                First Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.year_cgpa_1th
                                  : item.year_cgpa_1th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Second Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.year_cgpa_2nd
                                  : item.year_cgpa_2nd}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Third Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.year_cgpa_3rd
                                  : item.year_cgpa_3rd}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Fourthe Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.year_cgpa_4th
                                  : item.year_cgpa_4th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Total
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.final_cgpa
                                  : item.final_cgpa}
                              </td>
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
      )} */
}
//     </div>
//   );
// };

// export default Allexitstudent;
