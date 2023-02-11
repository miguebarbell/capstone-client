import styled from "styled-components";

var ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

`

var Button = styled.button`
	color: blue;
	background: red;
	margin: 5vh;
	width: 20vw;
	&:hover  {
		margin: 5vh;
		width: 20vw;
		color: rgba(0, 255, 0, 1);
		background: blue;
  		box-shadow: 0 5px 15px rgba(0, 92, 0, 1);
		transform: scale(1.2) translate(0%, 0%);
	}

`



const Level = ({setLevel}) => {

	return (
		<ButtonContainer>
			<h2>Choose a Difficulty?</h2>
			
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
