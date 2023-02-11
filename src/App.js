import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import HighScores from "./components/HighScores";
import Home from "./components/Home";
import Login from "./components/Login";
import Play from "./components/Play";
import Scores from "./components/Scores";

function App() {
	const [username, setUsername] = useState(null);
	const [jwt, setJwt] = useState(null);

	return (
		<div>
			<Header jwt={jwt} user={username}/>
			<Routes>
				<Route path={"/"} exact element={<Home/>}/>
				<Route path={"/login"}
				       element={jwt ? <Play jwt={jwt}/> : <Login setJwt={setJwt} setUser={setUsername} endpoint={"login"}/>}/>
				<Route path={"/register"} element={jwt ? <Play jwt={jwt}/> :
				                                   <Login setJwt={setJwt} setUser={setUsername} endpoint={"register"}/>}/>
				<Route path={"/play"} element={<Play jwt={jwt} user={username}/>}/>
				<Route path={"/highscores/:difficulty"} element={<HighScores/>}/>
				<Route path={"/scores/:user/:difficulty"} element={<Scores jwt={jwt} user={username}/>}/>
			</Routes>
		</div>
	);
}

export default App;
