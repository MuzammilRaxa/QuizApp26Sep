import React, { useContext } from "react";
import { allQuestion } from "../Helpers/Questions";
import { QuizStateContext } from "../Helpers/Context";


export default function Options({ selectedOption, setSelectedOption }) {

  let { questionNumber } = useContext(QuizStateContext);


  const selectOption = (ansOption) => {
    setSelectedOption(ansOption);
  };

  return (
    <div className="allOptions">
      {allQuestion[questionNumber].incorrect_answers.map((ansOption) => (
        <div className="optionRow">
          <button
            className={`option ${selectedOption === ansOption ? "selectedOption" : ""}`}
            disabled={selectedOption}
            checked={selectedOption === ansOption}
            value={selectedOption}
            onClick={() => {
              selectOption(ansOption);
            }}
          >
            {decodeURIComponent(ansOption)}
          </button>
        </div>
      ))}
    </div>
  );
}
