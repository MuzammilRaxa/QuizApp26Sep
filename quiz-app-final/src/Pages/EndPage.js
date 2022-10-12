import React from "react";
import { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";
import allQuestion from "../Helpers/Questions";

function EndPage() {
  const { correctScore, setCorrectScore, setScore, incorrectScore, setIncorrectScore, setquizPageState, setCurrentQuestion, } = useContext(QuizStateContext);


  const playAgain = () => {
    setScore(0)
    setCorrectScore(0)
    setCurrentQuestion(0)
    setIncorrectScore(0)
    setquizPageState('menu')
  }

  return (
    <div className="result">
      <h1 className="hResult">Congratulation you have complete!! &#9996;</h1>

      <div className="resultBox">

        <h2>
          Success rate is {correctScore} into {allQuestion.length}
        </h2>

        <h2 className="endResult" style={{ backgroundColor: "rgb(132, 245, 147)", border: '3px solid rgb(68 87 96)' }}>
          Score is {(100 / allQuestion.length) * correctScore}% into 100%{" "}
        </h2>

        {correctScore > 0 ? (
          <div id="correctColor" className="emojiSpace">
            <h2 className="endResult" style={{ backgroundColor: "rgb(95, 202, 86)" }}>
              Your Correct answer is {correctScore} &#128076;
            </h2>
            <span style={{ fontSize: "50px" }}> &#128150;</span>
          </div>
        ) : (
          <div id="noCorrectColor" >
            <h2 className="endResult" style={{ backgroundColor: "pink" }}>
              Sad!! Correct answer is {correctScore} &#128148;
            </h2>
          </div>
        )}
        {incorrectScore > 0 ? (
          <div id="incorrectScore" className="emojiSpace">
            <h2 className="endResult" style={{ backgroundColor: "red" }}>
              Your Incorrect is {incorrectScore} &#128148;
            </h2>
            <span style={{ fontSize: "50px" }}>&#128533;</span>
          </div>
        ) : (
          <div id="noIncorrect">
            <h2 className="endResult" style={{ backgroundColor: "aquamarine" }}>Congratulation!! Your less Score is{incorrectScore}&#128077;
            </h2>
          </div>
        )}
      </div>
      <button className="btn" onClick={playAgain}>Play Again</button>
    </div>
  );
}

export default EndPage;
