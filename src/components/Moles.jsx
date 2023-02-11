import styled from "styled-components";
import putin from "../media/putin1.png";
import putinHitted from "../media/putin2.png";

const ImageContainer = styled.img`
	width: 20vh;
	height: 20vh;
`
const Moles = ({setMoleHitted, setMole}) => {
	const setPutin = () => {
		setMole(putin)
		setMoleHitted(putinHitted)
	}
	return (
		<div>
			<div onClick={() => setPutin()}>
				<ImageContainer src={putin} />
				<ImageContainer src={putinHitted} />
			</div>

		</div>
)
}
export default Moles
