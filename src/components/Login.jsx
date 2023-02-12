import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {AUTHENTICATION_REQUEST} from "../helpers/requests";
import {HEADER_HEIGHT} from "./Header";
import {DefaultContainer} from "./Home";
import {Button} from "./Level";

const Form = styled.form`
	margin-top: ${HEADER_HEIGHT}vh;
	display: flex;
	flex-direction: column;
  button {
	  span {
		  height: initial;
	  }
  }
  input, label {
    margin: 15px 0;
    text-align: center;
    font-family: Atraries;
  }
`;
const Login = ({setJwt, setUser, endpoint}) => {

	const navigate = useNavigate();
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await AUTHENTICATION_REQUEST(endpoint, username, password)
			.then(res => res.json())
			.then(res => {
				setJwt(res.jwt);
				setUser(username);
			});
		navigate("/play");
	};

	return (
		<DefaultContainer>
			<Form>
				<label htmlFor={"name"}>Username</label>

				<br/>
				<input type="text"
				       id={"name"}
				       placeholder="John"
				       onChange={(e) => {
					       setUsername(e.target.value);
					       // setUser(e.target.value)
				       }}
				/>
				<br/>

				<label htmlFor={"password"}>Password</label>
				<br/>
				<input type="password"
				       id={"password"}
				       placeholder={"youR5ecret_pA55"}
				       onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={(e) => handleSubmit(e)}><span>{endpoint}</span></Button>
			</Form>
		</DefaultContainer>
		// setJwt(the thing that you grabeb in the response)
	);
};

export default Login;
