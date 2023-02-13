import styled from "styled-components";

const TimeSpan = styled.span`
	color: ${(props) => props.time > 10 ? 'black' : props.time > 5 ? 'orange' : 'red'};
`
export const StateHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 10vw;
	margin-top: 3px;
`
const Clock = ({time}) => {
	// const [time, setTime] = useState(5);
	//
	// useEffect(() => {
	// 	const decrease = () => {
	// 		setTime((prevTime) => {
	// 			if (prevTime > 0 && clockState) {
	// 				return prevTime - 1;
	// 			} else {
	// 				setClockState(false)
	// 				return 0;
	// 			}
	// 		});
	// 	};
	// 	const newInterval = window.setInterval(decrease, 1000);
	// 	return () => {
	// 		clearInterval(newInterval);
	// 	};
	// }, []);
	return (
		<StateHeader>
			Time:
			<TimeSpan time={time}> {time}</TimeSpan>
		</StateHeader>
	);
};

export default Clock;
