import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/image1.jpg";
import style from "./Home.module.css";
import AdmissionSummaryData from '../../summaryData/AdmissionSummaryData';
import Feedback from "../../adminDashboard/feedback/Feedback";
import Feedbackfrom from "../../adminDashboard/feedback/feedbackfrom/Feedbackfrom";
import Homes from "../../summaryData/flowchart/Homes"

function Home() {
  return (
    <>
      <Carousel data-bs-theme="dark" className="">
        <Carousel.Item>
          <img
            className={style.slider_image_home}
            src="https://klyuniv.ac.in/wp-content/uploads/2023/03/web_banner-1.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h4 className={style.university_name}>University of Kalyani </h4>
            <h5 className={style.university_name}>
              Kalyani University gets AICTE approval for B.Tech and M.Tech
              courses.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://klyuniv.ac.in/wp-content/uploads/2022/02/Department-of-Engineering-Technological-Studies.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className={style.university_name}>
              Department of Engineering and Technological Studies
            </h4>
            <h5 className={style.university_name}>
              Faculty of Engineering Technology Management.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image} alt="" style={{ width: "100%", height: "400px" }} />
          <Carousel.Caption>
            <h3 className={style.university_name}>University of Kalyani </h3>
            <h5 className={style.university_name}>
              The University of Kalyani, established in 1960, is a Government of
              West Bengal administered.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className={style.all_program_details} fluid>
        <Row>
          <Col>
            <h1 className={style.program_text}>YOUR PROGRAM</h1>
            <Col className={style.all_program_info}>
              <Row>
                <Col lg={12} className="text-center">
                  {/* <img src={ourProgramImage} className="w-25" /> */}
                </Col>
                <Col lg={12} className="mb-2">
                  <p className="mb-0">
                    <b>Engineering Program</b>
                  </p>
                  <span className="py-2">
                    <b>&#42;</b> B.Tech<b>(4Year)</b>
                  </span>
                  <span className="d-block">
                    <b>&#42;</b> M.Tech<b>(2Year)</b>{" "}
                  </span>
                </Col>
                <Col lg={12} className="mb-2">
                  <p className="mb-0">
                    <b>Engineering Branch</b>
                  </p>
                  <span className="d-block">
                    <b>&#42;</b> B.Tech. in Electronics and Instrumentation
                    Engineering{" "}
                  </span>
                  <span className="d-block">
                    <b>&#42;</b> B.Tech. in Information Technology{" "}
                  </span>
                </Col>
                <Col lg={12} className="mb-2">
                  <p className="mb-0">
                    <b>Student Conselling Program</b>
                  </p>
                  <span className="d-block">
                    <b>&#42;</b> Lack of objective thinking leads students to
                    not make independent dicisions{" "}
                  </span>
                  <span className="d-block">
                    <b>&#42;</b> The main goal of our program is to help
                    students become self-sufficient
                  </span>
                  <span className="d-block">
                    <b>&#42;</b> Crafting future course of action through our
                    scientific experience{" "}
                  </span>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>


      <AdmissionSummaryData/>
<Homes/>
     <Feedback/>

     <Feedbackfrom/>


    
    </>
  );
}

export default Home;
