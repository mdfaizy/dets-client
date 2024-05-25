import style from "./about.module.css";
import about1 from "../../../assets/Images/About1.png";
import about2 from "../../../assets/Images/about-image2.png";
import about3 from "../../../assets/Images/about-image3.png";
import about4 from "../../../assets/Images/about-image4.png";
import StatsComponent from "../../core/AboutPage/Stats/Stats";
import ContactUsForm from "../../core/AboutPage/ContactUsForm";
const About = () => {
  return (
    <div className={style.about_main_content}>
      <div className={style.about_main_text}>
        <section>
          <div className={style.about_content}>
            <div className={style.about_text}>
              <h1 className={style.first_heading}>Universit of Kalyani,Wb</h1>
              <h2>
                Driving Innovation in Honistely Education for a <br></br>
                <span className={style.span_education}>Brighter Future</span>
              </h2>
              <p className={style.department_name}>
                Department of Engineering and Technological Studies
              </p>
            </div>
          </div>
        </section>

        {/* section 1*/}
        <section>
          <div>
            <p className={style.university_text}>
              The Department of Engineering and Technological Studies(DETS)
              formerly known as University Science Instrumentation Centre(USIC),
              was established at the University of Kalyani about 35 years back
              by the University Grants Commission. A full time Post- Graduate
              course in Instrumentation (PGDI) was started at the centre in 1992
              and the last batch of PGDI course was admitted in 1998.
            </p>
            <div className={style.section2_content}>
              <div className={style.about1_image}>
                <img src={about1} alt="" />
              </div>
              <div>
                <div className={style.right_text_section1}>
                  <h2>SPECIAL FEATURES</h2>
                  <p>
                    Our teching staff includes, besides the core faculty,
                    visiting faculty, adjunct faculty members and distinguished
                    visitors from the industry and front line academic and
                    research institutes of the country and abroad. The core
                    faculty itself comprises 37 teaching personnel.
                  </p>
                </div>
                <div className={style.right_text_section1}>
                  <h2>VISION OF THE UNIVERSITY</h2>
                  <p>
                    To achieve the status of a globally ranked premier
                    University in the field of Science, Technology, Pharmacy,
                    Architecture, Management and interdisciplinary areas for the
                    creation of high-calibre professionals with environmental
                    consciousness, social, moral and ethical values along with
                    the competency to face the new challenges of rapid
                    technological advancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section>
          <div>
            <div className={style.about_images_section2}>
              <img src={about2} alt="" />
              <img src={about3} alt="" />
              <img src={about4} alt="" />
            </div>
          </div>

          <div>
            <h2 className={style.about_last_heading_section2}>
              We are passionate about revolutionizing the way we learn. Our
              innovative platform"
              <span className={style.combines}>
                combines technology expertise
              </span>
              , and community to create an unparalleled educational experience.
            </h2>
          </div>
          <div style={{ height: "1px", border: "1px solid gray" }}></div>
        </section>

        <StatsComponent />

        {/* section 3 */}

        <section>
          <div className={style.location_details}>
            <h2>LOCATION</h2>
            <p>
              Kalyani is situated in the Southern part of Nadia District in West
              Bengal. The University is located near Kalyani Ghoshpara Railway
              Station, which is 53 kms from Kolkata. The University can
              conveniently be accessed by rail or road. Local trains from
              Sealdah to Kalyani Ghoshpara are available in every hour. Apart
              from Kalyani Simanta local, one can also reach Kalyani Station by
              Ranaghat, Shantipur, Krishnanagar and Gede local trains. A number
              of buses ply from Esplanade /Babughat(Kolkata) to Kalyani
              Ghoshpara. The University can be reached by University vehicle or
              cycle/van or rickshaw from Kalyani /Kalyani Ghoshpara Station. The
              nearest airport is Netaji Subhash Chandra Bose International
              Airport, which is 45 kms away from campus.
            </p>
          </div>
        </section>
        <div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default About;
