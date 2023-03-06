import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {HEADER_HEIGHT} from "./Home";

const AuthButton = styled.button`
  font-family: Atraries;
  background: ${({color}) => color};
  cursor: pointer;
  margin: 0 2rem;
  padding: 0.5rem;
  border-radius: 5px;
  transition: 300ms;
  z-index: 20;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border: inset;
    border-color: black;
    box-shadow: rgba(0, 0, 0, .05) 0 5px 30px,
    rgba(0, 0, 0, 1) 0 1px 4px;
    transform: translateY(0);
    transition: all;
    transition-duration: .35s;
  }
`;
const HeaderContainer = styled.div`
  height: ${HEADER_HEIGHT};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-size: 24px;
  z-index: 15;
  position: fixed;
  top: 0;
  left: 0;

  span {
    cursor: pointer;
  }
`;
const Header = ({user}) => {
	const [buttons, setButtons] = useState(false);
	const navigator = useNavigate();
	useEffect(() => {
		const timeout = setTimeout(() => setButtons(false), 2000);
		return () => clearTimeout(timeout);
	}, [buttons]);
	const logout = () => {
		navigator("/");
		window.location.reload()
	}

	return (
		<HeaderContainer>
			{user ?
			 <>
				 {
					 !buttons ? <span onClick={() => setButtons(true)}>{user}</span> :
					 <>
						 <AuthButton color={"limegreen"} onClick={() => navigator("/")}>Home</AuthButton>
						 <AuthButton color={"red"} onClick={() => logout()}>Logout</AuthButton>
					 </>
				 }
			 </> :
			 <>
				 {buttons ? <div onClick={() => setButtons(false)}>
					          <AuthButton color={"limegreen"} onClick={() => navigator("/")}>Home</AuthButton>
					          <AuthButton color={"cyan"} onClick={() => navigator("/login")}>Login</AuthButton>
					          <AuthButton color={"green"} onClick={() => navigator("/register")}>Register</AuthButton></div> :
				  <span onClick={() => setButtons(true)}>Guess</span>}
			 </>
			}
		</HeaderContainer>
	);
};

export default Header;
