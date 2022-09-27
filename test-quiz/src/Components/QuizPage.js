import '../App.css'
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { QuizStateContext } from '../Helpers/Context'
import { allQuiz } from '../Helpers/Questions';


function QuizPage() {

  let { quizState,
    setQuizState,
    score,
    setScore,
    correct,
    setCorrect,
    incorrect,
    setIncorrect,
    questionIndex,
    setQuestionIndex, } =
    useContext(QuizStateContext);

  // const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');


    useEffect(() => {
        if(allQuiz[questionIndex].correct == selected) {
          
        }
    }, [])


  const selectOption = (option) => {
    setSelected(option);
  };
  const nextQuestion = () => {
    if (allQuiz[questionIndex].correct == selected) {
      setScore(score + 1);
      setCorrect(correct++);

    }
    setQuestionIndex(questionIndex++);
  };
  console.log((correct / allQuiz.length) * 100);


  return (

    <div className="quiz">
      <header>

        <div id="scoreBox">
          <span id="topScore">Score {score}</span>
          <span id="topMaxScore">Max Score {allQuiz.length}</span>
        </div>

        <div className="progress" style={{ height: '3px' }}>
          <progress id="progressBar" value={0} max={100}></progress>
        </div>

        {/* 
const loadQuestion = () => {

    if (quizIndex == totalQuiz) {
        return endQuiz();
    }
}

loadQuestion() */}

        <div id='questionBox'>
          <h1 id="hQuestion">Question:</h1>
          <h2 id="questionB">{allQuiz[questionIndex].question}</h2>
        </div>

      </header>

      <div className="allOptions">

        <div className="optionRow">
          <input className="option" type="radio" value="a" id="option1" name="option" onclick="disAble()"></input>
          <label className="lable" for="option1">  {allQuiz[questionIndex].a}</label>
        </div>

        <div className="optionRow">
          <input className="option" type="radio" value="b" id="option2" name="option" onclick="disAble()"></input>
          <label className="lable" for="option2"> {allQuiz[questionIndex].b} </label>
        </div>

        <div className="optionRow">
          <input className="option " type="radio" value="c" id="option3" name="option" onclick="disAble()"></input>
          <label className="lable" for="option3"> {allQuiz[questionIndex].c} </label>
        </div>

        <div className="optionRow">
          <input className="option" type="radio" value="d" id="option4" name="option" onclick="disAble()"></input>
          <label className="lable" for="option4"> {allQuiz[questionIndex].d} </label>
        </div>

      </div>

      <div id="footer">

        <div>
          <h1 className="result"> Result Will show</h1>
        </div>

        <span id="selectedQuizResult">
          <p>Correct &#127881; !!</p>
        </span>

        <div className="nextBtn">
          <button id='btn' onClick={() => nextQuestion('quizResult')}> Next Question</button>
        </div>

        <div className="progress">
          <div id="progressB" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: ' 0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">score{(allQuiz.length / allQuiz[questionIndex].correct) * 100}%</div>
          <div id="progressBarRed" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: '0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Less{allQuiz[questionIndex].length - correct}</div>
          <div id="progressMaxScore" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: ' 0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Max{ }</div>
        </div>

        <button
          className='resultBtn'
          onClick={nextQuestion}>
          Submit All Quiz goto End
        </button>

      </div>

    </div>
  )
}

export default QuizPage
