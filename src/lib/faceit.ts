import { PUBLIC_FACEIT_API_KEY } from '$env/static/public';

const faceitAPI = async (endpoint) => {
	const response = await fetch(`https://open.faceit.com/data/v4/${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${PUBLIC_FACEIT_API_KEY}`,
			Accept: 'application/json'
		}
	});
	const data = await response.json();
	return data;
};

// get match details
const getMatchDetails = async (matchId: string) => {
	const endpoint = `matches/${matchId}`;
	const data = await faceitAPI(endpoint);
	//console.log(data);
	return data;
};

const getMatchStatsForPlayer = async (matchId: string) => {
	const endpoint = `matches/${matchId}/stats`;
	const data = await faceitAPI(endpoint);
	//console.log(data);
	return data;
};

const getTournamentStatsForPlayer = async (tournamentId: string) => {
	const endpoint = `hubs/${tournamentId}/stats?offset=0&limit=100`;
	const data = await faceitAPI(endpoint);
	//console.log(data);
	return data.players;
};
export { getMatchDetails, getMatchStatsForPlayer, getTournamentStatsForPlayer };
