import React from "react";
import FullStar from "../../assets/fullStar.svg";
import WeakStar from "../../assets/weakStar.svg";

function Rating ({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="fullStar"
            src={FullStar}
            alt="FullStar"
          />
        ) : (
          <img
            key={star.toString()}
            className="WeakStar"
            src={WeakStar}
            alt="WeakStar"
          />
        )
      )}
    </div>
  );
};

export default Rating;