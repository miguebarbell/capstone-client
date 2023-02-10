import styled from "styled-components";
import putin1 from "../media/putin1.png";
import putin2 from "../media/putin2.png";

const ImageContainer = styled.img`
	width: 20vh;
	height: 20vh;
`
const Moles = (props) => {
	return (
		<div>
			<div>
				<ImageContainer src={putin1} onClick={props.setMole(putin1)}/>
				<ImageContainer src={putin2} onClick={props.setMoleHitted(putin2)}/>
			</div>

		</div>
)
}
export default Moles
