import { FACEIT_API_KEY } from '$env/static/private';
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

import { maps as staticMapData } from './maps';

const faceitAPI = async (endpoint: string, log?: boolean) => {
	const response = await fetch(`https://open.faceit.com/data/v4/${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${FACEIT_API_KEY}`,
			Accept: 'application/json'
		}
	});
	const json = await response.json();
	// if error, log it
	if (json.error) {
		console.error('endpoint FAILED:' + endpoint);
		console.error(json.error);
		return json;
	}

	if (log) {
		console.log(json.body)
	}

	return json;
};

const getMatchDetails = async (id: matchId): Promise<matchDetails> => {
	const endpoint = `matches/${id}`;
	const data = await faceitAPI(endpoint);
	return data;
};

const getTournamentDetails = async (tournamentId: string): Promise<tournamentDetails> => {
	const endpoint = `championships/${tournamentId}`;
	const data = await faceitAPI(endpoint);
	return data;
};

const getOrganizerDetails = async (organizerId: string) => {
	const endpoint = `organizers/${organizerId}`;
	const data = await faceitAPI(endpoint);
	return data;
};

const getMatchStats = async (matchId: string): Promise<matchStats[]> => {
	const endpoint = `matches/${matchId}/stats`;
	const data = await faceitAPI(endpoint);
	return data.rounds;
};

const getTournamentStatsForPlayer = async (tournamentId: tournamentId, teams: teams): Promise<teams> => {
	const endpoint = `hubs/${tournamentId}/stats?offset=0&limit=100`;
	const data = await faceitAPI(endpoint);

	// for each team, get the player stats
	if (teams && teams.faction1) {
		for (let i = 0; i < teams.faction1.roster.length; i++) {
			const player = teams.faction1.roster[i];
			if (!data.players) continue;
			const playerStats = data.players.find((p: { [key: string]: any }) => p.player_id === player.player_id)?.stats;
			teams.faction1.roster[i].stats = playerStats;
		}
	}
	if (teams && teams.faction2) {
		for (let i = 0; i < teams.faction2.roster.length; i++) {
			const player = teams.faction2.roster[i];
			if (!data.players) continue;
			const playerStats = data.players.find((p: { [key: string]: any }) => p.player_id === player.player_id)?.stats;
			teams.faction2.roster[i].stats = playerStats;
		}
	}
	return teams;
};
const mapData = async (teamId: teamId): Promise<mapData[]> => {
	const endpoint = `teams/${teamId}/stats/cs2`;
	const data = await faceitAPI(endpoint);

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
		const emptyMapStat: mapStat = {
			Matches: 0,
			Wins: 0,
			'Win Rate %': 0
		}
		for (let i = 0; i < tournamentMaps.length; i++) {
			const mapName = tournamentMaps[i];

			mapStats[mapName] = {
				label: mapName,
				img_regular: staticMapData[mapName].image_lg,
				map_stats: [emptyMapStat, emptyMapStat]
			};
		}
		for (let i = 0; i < teams.length; i++) {
			const team = teams[i];
			if (!team || !team.faction_id) break;
			const maps = await mapData(team.faction_id);
			//(maps);
			// for each map, get the stats
			for (let j = 0; j < maps.length; j++) {
				const map = maps[j];


				const mapName = map.label;
				const teamName = 'team' + (i + 1);
				const mapData: mapData = {
					img_regular: staticMapData[mapName]?.image_lg || map.img_regular,
					label: map.label
				};

				if (!(map && map.stats && map.stats.Matches)) continue;
				const mapStat: mapStat = {
					Matches: parseFloat(map.stats.Matches as unknown as string),
					Wins: parseFloat(map.stats.Wins as unknown as string),
					'Win Rate %': map.stats['Win Rate %']
				};

				// if the map is not in the tournament maps, skip it

				if (!tournamentMaps.includes(mapName)) {
					continue;
				}
				mapStats[mapName].label = mapData.label;
				mapStats[mapName].img_regular = mapData.img_regular;
				if (!mapStats[mapName].map_stats) continue;
				mapStats[mapName].map_stats[i] = mapStat;




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
		if (!mapStat.map_stats) continue;
		if (mapStat.map_stats[0].Matches == -1 && mapStat.map_stats[1].Matches == -1) {
			delete mapStats[map];
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
