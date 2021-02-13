import React from "react";

const Question = ({ match, location }) => {
  const {
    params: { index }
  } = match;

  return (
    <div className="questionPage">
      вопрос {index}
    </div>
  );
}

export default Question;
