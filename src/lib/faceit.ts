import { PUBLIC_FACEIT_API_KEY } from '$env/static/public';
import type {
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
	teams,
	teamStats,
	tournamentDetails,
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

const getTournamentDetails = async (tournamentId: string): Promise<tournamentDetails> => {
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
	console.log(data);
	return data.rounds;
};

const getTournamentStatsForPlayer = async (tournamentId: tournamentId, teams: teams): Promise<teams> => {
	const endpoint = `hubs/${tournamentId}/stats?offset=0&limit=100`;
	const data = await faceitAPI(endpoint);
	console.log('tournid' + tournamentId);
	// for each team, get the player stats
	for (let i = 0; i < teams.faction1.roster.length; i++) {
		const player = teams.faction1.roster[i];
		const playerStats = data.players.find((p: { [key: string]: any }) => p.player_id === player.player_id)?.stats;
		teams.faction1.roster[i].stats = playerStats;
	}
	for (let i = 0; i < teams.faction2.roster.length; i++) {
		const player = teams.faction2.roster[i];
		const playerStats = data.players.find((p: { [key: string]: any }) => p.player_id === player.player_id)?.stats;
		teams.faction2.roster[i].stats = playerStats;
	}
	return teams;
};
const mapData = async (teamId: teamId): Promise<mapData[]> => {
	const endpoint = `teams/${teamId}/stats/cs2`;
	const data = await faceitAPI(endpoint);
	console.log(data);
	const maps = data?.segments || [];
	console.log(maps);
	return maps;
};
const getTeamStatsForMaps = async (
	teams: team[],
	tournamentMaps: mapName[]
): Promise<mapStatsForTeams> => {
	// for each team, get the map stats
	const createMapStats = async (): Promise<mapStatsForTeams> => {
		const mapStats: mapStatsForTeams = {};
		const emptyMapStat: mapStat = {
			Matches: -1,
			Wins: -1,
			'Win Rate %': -1
		};
		// for each mapName, add an empty object to mapStats
		for (let i = 0; i < tournamentMaps.length; i++) {
			const mapName = tournamentMaps[i];

			mapStats[mapName] = {
				label: mapName,
				img_regular: '',
				map_stats: [emptyMapStat, emptyMapStat]
			};
		}
		for (let i = 0; i < teams.length; i++) {
			const team = teams[i];
			const maps = await mapData(team.faction_id);
			//(maps);
			// for each map, get the stats
			for (let j = 0; j < maps.length; j++) {
				const map = maps[j];
				console.log("----------------------------------")
				console.log(map)
				const mapName = map.label;
				const teamName = 'team' + (i + 1);
				const mapData: mapData = {
					img_regular: map.img_regular,
					label: map.label
				};
				if (!(map && map.stats && map.stats.Matches)) continue;
				const mapStat: mapStat = {
					Matches: parseFloat(map.stats.Matches as unknown as string),
					Wins: parseFloat(map.stats.Wins as unknown as string),
					'Win Rate %': map.stats['Win Rate %']
				};
				console.log("TYPE OF:" + typeof mapStat.Matches);
				//qqconsole.log(mapStat);

				// if the map is not in the tournament maps, skip it
				console.log(tournamentMaps);

				if (!tournamentMaps.includes(mapName)) {
					console.log('skipping map: ' + mapName);
					continue;
				}
				if (!mapStats[mapName].map_stats) continue;
				mapStats[mapName].map_stats[i] = mapStat;
				console.log('mapName: ' + mapName);
				console.log(mapStats[mapName].map_stats[i]);
				console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
				mapStats[mapName].label = mapData.label;
				mapStats[mapName].img_regular = mapData.img_regular;

				//maps[map.label] = mapStat;
			}
		}
		return new Promise((resolve) => {
			//console.log(mapStats);
			resolve(mapStats);
		});
	};

	const mapStats = await createMapStats();

	// loop through the maps, if there is only 1 team, add the other team's stats as 0
	for (const map in mapStats) {
		const mapStat = mapStats[map];
		if (!mapStat.map_stats) continue;
		if (mapStat.map_stats[0].Matches == -1 && mapStat.map_stats[1].Matches == -1) {
			delete mapStats[map];
		}
	}
	console.log(mapStats);
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
