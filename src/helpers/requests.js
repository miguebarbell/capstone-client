
export const BASE_URL = "http://localhost:8080/";
// export const BASE_URL = "http://54.80.16.38:8080/";

export const AUTHENTICATION_REQUEST = async (endpoint, username, password) => {


	return await fetch(BASE_URL + endpoint, {
		method : "POST", headers: {
			'Accept': 'application/json',
			// 'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		}, body: JSON.stringify({
			                        username, password
		                        })
	});
};

export const PUBLIC_SCORES = async (difficulty) => {
	return await fetch(BASE_URL + `highscores/${difficulty}`);
};

export const USER_SCORES = async (difficulty, username, jwt) => {

	return await fetch(BASE_URL + `scores/${username}/${difficulty}`, {
		method: "GET", headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			// 'Access-Control-Allow-Origin': '*',
			'Authorization': `Bearer ${jwt}`
		}
	});
};

export const SUBMIT_SCORES = async (scoreObject, jwt) => {
	return await fetch(BASE_URL + `score`, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Authorization': `Bearer ${jwt}`
		},
		body: JSON.stringify(scoreObject)
	})

}
