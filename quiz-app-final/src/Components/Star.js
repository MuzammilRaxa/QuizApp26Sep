import React, { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";
import allQuestion from "../Helpers/Questions";

export const Star = ({ quizLevel }) => {

    let { currentQuestion } = useContext(QuizStateContext);

    const questionLevel = allQuestion[currentQuestion].difficulty;
    let emptyStar = 0;
    switch (questionLevel) {
        case "easy":
            quizLevel = 1;
            emptyStar = 4;
            break;
        case "medium":
            quizLevel = 2;
            emptyStar = 3;
            break;
        case "hard":
            quizLevel = 3;
            emptyStar = 2;
            break;

        default:
            quizLevel = 1
            emptyStar = 4;
            break;
    }
    return (
        <div className="iconArray">
            {Array(5)
                .fill(quizLevel)
                .map((val, index) => (
                    <span key={index} className={(val < index + 1) ? '' : 'fillStar'}>
                        {console.log("val", val)}
                        &#9733;
                    </span>
                ))}
        </div>
    );
};
