import { json } from '@sveltejs/kit';
import {
	getMatchDetails,
	getMatchStats,
	getOrganizerDetails,
	getTeamStatsForMap,
	getTournamentStatsForPlayer
} from '$lib/faceit';
import type { matchId } from '$lib/dataTypes';
import {
	MOCK_MATCH_IDS,
	MOCK_MATCH_DETAILS,
	MOCK_MATCH_STATS,
	MOCK_ORGANIZER_DATA,
	MOCK_TEAM_STATS_FOR_MAPS,
	MOCK_PLAYER_STATS
} from '$lib/mockMatchData';

export async function GET({ url }) {
	const matchId = url.searchParams.get('matchId');
	const useMockData = url.searchParams.get('mock') === 'true';

	if (!matchId) {
		return json({ error: 'Match ID is required' }, { status: 400 });
	}

	// Handle mock data requests
	if (useMockData || Object.keys(MOCK_MATCH_DETAILS).includes(matchId)) {
		try {
			const mockMatchDetails = MOCK_MATCH_DETAILS[matchId];
			const mockMatchStats = MOCK_MATCH_STATS[matchId] || [];

			if (!mockMatchDetails) {
				// If explicitly requesting mock data but match doesn't exist, treat as regular API call
				if (useMockData) {
					// Fall through to regular API behavior
				} else {
					return json({ error: 'Mock match not found' }, { status: 404 });
				}
			} else {
				const teamsData = mockMatchDetails.teams;
				const organizerData = MOCK_ORGANIZER_DATA;
				const playerStats = MOCK_PLAYER_STATS;
				const mapStatsTeam = MOCK_TEAM_STATS_FOR_MAPS;
				const pickedMaps = mockMatchDetails.voting?.map?.pick || [];
				const pickedStats: { [n: number]: unknown } = {};

				// Process picked stats for mock data
				for (const key in mapStatsTeam) {
					const mapName = 'de_'.concat(key.toLowerCase());
					for (let i = 0; i < pickedMaps.length; i++) {
						if (pickedMaps[i] === mapName) {
							pickedStats[i] = mapStatsTeam[key];
						}
					}
				}

				return json({
					mapStatsTeam,
					pickedMaps,
					pickedStats,
					matchDetailsData: mockMatchDetails,
					organizerData,
					teamsData,
					playerStats,
					matchStats: mockMatchStats,
					_mockData: true // Flag to indicate this is mock data
				});
			}
		} catch (error) {
			console.error('Error serving mock data:', error);
			// Fall through to regular API behavior
		}
	}

	try {
		// Get all the match data similar to what +layout.server.ts does
		const matchDetailsData = await getMatchDetails(matchId as matchId);

		// Validate that match details and teams data exist
		if (!matchDetailsData || !matchDetailsData.teams) {
			return json({ error: 'Invalid match data received' }, { status: 404 });
		}

		const teamsData = matchDetailsData.teams;

		// Validate that both factions exist
		if (!teamsData.faction1 || !teamsData.faction2) {
			return json({ error: 'Incomplete team data' }, { status: 404 });
		}

		const organizerData = await getOrganizerDetails(matchDetailsData.organizer_id);
		const playerStats = await getTournamentStatsForPlayer(
			matchDetailsData.competition_id,
			teamsData
		);
		const tournamentMaps = ['Inferno', 'Train', 'Ancient', 'Mirage', 'Nuke', 'Dust2', 'Anubis'];

		const teamArr = [teamsData.faction1, teamsData.faction2];
		const mapStatsTeam = await getTeamStatsForMap(teamArr, tournamentMaps);
		const pickedMaps = matchDetailsData.voting?.map?.pick || [];
		const pickedStats: { [n: number]: unknown } = {};
		const matchStats = await getMatchStats(matchId as matchId);

		// Process picked stats similar to +layout.server.ts
		for (const key in mapStatsTeam) {
			const mapName = 'de_'.concat(key.toLowerCase());
			for (let i = 0; i < pickedMaps.length; i++) {
				if (pickedMaps[i] === mapName) {
					pickedStats[i] = mapStatsTeam[key];
				}
			}
		}

		return json({
			mapStatsTeam,
			pickedMaps,
			pickedStats,
			matchDetailsData,
			organizerData,
			teamsData,
			playerStats,
			matchStats
		});
	} catch (error) {
		console.error('Error fetching match data:', error);

		// Provide more specific error messages based on the error type
		if (error instanceof Error) {
			if (error.message.includes('404') || error.message.includes('Not Found')) {
				return json({ error: 'Match not found' }, { status: 404 });
			}
			if (error.message.includes('401') || error.message.includes('Unauthorized')) {
				return json({ error: 'API authentication failed' }, { status: 401 });
			}
		}

		return json({ error: 'Failed to fetch match data' }, { status: 500 });
	}
}
