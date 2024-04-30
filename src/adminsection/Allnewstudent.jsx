import style from "./adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdAssignmentTurnedIn } from "react-icons/md";
import "./showdataAdminandteacher.scss";
import { getAllNewStudent ,deleteNewAdmission} from "../services/hooks/newadmissionapi";
// import DataPrint from "../components/pages/printFormData/DataPrint";
// import useOnClickOutside from "../hooks/useOnClickOutside"
const AllNewStudents = (props) => {
  // const [open, setOpen] = useState(false);
  // const ref = useRef(null);
  // useOnClickOutside(ref, () => setOpen(false));
  const { isAdmin, teacher } = props;
  const [formData, setFormData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const [item, setItem = useState] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/student/get_new_admission"
  //       );
  //       if (response.data.success) {
  //         setFormData(response.data.data);
  //       } else {
  //         console.error("Failed to fetch admission data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching admission data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllNewStudent();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching admission data:', error);
      }
    };
    fetchData();
  }, []);

  

  // const handleDelete = async (id, index) => {
  //   try {
  //     const responseDelete = await axios.delete(
  //       `http://localhost:8000/api/v1/student/delete_newadmission/${id}`
  //     );
  //     console.log("responseDelete", responseDelete);
  //     const updatedFormData = [...formData];
  //     updatedFormData.splice(index, 1);
  //     setFormData(updatedFormData);
  //   } catch (error) {
  //     console.log("Error deleting item:", error);
  //   }
  // };




  const handleDelete = async (id, index) => {
    try {
      const success = await deleteNewAdmission(id);
      if (success) {
        const updatedFormData = [...formData];
        updatedFormData.splice(index, 1);
        setFormData(updatedFormData);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  

  const handleEdit = (index) => {
    setIsEditing(true);
    setClickedIndex(index);
    setEditFormData({
      firstName: formData[index].firstName,
      lastName: formData[index].lastName,
      email: formData[index].email,

      date_of_birth: formData[index].date_of_birth,
      gender:formData[index].gender,
      domicile:formData[index].domicile,
      phone_no: formData[index].phone_no,
      addhar_number:formData[index].addhar_number,
      category: formData[index].category,



      fatherName: formData[index].fatherName,
      motherName: formData[index].motherName,
      parent_phone_no:formData[index].parent_phone_no,
      parent_incom:formData[index].parent_incom,
      parent_occoupation:formData[index].parent_occoupation,

      examType: formData[index].examType,
      admission_session: formData[index].admission_session,

      application_exam_no: formData[index].application_exam_no,
scoure_rank: formData[index].scoure_rank,

cource_name: formData[index].cource_name,
      stream: formData[index].stream,
      
      village:formData[index].village,
      police_station:formData[index].police_station,
      distric:formData[index].distric,
      pin_code:formData[index].pin_code,
      state_name:formData[index].state_name,

      schoolName_10th: formData[index].schoolName_10th,
      roll_No_10th:formData[index].roll_No_10th,
      regisration_No_10th:formData[index].regisration_No_10th,
   board_Name_10th:formData[index].board_Name_10th,
   year_of_passing_10th:formData[index].year_of_passing_10th,
   persentage_10th:formData[index].persentage_10th,

   schoolName_12th:formData[index].schoolName_12th,
   roll_No_12th:formData[index].roll_No_12th,
   regisration_No_12th:formData[index].regisration_No_12th,
   board_Name_12th:formData[index].board_Name_12th,
   year_of_passing_12th:formData[index].year_of_passing_12th,
   persentage_12th:formData[index].persentage_12th,
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

      {/* <NewStudentReport /> */}
      <div className={style.teacher_verify_new_admission}>
        <Table striped bordered hover>
          <thead>
            <tr className={style.teacher_verify_th}>
              {/* <th>No</th>
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
              <th>Year of Passing</th> */}

              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Addhar Number</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Phone No</th>
              <th>Domicile</th>

              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Parent Phone No</th>
              <th>Parent Incom</th>
              <th>Parent Occupation</th>

              <th>Exam Type</th>
              <th>Admission Session</th>
              <th>Application No</th>
              <th>Rank</th>
              <th>Cource</th>
              <th>Stream</th>

              <th>Village/City</th>
              <th>Police Station</th>
              <th>Distric</th>
              <th>Pin Code</th>
              <th>State</th>

              <th>Hs School Name</th>
              <th>Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>

              <th>Ss School Name</th>
              <th>Roll No</th>
              <th>Regisration No</th>
              <th>Board Name</th>
              <th>Year of Passing</th>
              <th>Persentage</th>

              {/* <th>Addhar Card</th> */}
              {/* <th>Rank Card</th> */}

              <th className={style.icon_show}>Action</th>
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
                      name="addhar_number"
                      value={editFormData.addhar_number}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.addhar_number
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
                      name="gender"
                      value={editFormData.gender}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.gender
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

                {/* father details */}
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="fatherName"
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
                      name="motherName"
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
                      name="parent_phone_no"
                      value={editFormData.parent_phone_no}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.parent_phone_no
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="parent_incom"
                      value={editFormData.parent_incom}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.parent_incom
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="parent_occoupation"
                      value={editFormData.parent_occoupation}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.parent_occoupation
                  )}
                </td>
                {/* admission details */}
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
                {/* address details */}

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="village"
                      value={editFormData.village}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.village
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="police_station"
                      value={editFormData.police_station}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.police_station
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="distric"
                      value={editFormData.distric}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.distric
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="pin_code"
                      value={editFormData.pin_code}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.pin_code
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="state_name"
                      value={editFormData.state_name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.state_name
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
                      name="schoolName_12th"
                      value={editFormData.schoolName_12th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.schoolName_12th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="roll_No_12th"
                      value={editFormData.roll_No_12th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.roll_No_12th
                  )}
                </td>

                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="regisration_No_12th"
                      value={editFormData.regisration_No_12th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.regisration_No_12th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="board_Name_12th"
                      value={editFormData.board_Name_12th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.board_Name_12th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="year_of_passing_12th"
                      value={editFormData.year_of_passing_12th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.year_of_passing_12th
                  )}
                </td>
                <td>
                  {isEditing && clickedIndex === index ? (
                    <input
                      type="text"
                      name="persentage_12th"
                      value={editFormData.persentage_12th}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.persentage_12th
                  )}
                </td>

                {/* <td>
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
                </td> */}

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
                                Gender
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.gender : item.gender}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Domicile
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.domicile : item.domicile}
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
                                {isEditing ? isEditing.phone_no : item.phone_no}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Addhar Card Number
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.addhar_number
                                  : item.addhar_number}
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
                              {/* father details */}

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
                                Parent Phone Number
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.parent_phone_no
                                  : item.parent_phone_no}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Parent Income
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.parent_incom
                                  : item.parent_incom}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Parent Occoupation
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.parent_occoupation
                                  : item.parent_occoupation}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Exame Type
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.examType : item.examType}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Admission Session
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.admission_session
                                  : item.admission_session}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Application No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.application_exam_no
                                  : item.application_exam_no}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">Rank</td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.scoure_rank
                                  : item.scoure_rank}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Cource
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.cource_name
                                  : item.cource_name}
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
                                {isEditing ? isEditing.state_name : item.stream}
                              </td>
                            </tr>

                            <tr>Address Details</tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Village
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.village : item.village}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Police Station
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.police_station
                                  : item.police_station}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Distric
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.distric : item.distric}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Pin Code
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.pin_code : item.pin_code}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                State Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing ? isEditing.state_name : item.stream}
                              </td>
                            </tr>

                            <tr>10th Info</tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                School Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.schoolName_10th
                                  : item.schoolName_10th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Roll No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.roll_No_10th
                                  : item.roll_No_10th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Regisration No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.regisration_No_10th
                                  : item.regisration_No_10th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Board Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.board_Name_10th
                                  : item.board_Name_10th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Year of Passing
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.year_of_passing_10th
                                  : item.year_of_passing_10th}
                              </td>
                            </tr>
                            <tr>
                              <td className="tbody_formData_info_name">
                                Persentage
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.persentage_10th
                                  : item.persentage_10th}
                              </td>
                            </tr>

                            <tr>12th Info</tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                School Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.schoolName_12th
                                  : item.schoolName_12th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Roll No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.roll_No_12th
                                  : item.roll_No_12th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Regisration No
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.regisration_No_12th
                                  : item.regisration_No_12th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Board Name
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.board_Name_12th
                                  : item.board_Name_12th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Year of Passing
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.year_of_passing_12th
                                  : item.year_of_passing_12th}
                              </td>
                            </tr>

                            <tr>
                              <td className="tbody_formData_info_name">
                                Persentage
                              </td>
                              <td className="tbody_fromData_and_info_dot">
                                <b>:</b>
                              </td>
                              <td>
                                {isEditing
                                  ? isEditing.persentage_12th
                                  : item.persentage_12th}
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
      )}
    </div>
  );
};

export default AllNewStudents;
