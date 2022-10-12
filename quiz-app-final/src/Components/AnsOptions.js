import React, { useContext } from "react";
import allQuestion from "../Helpers/Questions";
import { QuizStateContext } from "../Helpers/Context";

export default function Options({ selectedOption, setSelectedOption }) {
  let { currentQuestion } = useContext(QuizStateContext);
  let inc_ans = allQuestion[currentQuestion].incorrect_answers;

  const selectOption = (ansOption) => {
    setSelectedOption(ansOption);
  };

  return (
    <div className="allOptions">
      {inc_ans.map((ansOption) => (
        <div className="optionRow">
          <button
            className={`option 
            ${selectedOption === ansOption ? "selectedOption" : ""}`}
            disabled={selectedOption}
            checked={selectedOption === ansOption}
            value={selectedOption}
            onClick={() => {
              selectOption(ansOption);
            }}
          >
            {ansOption}
          </button>
        </div>
      ))}
    </div>
  );
}
