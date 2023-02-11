import {useState} from "react";
import styled from "styled-components";
import {AUTHENTICATION_REQUEST} from "../helpers/requests";

const Container = styled.div``;
const Label = styled.label``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  * {
    margin: 5px 0;
    text-align: center;
  }
`;
const Input = styled.input``;
const Button = styled.button``;
const Login = ({setJwt, setUser, endpoint}) => {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await AUTHENTICATION_REQUEST(endpoint, username, password)
			.then(res => res.json())
			.then(res => {
				setJwt(res.jwt)
				setUser(username)
			})
	};

	return (
		<Container>
			<Form>
				<Label htmlFor={"name"}>Username</Label>
				<Input type="text"
				       id={"name"}
				       placeholder="John"
				       onChange={(e) => setUsername(e.target.value)}
				/>

				<Label htmlFor={"password"}>Password</Label>
				<Input type="password"
				       id={"password"}
				       placeholder={"youR5ecret_pA55"}
				       onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={(e) => handleSubmit(e)}>Submit</Button>
			</Form>
		</Container>
		// setJwt(the thing that you grabeb in the response)
	);
};

export default Login;
