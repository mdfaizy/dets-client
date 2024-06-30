// import "./JobDataTable.scss";
// import { getAllJobStudents } from "../../../../services/apiFunction/job";
// import JobDropDown from "../../../../adminsection/job/JobDropDown";
// import { useEffect, useState } from "react";
// const TABLE_HEADS = [
//   // "User ID",
//   "No",
//   "Full Name",
//   "Company's Name",
//   "Phone",
//   "Home City",
//   "Select Companies",

//   "Action",
// ];

// const JobDataTable = () => {
//   const [formData, setFormData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const data = await getAllJobStudents();
//       console.log(data);
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
//                   <td>{`${dataItem.fullName}`}</td>
//                   <td>{dataItem.companies_name}</td>
//                   <td>{dataItem.email}</td>
//                   {/* <td>{dataItem.phone_no}</td> */}
//                   <td>{dataItem.home_city}</td>
//                   <td>{dataItem.selectType}</td>
//                   {/* <td>{dataItem.session}</td> */}

//                   <td className="dt-cell-action">
//                     <JobDropDown id={dataItem._id} />
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

// export default JobDataTable;















import styles from "./JobDataTable.module.css";
import { getAllJobStudents } from "../../../../services/apiFunction/job";
import JobDropDown from "../../../../adminsection/job/JobDropDown";
import { useEffect, useState } from "react";

const TABLE_HEADS = [
  "No",
  "Full Name",
  "Company's Name",
  "Phone",
  "Home City",
  "Select Company's",
  "Action",
];

const JobDataTable = () => {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await getAllJobStudents();
      console.log(data);
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
        <h4 className={styles.dataTableTitle}>All JOB DETAILS</h4>
      </div>
      <div className={styles.dataTableDiagram}>
        {/* {error && <div className={styles.errorMessage}>{error}</div>} */}
        <table>
          <thead className={styles.table_data_td}>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formData?.map((dataItem, index) => (
              <tr key={dataItem.id || index}>
                <td>{index + 1}</td>
                <td>{dataItem.fullName}</td>
                <td>{dataItem.companies_name}</td>
                <td>{dataItem.email}</td>
                <td>{dataItem.home_city}</td>
                <td>{dataItem.selectType}</td>
                <td className={styles.dtCellAction}>
                  <JobDropDown id={dataItem._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default JobDataTable;
