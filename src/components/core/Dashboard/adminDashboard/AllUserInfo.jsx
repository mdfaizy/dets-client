

// const AllUserInfo = () => {
//   return (
//     <div>AllUserInfo</div>
//   )
// }

// export default AllUserInfo

import { getAllUserDataFetch } from "../../../../services/apiFunction/authApi";
import styles from './teachAndUser.module.css'
// import { getAllJobStudents } from "../../../../services/apiFunction/job";
// import JobDropDown from "../../../../adminsection/job/JobDropDown";
import { useEffect, useState } from "react";
const TABLE_HEADS = [
  // "User ID",
  "No",
  "Full Name",
  "Email",
  "Action",
];

const AllUserInfo = () => {
  const [formData, setFormData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllUserDataFetch();
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching admission data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className={styles.content_area_table}>
      <div className={styles.data_table_info}>
        <h4 className={styles.data_table_title}>All New Student Data</h4>
      </div>
      <div className={styles.data_table_diagram}>
        <table>
          <thead className={styles.data_table_th}>
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
                  <td>{`${dataItem.fullName}`}</td>
                  <td>{dataItem.companies_name}</td>
                  <td>{dataItem.email}</td>
                  

                  <td className="dt-cell-action">
                    {/* <JobDropDown id={dataItem._id} /> */}
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

export default AllUserInfo;
