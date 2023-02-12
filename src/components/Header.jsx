const Header = ({user, jwt}) => {
	return (
		<h1>{user ? user : "Guest"} {jwt ? jwt : "- no jwt"}</h1>
	)
}

export default Header;
