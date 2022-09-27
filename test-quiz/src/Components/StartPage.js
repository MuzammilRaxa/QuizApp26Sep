import '../App.css'
import { useContext } from 'react';
import { QuizStateContext } from '../Helpers/Context'


function StartPage() {
    const { quizState, setQuizState } = useContext(QuizStateContext);

    return (
        <div>
            <h1> Welcom to Page For Quiz, you can start. </h1>
            <button onClick={() => setQuizState('startQuiz')}> Start now </button>
        </div>
    )
}

export default StartPage
