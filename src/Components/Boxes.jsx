import React from "react";

function Boxes({ text, image, tasks }) {
  return (
    <div className="container_2">
      <img className="avatar_1" src={image} alt="avatar-1" />
      <div className="container_3">
        <div className="text">{text}</div>
        <div className="text">{tasks} Tasks</div>
      </div>
    </div>
  );
}

export default Boxes;
