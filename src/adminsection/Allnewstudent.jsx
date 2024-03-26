import style from "./adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdAssignmentTurnedIn } from "react-icons/md";
import "./showdataAdminandteacher.scss";

const AllNewStudents = (props) => {
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
          "http://localhost:8000/api/v1/student/get_new_admission"
        );
        if (response.data.success) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch admission data");
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id, index) => {
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/student/delete_newadmission/${id}`
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
      fatherName: formData[index].fatherName,
      motherName: formData[index].motherName,
      stream: formData[index].stream,
      email: formData[index].email,
      date_of_birth: formData[index].date_of_birth,
      examType: formData[index].examType,
      category: formData[index].category,
      application_exam_no: formData[index].application_exam_no,
      scoure_rank: formData[index].scoure_rank,
      cource_name: formData[index].cource_name,
      phone_no: formData[index].phone_no,
      schoolName_10th: formData[index].schoolName_10th,
    });
  };

  const handleSave = async (id, index) => {
    try {
      // Make a PUT request to update the data in the database
      const response = await axios.put(
        `http://localhost:8000/api/v1/student/update_new_admission/${id}`,
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
    <div style={{ margin: "70px" }}>
      <h2 className="text-center p-4">All New Students Data</h2>
      <div className={style.teacher_verify_new_admission}>
        <Table striped bordered hover>
          <thead>
            <tr className={style.teacher_verify_th}>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Exam Type</th>
              <th>CATEGORY</th>
              <th>Application No</th>
              <th>Rank</th>
              <th>Cource</th>
              <th>Stream</th>
              <th>Phone No</th>

              <th>Admission Session</th>
              <th>Domicile</th>
              <th>School Name</th>
              <th>Scc Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>
              <th>School Name</th>
              <th>Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>
              <th>Addhar Card</th>
              <th>Rank Card</th>

              <th className={style.icon_show}>
                {/* <MdAssignmentTurnedIn /> */}
                Action
              </th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editFormData.firstName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.firstName
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editFormData.lastName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.lastName
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editFormData.fatherName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.fatherName
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editFormData.motherName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.motherName
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="email"
                      value={editFormData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.email
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="date_of_birth"
                      value={editFormData.date_of_birth}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.date_of_birth
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="examType"
                      value={editFormData.examType}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.examType
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="category"
                      value={editFormData.category}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="application_exam_no"
                      value={editFormData.application_exam_no}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.application_exam_no
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="scoure_rank"
                      value={editFormData.scoure_rank}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.scoure_rank
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="cource_name"
                      value={editFormData.cource_name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.cource_name
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="stream"
                      value={editFormData.stream}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.stream
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="phone_no"
                      value={editFormData.phone_no}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.phone_no
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="domicile"
                      value={editFormData.domicile}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.domicile
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="admission_session"
                      value={editFormData.admission_session}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.admission_session
                  )}
                </td>

               
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="schoolName_10th"
                      value={editFormData.schoolName_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.schoolName_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="roll_No_10th"
                      value={editFormData.roll_No_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.roll_No_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="regisration_No_10th"
                      value={editFormData.regisration_No_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.regisration_No_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="board_Name_10th"
                      value={editFormData.board_Name_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.board_Name_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="year_of_passing_10th"
                      value={editFormData.year_of_passing_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.year_of_passing_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="persentage_10th"
                      value={editFormData.persentage_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.persentage_10th
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="schoolName_10th"
                      value={editFormData.schoolName_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.schoolName_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="roll_No_10th"
                      value={editFormData.roll_No_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.roll_No_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="regisration_No_10th"
                      value={editFormData.regisration_No_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.regisration_No_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="board_Name_10th"
                      value={editFormData.board_Name_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.board_Name_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="year_of_passing_10th"
                      value={editFormData.year_of_passing_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.year_of_passing_10th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="persentage_10th"
                      value={editFormData.persentage_10th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.persentage_10th
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="aadhar_card_file"
                      value={editFormData.aadhar_card_file}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.aadhar_card_file
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="rankcardFile"
                      value={editFormData.rankcardFile}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.rankcardFile
                  )}
                </td>

                {/* <td style={{ position: "relative" }}>
                <MdAssignmentTurnedIn  className={style.icon_show}/>
           
                {isEditing && clickedIndex === index && (
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <button onClick={() => handleSave(item._id, index)}>
                      Save
                    </button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                )}
                {!isEditing && (
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(item._id, index)}>
                      Delete
                    </button>
                    <td>
                      <button onClick={() => handleDetails(item)}>
                        Details
                      </button>
                    </td>
                  </div>
                )}
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
                      </button>
                       */}

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
        // <div
        //   className="text-center"
        //   style={{
        //     display: "flex",
        //     alignitems: "center",
        //     justifyContent: "center",
        //     marginBottom: "20px",
        //   }}
        // >
        //   <table
        //     style={{
        //       display: "block",
        //       background:
        //         "#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left",
        //       width: "800px",
        //       color: "#444444",
        //       boxShadow: "0px 0 6px #ccc",
        //       marginTop: "20px",
        //     }}
        //     cellSpacing="0"
        //     cellPadding="0"
        //     border="0"
        //     align="center"
        //   >
        //     <tbody>
        //       <tr style={{ width: "100%", borderCollapse: "collapse" }}>
        //         <tr
        //           width="800px"
        //           style={{
        //             width: "100%",
        //             display: "grid",
        //             borderCollapse: "collapse",
        //           }}
        //         >
        //           <tr
        //             width="800px"
        //             style={{
        //               width: "800px",
        //               backgroundColor: "white",
        //               height: "100px",
        //               borderBottom: "3px solid #006cb5",
        //             }}
        //           >
        //             <td
        //               style={{
        //                 width: "800px",
        //                 textAlign: "center",
        //                 verticalAlign: "middle",
        //               }}
        //             >
        //               <span>
        //                 <b
        //                   style={{
        //                     marginBottom: "0px",
        //                     color: "#006cb5",
        //                     fontSize: "28px",
        //                     fontWeight: "bold",
        //                   }}
        //                 >
        //                   UNIVERSITY OF KALYANI
        //                 </b>
        //                 <br />
        //                 ( Department of Engineering and Technological
        //                 Studies(DETS))
        //                 <br />
        //                 (Kalyani, West Bengal,741235)
        //               </span>
        //             </td>
        //           </tr>
        //         </tr>
        //       </tr>
        //       <tr style={{ display: "block", padding: "20px" }}>
        //         <td
        //           style={{
        //             fontFamily: "calibri, helvetica, arial, sans-serif",
        //           }}
        //         >
        //           <table
        //             style={{
        //               width: "760px",
        //               display: "block",
        //               wordBreak: "break-all",
        //               boxShadow: "0px 0 6px #ccc",
        //               background: "#fff",
        //               padding: "0px 15px",
        //               borderRadius: "5px",
        //               fontSize: "14px",
        //             }}
        //             cellSpacing="0"
        //             cellPadding="0"
        //             border="0"
        //             align="center"
        //           >
        //             <tbody>
        //               <tr
        //                 style={{
        //                   textAlign: "center",
        //                   verticalAlign: "middle",
        //                   fontSize: "20px",
        //                   paddingTop: "",
        //                 }}
        //               >
        //                 Department of Engineering and Technological Studies{" "}
        //                 <br />
        //                 NEW ADMISSION
        //               </tr>
        //               <tr>
        //                 <td
        //                   colSpan="3"
        //                   style={{
        //                     fontFamily: "calibri, helvetica, arial, sans-serif",
        //                     fontSize: "12px",
        //                   }}
        //                 >
        //                   <span>
        //                     Dear
        //                     <br />
        //                     Your inquiry has been received
        //                   </span>
        //                 </td>
        //               </tr>
        //               <tr style={{ display: "grid" }}>
        //                 <td colSpan={3}>
        //                   <table
        //                     style={{
        //                       marginBottom: "20px",
        //                       width: "730px",
        //                       fontSize: "14px",
        //                       textAlign: "left",
        //                       background: "#ffffff",
        //                       border: "1px solid #cac2be",
        //                       clear: "both",
        //                     }}
        //                     cellSpacing="0"
        //                     cellPadding="5"
        //                     border="0"
        //                     align="left"
        //                   >
        //                     <thead style={{}}>
        //                       <tr
        //                         style={{
        //                           backgroundColor: "#006cb5",
        //                           height: "20px",
        //                           color: "white",
        //                         }}
        //                       >
        //                         <th
        //                           style={{
        //                             fontFamily:
        //                               "calibri,helvetica,arial,sans-serif",
        //                             textAlign: "left",
        //                             paddingLeft: "10px",
        //                           }}
        //                           width="30%"
        //                         >
        //                           Info
        //                         </th>
        //                         <th width="5%">
        //                           <br />
        //                         </th>
        //                         <th
        //                           style={{
        //                             fontFamily:
        //                               "calibri,helvetica,arial,sans-serif",
        //                             textAlign: "left",
        //                             paddingLeft: "10px",
        //                           }}
        //                           width="65%"
        //                         >
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
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Frist Name:
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.fristName}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Last Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.lastName}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Father Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.fatherName}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Mother Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.motherName}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Email
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.email}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Date of Birth:
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.date_of_birth}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Roll No:
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.rollNo}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Stream
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.stream}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           CATEGORY
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.category}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Application No
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.application_exam_no}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Rank
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.scoure_rank}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Cource
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.cource_name}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Session
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.session}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Phone No
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.phone_no}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           School Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.schoolName_10th}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Board Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.board_Name_10th}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Year of Passing
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.year_of_passing_10th}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Registration No
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.regisration_No_10th}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Persentage
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.persentage_10th}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           School Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.year_cgpa_1th}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Board Name
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.year_cgpa_2nd}</td>
        //                       </tr>

        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Year of Passing
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.year_cgpa_3rd}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Registration No
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.registrationNo}</td>
        //                       </tr>
        //                       <tr>
        //                         <td
        //                           width="100px"
        //                           style={{
        //                             fontFamily:
        //                               "calibri, helvetica, arial, sans-serif",
        //                             paddingLeft: "10px",
        //                           }}
        //                         >
        //                           Persentage
        //                         </td>
        //                         <td width="40px" align="center">
        //                           <b>:</b>
        //                         </td>
        //                         <td>{item.year_cgpa_4th}</td>
        //                       </tr>
        //                     </tbody>
        //                   </table>
        //                 </td>
        //               </tr>
        //             </tbody>
        //           </table>
        //         </td>
        //       </tr>
        //     </tbody>
        //     <button onClick={() => window.print()}>Print</button>
        //   </table>
        // </div>

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
                              <td>{item.firstName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Last Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.lastName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Father Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.fatherName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Mother Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.motherName}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Email
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.email}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Date of Birth
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.date_of_birth}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Exame Type
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.examType}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Category
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.category}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Application No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.application_exam_no}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">Rank</td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.scoure_rank}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Cource
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.cource_name}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Stream
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.stream}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Phone No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.phone_no}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                              Admission Session
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.admission_session}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                              Domicile
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.domicile}</td>
                            </tr>

                            {/* admission_session */}

                            <tr>10th Info</tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                School Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.schoolName_10th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Roll No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.roll_No_10th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Regisration No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.regisration_No_10th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Board Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.board_Name_10th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Year of Passing
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.year_of_passing_10th}</td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Persentage
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.persentage_10th}</td>
                            </tr>

                            <tr>12th Info</tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                School Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.schoolName_12th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Roll No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.roll_No_12th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Regisration No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.regisration_No_12th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Board Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.board_Name_12th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Year of Passing
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.year_of_passing_12th}</td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Persentage
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>{item.persentage_12th}</td>
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

export default AllNewStudents;
