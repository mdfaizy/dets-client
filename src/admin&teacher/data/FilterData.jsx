import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../report/report.module.css";

const FilterData = () => {
  return (
    <>
      <Container className={style.pg_conatiner} fluid>
        <Row>
          <Col>
            <h1 className="text-center">FILTER DATA</h1>
          </Col>
          <Row className="my-4">
            <Row>
              <Col className={style.pg_text}></Col>
            </Row>
            <Col
              className="text-center custom-col my-2 "
              direction="horizontal"
            >
              <Link to="/admissionfilterdata" className={style.custom_link}>
                NEW ADMISSION
              </Link>
              <Link to="/createexitFilterData" className={style.custom_link}>
                EXIT STUDENT FilterData
              </Link>
              <Link to="/createpgFilterData" className={style.custom_link}>
                PG STUDENT FilterData
              </Link>
              <Link to="/createjobFilterData" className={style.custom_link}>
                JOB FilterData
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default FilterData;
