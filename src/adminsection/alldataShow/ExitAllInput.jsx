// import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";

// const ExitAllInput = () => {
//   const [formData, setFormData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/get_all_exit_student"
//         );
//         if (response.status === 200) {
//           setFormData(response.data.data);
//         } else {
//           console.error(
//             "Failed to fetch exit student data. Status:",
//             response.status
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching exit student data:", error);
//       }
//     };
//     fetchData();
//   }, []);

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
//       console.log("Error deleting selectedItem:", error);
//     }
//   };

//   return (
//     <div>
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
//             <th>Second Year</th>
//             <th>Third Year</th>
//             <th>Fourth Year</th>
//             <th>Total</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {formData.map((selectedItem, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{selectedItem.firstName}</td>
//               <td>{selectedItem.lastName}</td>
//               <td>{selectedItem.stream}</td>
//               <td>{selectedItem.email}</td>
//               <td>{selectedItem.registrationNo}</td>
//               <td>{selectedItem.session}</td>
//               <td>{selectedItem.Phone_no}</td>
//               <td>{selectedItem.year_cgpa_1th}</td>
//               <td>{selectedItem.year_cgpa_2nd}</td>
//               <td>{selectedItem.year_cgpa_3rd}</td>
//               <td>{selectedItem.year_cgpa_4th}</td>
//               <td>{selectedItem.final_cgpa}</td>
//               <td>
//                 <button onClick={() => handleDelete(selectedItem._id, index)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
         
//       </Table>
      
//       {/* Uncomment the following code block if needed */}
       
//       <div className="text-center" style={{ display: 'flex', alignselectedItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
//         <table
//           style={{
//             display: "block",
//             background: "#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left",
//             width: "800px",
//             color: "#444444",
//             boxShadow: "0px 0 6px #ccc",
//             marginTop: "20px",
//           }}
//           cellSpacing="0"
//           cellPadding="0"
//           border="0"
//           align="center"
//         >
//           <tr style={{ width: "100%", borderCollapse: "collapse" }}>
//           <tr
//             width="800px"
//             style={{
//               width: "100%",
//               display: "grid",
//               borderCollapse: "collapse",
//             }}
//           >
//             <tr
//               width="800px"
//               style={{
//                 width: "800px",
//                 backgroundColor: "white",
//                 height: "100px",
//                 borderBottom: "3px solid #006cb5",
//               }}
//             >
//               <td
//                 style={{
//                   width: "800px",
//                   textAlign: "center",
//                   verticalAlign: "middle",
//                 }}
//               >
//                 <span>
//                   <b
//                     style={{
//                       marginBottom: "0px",
//                       color: "#006cb5",
//                       fontSize: "28px",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     UNIVERSITY OF KALYANI
//                   </b>
//                   <br />
//                   ( Department of Engineering and Technological Studies(DETS))
//                   <br />
//                   (Kalyani, West Bengal,741235)
//                 </span>
//               </td>
//             </tr>
//           </tr>                  
//         </tr>

//         
//       </table>

//       ))}
//         </tbody>

//       </div>
      
//     </div>
//   );
// };

// export default ExitAllInput;





import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const ExitAllInput = () => {
  const [formData, setFormData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/get_all_exit_student"
        );
        if (response.status === 200) {
          setFormData(response.data.data);
        } else {
          console.error(
            "Failed to fetch exit student data. Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching exit student data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id, index) => {
    console.log("delete ", id);
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/delete_id_exitstudent/${id}`
      );
      console.log("responseDelete", responseDelete);
      const updatedFormData = [...formData];
      updatedFormData.splice(index, 1);
      setFormData(updatedFormData);
    } catch (error) {
      console.log("Error deleting selectedItem:", error);
    }
  };

  const handleDetails = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <h2>All Exit Students Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Stream</th>
            <th>Email</th>
            <th>Registration No</th>
            <th>Session</th>
            <th>Phone No</th>
            <th>First year Cgpa</th>
            <th>Second Year</th>
            <th>Third Year</th>
            <th>Fourth Year</th>
            <th>Total</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((selectedItem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{selectedItem.firstName}</td>
              <td>{selectedItem.lastName}</td>
              <td>{selectedItem.stream}</td>
              <td>{selectedItem.email}</td>
              <td>{selectedItem.registrationNo}</td>
              <td>{selectedItem.session}</td>
              <td>{selectedItem.Phone_no}</td>
              <td>{selectedItem.year_cgpa_1th}</td>
              <td>{selectedItem.year_cgpa_2nd}</td>
              <td>{selectedItem.year_cgpa_3rd}</td>
              <td>{selectedItem.year_cgpa_4th}</td>
              <td>{selectedItem.final_cgpa}</td>
              <td>
                <button onClick={() => handleDelete(selectedItem._id, index)}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => handleDetails(selectedItem)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedItem && (
        <div
          className="text-center"
          style={{
            display: "flex",
            alignselectedItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
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
            <tbody>
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
                          <td>{selectedItem.fristName}</td>
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
                        <td>{selectedItem.lastName}</td>
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
                          <td>{selectedItem.fatherName}</td>
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
                          <td>{selectedItem.motherName}</td>
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
                          <td>{selectedItem.email}</td>
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
                          <td>{selectedItem.rollNo}</td>
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
                          <td>{selectedItem.date_of_birth}</td>
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
                          <td>{selectedItem.stream}</td>
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
                          <td>{selectedItem.registrationNo}</td>
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
                          <td>{selectedItem.session}</td>
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
                          <td>{selectedItem.Phone_no}</td>
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
                          <td>{selectedItem.session}</td>
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
                          <td>{selectedItem.year_cgpa_1th}</td>
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
                          <td>{selectedItem.year_cgpa_2nd}</td>
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
                          <td>{selectedItem.year_cgpa_3rd}</td>
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
                          <td>{selectedItem.year_cgpa_4th}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExitAllInput;
