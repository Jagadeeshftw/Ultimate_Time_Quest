import { forwardRef, useImperativeHandle, useRef } from "react";
import { Modal } from "bootstrap";
import { createPortal } from "react-dom";
const ShowModal = forwardRef(
  ({ totalTime, remainingTime, handleSubmit }, ref) => {
    const modalRef = useRef();
    const youWin = remainingTime > 0 && remainingTime < totalTime * 1000;
    const score = Math.round((1 - remainingTime / (totalTime * 1000)) * 100);
    remainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
      return {
        open() {
          const modal = new Modal(modalRef.current);
          modal.show();
        },
      };
    });
    return createPortal(
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
              <h2
                className="modal-title syne-mono-regular"
                id="exampleModalLabel"
              >
                {youWin && `Your Score:  ${score}`}
                {!youWin && "You Lost"}
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleSubmit}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                The Target Time was <strong> {totalTime}</strong> second
                {totalTime > 1 ? "s" : ""}{" "}
              </p>
              <p>You stopped the timer with {remainingTime} seconds left</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
);
export default ShowModal;
