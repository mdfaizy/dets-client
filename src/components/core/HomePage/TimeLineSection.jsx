
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import './timeline.css';
import aboutimage5 from "../../../assets/Images/about-image5.png";

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
];

const TimelineSection = () => {
  return (
    <div>
      <div className='timeline-container timeline-container-lg'>

        <div className='timeline-content timeline-content-lg'>
            {
                timeline.map( (element, index) => {
                    return (
                        <div className='timeline-item' key={index}>
                            <div className='timeline-logo-container'>
                                <img src={element.Logo} alt={`logo-${index}`} />
                            </div>
                            <div className='timeline-text-container'>
                                <h2 className='timeline-heading'>{element.heading}</h2>
                                <p className='timeline-description'>{element.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='timeline-image-container'>
            <img
              src={aboutimage5}
              alt="aboutimage5"
              className='timeline-image'
            />
            {/* <div className='timeline-overlay'>
                <div className='timeline-overlay-item'>
                    <p className='timeline-overlay-number'>10</p>
                    <p className='timeline-overlay-text'>Years of Experience</p>
                </div>
                <div className='timeline-overlay-item'>
                  <p className='timeline-overlay-number'>250</p>
                  <p className='timeline-overlay-text'>Type of Courses</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
