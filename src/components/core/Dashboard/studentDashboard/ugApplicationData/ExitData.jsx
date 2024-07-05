import { useState, useEffect } from "react";
import "./admissiondata.scss";
import { useSelector } from "react-redux";

import { getExitStudentByID } from "../../../../../services/apiFunction/exitApi";
import { useParams } from "react-router-dom";
function ExitData() {
  const [formData, setFormData] = useState({});
  const { token } = useSelector((state) => state.auth);
  const { id } = useParams();
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
    {/* {formData?( */}
    {/* //   <div>
    //   <div className="admission_top_content">
    //     <table
    //       className="admission_table_content"
    //       cellSpacing="0"
    //       cellPadding="0"
    //       border="0"
    //       align="center"
    //     >
    //       <tr className="admission_top_tr_content">
    //         <tr className="admission_top_tr2">
    //           <tr className="admission_top_tr3">
    //             <td className="admission_top_td1">
    //               <span>
    //                 <b className="admission_top_univ_name">
    //                   UNIVERSITY OF KALYANI
    //                 </b>
    //                 <br />
    //                 ( Department of Engineering and Technological Studies(DETS))
    //                 <br />
    //                 (Kalyani, West Bengal,741235)
    //               </span>
    //             </td>
    //           </tr>
    //         </tr>
    //       </tr>
    //       <tr className="table_content">
    //         <td className="table_content_td">
    //           <table
    //             className="table_table_data_content"
    //             cellSpacing="0"
    //             cellPadding="0"
    //           >
    //             <tbody>
    //               <tr className="table_tbody_heading">
    //                 Department of Engineering and Technological Studies <br />
    //                 Exit Student
    //               </tr>

    //               <tr className="tbody_content">
    //                 <td colSpan={3}>
    //                   <table
    //                     className="table_content_table"
    //                     cellSpacing="0"
    //                     cellPadding="5"
    //                     border="0"
    //                     align="left"
    //                   >
    //                     <thead>
    //                       <tr className="thead_detail_info">
    //                         <th className="thead_heading_info" width="20%">
    //                           Info
    //                         </th>
    //                         <th width="5%">
    //                           <br />
    //                         </th>
    //                         <th className="thead_heading_info" width="65%">
    //                           Details
    //                         </th>
    //                       </tr>
    //                     </thead>
    //                     <tbody>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           First Name:
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.firstName}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Last Name
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.lastName}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Email
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.email}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Date of Birth
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.date_of_birth}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Gender
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.gender}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Domicile
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.domicile}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Category
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.category}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Phone No
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.phone_no}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Father Name
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.fatherName}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Mother Name
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.motherName}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Stream
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.stream}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Session
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.session}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Roll No
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.rollNo}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Registration No
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.registrationNo}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Session
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.session}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           First Year
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.year_cgpa_1st}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Second Year
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.year_cgpa_2nd}</td>
    //                       </tr>

    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Third Year
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.year_cgpa_3rd}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Final Year
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.year_cgpa_4th}</td>
    //                       </tr>
    //                       <tr>
    //                         <td
    //                           width="100px"
    //                           style={{
    //                             fontFamily:
    //                               "calibri, helvetica, arial, sans-serif",
    //                           }}
    //                         >
    //                           Total CGPA
    //                         </td>
    //                         <td width="40px" align="center">
    //                           <b>:</b>
    //                         </td>
    //                         <td>{formData.final_cgpa}</td>
    //                       </tr>
    //                     </tbody>
    //                   </table>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </td>
    //       </tr>
    //     </table>
    // </div>

    //   <button onClick={handlePrint} className="job_form_data_print">
    //     Print
    //   </button>
    //   </div>

// ) : (
//   <div className="text-center text-xl">Data not found</div>
// )} */}



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
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td width="70%">{formData.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.lastName}</td>
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
              <td>Domicile</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.domicile}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.category}</td>
            </tr>

            <tr>
              <td>Phone No</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.phone_no}</td>
            </tr>

            <tr>
              <td>Father Name</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.fatherName}</td>
            </tr>
            <tr>
              <td>Mother Name</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.motherName}</td>
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
              <td>Roll No</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.rollNo}</td>
            </tr>
            <tr>
              <td>Registration No</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.registrationNo}</td>
            </tr>

            <tr>
              <td>Session</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.session}</td>
            </tr>
            <tr>
              <td>First Year</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.year_cgpa_1st}</td>
            </tr>

            <tr>
              <td>Second Year</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.year_cgpa_2nd}</td>
            </tr>

            <tr>
              <td>Third Year</td>
              <td width="40px" align="center">
                <b>:</b>
              </td>
              <td>{formData.year_cgpa_3rd}</td>
            </tr>
            <tr>
              <td>Final Year</td>
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
    </>
  );
}

export default ExitData;
