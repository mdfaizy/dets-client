import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./report.module.css";

const Report = () => {
  return (
    <>
      <Container className={style.pg_conatiner} fluid>
        <Row>
          <Col>
            <h1 className="text-center">CREATE REPORT AND FILTER DATA</h1>
          </Col>
          <Row className="my-4">
            <Row>
              <Col className={style.pg_text}></Col>

              
            </Row>
            <Col
              className= {style.report_link_text}
              direction="horizontal"
            >
              <Link to="/dashboard/newstudentreport" className={style.custom_link}>
                NEW ADMISSION REPORT
              </Link>
              <Link to="/dashboard/createexitreport" className={style.custom_link}>
                EXIT STUDENT REPORT
              </Link>
              <Link to="/dashboard/createpgreport" className={style.custom_link}>
                PG STUDENT REPORT
              </Link>
              <Link to="/dashboard/createjobreport" className={style.custom_link}>
                JOB REPORT
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Report;
