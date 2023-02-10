import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Clock from "./components/Clock";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Play from "./components/Play";

function App() {
  const testUser = "Miguel"
  const testJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  const [user, setUser] = useState(testUser);
  const [jwt, setJwt] = useState(testJwt);

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        {/*<Route path="/login" element={<Login setJwt/>}/>*/}
        <Route path={"/play"} element={<Play jwt={jwt} />}/>


      </Routes>
    </div>
  );
}

export default App;
