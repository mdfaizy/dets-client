import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./pgdata.module.css";
// import {pgCourseEndpoints} from "../../services/apis"
import { getPgCourseById } from "../../services/apiFunction/pgApi";
// import axios from "axios"
const PgPrint = () => {
  const [formData, setFormData] = useState({});
  const token = localStorage.getItem("token");
  // const cleanToken = token ? token.replace(/^"|"$/g, "") : "";
  const { id } = useParams();

  const fetchData = async () => {
    try {
      // const API_Url = `${pgCourseEndpoints.GET_PG_COURSE_BY_ID}/${id}`;
      // const { data: res } = await axios.get(API_Url, {
      //   headers: {
      //     Authorization: `Bearer ${cleanToken}`,
      //   },
      // });
      // console.log("pgdata", res);
      // setFormData(res.pgdata
      // );
      const data = await getPgCourseById(id, token);
      console.log("data", data);
      setFormData(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <>
        <>
          <Container>
            <table
              style={{
                display: "block",
                background:
                  "#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left",
                width: "800px",
                color: "#444444",
                boxShadow: "0px 0 6px #ccc",
                marginTop: "20px",
              }}
              cellSpacing="0"
              cellPadding="0"
              border="0"
              align="center"
            >
              <tr>
                <td></td>
              </tr>

              <tr style={{ width: "100%", borderCollapse: "collapse" }}>
                <tr
                  width="800px"
                  style={{
                    width: "100%",
                    display: "grid",
                    borderCollapse: "collapse",
                  }}
                >
                  <tr
                    width="800px"
                    style={{
                      width: "800px",
                      backgroundColor: "white",
                      height: "100px",
                      borderBottom: "3px solid #006cb5",
                    }}
                  >
                    <td
                      style={{
                        width: "800px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <span>
                        <b
                          style={{
                            marginBottom: "0px",
                            color: "#006cb5",
                            fontSize: "28px",
                            fontWeight: "bold",
                          }}
                        >
                          UNIVERSITY OF KALYANI
                        </b>
                        <br />
                        ( Department of Engineering and Technological
                        Studies(DETS))
                        <br />
                        (Kalyani, West Bengal,741235)
                      </span>
                    </td>
                  </tr>
                </tr>
              </tr>
              <tr style={{ display: "block", padding: "20px" }}>
                <td
                  style={{
                    fontFamily: "calibri, helvetica, arial, sans-serif",
                  }}
                >
                  <table
                    style={{
                      width: "760px",
                      display: "block",
                      wordBreak: "break-all",
                      boxShadow: "0px 0 6px #ccc",
                      background: "#fff",
                      padding: "0px 15px",
                      borderRadius: "5px",
                      fontSize: "14px",
                    }}
                    cellSpacing="0"
                    cellPadding="0"
                    border="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          colSpan="3"
                          style={{
                            fontFamily: "calibri, helvetica, arial, sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          <span>
                            Dear
                            <br />
                            Your inquiry has been received
                          </span>
                        </td>
                      </tr>
                      <tr style={{ display: "grid" }}>
                        {/* Your content goes here */}
                        <td colSpan={3}>
                          <table
                            style={{
                              marginBottom: "20px",
                              width: "730px",
                              fontSize: "14px",
                              textAlign: "left",
                              background: "#ffffff",
                              border: "1px solid #cac2be",
                              clear: "both",
                            }}
                            cellSpacing="0"
                            cellPadding="5"
                            border="0"
                            align="left"
                          >
                            {/* Your table content goes here */}
                            <thead>
                              <tr
                                style={{
                                  backgroundColor: "#006cb5",
                                  height: "20px",
                                  color: "white",
                                }}
                              >
                                <th
                                  style={{
                                    fontFamily:
                                      "calibri,helvetica,arial,sans-serif",
                                    textAlign: "left",
                                  }}
                                  width="30%"
                                >
                                  Info
                                </th>
                                <th width="5%">
                                  <br />
                                </th>
                                <th
                                  style={{
                                    fontFamily:
                                      "calibri,helvetica,arial,sans-serif",
                                    textAlign: "left",
                                  }}
                                  width="65%"
                                >
                                  Details
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  First Name:
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.firstName}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Last Name
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.lastName}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Father Name
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.fatherName}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Mother Name
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.motherName}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Email
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.email}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Date of Birth
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.date_of_birth}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Gender
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.gender}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Exam
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.exameType}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Category
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.category}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  All India Rank
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.allIndiaRank}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Stream
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.stream}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Session
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.session}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Institute City
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.InstituteCity}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Institute Name
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{formData.InstituteName}</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
          </Container>
        </>
      </>

      <button onClick={handlePrint} className={style.job_form_data_print}>
        Print
      </button>
    </div>
  );
};

export default PgPrint;
