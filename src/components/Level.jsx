import styled from "styled-components";
const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const Button = styled.button`
	color: blue;
	background: black;
	margin: 5vh;
	width: 30vw;
	


`
const Level = ({setLevel}) => {
	return (
		<ButtonContainer>
			<Button onClick={() => setLevel("easy")}>
				Easy
			</Button>
			<Button onClick={() => setLevel("medium")}>
				Medium
			</Button>
			<Button onClick={() => setLevel("hard")}>
				Hard
			</Button>

		</ButtonContainer>
	)

}
export default Level;
