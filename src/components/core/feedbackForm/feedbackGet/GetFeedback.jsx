import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./getfeedback.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
// import   {Autoplay}  from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const GetFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [readmore, setReadMore] = useState(false);

  function readmoreHandler() {
    setReadMore(!readmore);
  }

  const reviewData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/feedback/showAllFeedback"
      );
      setFeedback(response.data.data);
      const totalRating = response.data.data.reduce(
        (accumulator, currentItem) => accumulator + currentItem.rating,
        0
      );
      const avgRating = totalRating / response.data.data.length;
      setAverageRating(avgRating);
      setTotalRatings(response.data.data.length);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    reviewData();
  }, []);

  const handleDelete = async (id, index) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/feedback/deleteFeedback/${id}`
      );
      const updatedFeedback = [...feedback];
      updatedFeedback.splice(index, 1);
      setFeedback(updatedFeedback);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "blue";
    if (rating >= 3) return "green";
    return "yellow";
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const color = getRatingColor(rating);

    return (
      <span>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} style={{ color }} />
        ))}
        {halfStar && <FaStarHalfAlt style={{ color }} />}
        {[...Array(emptyStars)].map((_, index) => (
          <AiOutlineStar key={index} style={{ color }} />
        ))}
      </span>
    );
  };

  return (
    <div className="bg-success p-2 container-fluid">
      <div className="allfeedbacktopcontainer">
        <div className="average-rating">
          <h3>Students Ratings & Reviews: {averageRating.toFixed(2)} out of 5 ({totalRatings} ratings)</h3>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : feedback.length > 0 ? (
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            Autoplay={{ delay: 3000 }}
          >
            {feedback.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="review-content">
                  <div className="get-review-content">
                    <div className="review-img-name">
                      <img src={item.image} alt="user_image" />
                      <div>
                        <div className="iconButton-date">
                          <p className="post-by-user-name">{item.userName}</p>
                          <FaCalendarAlt style={{ marginRight: "5px" }} />
                          <p className="m-0 text-black">{formatDate(item.createdAt)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="subject_feedback">{item.title}</h2>
                  </div>
                  <div className="text-lg">
                    <p className="description">
                      {readmore ? item.description : `${item.description.substring(0, 115)}...`}
                      {item.description.length > 115 && (
                        <button className="readMoreShowless" onClick={readmoreHandler}>
                          {readmore ? "show less" : "read more"}
                        </button>
                      )}
                    </p>
                  </div>
                  <div className="rating-stars">
                    {renderStars(item.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>No feedback available.</div>
        )}
      </div>
    </div>
  );
};

export default GetFeedback;

