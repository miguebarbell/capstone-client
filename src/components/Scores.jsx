import {useEffect, useState} from "react";
import {USER_SCORES} from "../helpers/requests";
import {DefaultContainer} from "./Home";

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
		<DefaultContainer>
			<h3>Your TOP10 @ {difficulty}</h3>
			{scores.map(score => <div key={score.id}>
				<span>{score.score} - {score.username}</span>
			</div>)}
		</DefaultContainer>
	);
};
export default Scores;
