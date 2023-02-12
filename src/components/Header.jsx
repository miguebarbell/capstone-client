import styled from "styled-components";
import {HEADER_HEIGHT} from "./Home";

const HeaderContainer = styled.div`
	height: ${({headerHeight}) => headerHeight};
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
  font-size: 24px;
`
const Header = ({user}) => {
	return (
		<HeaderContainer headerHeight={HEADER_HEIGHT}>
			{user ?
			 user :
			 "Guest"
			}
		</HeaderContainer>
	)
}

export default Header;
