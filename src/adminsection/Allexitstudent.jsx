// import { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import ExitAllInput from './alldataShow/ExitAllInput'
// const Allexitstudent = () => {
//   const [formData, setFormData] = useState([]);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   // ... (Rest of your component code)

//   const handleReadMoreClick = (index) => {
//     setExpandedIndex(index === expandedIndex ? null : index);
//   };
//   //get data from back end a exit student
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/get_all_exit_student"
//         );
//         if (response.status === 200) {
//           console.log(response); // Log the response object to the console
//           setFormData(response.data.data); // Set the fetched data to the state variable 'formData'
//         } else {
//           console.error(
//             "Failed to fetch admission data. Status:",
//             response.status
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching admission data:", error);
//       }
//     };
//     fetchData(); // Call the fetchData function when the component mounts (empty dependency array [])
//   }, []);
//   //   delete exit student function
//   const handleDelete = async (id, index) => {
//     console.log("delete ", id);
//     try {
//       const responseDelete = await axios.delete(
//         `http://localhost:8000/api/v1/delete_id_exitstudent/${id}`
//       );
//       // delete_id_exitstudent
//       console.log("responseDelete", responseDelete);
//       const updatedFormData = [...formData];
//       updatedFormData.splice(index, 1);
//       setFormData(updatedFormData);
//     } catch (error) {
//       console.log("Error deleting item:", error);
//     }
//   };
//   return (
//     <div >
//       <h2>All Exit Students Data</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Stream</th>
//             <th>Email</th>
//             <th>Registration No</th>
//             <th>Session</th>
//             <th>Phone No</th>
//             <th>First year Cgpa</th>
//             <th>Secon Year</th>
//             <th>Third Year Year</th>
//             <th>Fouth Year Year</th>
//             <th>Total </th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {formData.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.firstName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.stream}</td>
//               <td>{item.email}</td>
//               <td> {item.registrationNo}</td>
// <td>{item.session}</td>

// <td>{item.Phone_no}</td>
//                     <td>{item.year_cgpa_1th}</td>
//                     <td>{item.year_cgpa_2nd}</td>
//                     <td>{item.year_cgpa_3rd}</td>
//                     <td>{item.year_cgpa_4th}</td>
//                     <td>{item.final_cgpa}</td>

//               <td>
//                 <span
//                   style={{ color: 'blue', cursor: 'pointer' }}
//                   onClick={() => handleReadMoreClick(index)}
//                 >
//                   {expandedIndex === index ? 'Show Less' : 'Read More'}
//                 </span>
//                 {expandedIndex === index && (
// <div>
//                     <td>{item.firstName}</td>
//               <td>{item.lastName}</td>
//               <td>{item.stream}</td>
//               <td>{item.email}</td>
{
  /* 
                    <div className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom:'20px' }}>
    <table
        style={{
          display: "block",
          background:
            "#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left",
          width: "800px",
          color: "#444444",
          boxShadow: "0px 0 6px #ccc",
          marginTop: "20px",
        }}
        cellSpacing="0"
        cellPadding="0"
        border="0"
        align="center"
      >
        <tr style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr
            width="800px"
            style={{
              width: "100%",
              display: "grid",
              borderCollapse: "collapse",
            }}
          >
            <tr
              width="800px"
              style={{
                width: "800px",
                backgroundColor: "white",
                height: "100px",
                borderBottom: "3px solid #006cb5",
              }}
            >
              <td
                style={{
                  width: "800px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <span>
                  <b
                    style={{
                      marginBottom: "0px",
                      color: "#006cb5",
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}
                  >
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
        <tr style={{ display: "block", padding: "20px" }}>
          <td style={{ fontFamily: "calibri, helvetica, arial, sans-serif" }}>
            <table
              style={{
                width: "760px",
                display: "block",
                wordBreak: "break-all",
                boxShadow: "0px 0 6px #ccc",
                background: "#fff",
                padding: "0px 15px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
              cellSpacing="0"
              cellPadding="0"
              border="0"
              align="center"
            >
              <tbody>
                <tr
                  style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontSize: "20px",
                    paddingTop: "",
                  }}
                >
                  Department of Engineering and Technological Studies <br />
                  Exit Student
                </tr>
                <tr>
                  <td
                    colSpan="3"
                    style={{
                      fontFamily: "calibri, helvetica, arial, sans-serif",
                      fontSize: "12px",
                    }}
                  >
                    <span>
                      Dear
                      <br />
                      Your inquiry has been received
                    </span>
                  </td>
                </tr>
                <tr style={{ display: "grid" }}>
                  
                  <td colSpan={3}>
                    <table
                      style={{
                        marginBottom: "20px",
                        width: "730px",
                        fontSize: "14px",
                        textAlign: "left",
                        background: "#ffffff",
                        border: "1px solid #cac2be",
                        clear: "both",
                      }}
                      cellSpacing="0"
                      cellPadding="5"
                      border="0"
                      align="left"
                    >
                     
                      <thead style={{}}>
                        <tr
                          style={{
                            backgroundColor: "#006cb5",
                            height: "20px",
                            color: "white",
                          }}
                        >
                          <th
                            style={{
                              fontFamily: "calibri,helvetica,arial,sans-serif",
                              textAlign: "left",
                              paddingLeft: "10px",
                            }}
                            width="30%"
                          >
                            Info
                          </th>
                          <th width="5%">
                            <br />
                          </th>
                          <th
                            style={{
                              fontFamily: "calibri,helvetica,arial,sans-serif",
                              textAlign: "left",
                              paddingLeft: "10px",
                            }}
                            width="65%"
                          >
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Frist Name:
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.fristName}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Last Name
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                        <td>{item.lastName}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Father Name
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.fatherName}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Mother Name
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.motherName}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Email
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.email}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Roll No:
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.rollNo}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Date of Birth
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.date_of_birth}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Stream
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.stream}</td>
                        </tr>

                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Registration No
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.registrationNo}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                           Session
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.session}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                           Phone No
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.Phone_no}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Session
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.session}</td>
                        </tr>
                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Frist Year
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.year_cgpa_1th}</td>
                        </tr>

                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Second Year
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.year_cgpa_2nd}</td>
                        </tr>

                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Third Year
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.year_cgpa_3rd}</td>
                        </tr>

                        <tr>
                          <td
                            width="100px"
                            style={{
                              fontFamily:
                                "calibri, helvetica, arial, sans-serif",
                              paddingLeft: "10px",
                            }}
                          >
                            Fourthe Year
                          </td>
                          <td width="40px" align="center">
                            <b>:</b>
                          </td>
                          <td>{item.year_cgpa_4th}</td>
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
    </div> */
}

//                   </div>
//                 )}
//               </td>
//               <td>
//                 <button onClick={() => handleDelete(item._id, index)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Allexitstudent;

// import './mediaprint.css';
import { MdAssignmentTurnedIn } from "react-icons/md";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import style from "./adminsection.module.css";
import "./showdataAdminandteacher.scss";
const Allexitstudent = (props) => {
  const { isAdmin, teacher } = props;
  const [formData, setFormData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const [item, setItem = useState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/exit/get_all_exit_student"
        );
        if (response.status === 200) {
          setFormData(response.data.data);
        } else {
          console.error(
            "Failed to fetch admission data. Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);

  //   const handleDelete = async (id, index) => {
  //     console.log("delete ", id);
  //     try {
  //       const responseDelete = await axios.delete(
  //         `http://localhost:8000/api/v1/delete_id_exitstudent/${id}`
  //       );
  //       console.log("responseDelete", responseDelete);
  //       const updatedFormData = [...formData];
  //       updatedFormData.splice(index, 1);
  //       setFormData(updatedFormData);
  //     } catch (error) {
  //       console.log("Error deleting item:", error);
  //     }
  //   };

  // // style={{ width: "100%" }}
  //   const handleDetails = (item) => {
  //     setItem(item);
  //   };

  const handleDelete = async (id, index) => {
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/delete_newadmission/${id}`
      );
      console.log("responseDelete", responseDelete);
      const updatedFormData = [...formData];
      updatedFormData.splice(index, 1);
      setFormData(updatedFormData);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setClickedIndex(index);
    setEditFormData({
      // Initialize edit form data with existing values
      firstName: formData[index].firstName,
      lastName: formData[index].lastName,
      email: formData[index].email,
      

      fatherName: formData[index].fatherName,
      motherName: formData[index].motherName,
 
      rollNo:formData[index].rollNo,
      date_of_birth: formData[index].date_of_birth,
      stream: formData[index].stream,
      
      category: formData[index].category,
      application_exam_no: formData[index].application_exam_no,
      
      cource_name: formData[index].cource_name,
      examType: formData[index].examType,
      
      registrationNo: formData[index].registrationNo,
      session:formData[index].session,
      Phone_no:formData[index].Phone_no,
      
      year_cgpa_1th:formData[index].year_cgpa_1th,
      year_cgpa_2nd:formData[index].year_cgpa_2nd,
      year_cgpa_3rd:formData[index].year_cgpa_3rd,
      year_cgpa_4th:formData[index].year_cgpa_4th,
      final_cgpa:formData[index].final_cgpa,



      
      
    });
  };

  const handleSave = async (id, index) => {
    try {
      // Make a PUT request to update the data in the database
      const response = await axios.put(
        `http://localhost:8000/api/v1/update_new_admission/${id}`,
        editFormData
      );

      if (response.data.success) {
        console.log("New admission data updated successfully");
        // Update local state with the edited data
        const updatedFormData = [...formData];
        updatedFormData[index] = { ...editFormData, _id: id };
        setFormData(updatedFormData);
        setIsEditing(false);
      } else {
        console.error("Failed to update new admission data");
      }
    } catch (error) {
      console.error("Error updating new admission data:", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setClickedIndex(null);
    setEditFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDetails = (item) => {
    setItem(item);
  };

  const handleRowHover = (index) => {
    setHoveredIndex(index);
  };

  const handleRowLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{}}>
      <h2 className="text-center my-4">All EXIT STUDENTS DATA</h2>

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
             

              <th>Father Name</th>
              <th>Mother Name</th>
             
              <th>Admission Session</th>
              <th>Cource</th>
              <th>Stream</th>
            
              <th>First year Cgpa</th>
              <th>Second Year</th>
              <th>Third Year</th>
              <th>Fourth Year</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.addhar_number}</td>
                <td>{item.email}</td>
                <td>{item.date_of_birth}</td>
                <td>{item.gender}</td>
                <td>{item.category}</td>

                <td>{item.phone_no}</td>
                
                <td>{item.domicile}</td>

                <td>{item.fatherName}</td>
                <td>{item.motherName}</td>
               
                <td>{item.admission_session}</td>
               
                <td>{item.cource_name}</td>
                <td>{item.stream}</td>

                <td>{item.year_cgpa_1th}</td>
                <td>{item.year_cgpa_2nd}</td>
                <td>{item.year_cgpa_3rd}</td>
                <td>{item.year_cgpa_4th}</td>
                <td>{item.final_cgpa}</td>
                {/* <td>
                <button onClick={() => handleDelete(item._id, index)}>
                  Delete
                </button>
                
              </td>
              <td>
                <button onClick={() => handleDetails(item)}>Details</button>
              </td> */}

                <td
                  style={{ position: "relative" }}
                  key={index}
                  onMouseEnter={() => handleRowHover(index)}
                  onMouseLeave={handleRowLeave}
                >
                  <MdAssignmentTurnedIn className={style.icon_show} />

                  {isEditing &&
                    clickedIndex === index &&
                    hoveredIndex === index && (
                      <div className={style.editButton_click_after}>
                        <button onClick={() => handleSave(item._id, index)}>
                          Save
                        </button>
                        <button onClick={handleCancel}>Cancel</button>
                      </div>
                    )}
                  {!isEditing && hoveredIndex === index && (
                    <div className={style.icon_click_after_show}>
                      {/* <button onClick={() => handleEdit(index)}>Edit</button>


                      <button onClick={() => handleDelete(item._id, index)}>
                        Delete
                      </button> */}

                      {!teacher && isAdmin && (
                        <>
                          <button onClick={() => handleEdit(index)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(item._id, index)}>
                            Delete
                          </button>
                        </>
                      )}
                      <button onClick={() => handleDetails(item)}>
                        Details
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {item && (
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
                              <td>{isEditing?isEditing.firstName:item.firstName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Last Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.lastName:item.lastName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Father Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.fatherName:item.fatherName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Mother Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.motherName:item.motherName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Email
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.email:item.email}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Roll No:
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.rollNo:item.rollNo}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Date of Birth
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.date_of_birth:item.date_of_birth}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Stream
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.stream:item.stream}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Category
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.category:item.category}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Registration No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.registrationNo:item.registrationNo}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Session
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.isEditing:item.session}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Phone No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.Phone_no:item.Phone_no}</td>
                            </tr>
                            
                            <tr>
                              <td className="tbody_formData_info_name">
                                First Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.year_cgpa_1th:item.year_cgpa_1th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Second Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.year_cgpa_2nd:item.year_cgpa_2nd}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Third Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.year_cgpa_3rd:item.year_cgpa_3rd}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Fourthe Year
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.year_cgpa_4th:item.year_cgpa_4th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Total 
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{isEditing?isEditing.final_cgpa:item.final_cgpa}</td>
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
      )}
    </div>
  );
};

export default Allexitstudent;
