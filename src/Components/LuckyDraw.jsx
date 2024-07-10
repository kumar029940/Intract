import React from "react";
import "../Styles/LuckyDrawCard.css";

const LuckyDrawCard = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="lucky-draw">Lucky Draw</div>
      </div>
      <div className="card-bottom">
        <div className="exclusive-community">
          <span className="borderDashed">
            Exclusive Community <span className="earndrop">@Earndrop</span>
          </span>
          <div className="task">
            <input type="checkbox" checked readOnly /> Complete all Essential
            quests
          </div>
          <div className="task">
            <input type="checkbox" checked readOnly /> Complete at least 1 Alpha
            Hub quest today
          </div>
          <button className="claim-button">Claim Now</button>
        </div>
      </div>
    </div>
  );
};

export default LuckyDrawCard;
