import {useState} from "react";
import Game from "./Game";
import Level from "./Level";
import Moles from "./Moles";

const Play = ({jwt, user}) => {
	const [level, setLevel] = useState(null);
	const [mole, setMole] = useState(null);
	const [moleHitted, setMoleHitted] = useState(null);
	if (!level) {
		return <Level setLevel={setLevel}/>;
	} else if (level && !mole) {
		return <Moles setMole={setMole}
		              setMoleHitted={setMoleHitted}/>;
	} else if (level && mole && moleHitted) {
		return <Game
			target={mole}
			targetHitted={moleHitted}
			cells={level}
			jwt={jwt}
			user={user}
		/>;
	}
};
export default Play;
