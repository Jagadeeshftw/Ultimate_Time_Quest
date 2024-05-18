import "../src/index.scss";
const ChallengeCard = ({ level, timing }) => {
  return (
    <div
      class="card mb-3 bg-dark"
      style={{ width: "16rem", backgroundColor: "#26619c" }}
    >
      <div class="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 class="card-title text-center green mb-2">{level}</h5>
        <div class="card-header bg-secondary text-dark mb-2 rounded">
          {timing} second{timing > 1 ? "s" : " "}
        </div>
        <a href="#" class="btn btn-outline-secondary align-center  mb-2">
          Start Challenge
        </a>
        <p class="card-text green mb-2 text-center">
          Time is running.../Timer inactive
        </p>
      </div>
    </div>
  );
};

export default ChallengeCard;
