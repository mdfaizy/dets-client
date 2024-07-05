import { useLocation } from "react-router-dom";
import "./exit.css";
const NewAdmissionData = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log("apidata", apidata.newAdmission);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="custom_container">
        <table className="custom_table">
          <tbody>
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
            <tr className="table-row">
              <td className="table-cell">
                <table className="inner-table">
                  <tr className="data_info_row">
                    <td width="20%">Info</td>
                    <td>
                      <b>:</b>
                    </td>
                    <td width="80%">Details</td>
                  </tr>
                  <tbody>
                    <tr>
                      <td width="20%">First Name:</td>
                      <td width="50px">
                        <b>:</b>
                      </td>
                      <td width="60px">{apidata.newAdmission.firstName}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.lastName}</td>
                    </tr>

                    <tr>
                      <td>Addhar Number</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.addhar_number}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.date_of_birth}</td>
                    </tr>

                    <tr>
                      <td>Category</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.category}</td>
                    </tr>

                    <tr>
                      <td>Domicile</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.dimicile}</td>
                    </tr>

                    <tr>
                      <td>Email</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.email}</td>
                    </tr>

                    <tr>
                      <td>Phone No</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.phone_no}</td>
                    </tr>

                    <tr>
                      <td>Gender</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.gender}</td>
                    </tr>
                    <tr>
                      <td>Father Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.fatherName}</td>
                    </tr>
                    <tr>
                      <td>Mother Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.motherName}</td>
                    </tr>

                    <tr>
                      <td>Exame Type</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.examType}</td>
                    </tr>

                    <tr>
                      <td>Application No</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.application_exam_no}</td>
                    </tr>
                    <tr>
                      <td>Rank</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.score_rank}</td>
                    </tr>
                    <tr>
                      <td>Cource</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.course_name}</td>
                    </tr>
                    <tr>
                      <td>Admission Session</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.admission_session}</td>
                    </tr>

                    <tr>
                      <td>Stream</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.stream}</td>
                    </tr>

                    <tr>
                      <td>Strat Session</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.start_session}</td>
                    </tr>

                    <tr>
                      <td>End Session</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.end_session}</td>
                    </tr>

                    <tr>10th Info</tr>

                    <tr>
                      <td>School Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.schoolName_10th}</td>
                    </tr>

                    <tr>
                      <td>Roll No</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.roll_No_10th}</td>
                    </tr>

                    <tr>
                      <td>Regisration No</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.registration_no_10th}</td>
                    </tr>

                    <tr>
                      <td>Board Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.board_Name_10th}</td>
                    </tr>

                    <tr>
                      <td>Year of Passing</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.year_of_passing_10th}</td>
                    </tr>
                    <tr>
                      <td>Persentage</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.percentage_10th}</td>
                    </tr>

                    <tr>12th Info</tr>

                    <tr>
                      <td>School Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.schoolName_12th}</td>
                    </tr>

                    <tr>
                      <td>Roll No</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.roll_No_12th}</td>
                    </tr>

                    <tr>
                      <td>Regisration No</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.registration_no_12th}</td>
                    </tr>

                    <tr>
                      <td>Board Name</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.board_Name_12th}</td>
                    </tr>

                    <tr>
                      <td>Year of Passing</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.year_of_passing_12th}</td>
                    </tr>

                    <tr>
                      <td>Persentage</td>
                      <td>
                        <b>:</b>
                      </td>
                      <td>{apidata.newAdmission.percentage_12th}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
          <p
            style={{ fontSize: "12px", color: "#444444", textAlign: "center" }}
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
    </>
  );
};

export default NewAdmissionData;

// import { useLocation } from "react-router-dom";
// import "./exit.css"; // Import your external CSS file

// const NewAdmissionData = () => {
//   const location = useLocation();
//   const { apidata } = location.state || {};
//   console.log("apidata", apidata.newAdmission);

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <>
//  <div className="custom-container">
//  <table className="custom-table">
//           <tbody>
//             <tr className="table-row">
//             <td className="top-heading">

//                 <span>
//                 <b className="custom-header">UNIVERSITY OF KALYANI</b>

//                   <br />
//                   ( Department of Engineering and Technological Studies(DETS))
//                   <br />
//                   (Kalyani, West Bengal,741235)
//                 </span>
//               </td>
//             </tr>
//           </tbody>

//           <tbody>
//           <tr className="table-row">
//               <td className="table-cell">
//                 <table className="inner-table">
//                   <tbody>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         First Name:
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.firstName}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Last Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.lastName}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Addhar Number
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.addhar_number}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Date of Birth
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.date_of_birth}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Category
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.category}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Domicile
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.dimicile}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Email
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.email}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Phone No
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.phone_no}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Gender
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.gender}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Father Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.fatherName}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Mother Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.motherName}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Exame Type
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.examType}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Application No
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.application_exam_no}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Rank
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.score_rank}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Cource
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.course_name}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Admission Session
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.admission_session}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Stream
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.stream}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Strat Session
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.start_session}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         End Session
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.end_session}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         10th Info
//                       </td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         School Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.schoolName_10th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Roll No
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.roll_No_10th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Regisration No
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.registration_no_10th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Board Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.board_Name_10th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Year of Passing
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.year_of_passing_10th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Persentage
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.percentage_10th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         12th Info
//                       </td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         School Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.schoolName_12th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Roll No
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.roll_No_12th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Regisration No
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.registration_no_12th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Board Name
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.board_Name_12th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Year of Passing
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.year_of_passing_12th}</td>
//                     </tr>

//                     <tr className="table-row">
//                       <td className="table-cell">
//                         Persentage
//                       </td>
//                       <td width="40px" align="center">
//                         <b>:</b>
//                       </td>
//                       <td>{apidata.newAdmission.percentage_12th}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <button onClick={handlePrint} className="print-button">
//         Print
//       </button>
//     </>
//   );
// };

// export default NewAdmissionData;
