import "../App.css";
import { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";

function StartPage() {
    const { setquizPageState } = useContext(QuizStateContext);

    return (
        <div className="startPage">
            <h1> Welcome to the start quiz page! </h1>
            <button className="btn" onClick={() => setquizPageState("startQuiz")}>
                Start now
            </button>

        </div>
    );
}

export default StartPage;
