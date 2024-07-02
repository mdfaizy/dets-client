import { Container, Col, Row } from 'react-bootstrap';
import softwarejob_jobimage from '../../../assets/softwarejob.png';
import { NavLink } from 'react-router-dom';
// import style from './Newstudent.module.css';
import style from './Job.module.css';

const PageBtechJob = () => {
  return (
    <>
      <img src={softwarejob_jobimage} alt="" className={style.jobimage} />

      <Container className={style.job_conatiner} fluid>
        <Row >
          <Col className={style.job_text}>
            
            <p>  
         Completing the 4th year of a B.Tech program marks a significant milestone, opening doors to diverse opportunities in the fields of Software, Electronics, and Electrical engineering. For those venturing into the software industry, this stage signifies the culmination of in-depth programming knowledge, algorithmic understanding, and software development skills acquired throughout the academic journey. Graduates are well-equipped to contribute to cutting-edge technologies, software design, and innovation.
            </p>
            <p>
            In the realm of Electronics, students delve into advanced topics like embedded systems, signal processing, and communication networks. Armed with theoretical expertise and practical experience gained during the 4th year, they are poised to excel in roles related to hardware design, automation, and emerging technologies
            </p>
            <p>B.Tech graduates in Software Engineering, after completing their 4th year, are primed for successful careers in software jobs. With honed programming skills and project experience, they excel in roles such as software development and systems analysis. Their advanced knowledge and practical training make them valuable contributors to the dynamic and innovative field of software engineering.
        </p>
           
          </Col>
        </Row>
        <Col className={style.job_link}>
          <NavLink to='/job' className={style.job_text_link}>
            B TECH AFTER JOB
          </NavLink>

        </Col>
      </Container>
    </>
  );
};

export default PageBtechJob;
