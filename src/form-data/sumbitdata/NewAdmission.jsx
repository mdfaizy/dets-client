import { useLocation } from "react-router-dom";
const NewAdmissionData = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log("apidata", apidata);
  return (
    <div className="addmission_top_contante">
      <table
        className="admission_table_contante"
        cellSpacing="0"
        cellPadding="0"
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
                  New Admission Student
                </tr>

                <tr className="tbody_contante">
                  {/* Your content goes here */}
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
                            Details hghg
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
                          <td>{apidata.data.firstName}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Last Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.lastName}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Addhar Number
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.addhar_number}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Date of Birth
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.date_of_birth}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Category</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.category}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Domicile</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.dimicile}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Email</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.email}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Phone No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.phone_no}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Gender</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.gender}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Father Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.fatherName}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Mother Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.motherName}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Exame Type
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.examType}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Application No
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.application_exam_no}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Rank</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.scoure_rank}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Cource</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.cource_name}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Admission Session
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.admission_session}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Stream</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.stream}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Strat Session
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.start_session}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            End Session
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.end_session}</td>
                        </tr>
                        {/* */}

                        <tr>10th Info</tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            School Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.schoolName_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Roll No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.roll_No_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Regisration No
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.regisration_No_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Board Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.board_Name_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Year of Passing
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.year_of_passing_10th}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Persentage
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.persentage_10th}</td>
                        </tr>

                        <tr>12th Info</tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            School Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.schoolName_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Roll No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.roll_No_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Regisration No
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.regisration_No_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Board Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.board_Name_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Year of Passing
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.year_of_passing_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Persentage
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{apidata.data.persentage_12th}</td>
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
};

export default NewAdmissionData;
