import { Container, Col, Row } from 'react-bootstrap';
import pgcourseadmission_image from '../../assets/pgcourseadmission.png';
import { NavLink } from 'react-router-dom';
import style from './pgcourse.module.css';

const Pgcourse = () => {
  return (
    <>
      <img src={pgcourseadmission_image} alt="" className={style.pgcourseimage} />

      <Container className={style.pg_conatiner} fluid>
        <Row >
          <Col className={style.pg_text}>
           <p>
           Embarking on a postgraduate (PG) course signifies a commitment to academic excellence and professional advancement. Following the successful completion of a bachelor's degree, enrolling in a PG program offers an opportunity for deeper specialization and career refinement. The decision to pursue advanced studies is driven by a desire for comprehensive knowledge, research proficiency, and staying abreast of industry trends.

           </p>
           <p>
           PG courses provide a platform for rigorous academic exploration, facilitating in-depth understanding and skill development. This educational journey is not only about acquiring a higher qualification but also about honing critical thinking, problem-solving, and research abilities. It equips individuals with the expertise needed for leadership roles, specialized professions, and contributions to cutting-edge developments in their chosen field.
           </p>
           
          </Col>
        </Row>
        <Col className={style.pg_link}>
          <NavLink to='/pgcource' className={style.pg_text_link}>
            B TECH AFTER POSTGRADUATE
          </NavLink>

        </Col>
      </Container>
    </>
  );
};

export default Pgcourse;
