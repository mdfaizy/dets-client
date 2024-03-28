// import './feedback.scss';

// import { useEffect, useState } from "react";
// import axios from "axios";

// const Feedback = () => {
//   const [feedback, setFeedback] = useState([]);
// const [loading, setLoading] = useState(false);

//   const reviewData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:8000/api/v1/feedback/showAllFeedback");
//       setFeedback(response.data.data);
//     } catch (error) {
//       console.error("Error fetching feedback data:", error);
//     }
//     setFeedback(false);
//   };

//   useEffect(() => {
//     reviewData();
//   }, []);

//   return (
//     <div className="allfeedbacktopcontainer">
//       {feedback.length > 0 ? (
//         feedback.map((item, index) => (
//           <div key={index} className='review-content'>
//             <div> {item.title}</div>
//             <div>{item.description}</div>
//           </div>
//         ))
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default Feedback;

import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./feedback.scss";
import { useEffect, useState } from "react";
import axios from "axios";

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

  // Function to toggle between full and limited text
  const toggleText = (index) => {
    const newFeedback = [...feedback];
    newFeedback[index].showFull = !newFeedback[index].showFull;
    setFeedback(newFeedback);
  };

  const handleDelete = async (id, index) => {
    try {
      const responseDelete = await axios.delete(
        `http://localhost:8000/api/v1/feedback/deleteFeedback/${id}`
      );
      console.log("responseDelete", responseDelete);
      const updatedFormData = [...feedback];
      updatedFormData.splice(index, 1);
      setFeedback(updatedFormData);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div className="allfeedbacktopcontainer">
      {loading ? (
        <div>Loading...</div>
      ) : feedback.length > 0 ? (
        feedback.map((item, index) => (
          <div key={index} className="review-content">
            <Link to={`/feedback/${item._id}`}>

            <div
              className="m-2 flex"
              style={{ display: "flex", alignItems: "center", gridArea: "3px" }}
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
              {item.showFull
                ? item.description
                : `${item.description.substring(0, 50)}...`}
              <button onClick={() => toggleText(index)}>
                {item.showFull ? "Show Less" : "Read More"}
              </button>
            </div>

            <div className="iconButton">
              <button onClick={() => handleEdit(index)} className="editeButton">
                <FaRegEdit />
              </button>
              <button
                onClick={() => handleDelete(item._id, index)}
                className="deleteButton"
              >
                <MdDelete />
              </button>
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
