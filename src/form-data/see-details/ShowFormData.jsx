// import   "./ShowFormData.css";
import style from "./showdata.module.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import showdata_img from "../../assets/showdata.png";
// import {
//   Jobs,
//   NewAdmission,
//   exitStudentEndpoints,
//   pgCourseEndpoints,
// } from "../../services/apis.js";
import UserFormData from "./user/UserFormData.jsx";
function ShowFormData(props) {
  const { isAdmin} = props;

  // const token = localStorage.getItem("token");
  const {  accountType } = useSelector((state) => state.auth);
  // const [jobUser, setJobUser] = useState(null);
  // const [newAdmissionUser, setNewAdmissionUser] = useState(null);
  // const [exitUser, setExitUser] = useState(null);
  // const [pgUser, setPgUser] = useState(null);
  // // const token = localStorage.getItem("token");

  // const cleanToken = token.replace(/^"|"$/g, "");
  // const headers = {
  //   Authorization: `Bearer ${cleanToken}`,
  // };

  // const fetchJobUser = async () => {
  //   try {
  //     const { data: res } = await axios.get(Jobs.Get_User_Profile, { headers });
  //     setJobUser(res.jobData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchNewAdmissionUser = async () => {
  //   try {
  //     const { data: res } = await axios.get(NewAdmission.GET_PROFILE, {
  //       headers,
  //     });
  //     setNewAdmissionUser(res.Newadmission);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchExitUser = async () => {
  //   try {
  //     const { data: res } = await axios.get(
  //       exitStudentEndpoints.GET_USER_EXIT_PROFILE,
  //       { headers }
  //     );
  //     setExitUser(res.exitData);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchPGUser = async () => {
  //   try {
  //     const { data: res } = await axios.get(
  //       pgCourseEndpoints.GET_PG_USER_PROFILE,
  //       { headers }
  //     );
  //     setPgUser(res.pgdata);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchJobUser();
  //   fetchNewAdmissionUser();
  //   fetchExitUser();
  //   fetchPGUser();
  // }, []);

  // GET_PG_USER_PROFILE
  return (
    <div  style={{backgroundColor:"#000814"}}>
      <div className={style.showdata_img}>
        <img src={showdata_img} alt="" />
      </div>

      <Container className={style.form_data_container}>
        <Row>
          {!isAdmin  &&  accountType==='Student'&&  (
            // <Row className="my-4 p-2">
            //   <Col className={style.from_data_link} direction="horizontal">
            //     <Link
            //       to={`/new_addmission/${newAdmissionUser?._id || ""}`}
            //       className={style.custom_link}
            //     >
            //       Admission Application Data
            //     </Link>
            //     <Link
            //       to={`/exit_application/${exitUser?._id || ""}`}
            //       className={style.custom_link}
            //     >
            //       Exit-Student Application Data
            //     </Link>
            //     <Link
            //       to={`/pg_application/${pgUser?._id || ""}`}
            //       className={style.custom_link}
            //     >
            //       PG Application Data
            //     </Link>
            //     <Link
            //       to={`/job_application/${jobUser?._id || ""}`}
            //       className={style.custom_link}
            //     >
            //       Job Application Data
            //     </Link>
            //   </Col>
            // </Row>
            <UserFormData/>
          )}

          {/* show Data in admin section and add to function  delete and update */}
          {/* {isAdmin && (
            <Row className="my-4">
              <Col
                className="text-center custom-col "
                style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
                direction="horizontal"
              >
                <Link to={`/all_new_addmission`} className={style.custom_link}>
                  All New Admission Record
                </Link>
                <Link to={`/all_exit_student`} className={style.custom_link}>
                  All Exit Student Record
                </Link>
                <Link to={`/all_pg_student`} className={style.custom_link}>
                  All PG Student Record
                </Link>
                <Link to='/all_student_job' className={style.custom_link}>
                  All Student Job Record
                </Link>
              </Col>
            </Row>
          )} */}

          {accountType==='Instructor' && (
            <Row className="my-4">
              <Col className="text-center custom-col " direction="horizontal">
                <Link to={`/all_new_addmission`} className={style.custom_link}>
                  All New Admission Record
                </Link>
                <Link to="/all_exit_student" className={style.custom_link}>
                  All Exit Student Record
                </Link>
                <Link to="/all_pg_student" className={style.custom_link}>
                  All PG Student Record
                </Link>
                <Link to='/all_student_job' className={style.custom_link}>
                  All Student Job Record
                </Link>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ShowFormData;
