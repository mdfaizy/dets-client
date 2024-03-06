// import { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { MdAssignmentTurnedIn } from "react-icons/md";
// const AllNewStudents = () => {
//   const [formData, setFormData] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   // const [isHovered, setIsHovered] = useState(false);

//   const [clickedIndex, setClickedIndex] = useState(null);

// //get data new Admission
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/get_new_admission"
//         );
//         if (response.data.success) {
//           setFormData(response.data.data);
//         } else {
//           console.error("Failed to fetch admission data");
//         }
//       } catch (error) {
//         console.error("Error fetching admission data:", error);
//       }
//     };
//     fetchData();
//   }, []);
// //delete function 
//   const handleDelete = async (id, index) => {
//     console.log("delete ", id);
//     try {
//       const responseDelete = await axios.delete(
//         `http://localhost:8000/api/v1/delete_newadmission/${id}`
//       );
//       console.log("responseDelete", responseDelete);
//       const updatedFormData = [...formData];
//       updatedFormData.splice(index, 1);
//       setFormData(updatedFormData);
//     } catch (error) {
//       console.log("Error deleting item:", error);
//     }
//   };

//   // const handleIconClick = (index) => {
//   //   setClickedIndex(index);
//   // };

//   const handleIconClick = (index) => {
//     setClickedIndex(index);
//   };
//   const handleMouseEnter = (index) => {
//     // Your logic for mouse enter
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     // Your logic for mouse leave
//     setHoveredIndex(null);
//   };

//   return (
//     <div style={{ margin: '70px' }}>
//       <h2>All New Students Data</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr className="text-center">
//             <th>No</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Stream</th>
//             <th>Email</th>
//             <th>
//             <MdAssignmentTurnedIn/></th>
//             {/* <th>Delete</th> */}
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
//                  {/* <button onClick={() => handleDelete(item._id, index)}>
//                    Delete
//                  </button> */}
//               {/* <td
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{ position: 'relative' }}
//       >
//         <MdAssignmentTurnedIn />
//         {isHovered && (
//           <div style={{ position: 'absolute',display:'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//             <button onClick={() => handleDelete(item._id, index)}>Delete</button>
//             <button>Edit</button>
//             <button>Show-All</button>
//           </div>
//         )}
//       </td> */}


// {/* <td
//                 style={{ position: 'relative' }}
//                 onClick={() => handleIconClick(index)}
//               >
//                 <MdAssignmentTurnedIn />
//                 {clickedIndex === index && (
//                   <div style={{ position: 'absolute', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//                     <button onClick={() => handleDelete(item._id, index)}>Delete</button>
//                     <button>Edit</button>
//                     <button>Show-All</button>
//                   </div>
//                 )}
//               </td> */}


// {/* <td
//                 style={{ position: 'relative' }}
//                 onClick={() => handleIconClick(index)}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <MdAssignmentTurnedIn />
//                 {(hoveredIndex === index || clickedIndex === index) && (
//                   <div style={{ position: 'absolute', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//                     <button onClick={() => handleDelete(item._id, index)}>Delete</button>
//                     <button>Edit</button>
//                     <button>Show-All</button>
//                   </div>
//                 )}
//               </td> */}
// <td
//   style={{ position: 'relative' }}
//   // onClick={() => handleIconClick(index)}
//   onClick={(e) => handleIconClick(e, index)}
//   onMouseEnter={() => handleMouseEnter(index)}
//   onMouseLeave={() => handleMouseLeave()}
// >
//   <MdAssignmentTurnedIn />
//   {(hoveredIndex === index || clickedIndex === index) && (
//     <div style={{ position: 'absolute', display: 'flex', marginTop:'30px', marginBottom:'50px', transform: 'translate(-50%, -50%)', width:'fit-content', height:'30px',marginRight: '40px',padding:'0px' }}>
//       <button onClick={() => handleDelete(item._id, index)}>Delete</button>
//       <button>Edit</button>
//       <button >All </button>
//     </div>
//   )}
// </td>


//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default AllNewStudents;





import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdAssignmentTurnedIn } from "react-icons/md";

const AllNewStudents = () => {
  const [formData, setFormData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/get_new_admission"
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
      stream: formData[index].stream,
      email: formData[index].email,
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


  return (
    <div style={{ margin: '70px' }}>
      <h2>All New Students Data</h2>
      <Table striped bordered hover>
      <thead>
         <tr className="text-center">
            <th>No</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Stream</th>
             <th>Email</th>
             <th>
             <MdAssignmentTurnedIn/></th>
             {/* <th>Delete</th> */}
           </tr>
         </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{isEditing && clickedIndex === index ? <input type="text" name="firstName" value={editFormData.firstName} onChange={handleInputChange} /> : item.firstName}</td>
              <td>{isEditing && clickedIndex === index ? <input type="text" name="lastName" value={editFormData.lastName} onChange={handleInputChange} /> : item.lastName}</td>
              <td>{isEditing && clickedIndex === index ? <input type="text" name="stream" value={editFormData.stream} onChange={handleInputChange} /> : item.stream}</td>
              <td>{isEditing && clickedIndex === index ? <input type="text" name="email" value={editFormData.email} onChange={handleInputChange} /> : item.email}</td>
              <td style={{ position: 'relative' }}>
                <MdAssignmentTurnedIn />
                {isEditing && clickedIndex === index && (
                  <div style={{ position: 'absolute', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <button onClick={() => handleSave(item._id, index)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                )}
                {!isEditing && (
                  <div style={{ position: 'absolute', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(item._id, index)}>Delete</button>
                    <button>Show-All</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllNewStudents;






