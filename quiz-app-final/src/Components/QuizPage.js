import '../App.css'
import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { QuizStateContext } from '../Helpers/Context';
import { allQuestion } from '../Helpers/Questions';


function QuizPage() {

  let {
    setQuizState,
    correct,
    setCorrect,
    incorrect,
    setIncorrect,
    questionIndex,
    setQuestionIndex, } =
    useContext(QuizStateContext);

  const [selected, setSelected] = useState('');
  const [allOptions, setAllOptions] = useState();


  let quizLevel = 0

  if (allQuestion[questionIndex].difficulty === 'easy') {
    quizLevel = 1;
  } else if (allQuestion[questionIndex].difficulty === 'medium') {
    quizLevel = 2;
  } else if (allQuestion[questionIndex].difficulty === 'hard') {
    quizLevel = 3;
  }



  const Star = ({ quizLevel }) => {

    let emptyStar = 0

    if (quizLevel == 1) {
      emptyStar = 4
    } else if (quizLevel == 2) {
      emptyStar = 3
    } else if (quizLevel == 3) {
      emptyStar = 2
    }

    return (
      <div className='iconArray'>

        {Array(quizLevel).fill().map((val, index) => <span key={index}><svg className='iconS' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></span>)}
        {Array(emptyStar).fill().map((val, index) => <span key={index}><svg className='iconS' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" /></svg></span>)}

      </div>
    )
  }


  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const nextQuestion = () => {
    allQuestion[questionIndex].correct_answer === selected ? (
      setCorrect(correct + 1)
    ) : (
      setIncorrect(incorrect + 1)
    )
    setSelected()

    questionIndex === (allQuestion.length - 1) ? (setQuizState('quizResult')) : (
      setQuestionIndex(questionIndex + 1))
  };

  const selectOption = (ansOption) => {
    setSelected(ansOption);
  };

  useEffect(() => {
    let compeleteArray = allQuestion[questionIndex].incorrect_answers.push(allQuestion[questionIndex].correct_answer);
    let mixArray = shuffleArray(allQuestion[questionIndex].incorrect_answers)
    setAllOptions(mixArray)
  }, [questionIndex]);

  console.log('quizLevel,', quizLevel, 'allQuestion[questionIndex].difficulty', allQuestion[questionIndex].difficulty)
  return (
    <div className="quiz">
      <header>
        <div id="scoreBox">
          <span id="topScore">Score {((100 / allQuestion.length) * correct)}%</span>
          <span id="topMaxScore">Max Score {(100 - (100 / allQuestion.length) * incorrect)}%</span>
        </div>

        <div className="progress" style={{ height: '3px' }}>
          <progress id="progressBar" value={`${(100 / allQuestion.length) * questionIndex}`} max={100}></progress>
        </div>
        <div id='questionBox'>
          <span id='questionDetails'><span id="hQuestion">
            Question: {questionIndex + 1} into {allQuestion.length}
          </span><span id="categoryQuestion">
              Category: {decodeURIComponent(allQuestion[questionIndex].category)}
            </span>
            <span id='iconBox'>{Star({ quizLevel })}</span>
          </span>
          <h2 id="questionB">{decodeURIComponent(allQuestion[questionIndex].question)}</h2>
        </div>
      </header>
      <div className="allOptions">
        {
          allQuestion[questionIndex].incorrect_answers.map((ansOption) => (
            <div className="optionRow">
              <input className="option" disabled={selected} type="radio" checked={selected === ansOption} value={selected} id={ansOption} name="option" onClick={() => { selectOption(ansOption) }} />
              <label className="lable" htmlFor={ansOption}>{decodeURIComponent(ansOption)}</label>
            </div>
          ))
        }

      </div>

      <div id="footer">

        {
          selected && allQuestion[questionIndex].correct_answer === selected ? (
            <span id="selectedQuizResult">
              <p>Correct &#127881; !!</p>
            </span>
          ) : selected && (
            <span id="selectedQuizResult">
              <p>Wrong &#128148; !!</p>
            </span>
          )
        }


        {questionIndex == allQuestion.length - 1 ? (
          <button id="btn" disabled={!selected} onClick={nextQuestion}>
            Finish Quiz
          </button>
        ) : (
          <button id='btn' disabled={!selected} onClick={nextQuestion}>
            Next Question
          </button>)}
        {/* <button id='btn' disabled={!selected} onClick={nextQuestion}>
          Next Question
        </button> */}

        <div className="progress">
          <div id="progressB" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: `${(100 / allQuestion.length) * correct}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> score {((100 / allQuestion.length) * correct)}%</div>
          <div id="progressBarRed" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: `${(100 / allQuestion.length) * incorrect}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Less{((100 / allQuestion.length) * incorrect)}%</div>
          <div id="progressMaxScore" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: `${(100 / allQuestion.length) * (0.4)}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Max{`${(100 - (100 / allQuestion.length) * incorrect)}%score`}</div>
        </div>

      </div>

    </div>
  )
}

export default QuizPage
