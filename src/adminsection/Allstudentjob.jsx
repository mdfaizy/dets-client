import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdAssignmentTurnedIn } from "react-icons/md";
// import axios from "axios";
import style from "../adminsection/adminsection.module.css";
import { getAllJobStudents,deleteJobStudent } from "../services/hooks/jobApi";
const Allstudentjob = () => {
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [clickedIndex, setClickedIndex] = useState(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [item, setItem = useState] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllJobStudents();
        setFormData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id, index) => {
    try {
      await deleteJobStudent(id);
      const updatedFormData = [...formData];
      updatedFormData.splice(index, 1);
      setFormData(updatedFormData);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/job/get_all_Job_student"
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

  // const handleDelete = async (id, index) => {
   
  //   try {
  //     const responseDelete = await axios.delete(
  //       `http://localhost:8000/api/v1/job/delete_newadmission/${id}`
  //     );
  //     console.log("responseDelete", responseDelete);
  //     const updatedFormData = [...formData];
  //     updatedFormData.splice(index, 1);
  //     setFormData(updatedFormData);
  //   } catch (error) {
  //     console.log("Error deleting item:", error);
  //   }
  // };




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
        `http://localhost:8000/api/v1/pgcourse/update_job_cource/${id}`,
        editFormData
      );
      if (response.data.success) {
        console.log("Jon details data updated successfully");
        // Update local state with the edited data
        const updatedFormData = [...formData];
        updatedFormData[index] = { ...editFormData, _id: id };
        setFormData(updatedFormData);
        setIsEditing(false);
      } else {
        console.error("Failed to update job data");
      }
    } catch (error) {
      console.error("Error updating job data:", error);
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
      <h2>All Jobs Students Data</h2>
      <div className={style.teacher_verify_new_admission}>
      <Table striped bordered hover>
        <thead className={style.teacher_verify_new_admission}>
          <tr className={style.teacher_verify_th}>
            <th>No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Home City</th>
            <th>Companies Name</th>
            <th>Select Companies</th>
            <th>Apply Your Total Companies</th>
            <th>No Of Select Interview</th>
            <th>Package lpa</th>
            <th>Job Role</th>
            <th>Type Of Companies</th>
            <th>Companies City</th>
            <th>Delete</th>
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
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.fullName
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
                    name="phone_No"
                    value={editFormData.phone_No}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.phone_No
                )}
              </td>

              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="home_city"
                    value={editFormData.home_city}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.home_city
                )}
              </td>
              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="companies_name"
                    value={editFormData.companies_name}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.companies_name
                )}
              </td>


              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="selectType"
                    value={editFormData.selectType}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.selectType
                )}
              </td>

              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="totalApplyCompanies"
                    value={editFormData.totalApplyCompanies}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.totalApplyCompanies
                )}
              </td>
              

              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="noOfSelectInterview"
                    value={editFormData.noOfSelectInterview}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.noOfSelectInterview
                )}
              </td>


              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="package_lpa"
                    value={editFormData.package_lpa}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.package_lpa
                )}
              </td>

              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="job_role"
                    value={editFormData.job_role}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.job_role
                )}
              </td>


              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="companiesType"
                    value={editFormData.companiesType}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.companiesType
                )}
              </td>


              <td>
                {isEditing && clickedIndex === index ? (
                  <input
                    type="text"
                    name="companies_city"
                    value={editFormData.companies_city}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.companies_city
                )}
              </td>
{/*  */}
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
                    
                      <>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(item._id, index)}>
                          Delete
                        </button>
                      </>
                   
                    <button onClick={() => handleDetails(item)}>Details</button>
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
                            Full Name:
                           </td>
                           <td className="tbody_fromData_and_info_dot">
                             <b>:</b>
                           </td>
                           <td>{isEditing?isEditing.fullName:item.fullName}</td>
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
export default Allstudentjob;

//
