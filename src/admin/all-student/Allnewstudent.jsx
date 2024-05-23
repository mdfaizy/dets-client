import style from "./adminsection.module.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import { MdAssignmentTurnedIn } from "react-icons/md";
import "./showdataAdminandteacher.scss";
import { getAllNewStudent } from "../../services/apiFunction/newadmissionApi";
import AdmissionDropDown from "../../adminsection/admission/AdmissionDropDown";

const AllNewStudents = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllNewStudent();
        setFormData(data);

      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: "70px" }}>
      <h2 className={style.heading}>All New Students Data</h2>
      <div className={style.teacher_verify}>
        <Table striped bordered hover>
          <thead>
            <tr className={style.teacher_verify_th}>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Addhar Number</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th className={style.icon_show}>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (
              <tr key={index} className={style.text_data_td}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>

                <td>{item.addhar_number}</td>
                <td>{item.email}</td>
                <td>{item.date_of_birth}</td>
                <td>{item.gender}</td>

                <td className={style.button}>
                  <AdmissionDropDown  id={item._id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllNewStudents;
