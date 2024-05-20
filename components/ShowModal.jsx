import { forwardRef } from "react";
const ShowModal = forwardRef(({ timing }, ref) => {
  return (
    <div
      className="modal fade"
      ref={ref}
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
              You Lost
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              The Target Time was <strong>{timing}</strong> second
              {timing > 1 ? "s" : ""}{" "}
            </p>

            <p>You stopped the timer with X seconds left</p>
          </div>
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
  );
});
export default ShowModal;
