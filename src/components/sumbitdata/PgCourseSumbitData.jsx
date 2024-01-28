import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import logo_university from '../../assets/log.jpg';
const PgCourseSumbitData = () => {
  const location = useLocation()
  const { apidata } = location.state || {}
  console.log(apidata)
  return (
    <>
      <>
        <Container>

          {/* <table > */}
          <table style={{ display: 'block', background: '#f8f8fa url(https://i.ibb.co/VTk0B0B/pattern.png) repeat top left', width: '800px', color: '#444444', boxShadow: '0px 0 6px #ccc',marginTop:'20px'  }} cellSpacing="0" cellPadding="0" border="0" align="center">
          <tr>
    <td>
    </td>
  </tr>
 

<tr style={{ width: '100%', borderCollapse: 'collapse' }}>
  <tr width="800px" style={{ width: '100%', display: 'grid', borderCollapse: 'collapse' }}>
    <tr width="800px" style={{ width: '800px', backgroundColor: 'white', height: '100px', borderBottom: '3px solid #006cb5'  }}>
      <td style={{ width: '800px', textAlign: 'center', verticalAlign: 'middle' }}>
        <span>
          <b style={{ marginBottom: '0px', color: '#006cb5', fontSize: '28px', fontWeight: 'bold' }}>UNIVERSITY OF KALYANI</b>
          <br />
          ( Department of Engineering and Technological Studies(DETS))<br/>
          (Kalyani, West Bengal,741235)
        </span>
      </td>
    </tr>
  </tr>
</tr>
            <tr style={{ display: 'block', padding: '20px' }}>
              <td style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>
                <table style={{ width: '760px', display: 'block', wordBreak: 'break-all', boxShadow: '0px 0 6px #ccc', background: '#fff', padding: '0px 15px', borderRadius: '5px', fontSize: '14px' }} cellSpacing="0" cellPadding="0" border="0" align="center">
                  <tbody>
                    <tr>
                      <td colSpan="3" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif', fontSize: '12px' }}>
                        <span>Dear<br />Your inquiry has been received</span>
                      </td>
                    </tr>
                    <tr style={{ display: 'grid' }}>
                      {/* Your content goes here */}
                      <td colSpan={3}>
                        <table style={{ marginBottom: '20px', width: '730px', fontSize: '14px', textAlign: 'left', background: '#ffffff', border: '1px solid #cac2be', clear: 'both' }} cellSpacing="0" cellPadding="5" border="0" align="left">
                          {/* Your table content goes here */}
                          <thead>
                            <tr style={{ backgroundColor: '#006cb5', height: '20px', color: 'white' }}>
                              <th style={{ fontFamily: 'calibri,helvetica,arial,sans-serif', textAlign: 'left' }} width="30%">Info</th>
                              <th width="5%"><br /></th>
                              <th style={{ fontFamily: 'calibri,helvetica,arial,sans-serif', textAlign: 'left' }} width="65%">Details</th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Frist Name:</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.fristName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Last Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.lastName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Father Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.fatherName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Mother Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.motherName}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Email</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.email}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Date of Birth</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.date_of_birth}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Gender</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.gender}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Exam</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.exameType}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Category</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.category}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>All India Rank</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.allIndiaRank}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Stream</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.stream}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Session</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.session}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Institute City</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.InstituteCity}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Institute Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.InstituteName}</td>
                            </tr>


                            {/* <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Monthly Family Income</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.monthly_family_income}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Mobile No</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.mobileNo}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Bank Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.bank_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>IFSC Code</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.ifsc_code}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Account</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.account}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Account Holder's Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.account_holder_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Name</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.parent_name}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Relationship with guardian</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.relationship_with_guardian}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Occupation</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.parent_occupation}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Address</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.parent_address}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Email</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.parent_email}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Parent Mobile No</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.parent_mobile_no}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>I Have Declared That</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.i_have_declared}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>S/o/D/o/W/o</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.s_o_w_o}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>R/o</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.R_o}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Place</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.place}</td>
                            </tr>
                            <tr>
                              <td width="100px" style={{ fontFamily: 'calibri, helvetica, arial, sans-serif' }}>Date</td>
                              <td width="40px" align="center"><b>:</b></td>
                              <td>{apidata.data.date}</td>
                            </tr> */}


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
  )
}
export default PgCourseSumbitData;

