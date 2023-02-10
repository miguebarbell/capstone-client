
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
		<div>{time}</div>
	);
};

export default Clock;
