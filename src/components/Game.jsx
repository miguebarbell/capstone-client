import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Box from "./Box";
import Clock from "./Clock";
import Score from "./Score";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;
const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

`;

const Blocker = styled.div`
  display: ${(props) => props.active ? 'flex' : 'none'};
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: greenyellow;
  font-size: large;
  font-weight: bolder;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
`;
const Grid = styled.div`
  position: relative;
  display: grid;
  //width: 100vw;
  grid-template-columns: repeat(${props => props.number}, 0fr);
`;
const Game = ({jwt, cells, target, targetHitted, user}) => {
	const mole = {target, targetHitted};

	const navigate = useNavigate();

	// status
	const scoreState = useState(0);
	const initialStatus = [...Array(cells * cells)].map(_ => false);
	const [gamestate, setGamestate] = useState(initialStatus);
	const [timeframe, setTimeframe] = useState(1000);
	const [clockState, setClockState] = useState(true);
	const [time, setTime] = useState(20);

	function activator() {
		if (time > 0) {
			const number = Math.floor(Math.random() * cells * cells);
			const emptyState = [...Array(cells * cells)].map(_ => false);
			emptyState[number] = true;
			setGamestate(emptyState);
		} else {
			setClockState(false);
		}
	}

	const submitHandler = () => {
		alert(jwt);
	};

	const seeHighScores = () => {
		switch (cells) {
			case 3:
				alert('easy');
				navigate("/highscores/easy");
				break;
			case 5:
				alert('medium');
				navigate("/highscores/easy");
				break;
			default:
				alert('hard');
				navigate("/highscores/easy");
		}
	};


	useEffect(() => {
		// TODO: put this in the clock component
		const decrease = () => {
			if (clockState) {
				setTime((prevTime) => {
					if (prevTime > 0 && clockState) {
						return prevTime - 1;
					} else {
						return 0;
					}
				});
			}
		};
		const newInterval = setInterval(decrease, 1000);
		return () => {
			clearInterval(newInterval);
		};
	}, [clockState, user]);

	useEffect(() => {
		setTimeout(activator, 100);
		const newInterval = setInterval(activator, timeframe);
		return () => {
			clearInterval(newInterval);
		};
	}, [time, user]);
	return <Container>
		<Score score={scoreState[0]}/>
		<Clock time={time}/>
		<GridContainer>
			<Grid number={cells}>
				<Blocker onClick={seeHighScores} active={!clockState}>Final Score {scoreState[0]}{user != null ?
				                                                                                  <button
					                                                                                  onClick={() => submitHandler()}>Submit</button> :
				                                                                                  "Click to see the high scores"
				}</Blocker>
				{gamestate.map((active, index) => <Box key={index}
				                                       active={active}
				                                       mole={mole}
				                                       score={scoreState}
				/>)}
			</Grid>
		</GridContainer>
	</Container>;

};
export default Game;
