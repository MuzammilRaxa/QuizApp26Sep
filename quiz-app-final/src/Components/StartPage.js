import "../App.css";
import { useContext, useState, useEffect } from "react";
import { QuizStateContext } from "../Helpers/Context";

// import {
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
// } from "firebase/auth";
// import { auth } from "../firebaseConfig";

// firebase ===========>>>>>>>>>>>>>>

// const [registerEmail, setRegisterEmail] = useState("");
// const [registerPassword, setRegisterPassword] = useState("");
// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");

// const [user, setUser] = useState({});

// useEffect(
//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     }, [])
// )

// const register = async () => {
//     try {
//         const user = await createUserWithEmailAndPassword(
//             auth,
//             registerEmail,
//             registerPassword
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// console.log('user', user)

// const login = async () => { };

// const logout = async () => {
//     await signOut(auth);
// };

function StartPage() {
    const { quizState, setQuizState } = useContext(QuizStateContext);

    return (
        <div className="startPage">
            <h1> Welcom to Page For Quiz, you can start. </h1>
            <button id="btn" onClick={() => setQuizState("startQuiz")}>
                {" "}
                Start now{" "}
            </button>

            {/* <div className="formBox">
                <div className="emailForm">
                    <h3 className="formText">Email</h3>
                    <input
                        className="inputField"
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }} />

                    <input
                        className="inputField"
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }} />

                    <button className="btn" onClick={register}>
                        Creat User
                    </button>
                </div>
                <div className="emailForm">
                    <h3 className="formText">Login</h3>
                    <input
                        className="inputField"
                        placeholder="Login..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }} />

                    <input
                        className="inputField"
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }} />

                    <button className="btn">Login</button>
                </div>
                <div className="emailForm">
                    <h4 className="formText">User Logged In</h4>
                    <h4>{auth.currentUser.email}</h4>
                    <button className="btn" onClick={logout}>
                        Sign Out
                    </button>
                </div>
            </div> */}

        </div>
    );
}

export default StartPage;
