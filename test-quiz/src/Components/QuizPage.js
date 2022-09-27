import '../App.css'
// import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { QuizStateContext } from '../Helpers/Context'
import { allQuestion } from '../Helpers/Questions';


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


  const [selected, setSelected] = useState('');



  // console.log('consoleee', allQuestion[questionIndex].correct, 'selecteddd', selected)

  const selectOption = (option) => {
    setSelected(option);
  };


  const nextQuestion = () => {
    if (allQuestion[questionIndex].correct === selected) {
      setScore(score + 1);
      setCorrect(correct++);

    }
    setQuestionIndex(questionIndex + 1);
  };



  const getAnswer = () => {
    let ans;
    allOptions.forEach(
      (inputEl) => {
        if (inputEl.checked) {
          ans = inputEl.value;
          console.log('inputEl.checked:', inputEl.checked);
          console.log('allOptions:', allOptions);


        }
      }
    )
    // console.log('ans:', ans);
    return ans;
  }



  return (

    <div className="quiz">
      <header>

        <div id="scoreBox">
          <span id="topScore">Score {score}</span>
          <span id="topMaxScore">Max Score {allQuestion.length}</span>
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
          <h1 id="hQuestion">Question: {questionIndex + 1}/{allQuestion.length}</h1>
          <h2 id="questionB">{allQuestion[questionIndex].question}</h2>
        </div>

      </header>

      <div className="allOptions">

        <div className="optionRow">
          <input className="option" type="radio" value="a" id="option1" name="option" onClick={() => { selectOption('a'); }} ></input>
          <label className="lable" htmlFor="option1">  {allQuestion[questionIndex].a}</label>
        </div>

        <div className="optionRow">
          <input className="option" type="radio" value="b" id="option2" name="option" onClick={() => { selectOption('b'); }}></input>
          <label className="lable" htmlFor="option2"> {allQuestion[questionIndex].b} </label>
        </div>

        <div className="optionRow">
          <input className="option " type="radio" value="c" id="option3" name="option" onClick={() => { selectOption('c'); }}></input>
          <label className="lable" htmlFor="option3"> {allQuestion[questionIndex].c} </label>
        </div>

        <div className="optionRow">
          <input className="option" type="radio" value="d" id="option4" name="option" onClick={() => { selectOption('d'); }} ></input>
          <label className="lable" htmlFor="option4"> {allQuestion[questionIndex].d} </label>
        </div>

      </div>

      <div id="footer">
        <button onClick={getAnswer}> </button>
        <div>
          <h1 className="result"> Result Will show</h1>
        </div>

        <span id="selectedQuizResult">
          <p>Correct &#127881; !!</p>
        </span>

        <div className="nextBtn">
          <button id='btn' onClick={nextQuestion}> Next Question</button>
        </div>

        <div className="progress">
          <div id="progressB" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: ' 0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">score{(allQuestion.length / allQuestion[questionIndex].correct) * 100}%</div>
          <div id="progressBarRed" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: '0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Less{allQuestion[questionIndex].length - correct}</div>
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
