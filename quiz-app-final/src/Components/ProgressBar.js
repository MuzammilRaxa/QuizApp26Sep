import React, { useContext } from "react";
import { allQuestion } from "../Helpers/Questions";
import { QuizStateContext } from "../Helpers/Context";

export default function ProgressBar() {
  let { correctScore, incorrectScore } = useContext(QuizStateContext);

  return (
    <div>
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
  );
}
