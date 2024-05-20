import "../src/index.scss";
import { useState, useRef, useEffect } from "react";
import { Modal } from "bootstrap";
import ShowModal from "./ShowModal";
const ChallengeCard = ({ level, timing }) => {
  const modalRef = useRef(null);
  const timer = useRef();
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      const modal = new Modal(modalRef.current);
      modal.show();
      setTimeExpired(false);
      setTimeStarted(false);
    }, 1000 * timing);
    setTimeStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
    setTimeStarted(false);
  };
  return (
    <>
      <ShowModal ref={modalRef} timing={timing} />
      <div
        className="card mb-3 bg-dark"
        style={{ width: "16rem", backgroundColor: "#26619c" }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title text-center green mb-2">{level}</h5>
          <div className="card-header bg-secondary text-dark mb-2 rounded">
            {timing} second{timing > 1 ? "s" : " "}
          </div>
          <h5 className="card-title text-center green mb-2"> </h5>
          <a
            href="#"
            className="btn btn-outline-secondary align-center  mb-2"
            onClick={timeStarted ? handleStop : handleStart}
          >
            {timeStarted ? "Stop" : "Start"} Challenge
          </a>
          <p className="card-text green mb-2 text-center">
            {timeStarted ? "Time is running..." : "Timer inactive"}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;
