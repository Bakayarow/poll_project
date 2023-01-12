import Home from './Pages/Admin/Home/Home.jsx';
import Login from './Pages/Admin/Login/Login.jsx';
import SessionsTerminees from './Pages/Admin/Sessions-terminees/Sessions-terminees.jsx';
import SessionsAVenir from './Pages/Admin/Sessions-a-venir/Sessions-a-venir.jsx';
import CreerSession from './Pages/Admin/Creer-session/Creer-session.jsx';
import Question from './Pages/User/Question/Question.jsx';

import LoginUser from './Pages/User/Login/Login.jsx';
import Questions from './Pages/User/Questions/Questions.jsx';

import Loading from './Pages/User/Loading/Loading.jsx';
import LoadingEnd from './Pages/User/Loading/Loading-end';
import './App.css';

import {  BrowserRouter,  Routes,  Route, } from "react-router-dom";


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sessions-terminees' element={<SessionsTerminees />}></Route>
          <Route path='/sessions-a-venir' element={<SessionsAVenir />}></Route>
          <Route path='/creer-session' element={<CreerSession />}></Route>
          <Route path='/question' element={<Question />}></Route>

          <Route path='/join' element={<LoginUser />}></Route>

          {/* doit etre dynamique, slug dynamique */}
          <Route path='/questions' element={<Questions />}></Route>

          <Route path='/loading' element={<Loading />}></Route>
          <Route path='/end' element={<LoadingEnd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
