import React from "react";

function Parentbox({ handleShowMore, val, image, text, paragraph, Xps }) {
  return (
    <div className="box-1" onClick={() => handleShowMore(val)}>
      <img className="quests" src={image} alt="poster-2" />
      <div className="content-1">
        <h2 className="elements">{text}</h2>
        <p className="elements">{paragraph}</p>
        <div className="element-1">{Xps}</div>
      </div>
    </div>
  );
}

export default Parentbox;
