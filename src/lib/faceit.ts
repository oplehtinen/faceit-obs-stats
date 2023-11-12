import { PUBLIC_FACEIT_API_KEY } from '$env/static/public';
import type {
	mapData,
	mapData,
	mapData,
	mapName,
	mapStat,
	mapStatsForTeams,
	matchDetails,
	matchId,
	matchStats,
	playerStat,
	team,
	teamId,
	teamStats,
	tournamentId
} from './dataTypes';
// cache the data for 1 minute
const cache = new Map();
const cacheTTL = 1 * 60 * 1000;
import { endpointData } from '../stores';

const faceitAPI = async (endpoint: string) => {
	console.log(`https://open.faceit.com/data/v4/${endpoint}`);

	const response = await fetch(`https://open.faceit.com/data/v4/${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${PUBLIC_FACEIT_API_KEY}`,
			Accept: 'application/json'
		}
	});
	const json = await response.json();
	// if error, log it
	if (json.errors) {
		console.log(json.errors);
	}
	return json;
};

const getMatchDetails = async (id: matchId): Promise<matchDetails> => {
	const endpoint = `matches/${id}`;
	const data = await faceitAPI(endpoint);
	//(data);
	return data;
};

const getTournamentDetails = async (tournamentId: string): Promise<unknown> => {
	const endpoint = `championships/${tournamentId}`;
	const data = await faceitAPI(endpoint);
	//(data);
	return data;
};

const getOrganizerDetails = async (organizerId: string) => {
	const endpoint = `organizers/${organizerId}`;
	const data = await faceitAPI(endpoint);
	//(data);
	return data;
};

const getMatchStats = async (matchId: string): Promise<matchStats[]> => {
	const endpoint = `matches/${matchId}/stats`;
	const data = await faceitAPI(endpoint);

	// if error, return empty object
	if (data.errors) {
		return {};
	}
	console.log(data);
	return data;
};

const getTournamentStatsForPlayer = async (tournamentId: tournamentId): Promise<playerStat[]> => {
	const endpoint = `hubs/${tournamentId}/stats?offset=0&limit=100`;
	const data = await faceitAPI(endpoint);
	console.log('tournid' + tournamentId);
	//(data);
	return data.players;
};
const mapData = async (teamId: teamId): Promise<mapData[]> => {
	const endpoint = `teams/${teamId}/stats/csgo`;
	const data = await faceitAPI(endpoint);
	console.log(data);
	const maps = data?.segments || [];
	return maps;
};
const getTeamStatsForMaps = async (
	teams: team[],
	tournamentMaps: mapName[]
): Promise<mapStatsForTeams> => {
	// for each team, get the map stats
	const createMapStats = async (): Promise<mapStatsForTeams> => {
		const mapStats: mapStatsForTeams = {};
		for (let i = 0; i < teams.length; i++) {
			const team = teams[i];
			const maps = await mapData(team.faction_id);
			//(maps);
			// for each map, get the stats
			for (let j = 0; j < maps.length; j++) {
				const map = maps[j];
				const mapName = map.label;
				const teamName = 'team' + (i + 1);
				const mapData: mapData = {
					img_regular: map.img_regular,
					label: map.label
				};
				const mapStat: mapStat = {
					Matches: map.stats.Matches,
					Wins: map.stats.Wins,
					'Win Rate %': map.stats['Win Rate %']
				};

				// if the map is not in the tournament maps, skip it
				console.log(tournamentMaps);
				if (!tournamentMaps.includes(mapName)) {
					continue;
				}
				mapStats[mapName] = mapStats[mapName] || [];
				mapStats[mapName].stats = mapStats[mapName].stats || [];
				mapStats[mapName].mapData = mapData;
				mapStats[mapName].stats[i] = mapStat;

				//maps[map.label] = mapStat;
			}
		}
		return new Promise((resolve) => {
			resolve(mapStats);
		});
	};

	const mapStats = await createMapStats();

	// loop through the maps, if there is only 1 team, add the other team's stats as 0
	for (const map in mapStats) {
		const mapStat = mapStats[map];
		if (mapStat.stats[0] && !mapStat.stats[1]) {
			mapStat.stats[1] = {
				Matches: 0,
				Wins: 0,
				'Win Rate %': 0
			};
		}
	}
	return mapStats;
};

export {
	getMatchDetails,
	getTournamentDetails,
	getOrganizerDetails,
	getMatchStats,
	getTournamentStatsForPlayer,
	getTeamStatsForMaps as getTeamStatsForMap
};
