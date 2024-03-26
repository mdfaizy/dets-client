import { useState, useEffect } from "react";
import "./admissiondata.scss";
import axios from "axios";
function Addmissiondata(props) {
  const [formData, setFormData] = useState({});
  const { istoken } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestBody = {
          token: istoken,
        };

        const response = await axios.post(
          "http://localhost:8000/api/v1/student/getnewadmission",
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

  // const handlePrint = () => {
  //   window.print(); // This triggers the browser's print dialog
  // };

  // const downloadPDF = () => {
  //   const doc = new jsPDF();
  //   doc.text("Department of Engineering and Technological Studies", 10, 10);
  //   // Create table from formData
  //   const rows = Object.entries(formData).map(([key, value], index) => {
  //     return [key, value];
  //   });

  //   doc.autoTable({
  //     startY: 20,
  //     head: [["Field", "Value"]],
  //     body: rows,
  //   });

  //   doc.save("form_data.pdf");
  // };
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
                          <td className="tbody_formData_info_name">
                            Exame Type
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.examType}</td>
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
                            Application No
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.application_exam_no}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Rank</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.scoure_rank}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Cource</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.cource_name}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">Stream</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.stream}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Phone No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.phone_no}</td>
                        </tr>

                        <tr>10th Info</tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            School Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.schoolName_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Roll No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.roll_No_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Regisration No
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.regisration_No_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Board Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.board_Name_10th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Year of Passing
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.year_of_passing_10th}</td>
                        </tr>
                        <tr>
                          <td className="tbody_formData_info_name">
                            Persentage
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.persentage_10th}</td>
                        </tr>

                        <tr>12th Info</tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            School Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.schoolName_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">Roll No</td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.roll_No_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Regisration No
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.regisration_No_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Board Name
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.board_Name_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Year of Passing
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.year_of_passing_12th}</td>
                        </tr>

                        <tr>
                          <td className="tbody_formData_info_name">
                            Persentage
                          </td>
                          <td className="tbody_fromData_and_info_dot">
                            <b>:</b>
                          </td>
                          <td>{formData.persentage_12th}</td>
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

export default Addmissiondata;
