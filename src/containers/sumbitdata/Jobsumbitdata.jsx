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
          <Container className="custom_container">
            <table className="custom_table">
              <tbody>
                <tr>
                  <td className="top_heading">
                    <span>
                      <b className="custom_header">UNIVERSITY OF KALYANI</b>
                      <br />
                      ( Department of Engineering and Technological
                      Studies(DETS))
                      <br />
                      (Kalyani, West Bengal,741235)
                    </span>
                  </td>
                </tr>
                <tr className="table-row">
                  <td className="table-cell">
                    <table className="inner-table">
                      <tr className="data_info_row">
                        <td width="20%">Info</td>
                        <td>
                          <b>:</b>
                        </td>
                        <td width="80%">Details</td>
                      </tr>
                      <tbody className="tbody_jobData_info">
                        <tr>
                          <td width="20%">Full Name:</td>
                          <td width="50px">
                            <b>:</b>
                          </td>
                          <td width="60%">{apidata.data.fullName}</td>
                        </tr>
                        <tr>
                          <td width="150px">Company's Name</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.companies_name}</td>
                        </tr>
                        <tr>
                          <td width="150px">Email</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.email}</td>
                        </tr>
                        <tr>
                          <td width="150px">Date of Birth</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.date_of_birth}</td>
                        </tr>
                        <tr>
                          <td width="150px">Phone No</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.phone_no}</td>
                        </tr>
                        <tr>
                          <td width="150px">Home City</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.home_city}</td>
                        </tr>
                        <tr>
                          <td width="150px">Companies City</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.companies_city}</td>
                        </tr>
                        <tr>
                          <td width="150px">Package lpa</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.package_lpa}</td>
                        </tr>
                        <tr>
                          <td width="150px">Job Role</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.job_role}</td>
                        </tr>
                        <tr>
                          <td width="150px">Selection Type</td>
                          <td>
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
                              paddingLeft: "10px",
                            }}
                          >
                            Total Apply Companies
                          </td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.totalApplyCompanies}</td>
                        </tr>
                        <tr>
                          <td width="150px">No Of Select Interview</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.noOfSelectInterview}</td>
                        </tr>
                        <tr>
                          <td width="150px">Company's Type</td>
                          <td>
                            <b>:</b>
                          </td>
                          <td>{apidata.data.companiesType}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              <p
                style={{
                  fontSize: "12px",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                Block C, Nadia, Kalyani, West Bengal 741245
                <br />
                UNIVERSITY OF KALYANI, E-mail:
              </p>
            </table>
          </Container>
        </>

        <button onClick={handlePrint} className="job_form_data_print">
          Print
        </button>
      </>
    </div>
  );
};

export default Jobsumbitdata;
