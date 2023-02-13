import styled from "styled-components";
import {StateHeader} from "./Clock";

const ScoreSpan = styled.span`
	font-weight: bolder;
	color: ${(props) => props.score > 0 ? 'green' : 'red'};
`
const Score = ({score}) => {
	return (
		<StateHeader>
			Score: <ScoreSpan score={score}>{score}</ScoreSpan>
		</StateHeader>
	)
}
export default Score;
