import "../App.css";
import { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";

function StartPage() {
    const { setquizPageState } = useContext(QuizStateContext);

    return (
        <div className="startPage">
            <h1> Welcom to Page For the start Quiz. </h1>
            <button className="btn" onClick={() => setquizPageState("startQuiz")}>
                Start now
            </button>

        </div>
    );
}

export default StartPage;
