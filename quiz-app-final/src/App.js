import './App.css';
import QuizPage from './Components/QuizPage';
import StartPage from './Components/StartPage';
import EndPage from './Components/EndPage';
import { useState } from 'react';
import { QuizStateContext } from './Helpers/Context'

function App() {
  const [quizPageState, setquizPageState] = useState('menu');
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);


  return (
    <div className="App">
      <div className='mainBox'>

        <QuizStateContext.Provider
          value={{
            quizPageState,
            setquizPageState,
            score,
            setScore,
            correct,
            setCorrect,
            incorrect,
            setIncorrect,
            questionIndex,
            setQuestionIndex,
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
