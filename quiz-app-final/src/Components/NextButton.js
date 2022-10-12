import React, { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";
import allQuestion from "../Helpers/Questions";

export default function NextButton({ selectedOption, setSelectedOption }) {
    let {
        setquizPageState,
        correctScore,
        setCorrectScore,
        incorrectScore,
        setIncorrectScore,
        currentQuestion,
        setCurrentQuestion,
    } = useContext(QuizStateContext);

    let correct_ans = allQuestion[currentQuestion].correct_answer;

    const nextQuestion = () => {
        correct_ans === selectedOption
            ? setCorrectScore(correctScore + 1)
            : setIncorrectScore(incorrectScore + 1);
        setSelectedOption("");

        currentQuestion === allQuestion.length - 1
            ? setquizPageState("quizResult")
            : setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className="btnResult">
            {selectedOption && correct_ans === selectedOption ? (
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
            {currentQuestion === allQuestion.length - 1 ? (
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
        </div>
    );
}
