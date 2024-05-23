import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import axios from "axios";
// import { MdAssignmentTurnedIn } from "react-icons/md";
import style from "./adminsection.module.css";
import "./showdataAdminandteacher.scss";
import { getAllPgStudents } from "../../services/hooks/pgcourseApi";
import PgDropDown from "../../adminsection/pgadmission/PgDropDown";
const Allpgstudent = () => {
  // const { isAdmin, teacher } = props;
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPgStudents();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching PG students data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={style.heading}>All PG Students Data</h2>
      <div className={style.teacher_verify}>
        <Table striped bordered hover>
          <thead>
            <tr className={style.teacher_verify_th}>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Gender</th>

              <th>Father Name</th>

              <th>AI Rank</th>
              <th>Stream</th>

              <th className={style.icon_show}>Action</th>
            </tr>
          </thead>

          <tbody>
            {formData.map((item, index) => (
              <tr key={index} className={style.text_data_td}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>

                <td>{item.date_of_birth}</td>

                <td>{item.gender}</td>

                <td>{item.fatherName}</td>

                <td>{item.allIndiaRank}</td>

                <td>{item.stream}</td>
                <td>{item.session}</td>

                <td className={style.button}>
                  <PgDropDown id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Allpgstudent;
