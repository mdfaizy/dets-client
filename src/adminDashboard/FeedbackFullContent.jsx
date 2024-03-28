// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const FeedbackFullContent = () => {
//   const { id } = useParams();
//   const [feedback, setFeedback] = useState(null); // State to store feedback item

//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/api/v1/feedback/oneUserFeedbackId/${id}`
//         );
//         setFeedback(response.data);
//         console.log("response",response); // Assuming response.data contains the feedback item
//       } catch (error) {
//         console.error("Error fetching feedback data:", error);
//       }
//     };

//     fetchFeedback();
//   }, [id]); // Fetch data whenever id changes

//   return (
//     <div>
//         <>
//           <h2>{feedback.title}</h2>
//           <p>{feedback.description}</p>
//         </>

//     </div>
//   );
// };

// export default FeedbackFullContent;
import { FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FeedbackFullContent = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null); // State to store feedback item

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
  return (
    <div>
      {feedback && ( // Check if feedback is not null
        <>
          <h2>{feedback.title}</h2>
          <p>{feedback.description}</p>
          {/* <p>{formatDate(feedback.createdAt)}</p> */}

          <div style={{ display: "flex", alignItems: "center",backgroundColor:"gray",width:"fite-content" }}>
            <FaCalendarAlt style={{ marginRight: "5px" }} />
            <p className="m-0 text-white">{formatDate(feedback.createdAt)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FeedbackFullContent;
