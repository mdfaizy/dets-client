import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./admissionsummary.css";
const AdmissionSummaryData = () => {
  const [formData, setFormData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/student/get_new_admission"
  //       );
  //       console.log("response", response.data.data);
  //       if (response.data.success) {
  //         setFormData(response.data.data);
  //       } else {
  //         console.error("Failed to fetch admission data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching admission data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [startYear, endYear]);

  // const filteredData = formData.filter((data) =>
  //   data.admission_session.includes(searchTerm)
  // );




  const [startSession, setStartSession] = useState("");
  const [endSession, setEndSession] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/student/get_new_admission"
        );
        if (response.data.success) {
          setFormData(response.data.data);
        } else {
          console.error("Failed to fetch admission data");
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      }
    };
    fetchData();
  }, [startSession,endSession]);

  


  // const filteredData = formData.filter((data) => {
  //   // Check if start_session and end_session properties exist and are arrays
  //   const startMatch =  data.start_session.includes(startSession);
  //   const endMatch = data.end_session.includes(endSession);
  //   return startMatch && endMatch;
  // });

  const filteredData = formData.filter((data) => {
    // Check if start_session and end_session properties exist and are arrays
    const startMatch = data.start_session && data.start_session.includes(startSession);
    const endMatch = data.end_session && data.end_session.includes(endSession);
    return startMatch && endMatch;
  });
  
  

  
  
  

  return (
    <div className="bg-light pt-3 pb-4 mt-3 mb-3">
      <h2 className="text-center p-4">All New Students Data</h2>
      {/* <div className="search-container d-flex">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Start Session..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         
        </div>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="End Session"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div> */}
<div className="search-container d-flex">
        <div className="input-group">
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

      <div className="">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th rowSpan="2">No</th>
              <th colSpan="2">Course</th>
              <th colSpan="2">Admission</th>
              <th colSpan="3">Gender</th>
              <th colSpan="3">SC</th>
              <th colSpan="3">ST</th>
              <th colSpan="3">OBC-A</th>
              <th colSpan="3">OBC-B</th>
              <th colSpan="3">EWS</th>
              <th colSpan="3">GENERAL</th>
              <th colSpan="3">PWD</th>
              <th colSpan="1"> Admission Session</th>
              <th colSpan="1">Total Admitted Student</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td>B.Tech(IT)</td>
              <td>B.Tech(EIE)</td>

              <td>WBJEE</td>
              <td>JELETE</td>

              <td>M</td>
              <td>F</td>

              <td>Domicile</td>

              <td>M</td>
              <td>F</td>
              <td>Domicile</td>

              <td>M</td>
              <td>F</td>
              <td>Domicile</td>
              <td>M</td>
              <td>F</td>
              <td>Domicile</td>
              <td>M</td>
              <td>F</td>
              <td>Domicile</td>
              <td>M</td>
              <td>F</td>
              <td>Domicile</td>

              <td>M</td>
              <td>F</td>
              <td>Domicile</td>

              <td>M</td>
              <td>F</td>
              <td>Domicile</td>
            </tr>
          </tbody>

          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.stream == "IT" ? data.cource_name + "(IT)" : ""}</td>
                <td>
                  {data.stream == "EIE" ? data.cource_name + "(EIE)" : ""}
                </td>

                <td>{data.examType == "WBJEE" ? data.examType : ""}</td>
                <td>{data.examType == "JELETE" ? data.examType : ""}</td>

                <td>{data.gender == "M" ? data.gender : ""}</td>
                <td>{data.gender == "F" ? data.gender : ""}</td>
                <td>
                  {data.gender === "M" || data.gender === "F"
                    ? data.domicile
                    : ""}
                </td>

                <td>
                  {data.category === "SC" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "SC" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.category == "SC" ? data.domicile : ""}</td>

                <td>
                  {data.category === "OBC-ST" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "OBC-ST" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.domicile == "ST" ? data.domicile : ""}</td>

                <td>
                  {data.category === "OBC-A" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "OBC-A" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.category == "OBC-A" ? data.domicile : ""}</td>

                <td>
                  {data.category === "OBC-B" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "OBC-B" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.category == "OBC-B" ? data.domicile : ""}</td>

                <td>
                  {data.category === "EWS" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "EWS" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.category == "EWS" ? data.domicile : ""}</td>

                <td>
                  {data.category === "GENERAL" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "GENERAL" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.category == "GENERAL" ? data.domicile : ""}</td>

                <td>
                  {data.category === "PWD" && data.gender === "M"
                    ? data.gender
                    : ""}
                </td>
                <td>
                  {data.category === "PWD" && data.gender === "F"
                    ? data.gender
                    : ""}
                </td>
                <td>{data.category == "PWD" ? data.domicile : ""}</td>

                <td>{data.admission_session}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdmissionSummaryData;
