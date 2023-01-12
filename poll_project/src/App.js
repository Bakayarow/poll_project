import Home from "./Pages/Admin/Home/Home.jsx";
import Login from "./Pages/Admin/Login/Login.jsx";
import SessionsTerminees from "./Pages/Admin/Sessions-terminees/Sessions-terminees.jsx";
import SessionsAVenir from "./Pages/Admin/Sessions-a-venir/Sessions-a-venir.jsx";
import CreerSession from "./Pages/Admin/Creer-session/Creer-session.jsx";
import CreerQuestions from "./Pages/Admin/Creer-questions/Creer-questions.jsx";
import StartSession from "./Pages/Admin/Start-session/Start-session.jsx";
import QuestionPage from "./Pages/Admin/Question-page/Question-page.jsx";
import Question from "./Pages/User/Question/Question.jsx";

import LoginUser from "./Pages/User/Login/Login.jsx";
import Questions from "./Pages/User/Questions/questions.jsx";

import Loading from "./Pages/User/Loading/Loading.jsx";
import LoadingEnd from "./Pages/User/Loading/Loading-end.jsx";

import Start from "./Pages/Admin/Waiting/Start.jsx";
import Wait from "./Pages/Admin/Waiting/Wait.jsx";

import SessionEnd from "./Pages/Admin/SessionEnd/Session-end.jsx";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SessionDetail from "./Pages/Admin/SessionDetail/SessionDetail.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/passed-sessions"
            element={<SessionsTerminees />}
          ></Route>
          <Route path="/coming-sessions" element={<SessionsAVenir />}></Route>
          <Route path="/new-session" element={<CreerSession />}></Route>
          <Route path="/start-session" element={<StartSession />}></Route>
          <Route path="/question-page" element={<QuestionPage />}></Route>
          <Route path="/question" element={<Question />}></Route>
          <Route path="/creer-questions" element={<CreerQuestions />}></Route>
          <Route path="/session/detail/:id" element={<SessionDetail />}></Route>

          <Route path="/join" element={<LoginUser />}></Route>

          {/* doit etre dynamique, slug dynamique */}
          <Route path="/questions" element={<Questions />}></Route>

          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/end" element={<LoadingEnd />}></Route>

          <Route path="/start" element={<Start />}></Route>
          {/* doit etre dynamique, slug dynamique */}
          <Route path="/wait" element={<Wait />}></Route>

          <Route path="/session-end" element={<SessionEnd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
