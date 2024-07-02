import { Container, Col, Row } from "react-bootstrap";
import neadmission_student from "../../assets/neadmission.png";
import { NavLink } from "react-router-dom";
import style from "./Newstudent.module.css";
const NewStudent = () => {
  return (
    <>
      <img src={neadmission_student} alt="" className={style.newimage} />
      <Container className={style.new_conatiner} fluid>
        <Row>
          <Col className={style.new_student_text}>
            <p>
              Embarking on the journey into the fourth year of a B.Tech program
              marks a significant milestone for new admissions. Having
              successfully traversed the foundational years of theoretical
              learning and practical application, students now find themselves
              at the threshold of specialized knowledge and advanced studies in
              their chosen engineering discipline.
            </p>
            <p>
              Many students opt to transition directly into the workforce,
              applying the practical skills and knowledge acquired during their
              B.Tech journey. This step propels them into professional roles,
              allowing them to contribute meaningfully to industries and gain
              valuable real-world experience.
            </p>
            <p>
              The fourth year is characterized by a deeper dive into specialized
              coursework, offering students the opportunity to explore advanced
              topics and engage in meaningful research projects. This phase is
              pivotal in shaping their expertise and refining their technical
              skills. It's a period where theoretical concepts seamlessly merge
              with practical application, allowing students to develop a
              comprehensive understanding of their field.
            </p>
            <p>
              Moreover, the fourth year is not only about academic rigor but
              also about preparing students for the professional landscape. Many
              institutions emphasize industry exposure, internships, and
              collaborative projects, providing a taste of the real-world
              challenges they will encounter in their future careers.
            </p>
            <p>
              As new entrants embark on this final leg of their B.Tech journey,
              they can anticipate a holistic and enriching experience that
              combines academic excellence with practical insights. The fourth
              year serves as a bridge between formal education and the
              professional realm, molding students into adept engineers ready to
              contribute meaningfully to the ever-evolving technological
              landscape.
            </p>
          </Col>
        </Row>
        <Col className={style.newstudent_link}>
          <NavLink to="/newadmission" className={style.newstudent_text_link}>
            NEW STUDENT ADMISSION FROM
          </NavLink>
        </Col>
      </Container>
    </>
  );
};

export default NewStudent;
