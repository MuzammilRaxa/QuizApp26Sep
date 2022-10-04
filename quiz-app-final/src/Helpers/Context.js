import { createContext, useContext, useState } from "react";
export const QuizStateContext = createContext("");

export const ContextProvider = ({ children }) => {
    const [quizState, setQuizState] = useState("");
    const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const value = {
        quizState,
        setQuizState,
        score,
        setScore,
        correct,
        setCorrect,
        incorrect,
        setIncorrect,
        questionIndex,
        setQuestionIndex,
    };

    return (
        <QuizStateContext.Provider value={value}>
            {children}
        </QuizStateContext.Provider>
    );
};

export const useStateValues = () => useContext(QuizStateContext)
