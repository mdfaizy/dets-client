import style from "../showdata.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Jobs,
  newadmissionEndpoints,
  exitStudentEndpoints,
  pgCourseEndpoints,
} from "../../../services/apis";
const UserFormData = () => {
  const token = localStorage.getItem("token");
  const [jobUser, setJobUser] = useState(null);
  const [newAdmissionUser, setNewAdmissionUser] = useState(null);
  const [exitUser, setExitUser] = useState(null);
  const [pgUser, setPgUser] = useState(null);
  const cleanToken = token.replace(/^"|"$/g, "");
  const headers = {
    Authorization: `Bearer ${cleanToken}`,
  };

  const fetchJobUser = async () => {
    try {
      const { data: res } = await axios.get(Jobs.Get_User_Profile, { headers });
      setJobUser(res.jobData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewAdmissionUser = async () => {
    try {
      const { data: res } = await axios.get(newadmissionEndpoints.GET_PROFILE, {
        headers,
      });
      setNewAdmissionUser(res.Newadmission);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExitUser = async () => {
    try {
      const { data: res } = await axios.get(
        exitStudentEndpoints.GET_USER_EXIT_PROFILE,
        { headers }
      );
      setExitUser(res.exitData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPGUser = async () => {
    try {
      const { data: res } = await axios.get(
        pgCourseEndpoints.GET_PG_USER_PROFILE,
        { headers }
      );
      setPgUser(res.pgdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobUser();
    fetchNewAdmissionUser();
    fetchExitUser();
    fetchPGUser();
  }, []);
  return (
    <div>
      <Container className={style.form_data_container}>
        <Row>
          <Row className="my-4 p-2">
            <Col className={style.from_data_link} direction="horizontal">
              <Link
                to={`/new_addmission/${newAdmissionUser?._id || ""}`}
                className={style.new_student_heading}
              >
                Admission Application Data
              </Link>
              <Link
                to={`/exit_application/${exitUser?._id || ""}`}
                className={style.custom_link}
              >
                Exit-Student Application Data
              </Link>
              <Link
                to={`/pg_application/${pgUser?._id || ""}`}
                className={style.custom_link}
              >
                PG Application Data
              </Link>
              <Link
                to={`/job_application/${jobUser?._id || ""}`}
                className={style.custom_link}
              >
                Job Application Data
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default UserFormData;
