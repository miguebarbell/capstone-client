import styled from "styled-components";

export const HEADER_HEIGHT =	9;
const HeaderContainer = styled.div`
	height: ${({height}) => height};
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
  font-size: 24px;
`
const Header = ({user}) => {
	return (
		<HeaderContainer height={HEADER_HEIGHT}>{user ?
		                                         user : "Guest"}</HeaderContainer>
	)
}

export default Header;
