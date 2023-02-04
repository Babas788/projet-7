import React, { useState } from 'react';
import CollapseDown from "../../assets/collapseDown.svg";
import CollapseUp from "../../assets/collapseUp.svg";

function Collapse ({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='all_collapse'>
      <div className="collapse" onClick={() => setIsActive(!isActive)}>
        <div className="collapse_title">{title}</div>
        <div>{isActive ?<img src={CollapseUp} alt="arrowDown" className='arrow_down'/> 
        : <img src={CollapseDown} alt="arrowDown" className='arrow_down'/>}</div>
      </div>
      {isActive && 
      <div className="collapse_text">
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )}</div>}
    </div>
  );
};

export default Collapse;

