import {useEffect, useState} from "react";
import {USER_SCORES} from "../helpers/requests";

const Scores = ({jwt}) => {
	const location = window.location.href.split("/");
	const difficulty = location[location.length - 1];
	const username = location[location.length - 2];
	const [scores, setScores] = useState([]);
	useEffect(() => {
		USER_SCORES(difficulty, username, jwt)
			.then(res => res.json())
			.then(res => setScores(res));
	}, []);

	return (
		<div>
			<h1>Scores</h1>
			<h2>{jwt}</h2>
			<h3>{username}</h3>
			<h4>{difficulty}</h4>
			{scores.map(score => <div key={score.id}>
				<span>{score.score} - {score.username}</span>
			</div>)}
		</div>
	);
};
export default Scores;
