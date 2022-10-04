import './App.css';
import QuizPage from './Components/QuizPage';
import StartPage from './Components/StartPage';
import EndPage from './Components/EndPage';
import { useState } from 'react';
import { ContextProvider } from './Helpers/Context'

function App({ children }) {

  const [quizState] = useState("menu");

  return (
    <div className="App">
      <div className='mainBox'>

        <ContextProvider>
          {quizState === 'menu' && <StartPage />}
          {quizState === 'startQuiz' && <QuizPage />}
          {quizState === 'quizResult' && <EndPage />}
        </ContextProvider>


      </div>
    </div>
  );
}

export default App;
