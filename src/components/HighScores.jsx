import {useEffect, useState} from "react";
import {PUBLIC_SCORES} from "../helpers/requests";

const HighScores = () => {
	const location = window.location.href.split("/");
	const difficulty = location[location.length - 1];
	const [scores, setScores] = useState([]);

	useEffect(() => {
		PUBLIC_SCORES(difficulty)
			.then(res => res.json())
			.then(res => setScores(res))
	}, []);

	return (
		<div>
		<h1>
			Scores for {difficulty}
		</h1>
			{scores.map(score => <div key={score.id}>
				<span>{score.score} - {score.username}</span>
			            </div>

				)}
			</div>
	);

};
export default HighScores;
