import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";
import { Star } from "../Components/Star"
import "../App.css";

function QuizPage() {
  let {
    setquizPageState,
    correctScore,
    setCorrectScore,
    incorrectScore,
    setIncorrectScore,
    questionNumber,
    setQuestionNumber,
  } = useContext(QuizStateContext);

  const [selectedOption, setSelectedOption] = useState("");
  const [allOptions, setAllOptions] = useState("");
  const [quizLevel, setQuizLevel] = useState(0)



  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const nextQuestion = () => {


    allQuestion[questionNumber].correct_answer === selectedOption
      ? setCorrectScore(correctScore + 1)
      : setIncorrectScore(incorrectScore + 1);
    setSelectedOption("");

    questionNumber === allQuestion.length - 1
      ? setquizPageState("quizResult")
      : setQuestionNumber(questionNumber + 1);

  };

  const selectOption = (ansOption) => {
    setSelectedOption(ansOption);
  };

  useEffect(() => {
    if (allQuestion[questionNumber].incorrect_answers.length < 4) {
      allQuestion[questionNumber].incorrect_answers.push(
        allQuestion[questionNumber].correct_answer
      );
    }
    let mixArray = shuffleArray(allQuestion[questionNumber].incorrect_answers);
    setAllOptions(mixArray);

  }, [questionNumber]);

  return (
    <div className="quizPage">
      <div
        className="progress progressBarTop "
        role="progressbar"
        style={{
          width: `${(100 / allQuestion.length) * questionNumber}%`,
          borderRadius: '0px !important'
        }}
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>

      <div className="quizContent">
        <div className="topFlexBox">
          <div className="questionBox">
            <span className="questionDetails">
              <span id="hQuestion">
                Question: {questionNumber + 1} into {allQuestion.length}
              </span>
              <span className="starContainer">
                Category:
                {decodeURIComponent(allQuestion[questionNumber].category)}
              </span>
              <span className="starContainer">{Star({ quizLevel, setQuizLevel })}</span>
            </span>
            <h2 className="questionText">
              {decodeURIComponent(allQuestion[questionNumber].question)}
            </h2>
          </div>

          <div className="allOptions">
            {allQuestion[questionNumber].incorrect_answers.map((ansOption) => (
              <div className="optionRow">
                <button
                  className={`option ${selectedOption === ansOption ? "selectedOption" : ""
                    }`}
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
        </div>
        <div className="centerFlexBox">

          <div className="btnResult">
            {selectedOption &&
              allQuestion[questionNumber].correct_answer === selectedOption ? (
              <span id="selectedQuizResult">
                <p>Correct &#127881; !!</p>
              </span>
            ) : (
              selectedOption && (
                <span id="selectedQuizResult">
                  <p>Wrong &#128148; !!</p>
                </span>
              )
            )}

            {questionNumber === allQuestion.length - 1 ? (
              <button
                className={` ${!selectedOption ? "hideBtn" : "btn"
                  }`}
                disabled={!selectedOption}
                onClick={nextQuestion}
              >
                Finish Quiz
              </button>
            ) : (
              <button className={`${!selectedOption ? "hideBtn" : "btn"
                }`} disabled={!selectedOption} onClick={nextQuestion}>
                Next Question
              </button>
            )}
          </div>
        </div>

        <div className="endFlexBox">
          <div className="scoreBox">
            <span>Score {(100 / allQuestion.length) * correctScore}%</span>
            <span>
              Max Score {100 - (100 / allQuestion.length) * incorrectScore}%
            </span>
          </div>
          <div className="progressBarBox">
            <div className="progress">
              <div
                className="progress-bar scoreProgressBar"
                role="progressbar"
                aria-label="Example 20px high"
                style={{ width: `${(100 / allQuestion.length) * correctScore}%` }}
              >
                {/* score{(100 / allQuestion.length) * correctScore}% */}
              </div>
              <div
                className="progress-bar lessProgressBar"
                role="progressbar"
                aria-label="Example 20px high"
                style={{ width: `${(100 / allQuestion.length) * incorrectScore}%` }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                className="progress progressBarBackGround"
                style={{
                  width: `${100 - (100 / allQuestion.length) * incorrectScore}%`,
                }}
              >
                <div
                  className="progress-bar progressMaxScore "
                  role="progressbar"
                  style={{
                    width: `${100 - (100 / allQuestion.length) * incorrectScore}%`,
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
