import "../src/index.scss";
import { useState, useRef, useEffect } from "react";
import { Modal } from "bootstrap";

const ChallengeCard = ({ level, timing }) => {
  const modalRef = useRef(null);
  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  useEffect(() => {
    if (timeExpired) {
      const modal = new Modal(modalRef.current);
      modal.show();
    }
  }, [timeExpired]);
  const handleStart = () => {
    setTimeout(() => {
      setTimeExpired(true);
    }, 1000 * timing);
    setTimeStarted(true);
  };
  return (
    <>
      <div
        className="card mb-3 bg-dark"
        style={{ width: "16rem", backgroundColor: "#26619c" }}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title text-center green mb-2">{level}</h5>
          <div className="card-header bg-secondary text-dark mb-2 rounded">
            {timing} second{timing > 1 ? "s" : " "}
          </div>
          <h5 className="card-title text-center green mb-2">
            {" "}
            {timeExpired ? "You Lost" : ""}
          </h5>
          <a
            href="#"
            className="btn btn-outline-secondary align-center  mb-2"
            onClick={handleStart}
          >
            {timeStarted ? "Stop" : "Start"} Challenge
          </a>
          <p className="card-text green mb-2 text-center">
            {timeStarted ? "Time is running..." : "Timer inactive"}
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        ref={modalRef}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered justify-content-center">
          <div
            className="modal-content bg-primary-subtle"
            style={{ width: "20rem" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Hey you Won</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;