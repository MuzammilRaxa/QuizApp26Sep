import './App.css';
import QuizPage from './Pages/QuizPage';
import StartPage from './Pages/StartPage';
import EndPage from './Pages/EndPage';
import { useState } from 'react';
import { QuizStateContext } from './Helpers/Context'

function App() {
  const [quizPageState, setquizPageState] = useState('menu');
  const [score, setScore] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);
  const [incorrectScore, setIncorrectScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);


  return (
    <div className="App">
      <div className='mainBox'>

        <QuizStateContext.Provider
          value={{
            quizPageState,
            setquizPageState,
            score,
            setScore,
            correctScore,
            setCorrectScore,
            incorrectScore,
            setIncorrectScore,
            questionNumber,
            setQuestionNumber,
          }} >

          {quizPageState === 'menu' && <StartPage />}
          {quizPageState === 'startQuiz' && <QuizPage />}
          {quizPageState === 'quizResult' && <EndPage />}

        </QuizStateContext.Provider>


      </div>
    </div>
  );
}

export default App;
