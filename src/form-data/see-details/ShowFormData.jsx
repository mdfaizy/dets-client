
// import   "./ShowFormData.css";
import style from "./showdata.module.css";
// import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import showdata_img from "../../assets/showdata.png";
// import { useParams } from "react-router-dom";
function ShowFormData(props) {
  // const isAdmin = props.isAdmin;
  const { isAdmin, teacher } = props;

  const {id}=useParams();
  return (
    <>
      <div className={style.showdata_img}>
        <img src={showdata_img} alt="" />
      </div>

      <Container className={style.form_data_container}>
        <Row>
          {!isAdmin && (
            <Row className="my-4 p-2">
              {/* text-center custom-col */}
              <Col
                className={style.from_data_link}
                // style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
                direction="horizontal"
              >
                <Link to={`/new_addmission/6646092e9788f8705ab622bb
`} className={style.custom_link}>
                  Addmission Application Data
                </Link>
                <Link to={`/exit_application/${id}`} className={style.custom_link}>
                  Exit-Student Application Data
                </Link>
                <Link to={`/pg_application/${id}`} className={style.custom_link}>
                  PG Application Data
                </Link>
                <Link to={`/job_application/${id}`} className={style.custom_link}>
                  Job Application Data
                </Link>
              </Col>
            </Row>
          )}

          {/* show Data in admin section and add to function  delete and update */}
          {isAdmin && (
            <Row className="my-4">
              <Col
                className="text-center custom-col "
                style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
                direction="horizontal"
              >
                <Link
                  to={`/all_new_addmission/${id}`}
                  className={style.custom_link}
                >
                  All New Addmission Record
                </Link>
                <Link to={`/all_exit_student`} className={style.custom_link}>
                  All Exit Student Record
                </Link>
                <Link to={`/all_pg_student`} className={style.custom_link}>
                  All PG Student Record
                </Link>
                <Link to={`/all_student_job`} className={style.custom_link}>
                  All Student Job Record
                </Link>
              </Col>
            </Row>
          )}

          {teacher && (
            <Row className="my-4">
              <Col className="text-center custom-col " direction="horizontal">
                <Link
                  to={`/all_new_addmission`}
                  className={style.custom_link}
                >
                  All New Admission Record
                </Link>
                <Link to="/all_exit_student" className={style.custom_link}>
                  All Exit Student Record
                </Link>
                <Link to="/all_pg_student" className={style.custom_link}>
                  All PG Student Record
                </Link>
                <Link to="/all_student_job" className={style.custom_link}>
                  All Student Job Record
                </Link>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </>
  );
}

export default ShowFormData;
