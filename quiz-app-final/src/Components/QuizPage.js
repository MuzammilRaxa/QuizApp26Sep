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

  const isRadioSelected = (value): => setSelected === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelected(e.currentTarget.value)

  const nextQuestion = () => {
    allQuestion[questionIndex].correct_answer === selected ? (
      setCorrect(correct + 1)
    ) : (
      setIncorrect(incorrect + 1)
    )
    setSelected('')
    setQuestionIndex(questionIndex + 1)
    console.log('selected' + selected)

    console.log('questionIndex', questionIndex)
  };
  console.log('selected' + selected)

  const selectOption = (ansOption) => {
    setSelected(ansOption);
  };

  useEffect(() => {
    let compeleteArray = allQuestion[questionIndex].incorrect_answers.push(allQuestion[questionIndex].correct_answer);
    setAllOptions(allQuestion[questionIndex].incorrect_answers)
    console.log('setAllOptions:', allQuestion[questionIndex].incorrect_answers)
  }, [questionIndex]);


  console.log('selected' + selected)

  return (
    <div className="quiz">
      <header>
        <div id="scoreBox">
          <span id="topScore">Score {((100 / allQuestion.length) * correct)}%</span>
          <span id="topMaxScore">Max Score {allQuestion.length}</span>
        </div>

        <div className="progress" style={{ height: '3px' }}>
          <progress id="progressBar" value={`${(100 / allQuestion.length) * questionIndex}`} max={100}></progress>
        </div>

        <div id='questionBox'>
          <h1 id="hQuestion">Question: {questionIndex + 1}/{allQuestion.length}</h1>
          <h2 id="questionB">{decodeURIComponent(allQuestion[questionIndex].question)}</h2>
        </div>
      </header>

      <div className="allOptions">

        {
          allQuestion[questionIndex].incorrect_answers.map((ansOption) => (
            <div className="optionRow">
              <input className="option" disabled={selected} type="radio" value={selected} id={ansOption} name="option" onClick={() => { isRadioSelected(ansOption) }} onChange={handleRadioClick} />
              <label className="lable" htmlFor={ansOption}>{decodeURIComponent(ansOption)}</label>
            </div>
          ))
        }

      </div>

      <div id="footer">
        {/* <button onClick={getAnswer}> </button> */}
        <div>
          <h1 className="result"> Result Will show</h1>
        </div>
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

        {/* {questionIndex === allQuestion.length - 1 ? (
          <button disabled={!selected} onClick={setQuizState('quizResult')} id="nextQuestion">
            Finish Quiz
          </button>
        ) : (
          <button id='btn' disabled={!selected} onClick={nextQuestion}>
            Next Question
          </button>)} */}
        <button id='btn' disabled={!selected} onClick={nextQuestion}>
          Next Question
        </button>

        <div className="progress">
          <div id="progressB" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: `${(100 / allQuestion.length) * correct}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> score {((100 / allQuestion.length) * correct)}%</div>
          <div id="progressBarRed" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: `${(100 / allQuestion.length) * incorrect}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Less{((100 / allQuestion.length) * incorrect)}%</div>
          <div id="progressMaxScore" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: `${(100 / allQuestion.length) * (0.4)}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Max{`${(100 - (100 / allQuestion.length) * incorrect)}%Max`}</div>
        </div>

        {/* <div className="progress">
          <div id="progressB" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: ' 0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">score{(allQuestion.length / allQuestion[questionIndex].correct) * 100}%</div>
          <div id="progressBarRed" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: '0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Less{allQuestion[questionIndex].length - correct}</div>
          <div id="progressMaxScore" className="progress-bar " role="progressbar" aria-label="Example 20px high"
            style={{ width: ' 0%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Max{ }</div>
        </div> */}

        {/* <button
          className='resultBtn'
          onClick={nextQuestion}>
          Submit All Quiz goto End
        </button> */}

      </div>

    </div>
  )
}

export default QuizPage
