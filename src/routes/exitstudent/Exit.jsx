// import { Container, Col, Row } from 'react-bootstrap';
// import exitStudentImage from '../../assets/exitstudent.png';
// import { NavLink } from 'react-router-dom';
// import style from './Exit.module.css';

// const ExitStudent = () => {
//   return (
//     <>
//       <img src={exitStudentImage} alt="Exit Student" className={style.exitImage} />
//       <Container className={style.exitContainer} fluid>
//         <Row>
//           <Col className={style.exitStudentText}>
//             <p>
//               Completing the fourth year in the Bachelor of Technology (B.Tech) program is a significant milestone, opening doors to diverse pathways for exit students. As they stand on the brink of graduation, various options await their exploration.
//             </p>
//             <p>
//               Many students opt to transition directly into the workforce, applying the practical skills and knowledge acquired during their B.Tech journey. This step propels them into professional roles, allowing them to contribute meaningfully to industries and gain valuable real-world experience.
//             </p>
//             <p>
//               Alternatively, some graduates may choose to pursue higher education, seeking advanced degrees or specialized certifications. This avenue provides an opportunity for in-depth specialization in their field, fostering a continuous journey of academic growth.
//             </p>
//             <p>
//               Entrepreneurship beckons to those with a passion for innovation. Armed with creative thinking nurtured throughout their B.Tech years, some graduates embark on the entrepreneurial path, establishing startups and bringing their ideas to fruition.
//             </p>
//           </Col>
//         </Row>



//         <Row className={style.exitLink}>
//             <NavLink to='/exitfrom' className={style.exitTextLink}>
//               EXIT STUDENT
//             </NavLink>
//           </Row>
//       </Container>
//     </>
//   );
// };

// export default ExitStudent;



import { Container, Col, Row } from 'react-bootstrap';
import exitStudentImage from '../../assets/exitstudent.png';
import { NavLink } from 'react-router-dom';
import style from './Exit.module.css';

const ExitStudent = () => {
  return (
    <>
      <img src={exitStudentImage} alt="Exit Student" className={style.exitImage} />
      <Container className={style.exitContainer} fluid>
        <Row>
          <Col className={style.exitStudentText}>
            <p>
              Completing the fourth year in the Bachelor of Technology (B.Tech) program is a significant milestone, opening doors to diverse pathways for exit students. As they stand on the brink of graduation, various options await their exploration.
            </p>
            <p>
              Many students opt to transition directly into the workforce, applying the practical skills and knowledge acquired during their B.Tech journey. This step propels them into professional roles, allowing them to contribute meaningfully to industries and gain valuable real-world experience.
            </p>
            <p>
              Alternatively, some graduates may choose to pursue higher education, seeking advanced degrees or specialized certifications. This avenue provides an opportunity for in-depth specialization in their field, fostering a continuous journey of academic growth.
            </p>
            <p>
              Entrepreneurship beckons to those with a passion for innovation. Armed with creative thinking nurtured throughout their B.Tech years, some graduates embark on the entrepreneurial path, establishing startups and bringing their ideas to fruition.
            </p>
          </Col>
        </Row>

        
<Row className={style.exitLink}>
          <NavLink to='/exitfrom' className={style.exitTextLink}>
            EXIT STUDENT
          </NavLink>
        </Row>


       
        
      </Container>
    </>
  );
};

export default ExitStudent;