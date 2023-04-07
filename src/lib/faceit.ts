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

const getTeamStatsForMap = async (teams: Array<T>, map: string) => {
	console.log(teams);
	const mapData = async (teamId: string, map: string) => {
		const endpoint = `teams/${teamId}/stats/csgo`;
		const data = await faceitAPI(endpoint);
		const maps = data.segments;
		// find the correct map and return the map stats
		const mapStats = maps.find((mapStats) => mapStats.label === map);
		//console.log(mapStats);
		return mapStats.stats;
	};

	const teamStats = [
		await mapData(teams[0].faction_id, map),
		await mapData(teams[1].faction_id, map)
	];

	console.log(teamStats);
	return teamStats;
};

export { getMatchDetails, getMatchStatsForPlayer, getTournamentStatsForPlayer, getTeamStatsForMap };
