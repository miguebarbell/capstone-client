import {useEffect, useState} from "react";
import {useNavigate, useNavigation} from "react-router-dom";
import styled from "styled-components";
import {USER_SCORES} from "../helpers/requests";
import {DefaultContainer} from "./Home";


const CellScore = styled.div`
	cursor: pointer;
`
const Scores = ({jwt}) => {
	const location = window.location.href.split("/");
	const difficulty = location[location.length - 1];
	const username = location[location.length - 2];
	const navigate = useNavigate();
	const [scores, setScores] = useState([]);
	useEffect(() => {
		USER_SCORES(difficulty, username, jwt)
			.then(res => res.json())
			.then(res => setScores(res));
	}, []);

	return (
		<DefaultContainer>
			<h3>Your TOP10 @ {difficulty}</h3>
			{scores.map(score =>
				            <CellScore key={score.id} onClick={()=> navigate("/highscores/" + difficulty)}>
				<span>{score.score} - {score.username}</span>
			</CellScore>)}
		</DefaultContainer>
	);
};
export default Scores;
