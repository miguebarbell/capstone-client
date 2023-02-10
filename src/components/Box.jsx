import {useState} from "react";
import styled from "styled-components";
import cover from "../media/cover.jpeg"


const Container = styled.div`
	height: 10vh;
	width: 10vh;
	background-image: ${(props) => props.active ? 
	                              !props.hit ? `url(${props.mole.target})` :
	                              `url(${props.mole.targetHitted})` : 
	                               `url(${cover})`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	
`;
const Box = ({active, mole, score}) => {
	const [hit, setHit] = useState(false);
	const scored = () => {
		if (active) {
			score[1](score[0] + 1)
		} else {
			score[1](score[0] - 1)
		}
	}
	return (
		<Container mole={mole}
		           active={active}
		           hit={hit}
		           onMouseDown={() => setHit(true)}
		           onMouseUp={() => setHit(false)}
		           onClick={() => scored()}
		>
		</Container>
	);

};

export default Box;
