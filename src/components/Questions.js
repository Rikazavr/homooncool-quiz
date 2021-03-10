import React from "react";
import { Link } from "react-router-dom";

const Questions = ({ category }) => {
  const questions = category.questions;
  const name = category.name;

  return (
    <>
      {
        questions.map((question, index) => (
          <Link to={`/question/${name + `_` + index}`} key={index} className="question">{question.value}</Link>
        ))
      }
    </>
  );
}

export default Questions;
