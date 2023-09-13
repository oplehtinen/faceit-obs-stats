import { PUBLIC_FACEIT_API_KEY } from '$env/static/public';

// cache the data for 1 minute
const cache = new Map();
const cacheTTL = 1 * 60 * 1000;


const faceitAPI = async (endpoint) => {

	// if the data is in the cache, return it
	if (cache.has(endpoint)) {
		const { data, timestamp } = cache.get(endpoint);
		if (Date.now() - timestamp < cacheTTL) {
			console.log('cache hit');
			return data;
		}
	}

	const response = await fetch(`https://open.faceit.com/data/v4/${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${PUBLIC_FACEIT_API_KEY}`,
			Accept: 'application/json'
		}
	});
	const json = await response.json();
	// add the data to the cache
	cache.set(endpoint, {
		json,
		timestamp: Date.now()
	});


	return json;
};

const getMatchDetails = async (matchId: string) => {
	const endpoint = `matches/${matchId}`;
	const data = await faceitAPI(endpoint);
	//console.log(data);
	return data;
};

const getTournamentDetails = async (tournamentId: string) => {
	const endpoint = `championships/${tournamentId}`;
	const data = await faceitAPI(endpoint);
	//console.log(data);
	return data;
};

const getOrganizerDetails = async (organizerId: string) => {
	const endpoint = `organizers/${organizerId}`;
	const data = await faceitAPI(endpoint);
	//console.log(data);
	return data;
};

const getMatchStats = async (matchId: string) => {
	const endpoint = `matches/${matchId}/stats`;
	const data = await faceitAPI(endpoint);

	// if error, return empty object
	if (data.errors) {
		return {};
	}
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
	//console.log(teams);
	const mapData = async (teamId: string, map: string) => {
		const endpoint = `teams/${teamId}/stats/csgo`;
		const data = await faceitAPI(endpoint);
		const maps = data?.segments || [];
		// find the correct map and return the map stats
		const mapStats = maps.find((mapStats) => mapStats.label === map);
		//console.log(mapStats);
		return mapStats ? mapStats.stats : {};
	};

	const teamStats = [
		await mapData(teams[0].faction_id, map),
		await mapData(teams[1].faction_id, map)
	];

	/* 	// if team stats are not found, return empty object
		if (!teamStats[0].Matches || !teamStats[1].Matches) {
			return {
				Matches: 0,
				
			};
		} else {
			console.log("map stats for " + map);
			console.log(teamStats);
		} */

	//console.log(teamStats);
	return teamStats;
};

export {
	getMatchDetails,
	getTournamentDetails,
	getOrganizerDetails,
	getMatchStats,
	getTournamentStatsForPlayer,
	getTeamStatsForMap
};
