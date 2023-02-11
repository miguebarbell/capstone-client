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
			<Button onClick={() => setLevel(3)}>
				Easy
			</Button>
			<Button onClick={() => setLevel(5)}>
				Medium
			</Button>
			<Button onClick={() => setLevel(7)}>
				Hard
			</Button>

		</ButtonContainer>
	)

}
export default Level;
