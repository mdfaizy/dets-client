import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./admissionsummary.css";
import {getAllNewStudent} from '../services/hooks/newadmissionapi'
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/v1/student/get_new_admission"
  //       );
  //       console.log("response", response.data.data[0].domicile);
  //       if (response.data.success) {
  //         setFormData(response.data);
  //       } else {
  //         console.error("Failed to fetch admission data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching admission data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [startSession,endSession]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getAllNewStudent();
  //       console.log("data",data)
  //       setFormData(data);
  //     } catch (error) {
  //       console.error("Error fetching admission data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [startSession, endSession]);


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
    const startMatch = data.start_session && data.start_session.includes(startSession);
    const endMatch = data.end_session && data.end_session.includes(endSession);
    return startMatch && endMatch;
  });
  

  const streamIT = (stream) => filteredData.filter(data => data.stream === stream).length;
  const streamEIE= (stream) => filteredData.filter(data => data.stream === stream).length; 
  const exameTypeCount = (examType) => filteredData.filter(data => data.examType === examType ).length;

  const categoryCount = (category, gender) => filteredData.filter(data => data.category === category && data.gender === gender).length;
  // const obcStCount = (category, gender) => filteredData.filter(data => data.category === category && data.gender === gender).length;
  const generalCount = (category, gender) => filteredData.filter(data => data.category === category && data.gender === gender).length;
  const ewsCount = (category, gender) => filteredData.filter(data => data.category === category && data.gender === gender).length;
  const obcACount = (category, gender) => filteredData.filter(data => data.category === category && data.gender === gender).length;

  // const filteredData = formData.filter((data) => {
  //   // Check if start_session and end_session properties exist and are arrays
  //   const startMatch =  data.start_session.includes(startSession);
  //   const endMatch = data.end_session.includes(endSession);
  //   return startMatch && endMatch;
  // });

  // const filteredData = formData.filter((data) => {
  //   // Check if start_session and end_session properties exist and are arrays
  //   const startMatch = data.start_session && data.start_session.includes(startSession);
  //   const endMatch = data.end_session && data.end_session.includes(endSession);
  //   return startMatch && endMatch;
  // });
  
  

  
  
  

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
            <tr style={{fontSize:'12px',alignItems:"center",textAlign:'center',justifyContent:'center'}}>
              <th rowSpan="2">No</th>
              <th colSpan="2">Course</th>
              <th colSpan="2"className="">Admission</th>
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
            <tr style={{fontSize:'12px',alignItems:"center",textAlign:'center',justifyContent:'center'}}>
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
              <tr key={index} style={{fontSize:'12px',alignItems:"center",textAlign:'center',justifyContent:'center'}}>
                <td>{index + 1}</td>
                <td>{data.stream == "IT" ? data.cource_name + "(IT)" : ""}({streamIT('IT')})</td>
                <td>
                  {data.stream == "EIE" ? data.cource_name + "(EIE)" : ""}({streamEIE("EIE")})
                </td>

                <td>{data.examType == "WBJEE" ? data.examType : ""}({exameTypeCount("WBJEE")})</td>
                <td>{data.examType == "JELETE" ? data.examType : ""}({exameTypeCount("JELETE")})</td>

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
                    : ""}({categoryCount('SC','M')})
                </td>
                <td>
                  {data.category === "SC" && data.gender === "F"
                    ? data.gender
                    : ""}({categoryCount('SC','F')})
                </td>
                <td>{data.category == "SC" ? data.domicile : ""}</td>

                <td>
                  {data.category === "OBC-ST" && data.gender === "M"
                    ? data.gender
                    : ""}({categoryCount('OBC-ST','M')})
                </td>
                <td>
                  {data.category === "OBC-ST" && data.gender === "F"
                    ? data.gender
                    : ""}({categoryCount('OBC-ST','F')})
                </td>
                <td>{data.domicile == "ST" ? data.domicile : ""}</td>

                <td>
                  {data.category === "OBC-A" && data.gender === "M"
                    ? data.gender
                    : ""}({categoryCount('OBC-A','M')})
                </td>
                <td>
                  {data.category === "OBC-A" && data.gender === "F"
                    ? data.gender
                    : ""}({categoryCount('OBC-A','F')})
                </td>
                <td>{data.category == "OBC-A" ? data.domicile : ""}</td>

                <td>
               <td>{data.category === 'OBC-B' && data.gender === 'M' ? 'M' : ''}({categoryCount('OBC-B','M')})</td>
                </td>
                <td>
                  {data.category === "OBC-B" && data.gender === "F"
                    ? data.gender
                    : ""}({categoryCount('OBC-B','F')})
                </td>
                <td>{data.category == "OBC-B" ? data.domicile : ""}</td>

                <td>
                  {data.category === "EWS" && data.gender === "M"
                    ? data.gender
                    : ""}({ewsCount('EWS', 'M')})
                </td>
                <td>
                  {data.category === "EWS" && data.gender === "F"
                    ? data.gender
                    : ""}({ewsCount('EWS', 'F')})
                </td>
                <td>{data.category == "EWS" ? data.domicile : ""}</td>

                <td>
                  {data.category === "GENERAL" && data.gender === "M"
                    ? data.gender
                    : ""}({generalCount('GENERAL', 'M')})
                </td>
                <td>
                  {data.category === "GENERAL" && data.gender === "F"
                    ? data.gender
                    : ""}({generalCount('GENERAL', 'F')})
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

              <tr>
              <td colSpan="17">{obcACount('OBC-B', 'M')}</td>
              <td colSpan="2">{obcACount('OBC-B', 'M')}</td>
              <td colSpan="17">{obcACount('OBC-B', 'F')}</td>
              <td colSpan="2">{obcACount('OBC-B', 'F')}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdmissionSummaryData;
