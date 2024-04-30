import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdAssignmentTurnedIn } from "react-icons/md";
import style from "./adminsection.module.css";
import "./showdataAdminandteacher.scss";
import { getAllPgStudents,deletePgStudent,updatePgStudent } from "../services/hooks/pgcourseApi";
const Allpgstudent = (props) => {
  const { isAdmin, teacher } = props;
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [clickedIndex, setClickedIndex] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [item, setItem = useState] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/pgcourse/get_all_pgcource_student"
  //       );
  //       if (response.status === 200) {
  //         console.log(response);
  //         setFormData(response.data.data);
  //       } else {
  //         console.error(
  //           "Failed to fetch admission data. Status:",
  //           response.status
  //         );
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
        const data = await getAllPgStudents();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching PG students data:', error);
      }
    };
    fetchData();
  }, []);

  // const handleDelete = async (id, index) => {
  //   console.log("delete ", id);
  //   try {
  //     const responseDelete = await axios.delete(
  //       `http://localhost:8000/api/v1/pgcourse/delete_id_pgstudent/${id}`
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
      await deletePgStudent(id);
      const updatedFormData = [...formData];
      updatedFormData.splice(index, 1);
      setFormData(updatedFormData);
    } catch (error) {
      console.error(error);
    }
  };


  const handleEdit = (index) => {
    setIsEditing(true);
    setClickedIndex(index);
    setEditFormData({
      // Initialize edit form data with existing values
      firstName: formData[index].firstName,
      lastName: formData[index].lastName,
      stream: formData[index].stream,
      email: formData[index].email,
    });
  };
  const handleSave = async (id, index) => {
    try {
      // Make a PUT request to update the data in the database
      const response = await axios.put(
        `http://localhost:8000/api/v1/pgcourse/update_pg_cource/${id}`,
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
    <div>
      <h2>All PG Students Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Category</th>


            <th>Father Name</th>
            <th>Mother Name</th>

            <th>All India Rank</th>
            <th>Stream</th>
            <th>Session</th>
            <th>Exame Type</th>
            <th>Institute Name</th>
            <th>Course</th>
            <th>Institute City</th>
            <th>Category Rank</th>
          
            <th className={style.icon_show}>
              
              Action
            </th>
          </tr>
        </thead>
        {/* <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.stream}</td>
              <td>{item.email}</td>

              <td>
                <button onClick={() => handleDelete(item._id, index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}

        {}
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
                    name="MotherName"
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
                    name="allIndiaRank"
                    value={editFormData.allIndiaRank}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.allIndiaRank
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
                    name="session"
                    value={editFormData.session}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.session
                )}
              </td>

              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="exameType"
                    value={editFormData.exameType}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.exameType
                )}
              </td>
             
             
              


              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="InstituteCity"
                    value={editFormData.InstituteCity}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.InstituteCity
                )}
              </td>


              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="cource"
                    value={editFormData.cource}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.cource
                )}
              </td>

              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="InstituteName"
                    value={editFormData.InstituteName}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.InstituteName
                )}
              </td>
              

              {/* <td style={{ position: 'relative' }}>
                <MdAssignmentTurnedIn />
                {isEditing && clickedIndex === index && (
                  <div style={{ position: 'absolute', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <button onClick={() => handleSave(item._id, index)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                )}
                {!isEditing && (
                  <div style={{ position: 'absolute', display: 'flex', marginTop:'30px', marginBottom:'50px', transform: 'translate(-50%, -50%)', width:'fit-content', height:'30px',marginRight: '80px',padding:'0px' }}>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(item._id, index)}>Delete</button>
                    <button style={{width:'fit-content', height:'30px'}}>Show</button>
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
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(item._id, index)}>
                          Delete
                        </button>
                      </>
                    )}
                    <button onClick={() => handleDetails(item)}>Details</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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
                   PG Student
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
                           <td className="tbody_formData_info_name">Email</td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.email:item.email}</td>
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
                           <td className="tbody_formData_info_name">Gender</td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.gender:item.gender}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">Exam</td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.exameType:item.exameType}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">Category</td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.category:item.category}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">
                             All India Rank
                           </td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.allIndiaRank:item.allIndiaRank}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">Stream</td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.stream:item.stream}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">Session</td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.session:item.session}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">
                             Institute City
                           </td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.InstituteCity:item.InstituteCity}</td>
                         </tr>
                         <tr>
                           <td className="tbody_formData_info_name">
                             Institute Name
                           </td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.InstituteName:item.InstituteName}</td>
                         </tr>

                         <tr>
                           <td className="tbody_formData_info_name">
                             Couese
                           </td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.cource:item.cource}</td>
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

export default Allpgstudent;
