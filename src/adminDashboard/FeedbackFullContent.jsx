// FeedbackFullContent.jsx
import { useParams } from "react-router-dom";


const FeedbackFullContent = () => {
    const { path } = useParams();
  const data = blogs.find((blog) => blog.path === path);


  return (
    <div className="full-content-container">
      <h2>{feedback.title}</h2>
      <p>{feedback.description}</p>
      {/* Add any additional fields if needed */}
    </div>
  );
};

export default FeedbackFullContent;
