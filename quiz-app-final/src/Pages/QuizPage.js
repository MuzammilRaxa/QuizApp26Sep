import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { QuizStateContext } from "../Helpers/Context";
import allQuestion from "../Helpers/Questions";
import TopProgBar from "../Components/TopProgBar";
import QuestionSection from "../Components/QuestionSection";
import ProgressBar from "../Components/ProgressBar";
import Options from "../Components/AnsOptions";
import NextButton from "../Components/NextButton";
import "../App.css";

function QuizPage() {
  let { currentQuestion } = useContext(QuizStateContext);
  let inc_ans = allQuestion[currentQuestion].incorrect_answers;
  let correct_ans = allQuestion[currentQuestion].correct_answer;
  const [selectedOption, setSelectedOption] = useState("");
  const [allOptions, setAllOptions] = useState("");

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(() => {
    if (inc_ans.length < 4) {
      inc_ans.push(
        correct_ans
      );
    }
    let mixArray = shuffleArray(inc_ans);
    setAllOptions(mixArray);
  }, [currentQuestion]);

  return (
    <div className="quizPage">
      <TopProgBar />
      <div className="quizContent">
        <div className="topFlexBox">
          <QuestionSection />
          <Options
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption} />
        </div>
        <div className="centerFlexBox"> 
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
