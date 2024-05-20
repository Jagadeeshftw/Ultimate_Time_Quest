import "../src/index.scss";
import { useState, useRef } from "react";
import ShowModal from "./ShowModal";
const ChallengeCard = ({ level, totalTime }) => {
  const modalRef = useRef(null);
  const timer = useRef();
  const [remainingTime, setRemainingTime] = useState(totalTime * 1000);
  const isActive = remainingTime > 0 && remainingTime < totalTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    setRemainingTime(totalTime * 1000);
    modalRef.current.open();
  }
  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  };
  const handleStop = () => {
    clearInterval(timer.current);
    setRemainingTime(totalTime * 1000);
    modalRef.current.open();
  };
  return (
    <>
      <ShowModal ref={modalRef} totalTime={totalTime} />
      <div
        className="card mb-3 bg-dark"
        style={{ width: "16rem", backgroundColor: "#26619c" }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title text-center green mb-2">{level}</h5>
          <div className="card-header bg-secondary text-dark mb-2 rounded">
            {totalTime} second{totalTime > 1 ? "s" : " "}
          </div>
          <h5 className="card-title text-center green mb-2"> </h5>
          <a
            href="#"
            className="btn btn-outline-secondary align-center  mb-2"
            onClick={isActive ? handleStop : handleStart}
          >
            {isActive ? "Stop" : "Start"} Challenge
          </a>
          <p className="card-text green mb-2 text-center">
            {isActive ? "Time is running..." : "Timer inactive"}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;
