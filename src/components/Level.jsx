import styled from "styled-components";

var ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10vh 0vh;
`

var Button = styled.button`
  
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  margin: 7vh 0vh;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

&:active {
	box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0;
	rgba(0, 0, 0, .1) 0 0 10px 0;
	rgba(0, 0, 0, .1) 0 1px 4px -1px;  
	transform: translateY(2px);  
	transition-duration: .35s;
}


&:hover {
  background-color: #1366d6;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, 
  rgba(0, 0, 0, 1) 0 1px 4px; 
  opacity: 1; 
  transform: translateY(0);
  transition-duration: .35s;
}
&:hover,
&:after{
	opacity: .5;
}
&:active,
&:after {  
	opacity: 1;
}

@media (min-width: 1440px) {
    font-size: 24px;
    min-width: 196px;
	margin 6vh 0vh;
}

`
var H2 = styled.h2`
margin: 3vh 0vh;
@media (min-width: 1440px) {
    font-size: 24px;
    min-width: 196px;
	margin: 0vh 0vh;
}	
`


const Level = ({setLevel}) => {

	return (
		<ButtonContainer>
			<H2>Choose a Difficulty?</H2>
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
