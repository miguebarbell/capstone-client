import {useEffect, useState} from "react";
import Game from "./Game";
import Level from "./Level";
import Moles from "./Moles";

const Play = ({jwt}) => {
	const [level, setLevel] = useState(null);
	const [mole, setMole] = useState(null);
	const [moleHitted, setMoleHitted] = useState(null);
	// useEffect(() => {
	//
	// }, [level, mole]);

	if (level) {
		return <Moles setMole={setMole}
		       setMoleHitted={setMoleHitted}/>;
	} else if (!level) {
		return <Level setLevel={setLevel}/>
	} else {
		return <Game target={mole}
		             targetHitted={moleHitted}
		             level={level}
		             jwt={jwt}/>;
	}

	// return (
	// 	<div>

			{/*{!level && <Level setLevel={setLevel}/>}*/}
			{/*{level && <Moles setMole={setMole}*/}
			{/*                 setMoleHitted={setMoleHitted}/>}*/}
			{/*{level && mole && <Game jwt={jwt}*/}
			{/*                        level={level}*/}
			{/*                        target={mole}*/}
			{/*                        targetHitted={moleHitted}*/}
			{/*/>}*/}
		// </div>
	// );
};
export default Play;
