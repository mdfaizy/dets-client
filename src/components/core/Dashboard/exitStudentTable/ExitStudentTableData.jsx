
// import "./ExitStudentTable.scss";
// import { getAllExitStudent } from "../../../../services/apiFunction/exitApi";

// import ExitDropDown from "../../../../adminsection/exitdata/ExitDropDown";
// import { useEffect, useState } from "react";
// const TABLE_HEADS = [
//   // "User ID",
//   "No",
//   "Full Name",
//   "Email",
//   "Roll No",
//   "Reg No",
//   "Stream",
//   //   "Session",
//   "Total CGPA",
//   "Action",
// ];

// const ExitStudentTableData = () => {
//   const [formData, setFormData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const data = await getAllExitStudent();
//       setFormData(data);
//     } catch (error) {
//       console.error("Error fetching admission data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <h4 className="data-table-title">All New Student Data</h4>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               {TABLE_HEADS?.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {formData?.map((dataItem, index) => {
//               return (
//                 <tr key={index}>
                  // <td>{index + 1}</td>
                  // <td>{`${dataItem.firstName}${dataItem.lastName}`}</td>
                  // <td>{dataItem.email}</td>

                  // <td>{dataItem.rollNo}</td>
                  // <td>{dataItem.registrationNo}</td>
                  // <td>{dataItem.stream}</td>
                  // <td>{dataItem.final_cgpa}</td>
//                   <td className="dt-cell-action">
//                     <ExitDropDown id={dataItem._id} />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default ExitStudentTableData;






















import "./ExitStudentTable.scss";
import { getAllExitStudent } from "../../../../services/apiFunction/exitApi";
import ExitDropDown from "../../../../adminsection/exitdata/ExitDropDown";
import { useEffect, useState } from "react";

// const TABLE_HEADS = [
//   "No",
//   "Full Name",
//   "Email",
//   "Roll No",
//   "Reg No",
//   "Stream",
//   "Total CGPA",
//   "Action",
// ];

// const ExitStudentTableData = () => {
//   const [formData, setFormData] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await getAllExitStudent();
//       setFormData(data);
//     } catch (error) {
//       setError("Error fetching admission data");
//       console.error("Error fetching admission data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <section className={styles.contentAreaTable}>
//       <div className={styles.dataTableInfo}>
//         <h4 className={styles.dataTableTitle}>ALL EXISTING DATA</h4>
//       </div>
//       <div className={styles.dataTableDiagram}>
//         {/* {error && <div className={styles.errorMessage}>{error}</div>} */}
//         <table>
//         <thead className={styles.table_data_td}>
//             <tr>
//               {TABLE_HEADS.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((dataItem, index) => (
//               <tr key={dataItem.id || index}>
//                 <td>{index + 1}</td>
//                 <td>{`${dataItem.firstName} ${dataItem.lastName}`}</td>
//                 <td>{dataItem.email}</td>
//                 <td>{dataItem.rollNo}</td>
//                 <td>{dataItem.registrationNo}</td>
//                 <td>{dataItem.stream}</td>
//                 <td>{dataItem.final_cgpa}</td>
//                 <td className={styles.dtCellAction}>
//                   <ExitDropDown id={dataItem._id} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default ExitStudentTableData;





// import "./PgStudentDataTable.scss";
// import { getAllPgStudentData } from "../../../../services/apiFunction/pgApi";
// import { useEffect, useState } from "react";
// import PgDropDown from "../../../../adminsection/pgadmission/PgDropDown";

const TABLE_HEADS = [
  "No",
  "Full Name",
  "Email",
  "Roll No",
  "Reg No",
  "Stream",
  "Total CGPA",
  "Action",
];

const PgStudentDataTable = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
    const data = await getAllExitStudent();
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching admission data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">ALL EXISTING DATA</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead className="new_admission_td">
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formData?.map((dataItem, index) => {
              return (
                // <tr key={dataItem.id}>
                <tr key={index}>
                  <td>{index + 1}</td>
              
                  <td>{`${dataItem.firstName}${dataItem.lastName}`}</td>
                  <td>{dataItem.email}</td>

                  <td>{dataItem.rollNo}</td>
                  <td>{dataItem.registrationNo}</td>
                  <td>{dataItem.stream}</td>
                  <td>{dataItem.final_cgpa}</td>

                  <td className={"dtCellAction"}>
                  <ExitDropDown id={dataItem._id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PgStudentDataTable;
