import '../App.css'
import { useContext } from 'react';
import { QuizStateContext } from '../Helpers/Context'

function StartPage() {
    const { quizState, setQuizState } = useContext(QuizStateContext);


    // var sectionStyle = {
    //   width: "100%",
    //   height: "400px",
    //   backgroundImage: "url(" + { Background } + ")"
    // };

    return (
        <div className='startPage' >
            <h1> Welcom to Page For Quiz, you can start. </h1>
            <button id='btn' onClick={() => setQuizState('startQuiz')}> Start now </button>
        </div>
    )
}

export default StartPage
