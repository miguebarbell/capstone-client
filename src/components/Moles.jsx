import {useState} from "react";
import styled from "styled-components";
import putin from "../media/putin1.png";
import putinHitted from "../media/putin2.png";
import trump from "../media/trump1.png";
import trumpHitted from "../media/trump2.png";
import leo from "../media/leo.jpg";
import leoHit from "../media/leo-u.jpg";
import ryan from "../media/Ryan-R.jpg"
import ryanHit from "../media/Ryan-U.jpg";
import {DefaultContainer} from "./Home";

var MOLE_SIZE = 10;
const MoleContainer = styled.div`
	position: relative;
  height: ${MOLE_SIZE}vh;
  width: ${MOLE_SIZE * 2}vh;
	cursor: pointer;
`;
const PlayButton = styled.div`
  position: absolute;
	display: ${(props) => props.active ? 'flex' : 'none'};
	//display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
  width: 100%;
  height: 100%;
	color: greenyellow;
	font-weight: bold;
	font-size: large;
  background: rgba(0,0,0,0.5);
`;
const ImageContainer = styled.img`
  width: ${MOLE_SIZE}vh;
  height: ${MOLE_SIZE}vh;
`;
const MolesContainer = styled(DefaultContainer)`
	
`
const Moles = ({setMoleHitted, setMole}) => {
	const moles = [[putin, putinHitted], [trump, trumpHitted], [ryan, ryanHit], [leo, leoHit]];
	const [playVisibility, setPlayVisibility] = useState(null);
	const setTheMole = (index) => {
		setMole(moles[index][0]);
		setMoleHitted(moles[index][1]);
	};
	return (<MolesContainer>
		<h4>Choose your Mole</h4>
		{moles.map((moleSet, index) =>
			           <MoleContainer key={index} onClick={() =>  setPlayVisibility(index)}>
				           <PlayButton onClick={() => setTheMole(index)} active={index === playVisibility}>Play</PlayButton>
				           <ImageContainer src={moleSet[0]}/>
				           <ImageContainer src={moleSet[1]}/>
			           </MoleContainer>)}
	</MolesContainer>);
};
export default Moles;
