import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import HighScores from "./components/HighScores";
import Home from "./components/Home";
import Login from "./components/Login";
import Play from "./components/Play";
import Scores from "./components/Scores";

function App() {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);

  return (
    <div>
      <Header jwt={jwt} user={user}/>
      <Routes>
        <Route path={"/"} exact  element={<Home/>}/>
        <Route path={"/login"} element={jwt ? <Play jwt={jwt}/> : <Login setJwt={setJwt} setUser={setUser} endpoint={"login"}/>}/>
        <Route path={"/register"} element={jwt ? <Play jwt={jwt}/> : <Login setJwt={setJwt} setUser={setUser} endpoint={"register"}/>}/>
        <Route path={"/play"} element={<Play jwt={jwt} user={user} />}/>
        <Route path={"/highscores/:difficulty"} element={<HighScores/>}/>
        <Route path={"/scores/:user/:difficulty"} element={<Scores jwt={jwt} />}/>
      </Routes>
    </div>
  );
}

export default App;
