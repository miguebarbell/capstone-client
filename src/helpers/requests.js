const BASE_URL = "http://localhost:8080/";

export const AUTHENTICATION_REQUEST = async (endpoint, username, password) => {


	return await fetch(BASE_URL + endpoint, {
		method : "POST",
		headers: {
			'Accept'      : 'application/json',
			'Content-Type': 'application/json'
		},
		body   : JSON.stringify({
			                        username,
			                        password
		                        })
	});
};
