import React, { useState } from 'react';
import Next from "../../assets/next.svg";
import Previous from "../../assets/previous.svg";

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextProduct = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousProduct = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      {data.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="picture_product" />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <div className='arrow'>
          <div className="arrowSlide" onClick={previousProduct}>
            <img src={Previous} alt="" className="arrow_product" />
          </div>
          <div className="arrowSlide" onClick={nextProduct}>
            <img src={Next} alt="" className="arrow_product" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;