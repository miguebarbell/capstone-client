import styled from "styled-components";

const ScoreSpan = styled.span`
	font-weight: bolder;
	color: ${(props) => props.score > 0 ? 'green' : 'red'};
`
const Score = ({score}) => {
	return (
		<div>
			Score: <ScoreSpan score={score}>{score}</ScoreSpan>
		</div>
	)
}
export default Score;
