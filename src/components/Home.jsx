import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {Button} from "./Level";
export var HEADER_HEIGHT =	9;
export var DefaultContainer = styled.div`
  color: white;
  position: absolute;
  height: ${HEADER_HEIGHT + 100}vh;
  top: -${HEADER_HEIGHT}vh;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: Atraries;
    src: url(../font/PressStart2P.ttf);
  }
`;
const Wrapper = styled.div`
  button {
	  width: 100%;
  }
`;
const Home = ({jwt}) => {
	const navigator = useNavigate();
	return (
		<DefaultContainer>
			<Wrapper>
				<h1>Wack A Mole</h1>
				<Button onClick={()=>navigator("/play")}><span>Play</span></Button>
				{jwt ? <Button onClick={()=>window.location.reload()}><span>Logout</span></Button> :
				 <>
					 <Button onClick={()=>navigator("/login")}><span>Login</span></Button>
					 <Button onClick={()=>navigator("/register")}><span>Register</span></Button>
				 </>
				}
			</Wrapper>
		</DefaultContainer>
	);

};

export default Home;
