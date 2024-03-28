import { Link } from "react-router-dom";
// import { FaRegEdit } from "react-icons/fa";
// import { FaStar } from 'react-icons/fa'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import the star icons
import { AiOutlineStar } from "react-icons/ai";
import "./feedback.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  const reviewData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/feedback/showAllFeedback"
      );
      setFeedback(response.data.data);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
    setLoading(false); // Set loading state to false after data fetching
  };

  useEffect(() => {
    reviewData();
  }, []);

  const handleDelete = async (id, index) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/feedback/deleteFeedback/${id}`
      );
      console.log("responseDelete", response);
      const updatedFeedback = [...feedback];
      updatedFeedback.splice(index, 1);
      setFeedback(updatedFeedback);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format date as per local date format
  };




  // const renderStarIcons = (rating) => {
  //   const totalStars = 5;
  //   const filledStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 !== 0;

  //   return (
  //     <div>
  //       {[...Array(filledStars)].map((_, index) => (
  //         <FaStar key={index} />
  //       ))}
  //       {hasHalfStar && <FaStarHalfAlt />}
  //       {[...Array(totalStars - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
  //         <AiOutlineStar key={filledStars + index} />
  //       ))}
  //     </div>
  //   );
  // };




  return (
    <div className="allfeedbacktopcontainer">
      {loading ? (
        <div>Loading...</div>
      ) : feedback.length > 0 ? (
        feedback.map((item, index) => (
          <div key={index} className="review-content">
            <Link to={`/feedback/${item._id}`} className="feedback-link">
              <div
                className="m-2 flex"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gridArea: "3px",
                }}
              >
                <img
                  src={item.image}
                  alt="user_image"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                <p style={{ margin: "0" }}>{item.userName}</p>
              </div>

              <div>{item.title}</div>
              <div>
                <p>{item.description.substring(0, 50)}...</p>
              </div>
              <p>{item.rating}<FaStar/></p>


              {/* <div>{renderStarIcons(item.rating)}</div> */}

              <div className="iconButton-date">
                
                  <FaCalendarAlt style={{ marginRight: "5px" }} />
                  <p className="m-0 text-black">{formatDate(item.createdAt)}</p>
               
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>No feedback available.</div>
      )}
    </div>
  );
};

export default Feedback;
