import React, { useState, useEffect } from "react";
import { getQuizHistory } from "../db";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getQuizHistory().then(setHistory);
  }, []);

  return (
    <div>
      <h2>Attempt History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.question} - Selected: {item.selectedAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
