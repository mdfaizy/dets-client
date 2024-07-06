// // import styles from "./PgStudentDataTable.module.css";
// import { getAllPgStudentData } from "../../../../services/apiFunction/pgApi";
// import { useEffect, useState } from "react";
// import PgDropDown from "../../../../adminsection/pgadmission/PgDropDown";

// const TABLE_HEADS = [
//   "No",
//   "Full Name",
//   "Email",
//   "DOB",
//   "Gender",
//   "Father Name",
//   "AII Rank",
//   "Stream",
//   "Session",
//   "Action",
// ];

// const PgStudentDataTable = () => {
//   const [formData, setFormData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const data = await getAllPgStudentData();
//       console.log(data);
//       setFormData(data);
//     } catch (error) {
//       console.error("Error fetching admission data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <section className="contentAreaTable}>
//       <div className="dataTableInfo}>
//         <h4 className="dataTableTitle}>All PG STUDENT DATA</h4>
//       </div>
//       <div className="dataTableDiagram}>
//         <table>
//           <thead className="new_pg_student_td}>
//             <tr>
//               {TABLE_HEADS.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {formData.map((dataItem, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{`${dataItem.firstName} ${dataItem.lastName}`}</td>
//                 <td>{dataItem.email}</td>
//                 <td>{dataItem.date_of_birth}</td>
//                 <td>{dataItem.gender}</td>
//                 <td>{dataItem.fatherName}</td>
//                 <td>{dataItem.allIndiaRank}</td>
//                 <td>{dataItem.stream}</td>
//                 <td>{dataItem.session}</td>
//                 <td className="dtCellAction}>
//                   <PgDropDown id={dataItem._id} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default PgStudentDataTable;

import "./PgStudentDataTable.scss";
import { getAllPgStudentData } from "../../../../services/apiFunction/pgApi";
import { useEffect, useState } from "react";
import PgDropDown from "../../../../adminsection/pgadmission/PgDropDown";

const TABLE_HEADS = [
  "No",
  "Full Name",
  "Email",
  "DOB",
  "Gender",

  "Stream",
  "Session",
  "Action",
];

const PgStudentDataTable = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getAllPgStudentData();
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
        <h4 className="data-table-title">ALL PG STDENT DATA</h4>
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
          <tbody className="text-color">
            {formData?.map((dataItem, index) => {
              return (
                // <tr key={dataItem.id}>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${dataItem.firstName}${dataItem.lastName}`}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.date_of_birth}</td>
                  <td>{dataItem.gender}</td>
                  {/* <td>{dataItem.addhar_number}</td> */}
                  <td>{dataItem.stream}</td>
                  <td>{dataItem.session}</td>

                  <td className={"dtCellAction"}>
                    <PgDropDown id={dataItem._id} />
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
