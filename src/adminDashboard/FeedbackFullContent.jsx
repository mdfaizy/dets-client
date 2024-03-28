import "./feedbackshowall.scss";
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FeedbackFullContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState([]); // State to store feedback item

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/feedback/oneUserFeedbackId/${id}`
        );
        setFeedback(response.data.data);
        console.log(response.data.data.title);
        console.log("response", response); // Assuming response.data contains the feedback item
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    };

    fetchFeedback();
  }, [id]); // Fetch data whenever id changes
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format date as per local date format
  };

  const handleDelete = async (id) => {
    console.log("Deleting feedback with ID:", id);
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/feedback/deleteFeedback/${id}`
      );
      console.log("responseDelete", response);
      setFeedback(response);
      navigate("/");
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div>
      <div className="reviewContentAllText">
        <h2>{feedback.title}</h2>
        <p>{feedback.description}</p>
        
        <div  className="iconButton-useName">

        <div className="dateIconFeedback">
          <FaCalendarAlt style={{ marginRight: "5px" }} />
          <p className="m-0 text-black">{formatDate(feedback.createdAt)}</p>
        </div>


        <div className="iconAnduseName">
          <button
            onClick={() => handleDelete(feedback._id)}
            className="deleteButton"
          >
            <MdDelete />
          </button>

          <p className="feedName" style={{marginTop:"15px"}}>FEEDBACK BY:{feedback.userName}</p>
        </div>

        </div>

       

       
      </div>
    </div>
  );
};

export default FeedbackFullContent;
