import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
// import { MdAssignmentTurnedIn } from "react-icons/md";
import JobDropDown from "../../adminsection/job/JobDropDown";
import style from "./adminsection.module.css";
const Allstudentjob = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/job/get_all_Job_student"
        );
        if (response.status === 200) {
          console.log(response);
          setFormData(response.data.data);
        } else {
          console.error(
            "Failed to fetch admission data. Status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Jobs Students Data</h2>
      <div className="p-2 gap-1">
        <button>Excel</button>
        <button>Print</button>
        <button>Download</button>
      </div>
      <div className={style.teacher_verify_new_admission}>
        <Table striped bordered hover>
          <thead className={style.teacher_verify_new_admission}>
            <tr className={style.teacher_verify_th}>
              <th>No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Home City</th>
              <th>Companies Name</th>
              <th>Select Companies</th>
              <th>Apply Your Total Companies</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {formData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>

                <td>{item.phone_No}</td>

                <td>{item.home_city}</td>
                <td>{item.companies_name}</td>

                <td>{item.selectType}</td>

                <td>{item.totalApplyCompanies}</td>

                <button>
                  <JobDropDown />
                </button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Allstudentjob;

//
