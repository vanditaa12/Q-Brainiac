import React from "react";

const Scoreboard = ({ score, total }) => {
  return (
    <div>
      <h2>Scoreboard</h2>
      <p>Your Score: {score} / {total}</p>
    </div>
  );
};

export default Scoreboard;
