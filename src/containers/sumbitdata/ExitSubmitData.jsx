// import { Container } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// const ExitSubmitData = () => {
//   const location = useLocation();
//   const { apidata } = location.state || {};
//   console.log(apidata);
//   const handlePrint = () => {
//     window.print();
//   };
//   return (
//     <>
//       <Container style={{ marginTop: "40px", marginBottom: "30px" }}>
//         <table
//           style={{
//             margin: "0 auto",
//             display: "block",
//             background:
//               "#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left",
//             width: "800px",
//             color: "#444444",
//             boxShadow: "0px 0 6px #ccc",
//           }}
//           cellSpacing="0"
//           cellPadding="0"
//           border="0"
//           align="center"
//         >
//           <tr>
//             <td></td>
//           </tr>

//           <tr style={{ width: "100%", borderCollapse: "collapse" }}>
//             <tr
//               width="800px"
//               style={{
//                 width: "100%",
//                 display: "grid",
//                 borderCollapse: "collapse",
//               }}
//             >
//               <tr
//                 width="800px"
//                 style={{
//                   width: "800px",
//                   backgroundColor: "white",
//                   height: "100px",
//                   borderBottom: "3px solid #006cb5",
//                 }}
//               >
//                 <td
//                   style={{
//                     width: "800px",
//                     textAlign: "center",
//                     verticalAlign: "middle",
//                   }}
//                 >
//                   <span>
//                     <b
//                       style={{
//                         marginBottom: "0px",
//                         color: "#006cb5",
//                         fontSize: "28px",
//                         fontWeight: "bold",
//                       }}
//                     >
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
//           <tr style={{ display: "block", padding: "20px" }}>
//             <td
//               style={{
//                 fontFamily: "calibri, helvetica, arial, sans-serif",
//               }}
//             >
//               <table
//                 style={{
//                   width: "760px",
//                   display: "block",
//                   wordBreak: "break-all",
//                   boxShadow: "0px 0 6px #ccc",
//                   background: "#fff",
//                   padding: "0px 15px",
//                   borderRadius: "5px",
//                   fontSize: "14px",
//                 }}
//                 cellSpacing="0"
//                 cellPadding="0"
//                 border="0"
//                 align="center"
//               >
//                 <tbody>
//                   <tr style={{ display: "grid" }}>

//                     <td colSpan={3}>
//                       <table
//                         style={{
//                           marginBottom: "20px",
//                           width: "730px",
//                           fontSize: "14px",
//                           textAlign: "left",
//                           background: "#ffffff",
//                           border: "1px solid #cac2be",
//                           clear: "both",
//                         }}
//                         cellSpacing="0"
//                         cellPadding="5"
//                         border="0"
//                         align="left"
//                       >
//                         {/* Your table content goes here */}
//                         <thead>
//                           <tr
//                             style={{
//                               backgroundColor: "#006cb5",
//                               height: "20px",
//                               color: "white",
//                             }}
//                           >
//                             <th
//                               style={{
//                                 fontFamily:
//                                   "calibri,helvetica,arial,sans-serif",
//                                 textAlign: "left",
//                               }}
//                               width="30%"
//                             >
//                               Info
//                             </th>
//                             <th width="5%">
//                               <br />
//                             </th>
//                             <th
//                               style={{
//                                 fontFamily:
//                                   "calibri,helvetica,arial,sans-serif",
//                                 textAlign: "left",
//                               }}
//                               width="65%"
//                             >
//                               Details
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               First Name:
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.firstName}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Last Name
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.lastName}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Email
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.email}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Date of Birth
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.date_of_birth}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Gender
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.gender}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Domicile
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.domicile}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Category
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.category}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Phone No
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.phone_no}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Father Name
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.fatherName}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Mother Name
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.motherName}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Stream
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.stream}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Session
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.session}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Roll No
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.rollNo}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Registration No
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.registrationNo}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Session
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.session}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               First Year
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.year_cgpa_1st}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Second Year
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.year_cgpa_2nd}</td>
//                           </tr>

//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Third Year
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.year_cgpa_3rd}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Final Year
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.year_cgpa_4th}</td>
//                           </tr>
//                           <tr>
//                             <td
//
//                               style={{
//                                 fontFamily:
//                                   "calibri, helvetica, arial, sans-serif",
//                               }}
//                             >
//                               Total CGPA
//                             </td>
//                             <td width="40px" align="center">
//                               <b>:</b>
//                             </td>
//                             <td>{apidata.data.final_cgpa}</td>
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
//       </Container>
//       <button onClick={handlePrint} className="job_form_data_print">
//         Print
//       </button>
//     </>
//   );
// };

// export default ExitSubmitData;

import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./exit.css"; // Assuming your CSS file is named styles.css and located in the same directory

const Exitsumbitdata = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log(apidata);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Container className="custom-container">
        <table className="custom-table">
          <tbody>
            <tr>
              <td className="top-heading">
                <b className="custom-header">UNIVERSITY OF KALYANI</b>
                <br />
                ( Department of Engineering and Technological Studies(DETS))
                <br />
                (Kalyani, West Bengal,741235)
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>First Name:</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.firstName}</td>
                    </tr>
                    <tr>
                      <td>Last Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.lastName}</td>
                    </tr>

                    <tr>
                      <td>Email</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.email}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.date_of_birth}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.gender}</td>
                    </tr>
                    <tr>
                      <td>Domicile</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.domicile}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.category}</td>
                    </tr>

                    <tr>
                      <td>Phone No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.phone_no}</td>
                    </tr>

                    <tr>
                      <td>Father Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.fatherName}</td>
                    </tr>
                    <tr>
                      <td>Mother Name</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.motherName}</td>
                    </tr>

                    <tr>
                      <td>Stream</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.stream}</td>
                    </tr>
                    <tr>
                      <td>Session</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.session}</td>
                    </tr>

                    <tr>
                      <td>Roll No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.rollNo}</td>
                    </tr>
                    <tr>
                      <td>Registration No</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.registrationNo}</td>
                    </tr>

                    <tr>
                      <td>Session</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.session}</td>
                    </tr>
                    <tr>
                      <td>First Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_1st}</td>
                    </tr>

                    <tr>
                      <td>Second Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_2nd}</td>
                    </tr>

                    <tr>
                      <td>Third Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_3rd}</td>
                    </tr>
                    <tr>
                      <td>Final Year</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.year_cgpa_4th}</td>
                    </tr>
                    <tr>
                      <td>Total CGPA</td>
                      <td width="40px" align="center">
                        <b>:</b>
                      </td>
                      <td>{apidata.data.final_cgpa}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
      <button onClick={handlePrint} className="print-button">
        Print
      </button>
    </>
  );
};

export default Exitsumbitdata;
