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
      <h2>All PG Students Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Category</th>

            <th>Father Name</th>
            <th>Mother Name</th>

            <th>All India Rank</th>
            <th>Stream</th>

            <th className={style.icon_show}>Action</th>
          </tr>
        </thead>

        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>

              <td>{item.date_of_birth}</td>

              <td>{item.gender}</td>

              <td>{item.category}</td>

              <td>{item.fatherName}</td>
              <td>{item.motherName}</td>

              <td>{item.allIndiaRank}</td>

              <td>{item.stream}</td>
              <td>{item.session}</td>

              <td>
                <PgDropDown />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Allpgstudent;
