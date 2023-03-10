import React, { useState } from 'react';
import Next from "../../assets/next.svg";
import Previous from "../../assets/previous.svg";

function Carousel ({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  function nextProduct () {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  function previousProduct () {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <img src={data[current]} alt="" className="picture_product" />  
      <p className="length">{current}/{length}</p>
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