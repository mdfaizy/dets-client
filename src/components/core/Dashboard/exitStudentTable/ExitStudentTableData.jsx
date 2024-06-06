// import AreaTableAction from "./AreaTableAction";
import "./ExitStudentTable.scss";
import { getAllExitStudent } from "../../../../services/apiFunction/exitApi";
// import AdmissionDropDown from "../../../../adminsection/admission/AdmissionDropDown";
import ExitDropDown from "../../../../adminsection/exitdata/ExitDropDown";
import { useEffect, useState } from "react";
const TABLE_HEADS = [
  // "User ID",
  "No",
  "Full Name",
  "Email",
  "Roll No",
  "Reg No",
  "Stream",
  //   "Session",
  "Total CGPA",
  "Action",
];

const ExitStudentTableData = () => {
  const [formData, setFormData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllExitStudent();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching admission data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">All New Student Data</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formData?.map((dataItem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{`${dataItem.firstName}${dataItem.lastName}`}</td>
                  <td>{dataItem.email}</td>

                  <td>{dataItem.rollNo}</td>
                  <td>{dataItem.registrationNo}</td>
                  <td>{dataItem.stream}</td>
                  <td>{dataItem.final_cgpa}</td>
                  <td className="dt-cell-action">
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

export default ExitStudentTableData;
