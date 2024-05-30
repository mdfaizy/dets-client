import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const Jobsumbitdata = () => {
  const location = useLocation();
  const { apidata } = location.state || {};
  console.log("apidata", apidata.data);
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <>
        <>
          <Container style={{ marginTop: "50px" }}>
            <table
              style={{
                display: "block",
                background:
                  "#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left",
                width: "700px",
                color: "#444444",
                boxShadow: "0px 0 6px #ccc",
                marginTop: "60px",
                marginBottom: "40px",
                margin: "0 auto",
              }}
              cellSpacing="0"
              cellPadding="0"
              border="0"
              align="center"
            >
              <tr style={{ width: "100%", borderCollapse: "collapse" }}>
                <tr
                  width="700px"
                  style={{
                    width: "100%",
                    display: "grid",
                    borderCollapse: "collapse",
                  }}
                >
                  <tr
                    style={{
                      width: "700px",
                      backgroundColor: "white",
                      height: "100px",
                      borderBottom: "3px solid #006cb5",
                    }}
                  >
                    <td
                      style={{
                        width: "700px",
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
                      width: "660px",
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
                      <tr style={{ display: "grid" }}>
                        <td colSpan={3}>
                          <table
                            style={{
                              marginBottom: "20px",
                              width: "630px",
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
                            <tbody style={{ paddingLeft: "10px" }}>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Full Name:
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.fullName}</td>
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
                                <td>{apidata.data.father_Name}</td>
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
                                <td>{apidata.data.gender}</td>
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
                                <td>{apidata.data.email}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Categorie
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.categorie}</td>
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
                                <td>{apidata.data.date_of_birth}</td>
                              </tr>

                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Home Town
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.home_city}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Companies Name
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.companies_name}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Companies Loacation
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.companies_city}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Job Role
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.job_role}</td>
                              </tr>
                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Package
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.package_lpa}</td>
                              </tr>

                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Selection
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.selectType}</td>
                              </tr>

                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Apply For Job
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.totalApplyCompanies}</td>
                              </tr>

                              <tr>
                                <td
                                  width="100px"
                                  style={{
                                    fontFamily:
                                      "calibri, helvetica, arial, sans-serif",
                                  }}
                                >
                                  Companies Type
                                </td>
                                <td width="40px" align="center">
                                  <b>:</b>
                                </td>
                                <td>{apidata.data.companiesType}</td>
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
            <button onClick={handlePrint} className="job_form_data_print">
              Print
            </button>
          </Container>
        </>
      </>
    </div>
  );
};

export default Jobsumbitdata;
