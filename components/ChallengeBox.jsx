import ChallengeCard from "./ChallengeCard";

const ChallengeBox = () => {
  return (
    <div className="container">
      <div className="row justify-content-around g-0">
        <ChallengeCard level="BEGINNER" timing="1" />
        <ChallengeCard level="EASY" timing="30" />
        <ChallengeCard level="MEDIUM" timing="60" />
        <ChallengeCard level="HARD" timing="120" />
      </div>
    </div>
  );
};
export default ChallengeBox;
