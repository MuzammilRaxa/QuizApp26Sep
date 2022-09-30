import React from 'react'
import { useContext } from 'react';
import { QuizStateContext } from '../Helpers/Context'
import { allQuestion } from '../Helpers/Questions';

function EndPage() {
  const { correct, setCorrect, incorrect } = useContext(QuizStateContext);

  return (
    <div className="result">
      <h1 className='hResult'>Congratulation you have complete!! &#9996;</h1>

      <div className="resultBox">
        <h2> Success rate is {correct} into {allQuestion.length}</h2>
        <h2 className='endResult' style={{ backgroundColor: '#b1ccff' }}>Score is {((100 / allQuestion.length) * correct)}% into 100% </h2>

        {
          correct > 0 ? (<div className='emojiSpace'><h2 className='endResult' style={{ backgroundColor: 'aquamarine' }} >Your Correct answer is {correct} &#128076;</h2> <span style={{ fontSize: '50px' }}> &#128150;</span></div>) :
            (<h2 className='endResult' style={{ backgroundColor: 'pink' }} >Sad!! Correct answer is {correct} &#128148;</h2>)
        }
        {
          incorrect > 0 ? (<div className='emojiSpace'><h2 className='endResult' style={{ backgroundColor: 'red' }} >Your incorrect is {incorrect} &#128148;</h2 > <span style={{ fontSize: '50px' }}>&#128533;</span></div>) :
            (<h2 className='endResult' style={{ backgroundColor: 'pink' }} >Congratulation!! Your incorrect is {incorrect} &#128077;</h2 >)
        }

      </div>
    </div >
  )
}

export default EndPage
