import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./ViewAllShortInfo.module.css";
import { getAllNewStudent } from "../../../../services/apiFunction/newadmissionApi";

const ViewAllShortInfoStudent = () => {
  const [formData, setFormData] = useState([]);
  const [startSession, setStartSession] = useState("");
  const [endSession, setEndSession] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllNewStudent();
        console.log("data", data);
        setFormData(data);
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredData = formData.filter((data) => {
    const startMatch =
      data.start_session && data.start_session.includes(startSession);
    const endMatch = data.end_session && data.end_session.includes(endSession);
    return startMatch && endMatch;
  });

  const streamITCount = filteredData.filter(
    (data) => data.stream === "IT"
  ).length;
  const streamEIECount = filteredData.filter(
    (data) => data.stream === "EIE"
  ).length;
  const examWBJEECount = filteredData.filter(
    (data) => data.examType === "WBJEE"
  ).length;
  const examJELETECount = filteredData.filter(
    (data) => data.examType === "JELETE"
  ).length;
  const genderMCount = filteredData.filter(
    (data) => data.gender === "M"
  ).length;
  const genderFCount = filteredData.filter(
    (data) => data.gender === "F"
  ).length;
  const scMCount = filteredData.filter(
    (data) => data.category === "SC" && data.gender === "M"
  ).length;
  const scFCount = filteredData.filter(
    (data) => data.category === "SC" && data.gender === "F"
  ).length;
  const stMCount = filteredData.filter(
    (data) => data.category === "ST" && data.gender === "M"
  ).length;
  const stFCount = filteredData.filter(
    (data) => data.category === "ST" && data.gender === "F"
  ).length;
  const obcAMCount = filteredData.filter(
    (data) => data.category === "OBC-A" && data.gender === "M"
  ).length;
  const obcAFCount = filteredData.filter(
    (data) => data.category === "OBC-A" && data.gender === "F"
  ).length;
  const obcBMCount = filteredData.filter(
    (data) => data.category === "OBC-B" && data.gender === "M"
  ).length;
  const obcBFCount = filteredData.filter(
    (data) => data.category === "OBC-B" && data.gender === "F"
  ).length;
  const ewsMCount = filteredData.filter(
    (data) => data.category === "EWS" && data.gender === "M"
  ).length;
  const ewsFCount = filteredData.filter(
    (data) => data.category === "EWS" && data.gender === "F"
  ).length;
  const generalMCount = filteredData.filter(
    (data) => data.category === "GENERAL" && data.gender === "M"
  ).length;
  const generalFCount = filteredData.filter(
    (data) => data.category === "GENERAL" && data.gender === "F"
  ).length;
  const pwdMCount = filteredData.filter(
    (data) => data.category === "PWD" && data.gender === "M"
  ).length;
  const pwdFCount = filteredData.filter(
    (data) => data.category === "PWD" && data.gender === "F"
  ).length;
  const domicileYesCount = filteredData.filter(
    (data) => data.domicile === "Yes"
  ).length;
  const domicileNoCount = filteredData.filter(
    (data) => data.domicile === "No"
  ).length;

  return (
    <div className={style.short_info_content}>
      <h2 className="text-center p-4">ALL NEW STUDENT SHORT INFO</h2>
      <div className={style.search_container}>
        <div className={style.input_group}>
          <input
            type="text"
            className="form-control"
            placeholder="Start Session..."
            value={startSession}
            onChange={(e) => setStartSession(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="End Session"
            value={endSession}
            onChange={(e) => setEndSession(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className={style.summeryData}>
        <Table striped bordered>
          <thead>
            <tr className={style.headText_tr}>
              <th rowSpan="2">No</th>
              <th colSpan="2">Course</th>
              <th colSpan="2">Admission</th>
              <th colSpan="2">Gender</th>
              <th colSpan="2">SC</th>
              <th colSpan="2">ST</th>
              <th colSpan="2">OBC-A</th>
              <th colSpan="2">OBC-B</th>
              <th colSpan="2">EWS</th>
              <th colSpan="2">GENERAL</th>
              <th colSpan="2">PWD</th>
              <th colSpan="2">Domicile</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.table_data}>
              <td>1</td>
              <td>B.Tech(IT)</td>
              <td>B.Tech(EIE)</td>

              <td>WBJEE</td>
              <td>JELETE</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>M</td>
              <td>F</td>

              <td>Yes</td>
              <td>No</td>
              {/* <td>1</td>
              <td>IT ({streamITCount})</td>
              <td>EIE ({streamEIECount})</td>
              <td>WBJEE ({examWBJEECount})</td>
              <td>JELETE ({examJELETECount})</td>
              <td>M</td>
              <td>F</td>
              <td>M ({genderMCount})</td>
              <td>F ({genderFCount})</td>
              <td>M ({scMCount})</td>
              <td>F ({scFCount})</td>
              <td>M ({stMCount})</td>
              <td>F ({stFCount})</td>
              <td>M ({obcAMCount})</td>
              <td>F ({obcAFCount})</td>
              <td>M ({obcBMCount})</td>
              <td>F ({obcBFCount})</td>
              <td>M ({ewsMCount})</td>
              <td>F ({ewsFCount})</td>
              <td>M ({generalMCount})</td>
              <td>F ({generalFCount})</td>
              <td>M ({pwdMCount})</td>
              <td>F ({pwdFCount})</td>
              <td>Yes ({domicileYesCount})</td>
              <td>No ({domicileNoCount})</td> */}
            </tr>
          </tbody>

          <tbody>
            <tr className={style.table_data_user_details}>
              <td>1</td>
              <td> ({streamITCount})</td>
              <td> ({streamEIECount})</td>
              <td> ({examWBJEECount})</td>
              <td> ({examJELETECount})</td>

              <td> ({genderMCount})</td>
              <td> ({genderFCount})</td>
              <td>({scMCount})</td>
              <td> ({scFCount})</td>
              <td> ({stMCount})</td>
              <td> ({stFCount})</td>
              <td> ({obcAMCount})</td>
              <td> ({obcAFCount})</td>
              <td> ({obcBMCount})</td>
              <td> ({obcBFCount})</td>
              <td> ({ewsMCount})</td>
              <td> ({ewsFCount})</td>
              <td> ({generalMCount})</td>
              <td> ({generalFCount})</td>
              <td> ({pwdMCount})</td>
              <td> ({pwdFCount})</td>
              <td> ({domicileYesCount})</td>
              <td> ({domicileNoCount})</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewAllShortInfoStudent;
