import React, { useState, useEffect } from "react";
import "../Styles/CountDown.css";

const TimerCount = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown">
      <h2 className="title">
        <span className="icon">⏰</span>
        Reward unlocks in
      </h2>
      <div className="timer">
        <div className="time-section">
          <span className="time">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-section">
          <span className="time">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="label">Hrs</span>
        </div>
        <div className="time-section">
          <span className="time">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="label">Mins</span>
        </div>
        <div className="time-section">
          <span className="time">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="label">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default TimerCount;
