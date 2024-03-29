// import React from "react";

// const StarRating = ({ rating, onRatingChange }) => {
//   const stars = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       {stars.map((star) => (
//         <span
//           key={star}
//           className={star <= rating ? "star-filled" : "star-empty"}
//           onClick={() => onRatingChange(star)}
//         >
//           ★
//         </span>
//       ))}
//     </div>
//   );
// };

// export default StarRating;

import { FaStarHalfAlt } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

import { FaStar } from 'react-icons/fa'

import React from "react";
import "./feedfrom.scss"; // Import CSS file for styling

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    

    <div>
    {stars.map((star) => (
      <span key={star} onClick={() => onRatingChange(star)}  >
        {star <= rating ? (
          <FaStar  style={{fontSize:"60px"}}/>
        ) : star - 0.5 === rating ? (
          <FaStarHalfAlt style={{fontSize:"60px"}}/>
        ) : (
          <AiOutlineStar style={{fontSize:"60px"}}/>
        )}
      </span>
    ))}
  </div>
  );
};

export default StarRating;
