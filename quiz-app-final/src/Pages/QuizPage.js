import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";
import TopProgBar from "../Components/TopProgBar";
import QuestionSection from "../Components/QuestionSection";
import ProgressBar from "../Components/ProgressBar";
import Options from "../Components/Options";
import NextButton from "../Components/NextButton";
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

  // const nextQuestion = () => {
  //   allQuestion[questionNumber].correct_answer === selectedOption
  //     ? setCorrectScore(correctScore + 1)
  //     : setIncorrectScore(incorrectScore + 1);
  //   setSelectedOption("");

  //   questionNumber === allQuestion.length - 1
  //     ? setquizPageState("quizResult")
  //     : setQuestionNumber(questionNumber + 1);
  // };

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
      <TopProgBar />
      <div className="quizContent">
        <div className="topFlexBox">
          <QuestionSection />
          <Options
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption} />
          {/* <div className="allOptions">
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
          </div> */}
        </div>
        <div className="centerFlexBox">
          {/* <div className="btnResult">
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
                className={` ${!selectedOption ? "hideBtn" : "btn"}`}
                disabled={!selectedOption}
                onClick={nextQuestion}
              >
                Finish Quiz
              </button>
            ) : (
              <button
                className={`${!selectedOption ? "hideBtn" : "btn"}`}
                disabled={!selectedOption}
                onClick={nextQuestion}
              >
                Next Question
              </button>
            )}
          </div> */}
          <NextButton
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption} />
        </div>
        <div className="endFlexBox">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
