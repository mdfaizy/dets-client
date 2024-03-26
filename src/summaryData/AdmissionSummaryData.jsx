
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const AdmissionSummaryData = () => {
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/get_new_admission"
//         );
//         // const result=response.JSON();
//         // console.log(result);
//         if (response.data.success) {
//           setFormData(response.data.data);
//           console.log(response.data); // Log the response data here
//         } else {
//           console.error("Failed to fetch admission data");
//         }
//       } catch (error) {
//         console.error("Error fetching admission data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-center p-4">All New Students Data</h2>
//       <div className="">
//         <Table striped bordered hover>
//           <thead>
//           <tr>
//                <th rowSpan="2">No</th>
//                <th colSpan="2">Course</th>
//                <th colSpan="2">Admission</th>
            
//                <th colSpan="3">Gender
//               {/* <td>{formData.gender}</td> */}
//                </th>
//                <th colSpan="3">SC</th>
//                <th colSpan="3">ST</th>
//                <th colSpan="3">OBC-A</th>
//                <th colSpan="3">OBC-B</th>
//                <th colSpan="3">EWS</th>
//                <th colSpan="3">General</th>
//                <th colSpan="3">PWD</th>
//                <th colSpan="1"> Admission Session</th>
//                <th colSpan="1">Total Admitted Student</th>
//              </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td></td>
//               <td>B.Tech(IT)</td>
//               <td>B.Tech(EIE)</td>
//               <td>WBJEE</td>
//               <td>JELETE</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default AdmissionSummaryData;






// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const AdmissionSummaryData = () => {
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/get_new_admission"
//         );
//         // const result=response.JSON();
//         // console.log(result);
//         if (response.data.success) {
//           setFormData(response.data.data);
//           console.log(response.data); // Log the response data here
//         } else {
//           console.error("Failed to fetch admission data");
//         }
//       } catch (error) {
//         console.error("Error fetching admission data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Function to render "M" or "F" based on the gender value
//   const renderGenderValue = (gender) => {
//     if (gender === "M") {
//       return "Mwala";
//     } else if (gender === "F") {
//       return "Fwala";
//     } else {
//       return ""; // Render nothing for other values
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-center p-4">All New Students Data</h2>
//       <div className="">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th rowSpan="2">No</th>
//               <th colSpan="2">Course</th>
//               <th colSpan="2">Admission</th>
//               <th colSpan="3">Gender</th>
//               <th colSpan="3">SC</th>
//               <th colSpan="3">ST</th>
//               <th colSpan="3">OBC-A</th>
//               <th colSpan="3">OBC-B</th>
//               <th colSpan="3">EWS</th>
//               <th colSpan="3">General</th>
//               <th colSpan="3">PWD</th>
//               <th colSpan="1"> Admission Session</th>
//               <th colSpan="1">Total Admitted Student</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td></td>
//               {/* <td>B.Tech(IT)</td>
//               <td>B.Tech(EIE)</td> */}
//               <td>WBJEE</td>
//               <td>JELETE</td>
//               <td>{renderGenderValue(formData.gender)}</td>
//               <td>Fwala</td> {/* Render other columns accordingly */}
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//               <td>M</td>
//               <td>F</td>
//               <td>Domicile</td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default AdmissionSummaryData;



import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

const AdmissionSummaryData = () => {
  const [formData, setFormData] = useState([]);

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



  return (
    <div>
      <h2 className="text-center p-4">All New Students Data</h2>
      <div className="">
        <Table striped bordered hover>
        <thead>
             <tr>
               <th rowSpan="2">No</th>
               <th colSpan="2">Course</th>
               <th colSpan="2">Admission</th>
               <th colSpan="3">Gender</th>
               <th colSpan="3">SC</th>
               <th colSpan="3">ST</th>
               <th colSpan="3">OBC-A</th>
               <th colSpan="3">OBC-B</th>
               <th colSpan="3">EWS</th>
               <th colSpan="3">General</th>
               <th colSpan="3">PWD</th>
               <th colSpan="1"> Admission Session</th>
               <th colSpan="1">Total Admitted Student</th>
            </tr>
           </thead>

          <tbody>
             <tr>
               <td></td>
               <td>B.Tech(IT)</td>
               <td>B.Tech(EIE)</td>
               <td>WBJEE</td>
               <td>JELETE</td>
               
               <td>M</td>
               <td>F</td> 
            
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
               <td>M</td>
               <td>F</td>
               <td>Domicile</td>
             </tr>
           </tbody>

          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.cource_name}</td>
                <td>{data.cource_name}</td>
                

               
                <td>{
                        <td>{data.examType}</td>
                        // <td>{data.domicile}</td>
                    } 
                </td>
                <td>{data.gender}</td>
                <td>{data.sc}</td>
                <td>{data.st}</td>
                <td>{data.obcA}</td>
                <td>{data.obcB}</td>
                <td>{data.ews}</td>
                <td>{data.general}</td>
                <td>{data.pwd}</td>
                <td>{data.admissionSession}</td>
                <td>{data.totalAdmittedStudent}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdmissionSummaryData;













// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const AdmissionSummaryData = () => {
//   const [formData, setFormData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/v1/student/get_new_admission"
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

//   // Function to render "Yes" or "No" based on the provided value
//   const renderYesNo = (value) => {
//     return value ? "Yes" : "No";
//   };

//   return (
//     <div>
//       <h2 className="text-center p-4">All New Students Data</h2>
//       <div className="">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Course</th>
//               <th>Admission</th>
//               <th>Gender</th>
//               <th>SC</th>
//               <th>ST</th>
//               <th>OBC-A</th>
//               <th>OBC-B</th>
//               <th>EWS</th>
//               <th>General</th>
//               <th>PWD</th>
//               <th>Admission Session</th>
//               <th>Total Admitted Student</th>
//             </tr>
//           </thead>

//           <tbody>
//             {formData.map((data, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{data.cource_name}</td>
//                 <td>{data.cource_name}</td>
//                 <td  rowSpan="3">{data.gender === 'M' ? 'M' : 'F'}</td>
//                 <td rowSpan="3">{renderYesNo(data.sc)}</td>
//                 <td rowSpan="3">{renderYesNo(data.st)}</td>
//                 <td rowSpan="3">{renderYesNo(data.obcA)}</td>
//                 <td rowSpan="3">{renderYesNo(data.obcB)}</td>
//                 <td rowSpan="3">{renderYesNo(data.ews)}</td>
//                 <td rowSpan="3">{renderYesNo(data.general)}</td>
//                 <td rowSpan="3">{renderYesNo(data.pwd)}</td>
//                 <td>{data.admissionSession}</td>
//                 <td>{data.totalAdmittedStudent}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default AdmissionSummaryData;
