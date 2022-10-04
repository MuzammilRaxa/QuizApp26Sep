import React from "react";
import { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";

function EndPage() {
  const { correct, setCorrect, setScore, incorrect, setIncorrect, setQuizState, setQuestionIndex, } = useContext(QuizStateContext);


  const playAgain = () => {
    setScore(0)
    setCorrect(0)
    setQuestionIndex(0)
    setIncorrect(0)
    setQuizState('menu')
  }

  return (
    <div className="result">
      <h1 className="hResult">Congratulation you have complete!! &#9996;</h1>

      <div className="resultBox">

        <h2>
          Success rate is {correct} into {allQuestion.length}
        </h2>

        <h2 className="endResult" style={{ backgroundColor: "#b1ccff", border: '3px solid rgb(68 87 96)' }}>
          Score is {(100 / allQuestion.length) * correct}% into 100%{" "}
        </h2>

        {correct > 0 ? (
          <div id="correctColor" className="emojiSpace">
            <h2 className="endResult" style={{ backgroundColor: "aquamarine" }}>
              Your Correct answer is {correct} &#128076;
            </h2>
            <span style={{ fontSize: "50px" }}> &#128150;</span>
          </div>
        ) : (
          <div id="noCorrectColor" >
            <h2 className="endResult" style={{ backgroundColor: "pink" }}>
              Sad!! Correct answer is {correct} &#128148;
            </h2>
          </div>
        )}
        {incorrect > 0 ? (
          <div id="incorrect" className="emojiSpace">
            <h2 className="endResult" style={{ backgroundColor: "red" }}>
              Your incorrect is {incorrect} &#128148;
            </h2>
            <span style={{ fontSize: "50px" }}>&#128533;</span>
          </div>
        ) : (
          <div id="noIncorrect">
            <h2 className="endResult" style={{ backgroundColor: "aquamarine" }}>Congratulation!! Your incorrect is{incorrect}&#128077;
            </h2>
          </div>
        )}
      </div>
      <button id="btn" onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default EndPage;
