import Container from "react-bootstrap/Container";

import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/image1.jpg";
import style from "./Home.module.css";
import { FaArrowRight } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import AdmissionSummaryData from "../../summaryData/AdmissionSummaryData"
import Homes from "../../summaryData/flowchart/Homes";
import studyVideo from "../../assets/Images/study1.mp4";
import expmVideo1 from "../../assets/Images/classRomm.mp4";
import TimelineSection from "../core/HomePage/TimeLineSection";
import aboutDouts1 from "../../assets/Images/about-douts1.png";
import aboutCorprat from "../../assets/Images/about-corprat1.png";
import aboutSession from "../../assets/Images/about-session1.png";
import aboutWorkTeam from "../../assets/Images/about-work-team.png";
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

    

      <Container className={style.home_contante}>
        {/* section 1  */}

        <section>
          <div className={style.video_container}>
            <div className={style.section1_top_img}>
              <video
                className={style.video_element}
                autoPlay
                muted
                loop
                src={studyVideo}
              ></video>
            </div>
          </div>
        </section>

        {/* section 2 */}

        <section>
          <div className={style.section2_contant}>
            <div className={style.section2top_img}>
              <video
                className={style.video2_element}
                autoPlay
                muted
                loop
                src={expmVideo1}
              ></video>
            </div>

            {/* program */}
            <div className={style.programs_text}>
              <h1>
                {" "}
                <AiFillCaretRight />
                Academic programme:{" "}
              </h1>
              <p>
                At present two B.Tech courses are offered with intake 25 in each
                of the programs. The two courses offered are:
              </p>
              <div>
                <p>
                  <FaArrowRight /> B.Tech in Information Technology
                </p>
                <p>
                  <FaArrowRight /> B.Tech in Electronics and Instrumentation
                  Engineering.
                </p>
              </div>

              <div>
                <p>
                  Two years M.Tech course is offered with intake 10.The M.Tech
                  course offered is:
                </p>

                <span>M.Tech in Communication Engineering.</span>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section>
          <TimelineSection />
        </section>

        {/* section 4 */}

        <section>
          <div className={style.about_section4_all}>
            <h1>You have the right to reclaim <span>your dreams!</span></h1>
            <p>
              Now, imagine this…Waking up every morning excited and motivated,
              ready to take on the world because you no longer let fear, or
              other’s people’s opinions, or any sort of discrimination stand in
              the way of your dreams. Sounds nice, but how do you get there? I
              can help you.
            </p>

            <div>
              <div className={style.about_section_team_details}>
                <div className={style.about_team_text_img}>
                  <img src={aboutDouts1} alt="" />
                  <h1>1-on-1 personal Douts</h1>
                  <p>
                    Get personalized, one-on-one support to clear your doubts.
                    Our expert tutors are here to help you understand concepts
                    and excel in your studies.
                  </p>
                  <button>Discover More</button>
                </div>

                <div className={style.about_team_text_img}>
                  <img src={aboutCorprat} alt="" />
                  <h1>Corporate team Douts</h1>
                  <p>
                    Ensuring strategic alignment, managing resources, driving
                    performance, fostering innovation, maintaining compliance,
                    building partnerships.
                  </p>
                  <button>Discover More</button>
                </div>

                <div className={style.about_team_text_img}>
                  <img src={aboutSession} alt="" />
                  <h1>Performance booster session</h1>
                  <p>
                    Get personalized, one-on-one support to clear your doubts.
                    Our expert tutors are here to help you understand concepts
                    and excel in your studies.
                  </p>
                  <button>Discover More</button>
                </div>

                <div className={style.about_team_text_img}>
                  <img src={aboutWorkTeam} alt="" />
                  <h1>Team work and team building</h1>
                  <p>
                    Get personalized, one-on-one support to clear your doubts.
                    Our expert tutors are here to help you understand concepts
                    and excel in your studies.
                  </p>
                  <button>Discover More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <AdmissionSummaryData />
      <Homes />
    </>
  );
}

export default Home;
