import ChallengeCard from "./ChallengeCard";

const ChallengeBox = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-content-center">
        <div class="col-sm-3">
          <ChallengeCard level="BEGINNER" totalTime="1" />
        </div>
        <div className="col-sm-3">
          <ChallengeCard level="EASY" totalTime="30" />
        </div>
        <div className="col-sm-3">
          <ChallengeCard level="MEDIUM" totalTime="60" />
        </div>
        <div className="col-sm-3">
          <ChallengeCard level="HARD" totalTime="120" />
        </div>
      </div>
    </div>
  );
};
export default ChallengeBox;
