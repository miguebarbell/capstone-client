import {useState} from "react";
import styled from "styled-components";
import putin from "../media/putin1.png";
import putinHitted from "../media/putin2.png";
import trump from "../media/trump1.png";
import trumpHitted from "../media/trump2.png";
import leo from "../media/leo.jpg";
import leoHit from "../media/leo-u.jpg";
import ryan from "../media/Ryan-R.jpg";
import ryanHit from "../media/Ryan-U.jpg";
import charles from "../media/charles1.png";
import charlesHit from "../media/charles2.png";
import elijah from "../media/elijah1.png";
import elijahHit from "../media/elijah2.png";
import joel from "../media/joel1.png";
import joelHit from "../media/joel2.png";
import miguel from "../media/miguel1.png";
import miguelHit from "../media/miguel2.png";
import matthew from "../media/matthew1.png";
import matthewhit from "../media/matthew2.png";
import orquid from "../media/orquidia1.png";
import orquidHit from "../media/orquidia2.png";
import rich from "../media/rich1.png";
import richHit from "../media/rich2.png";
import nich from "../media/nich1.png";
import nichHit from "../media/nich2.png";
import samuel from "../media/samuel1.png";
import samuelHit from "../media/samuel2.png";

import {DefaultContainer} from "./Home";

var MOLE_SIZE = 15;
const MoleContainer = styled.div`
  position: relative;
  height: ${MOLE_SIZE}vh;
  width: ${MOLE_SIZE * 2}vh;
  cursor: pointer;
  margin-bottom: 2px;
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
  background: rgba(0, 0, 0, 0.5);
`;

const ImageCon = styled.div`
  overflow-y: auto;
  margin: 3vh;
  height: 30%;
  border: solid;
  border-radius: 10px;

  ::-webkit-scrollbar {
    //background-color: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    border-radius: 10px;
    border: 1px solid #000;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
`;
const H4 = styled.div`
  margin-bottom: 7vh;
`;
const ImageContainer = styled.img`
  width: ${MOLE_SIZE}vh;
  height: ${MOLE_SIZE}vh;
`;
const MolesContainer = styled(DefaultContainer)`

`;
const Moles = ({setMoleHitted, setMole}) => {
	const moles = [
		[elijah, elijahHit],
		[joel, joelHit],
		[miguel, miguelHit],
		[samuel, samuelHit],
		[putin, putinHitted],
		[trump, trumpHitted],
		[ryan, ryanHit],
		[leo, leoHit],
		[charles, charlesHit],
		[orquid, orquidHit],
		[matthew, matthewhit],
		[nich, nichHit],
		[rich, richHit]
	];


	const [playVisibility, setPlayVisibility] = useState(null);
	const setTheMole = (index) => {
		setMole(moles[index][0]);
		setMoleHitted(moles[index][1]);
	};
	return (<MolesContainer>
		<H4>Choose your Mole</H4>

		<ImageCon>
			{moles.map((moleSet, index) =>

				           <MoleContainer key={index} onClick={() => setPlayVisibility(index)}>

					           <PlayButton onClick={() => setTheMole(index)} active={index === playVisibility}>Play</PlayButton>
					           <ImageContainer src={moleSet[0]}/>
					           <ImageContainer src={moleSet[1]}/>
				           </MoleContainer>
			)}</ImageCon>
	</MolesContainer>);
};
export default Moles;
