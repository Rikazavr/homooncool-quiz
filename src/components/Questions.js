import React from "react";
import { Link } from "react-router-dom";

const Questions = ({ questions }) => {
  return (
    <>
      {
        questions.map((question, index) => (
          <Link to={`/question/${index}`} key={index} className="question">{question.value}</Link>
        ))
      }
    </>
  );
}

export default Questions;
