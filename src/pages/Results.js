import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import History from "../components/History";
import "../styles/Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="results-container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: <span className="score">{score}/{total}</span></p>
      <History />
      <button className="home-btn" onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Results;
