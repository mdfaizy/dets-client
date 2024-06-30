// import Allexitstudent from "../../admin/all-student/Allexitstudent";
// import ShowFormData from "../../form-data/see-details/ShowFormData";
// import { Container, Row, Col } from "react-bootstrap";
// import style from "./StudentInfo.module.css";
// // import axios from "axios";
// import { Link } from "react-router-dom";
// import teacher_verify_img from "../../assets/showdata.png";

// const StudentAllInfo = () => {
//   return (
//     <>
//       <div className={style.showdata_img}>
//         <img src={teacher_verify_img} alt="" />
//       </div>
//       <Container className={style.pg_conatiner} fluid>
//         <Row>
//           <Col>
//             <h1 className="text-center">STUDENT INFO VERIFY A TEACHER</h1>
//           </Col>
//           <Row className="my-4">
//             <Row>
//               <Col className={style.pg_text}>
//                 <h3>NEW ADMISSION</h3>
//                 <p>
//                   As a verifying teacher, I confirm that I have reviewed the
//                   academic qualifications of the applicant. The provided
//                   documents align with our admission criteria.
//                 </p>

//                 <h3>EXIT STUDENT</h3>
//                 <p>
//                   Explore the achievements and academic journey of our exit
//                   students. Discover their success stories and the impact
//                   they've made in various fields post-graduation.
//                 </p>
//                 <h3>POSTGRAGUATE</h3>
//                 <p>
//                   Gain insights into our diverse postgraduate courses. Learn
//                   about curriculum highlights, faculty expertise, and the unique
//                   opportunities each program offers for advanced education and
//                   research.
//                 </p>

//                 <h3>Job</h3>
//                 <p>
//                   Navigate through the professional journeys of our alumni.
//                   Discover their career paths and the employment opportunities
//                   they've pursued after completing their education at our
//                   institution.
//                 </p>
//               </Col>

//               {/*               style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }} */}
//             </Row>
//             <Col
//               className="text-center custom-col my-2 "
//               direction="horizontal"
//             >
//               <Link to="/all_new_addmission/:id" className={style.custom_link}>
//                 NEW ADMISSION INFO
//               </Link>
//               <Link to="/all_exit_student/:id" className={style.custom_link}>
//                 EXIT STUDENT INFO
//               </Link>
//               <Link to="/all_pg_student/:id" className={style.custom_link}>
//                 PG STUDENT INFO
//               </Link>
//               <Link to="/all_student_job/:id" className={style.custom_link}>
//                 STUDENT JOB INFO
//               </Link>
//             </Col>
//           </Row>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default StudentAllInfo;
