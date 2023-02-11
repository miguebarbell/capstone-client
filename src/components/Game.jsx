import {useEffect, useState} from "react";
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

`

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
const Game = ({jwt, cells, target, targetHitted}) => {
	const mole = {target, targetHitted};

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

	useEffect(() => {
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
	}, [clockState]);

	useEffect(() => {
		setTimeout(activator, 100);
		const newInterval = setInterval(activator, timeframe);
		return () => {
			clearInterval(newInterval);
		};
	}, [time]);
	return (<Container>
		<Score score={scoreState[0]}/>
		<Clock time={time}/>
		<GridContainer>
			<Grid number={cells}>
				<Blocker active={!clockState}>Final Score {scoreState[0]}</Blocker>
				{gamestate.map((active, index) => (<Box key={index}
				                                        active={active}
				                                        mole={mole}
				                                        score={scoreState}
				/>))}
			</Grid>
		</GridContainer>
	</Container>);

};
export default Game;
