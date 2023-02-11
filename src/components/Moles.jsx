import {useState} from "react";
import styled from "styled-components";
import putin from "../media/putin1.png";
import putinHitted from "../media/putin2.png";
import trump from "../media/trump1.png";
import trumpHitted from "../media/trump2.png";

const MoleContainer = styled.div`
	position: relative;
  height: 20vh;
  width: 40vh;
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
  width: 20vh;
  height: 20vh;
`;
const Moles = ({setMoleHitted, setMole}) => {
	const moles = [[putin, putinHitted], [trump, trumpHitted]];
	const [playVisibility, setPlayVisibility] = useState(null);
	const setTheMole = (index) => {
		setMole(moles[index][0]);
		setMoleHitted(moles[index][1]);
	};
	return (<div>
		{moles.map((moleSet, index) =>
			           <MoleContainer key={index} onClick={() =>  setPlayVisibility(index)}>
				           <PlayButton onClick={() => setTheMole(index)} active={index === playVisibility}>Play</PlayButton>
				           <ImageContainer src={moleSet[0]}/>
				           <ImageContainer src={moleSet[1]}/>
			           </MoleContainer>)}
	</div>);
};
export default Moles;
