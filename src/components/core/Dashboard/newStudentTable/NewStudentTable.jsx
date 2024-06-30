// // import AreaTableAction from "./AreaTableAction";
// import "./AreaTable.scss";
// import { getAllNewStudent } from "../../../../services/apiFunction/newadmissionApi";
// import AdmissionDropDown from "../../../../adminsection/admission/AdmissionDropDown";
// import { useEffect, useState } from "react";
// const TABLE_HEADS = [

//   "No",
//   "Full Name",
//   "Email",
//   "DOB",
//   "GENDER",
//   "Stream",
//   "Session",

//   "Action",
// ];

// const NewStudentTable = () => {
//   const [formData, setFormData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const data = await getAllNewStudent();
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
//                 // <tr key={dataItem.id}>
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{`${dataItem.firstName}${dataItem.lastName}`}</td>
//                   <td>{dataItem.email}</td>
//                   <td>{dataItem.date_of_birth}</td>
//                   <td>{dataItem.gender}</td>
//                   {/* <td>{dataItem.addhar_number}</td> */}
//                   <td>{dataItem.stream}</td>
//                   <td>{dataItem.session}</td>

//                   <td className="dt-cell-action">
//                     {/* <AreaTableAction /> */}
//                     <AdmissionDropDown id={dataItem._id} />
                   
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

// export default NewStudentTable;






import styles from "./AreaTable.module.css";
import { getAllNewStudent } from "../../../../services/apiFunction/newadmissionApi";
import AdmissionDropDown from "../../../../adminsection/admission/AdmissionDropDown";
import { useEffect, useState } from "react";

const TABLE_HEADS = [
  "No",
  "Full Name",
  "Email",
  "DOB",
  "GENDER",
  "Stream",
  "Session",
  "Action",
];

const NewStudentTable = () => {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getAllNewStudent();
      setFormData(data);
    } catch (error) {
      setError("Error fetching admission data");
      console.error("Error fetching admission data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.contentAreaTable}>
      <div className={styles.dataTableInfo}>
        <h4 className={styles.dataTableTitle}>ALL NEW STUDENT DATA</h4>
      </div>
      <div className={styles.dataTableDiagram}>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <table>
          <thead className={styles.new_admission_td}>
            <tr >
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formData.map((dataItem, index) => (
              <tr key={dataItem.id || index}>
                <td>{index + 1}</td>
                <td>{`${dataItem.firstName} ${dataItem.lastName}`}</td>
                <td>{dataItem.email}</td>
                <td>{dataItem.date_of_birth}</td>
                <td>{dataItem.gender}</td>
                <td>{dataItem.stream}</td>
                <td>{dataItem.session}</td>
                <td className={styles.dtCellAction}>
                  <AdmissionDropDown id={dataItem._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NewStudentTable;

