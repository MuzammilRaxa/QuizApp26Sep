import React, { useContext, useState } from 'react'
import { QuizStateContext } from "../Helpers/Context";
import allQuestion from "../Helpers/Questions";
import { Star } from "../Components/Star"


export default function QuestionSection() {
    let { currentQuestion } = useContext(QuizStateContext);
    const [quizLevel, setQuizLevel] = useState(0)


    return (
        <div className="questionBox">
            <span className="questionDetails">
                <span id="hQuestion">
                    Question: {currentQuestion + 1} into {allQuestion.length}
                </span>
                <span className="starContainer">
                    Category:
                    {decodeURIComponent(allQuestion[currentQuestion].category)}
                </span>
                <span className="starContainer">{Star({ quizLevel, setQuizLevel })}</span>
            </span>
            <h2 className="questionText">
                {decodeURIComponent(allQuestion[currentQuestion].question)}
            </h2>
        </div>
    )
}
