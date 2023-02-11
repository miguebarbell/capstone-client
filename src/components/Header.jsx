const Header = ({user, jwt}) => {
	return (
		<h1>{user} - {jwt}</h1>
	)
}

export default Header;
