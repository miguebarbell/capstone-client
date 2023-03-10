import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {PUBLIC_SCORES} from "../helpers/requests";
import {DefaultContainer} from "./Home";
import {Button} from "./Level";

const ScoreLeaderboard = styled.span`
color: ${({index}) => (index < 3) ? 'rgba(57,255,20)' :
                      (index <5 ) ? 'rgba(250,237,39)' :
                      'rgba(255, 255, 255, 0.8)'};
`

const PlayAgainButton = styled(Button)`
  margin-top: 1rem;

  span {
    height: initial;
  }

`;
export const prettydate = (timestamp) => {
		const date = new Date(timestamp * 1000);
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
	};
const HighScores = () => {
	const location = window.location.href.split("/");
	const difficulty = location[location.length - 1];
	const [scores, setScores] = useState([]);


	const navigate = useNavigate();
	useEffect(() => {
		PUBLIC_SCORES(difficulty)
			.then(res => res.json())
			.then(res => setScores(res));
	}, []);

	return (
		<DefaultContainer>
			<h1>
				Leaderboard @ {difficulty}
			</h1>
			{scores.map((score, index) => <div key={score.id}>
				            <ScoreLeaderboard index={index}>{score.score}pts. @ {prettydate(score.created)} {score.username}</ScoreLeaderboard>
			            </div>
			)}

			<PlayAgainButton onClick={() => navigate("/play")}><span>Play another</span></PlayAgainButton>
		</DefaultContainer>

	);

};
export default HighScores;
