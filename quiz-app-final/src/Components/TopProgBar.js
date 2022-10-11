import React, { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { allQuestion } from "../Helpers/Questions";

export default function TopProgBar() {
    let { currentQuestion } = useContext(QuizStateContext);
    return (
        <div>
            <div
                className="progress progressBarTop "
                role="progressbar"
                style={{
                    width: `${(100 / allQuestion.length) * currentQuestion}%`,
                    borderRadius: "0px !important",
                }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    );
}
