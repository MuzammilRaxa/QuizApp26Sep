import React, { useContext } from 'react'
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";


export default function NextButton({ selectedOption, setSelectedOption }) {
    let {
        setquizPageState,
        correctScore,
        setCorrectScore,
        incorrectScore,
        setIncorrectScore,
        questionNumber,
        setQuestionNumber,
    } = useContext(QuizStateContext);

    const nextQuestion = () => {
        allQuestion[questionNumber].correct_answer === selectedOption
            ? setCorrectScore(correctScore + 1)
            : setIncorrectScore(incorrectScore + 1);
        setSelectedOption("");

        questionNumber === allQuestion.length - 1
            ? setquizPageState("quizResult")
            : setQuestionNumber(questionNumber + 1);
    };

    return (
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
    )
}
