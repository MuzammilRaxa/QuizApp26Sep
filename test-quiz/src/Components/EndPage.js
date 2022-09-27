import React from 'react'
import { useContext } from 'react';
import { QuizStateContext } from '../Helpers/Context'
import { allQuestion } from '../Helpers/Questions';

function EndPage() {
  const { score, setScore } = useContext(QuizStateContext);

  return (
    <div className="result">

      <h1>Congratulation you are complete the Quiz</h1>
      <h2> Your Score is {score} / {allQuestion.length}</h2>

    </div>
  )
}

export default EndPage
