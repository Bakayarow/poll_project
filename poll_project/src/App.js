import Home from './Pages/Admin/Home/Home.jsx';
import Login from './Pages/Admin/Login/Login.jsx';
import SessionsTerminees from './Pages/Admin/Sessions-terminees/Sessions-terminees.jsx';
import SessionsAVenir from './Pages/Admin/Sessions-a-venir/Sessions-a-venir.jsx';
import CreerSession from './Pages/Admin/Creer-session/Creer-session.jsx';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}



function Question() {
  return (
    <Router>
      <Route path="/question" component={Question} />
    </Router>
  );
}


export default App;
