import ChallengeCard from "./ChallengeCard";

const ChallengeBox = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-content-center">
        <div class="col-sm-3">
          <ChallengeCard level="BEGINNER" timing="1" />
        </div>
        <div className="col-sm-3">
          <ChallengeCard level="EASY" timing="30" />
        </div>
        <div className="col-sm-3">
          <ChallengeCard level="MEDIUM" timing="60" />
        </div>
        <div className="col-sm-3">
          <ChallengeCard level="HARD" timing="120" />
        </div>
      </div>
    </div>
  );
};
export default ChallengeBox;
