import "./JobDataTable..scss";
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
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">ALL JOB DATA</h4>
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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dataItem.fullName}</td>
                  <td>{dataItem.companies_name}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.home_city}</td>
                  <td>{dataItem.selectType}</td>
                  <td className={"dtCellAction"}>
                    <JobDropDown id={dataItem._id} />
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

export default JobDataTable;
