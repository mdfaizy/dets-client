// import { useLocation } from "react-router-dom";
// const NewAdmissionData = () => {
//   const location = useLocation();
//   const { apidata } = location.state || {};
//   console.log("apidata", apidata.newAdmission);

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <>
//       <div className="admission_top_content">
//         <table
//           className="admission_table_content"
//           cellSpacing="0"
//           cellPadding="0"
//         >
//           <tr className="admission_top_tr_content">
//             <tr className="admission_top_tr2">
//               <tr className="admission_top_tr3">
//                 <td className="admission_top_td1">
//                   <span>
//                     <b className="admission_top_univ_name">
//                       UNIVERSITY OF KALYANI
//                     </b>
//                     <br />
//                     ( Department of Engineering and Technological Studies(DETS))
//                     <br />
//                     (Kalyani, West Bengal,741235)
//                   </span>
//                 </td>
//               </tr>
//             </tr>
//           </tr>

//           <tr className="table_content">
//             <td className="table_content_td">
//               <table
//                 className="table_table_data_content"
//                 cellSpacing="0"
//                 cellPadding="0"
//               >
//                 <tbody>
//                   <tr className="table_tbody_heading">
//                     Department of Engineering and Technological Studies <br />
//                     New Admission Student
//                   </tr>

//                   <tr className="tbody_content">
//                     {/* Your content goes here */}
//                     <td colSpan={3}>
//                       <table
//                         className="table_content_table"
//                         cellSpacing="0"
//                         cellPadding="5"
//                         border="0"
//                         align="left"
//                       >
//                         <thead>
//                           <tr className="thead_detail_info">
//                             <th className="thead_heading_info" width="20%">
//                               Info
//                             </th>
//                             <th width="5%">
//                               <br />
//                             </th>
//                             <th className="thead_heading_info" width="65%">
//                               Details hghg
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody className="tbody_formData_info">
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               First Name:
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.firstName}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Last Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.lastName}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Addhar Number
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.addhar_number}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Date of Birth
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.date_of_birth}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Category
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.category}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Domicile
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.dimicile}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">Email</td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.email}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Phone No
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.phone_no}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">Gender</td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.gender}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Father Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.fatherName}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Mother Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.motherName}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Exame Type
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.examType}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Application No
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.application_exam_no}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">Rank</td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.score_rank}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">Cource</td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.course_name}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Admission Session
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.admission_session}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">Stream</td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.stream}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Strat Session
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.start_session}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               End Session
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.end_session}</td>
//                           </tr>
//                           {/* */}

//                           <tr>10th Info</tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               School Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.schoolName_10th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Roll No
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.roll_No_10th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Regisration No
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.registration_no_10th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Board Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.board_Name_10th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Year of Passing
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.year_of_passing_10th}</td>
//                           </tr>
//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Persentage
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.percentage_10th}</td>
//                           </tr>

//                           <tr>12th Info</tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               School Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.schoolName_12th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Roll No
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.roll_No_12th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Regisration No
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.registration_no_12th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Board Name
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.board_Name_12th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Year of Passing
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.year_of_passing_12th}</td>
//                           </tr>

//                           <tr>
//                             <td className="tbody_formData_info_name">
//                               Persentage
//                             </td>
//                             <td className="tbody_fromData_and_info_dot">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.newAdmission.percentage_12th}</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </div>
//       <button onClick={handlePrint} className="job_form_data_print">
//         Print
//       </button>
//     </>
//   );
// };

// export default NewAdmissionData;

























import { useLocation } from "react-router-dom";
import "./exit.css"; // Import your external CSS file

const NewAdmissionData = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log("apidata", apidata.newAdmission);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
 <div className="custom-container">
 <table className="custom-table">
          <tbody>
            <tr className="table-row">
            <td className="top-heading">

                <span>
                <b className="custom-header">UNIVERSITY OF KALYANI</b>
                   
                  <br />
                  ( Department of Engineering and Technological Studies(DETS))
                  <br />
                  (Kalyani, West Bengal,741235)
                </span>
              </td>
            </tr>
          </tbody>

          <tbody>
          <tr className="table-row">
              <td className="table-cell">
                <table className="inner-table">
                  <tbody>
                    

                    <tr className="table-row">
                      <td className="table-cell">
                        First Name:
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.firstName}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Last Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.lastName}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Addhar Number
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.addhar_number}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Date of Birth
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.date_of_birth}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Category
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.category}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Domicile
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.dimicile}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Email
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.email}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Phone No
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.phone_no}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Gender
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.gender}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Father Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.fatherName}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Mother Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.motherName}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Exame Type
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.examType}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Application No
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.application_exam_no}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Rank
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.score_rank}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Cource
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.course_name}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Admission Session
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.admission_session}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Stream
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.stream}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Strat Session
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.start_session}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        End Session
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.end_session}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        10th Info
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        School Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.schoolName_10th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Roll No
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.roll_No_10th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Regisration No
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.registration_no_10th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Board Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.board_Name_10th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Year of Passing
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.year_of_passing_10th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Persentage
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.percentage_10th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        12th Info
                      </td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        School Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.schoolName_12th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Roll No
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.roll_No_12th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Regisration No
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.registration_no_12th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Board Name
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.board_Name_12th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Year of Passing
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.year_of_passing_12th}</td>
                    </tr>

                    <tr className="table-row">
                      <td className="table-cell">
                        Persentage
                      </td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.percentage_12th}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handlePrint} className="print-button">
        Print
      </button>
    </>
  );
};

export default NewAdmissionData;
