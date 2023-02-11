import {useEffect, useState} from "react";
import styled from "styled-components";
import Box from "./Box";
import Clock from "./Clock";
import Score from "./Score";


const Grid = styled.div`
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

	function activator() {
		if (time > 0) {
			const number = Math.floor(Math.random() * cells * cells);
			const emptyState = [...Array(cells * cells)].map(_ => false);
			emptyState[number] = true;
			setGamestate(emptyState);
		}
	}


	const [time, setTime] = useState(5);

	useEffect(() => {
		const decrease = () => {
			setTime((prevTime) => {
				if (prevTime > 0 && clockState) {
					return prevTime - 1;
				} else {
					setClockState(false);
					return 0;
				}
			});
		};
		const newInterval = setInterval(decrease, 1000);
		return () => {
			clearInterval(newInterval);
		};
	}, []);

	useEffect(() => {
		setTimeout(activator, 100);
		const newInterval = setInterval(activator, timeframe);
		return () => {
			clearInterval(newInterval);
		};
	}, []);
	return (
		<div>
			<Score score={scoreState[0]}/>
			<Clock time={time}/>
			<Grid number={cells}>
				{gamestate.map((active, index) => (
					<Box key={index}
					     active={active}
					     mole={mole}
					     score={scoreState}
					/>))
				}
			</Grid>
		</div>
	);

};
export default Game;
