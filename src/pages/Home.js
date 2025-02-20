import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Platform</h1>
      <button className="start-btn" onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Home;
