import { Link } from "react-router-dom";
// import { FaRegEdit } from "react-icons/fa";
// import { FaStar } from 'react-icons/fa'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import the star icons
import { AiOutlineStar } from "react-icons/ai";
import "./feedback.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt } from "react-icons/fa";
const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

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

console.log(" studentInformation",response);

      const totalRating = response.data.data.reduce(
        (accumulator, currentItem) => accumulator + currentItem.rating,
        0
      );
      const avgRating = totalRating / response.data.data.length;
      setAverageRating(avgRating);
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
    return date.toLocaleDateString(); 
  };

  return (

    <div className="bg-success p-2 container-fluid">

<div className="allfeedbacktopcontainer ">
      <div className="average-rating">
        <h3>Students Ratings & Reviews : {averageRating.toFixed(2)}</h3>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : feedback.length > 0 ? (
        feedback.map((item, index) => (
          <div key={index} className="review-content">
            {/* <Link to={`/feedback/${item._id}`} className="feedback-link"> */}
           
            <div
              className="d-flex "
              style={{
                // display: "flex",
                // alignItems: "center",
                // gridArea: "3px",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <div className="m-2 d-flex align-items-center">
                <img
                  src={item.image}
                  
                  alt="user_image"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
                { console.log('${src={item.image}}')}
                { console.log(item.image)}
                <p style={{ margin: "0", paddingLeft: "10px" }}>
                  {item.userName}
                 
                  
                </p>
              </div>
              <div
                style={{
                  margin: "0",
                  borderRadius: "5px",
                  backgroundColor:
                    item.rating >= 4 ? "rgb(0, 173, 51)" : "yellow",
                  color: "white",
                  width: "50px",
                  height: "30px",
                  padding: "5px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p>
                  {item.rating}
                  <FaStar className="text-white" />
                </p>
              </div>
            </div>

            <div>
              <h2>{item.title}</h2>
            </div>
            <div className="d-flex p-2 gap-4">
              <p className="rounded  border p-1">Placements</p>
              <p className="rounded  border p-1">
                {" "}
                <FaStar
                  style={{
                    margin: "0",
                    borderRadius: "5px",
                    color: item.rating >= 4 ? "rgb(0, 173, 51)" : "yellow",
                    // color: "white",
                    width: "50px",
                    height: "30px",
                    padding: "5px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                />
                Infrastructure
              </p>
              <p className="rounded  border p-1">Faculty</p>
              <p className="rounded  border p-1">Crowd & Campus Life</p>
              <p className="rounded  border p-1">Hostels</p>
            </div>

      
               <div className="text-lg">
              <p className="fs-5">{readmore ? item.description : `${item.description.substring(0, 115)}...` }
              {item.description.length > 115 && (
                <button className=" readMoreShowless"  onClick={readmoreHandler}>
                  {readmore ? `show less` : `read more`}

                </button>
              )}
                  </p>

                  <div className="iconButton-date " >
              <FaCalendarAlt style={{ marginRight: "5px" }} />
              <p className="m-0 text-black">
                {" "}
                Reviewed on {formatDate(item.createdAt)}
              </p>
            </div>
            </div>

            {/* <div className="iconButton-date " >
              <FaCalendarAlt style={{ marginRight: "5px" }} />
              <p className="m-0 text-black">
                {" "}
                Reviewed on {formatDate(item.createdAt)}
              </p>
            </div> */}
            {/* </Link> */}
          </div>
        ))
      ) : (
        <div>No feedback available.</div>
      )}
    </div>
    </div>
   
  );
};

export default Feedback;
