// import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
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

const AreaTable = () => {
  const [formData, setFormData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllNewStudent();
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

                  <td className="dt-cell-action">
                    {/* <AreaTableAction /> */}
                    <AdmissionDropDown id={dataItem._id} />
                   
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

export default AreaTable;
