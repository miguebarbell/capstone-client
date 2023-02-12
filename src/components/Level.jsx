import styled from "styled-components";
import {DefaultContainer} from "./Home";
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  button {
	  width: 200px;
    span {
      height: initial;
    }
  }
`

export const Button = styled.button`
  @font-face {
        font-family: Atraries;
        src: url(../font/PressStart2P.ttf);
    }
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  margin: 10vh 0vh;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;


span {background-color: rgb(5, 6, 45);
  padding: 4px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
  font-family: Atraries;
}
&:hover span {
  background: none;
}



&:hover {
  //background-color: ;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, 
  rgba(0, 0, 0, 1) 0 1px 4px; 
  transform: translateY(0);
  transition: all;
  transition-duration: .35s;
}


@media (min-width: 1440px) {
    font-size: 24px;
    min-width: 196px;
	margin: 7vh 0vh;
}
`
var H2 = styled.h2`
margin: 3vh 0vh;
text-align: center;
	color: white;
@media (min-width: 1440px) {
    font-size: 24px;
    min-width: 196px;
	margin: 0vh 0vh;
}	
@media (max-width: 375px){
	text-align: center;
	margin: 0vh
}
//@max(max-width: 425px){
//	text-align:center;
//}
`


const Level = ({setLevel}) => {

	return (
		<DefaultContainer>
			<Wrapper>
				<H2>Choose a Difficulty?</H2>
				<Button onClick={() => setLevel(3)}>
					<span>Easy</span>
				</Button>

				<Button onClick={() => setLevel(5)}>
					<span>Medium</span>
				</Button>
				<Button onClick={() => setLevel(7)}>
					<span>Hard</span>
				</Button>
			</Wrapper>
		</DefaultContainer>
	)

}
export default Level;
