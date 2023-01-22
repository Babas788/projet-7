import React, { useState } from 'react';
import CollapseDown from "../../assets/collapseDown.svg";
import CollapseUp from "../../assets/collapseUp.svg";

function Collapse ({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='allCollapse'>
      <div className="collapse" onClick={() => setIsActive(!isActive)}>
        <div className="collapseTitle">{title}</div>
        <div>{isActive ?<img src={CollapseUp} alt="arrowDown" className='arrowDown'/> : <img src={CollapseDown} alt="arrowDown" className='arrowDown'/>}</div>
      </div>
      {isActive && <div className="collapseText">{content}</div>}
    </div>
  );
};

export default Collapse;