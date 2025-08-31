import { json } from '@sveltejs/kit';
import { getMatchDetails, getMatchStats, getOrganizerDetails, getTeamStatsForMap, getTournamentStatsForPlayer } from '$lib/faceit';
import type { matchId } from '$lib/dataTypes';

export async function GET({ url }) {
	const matchId = url.searchParams.get('matchId');
	
	if (!matchId) {
		return json({ error: 'Match ID is required' }, { status: 400 });
	}

	try {
		// Get all the match data similar to what +layout.server.ts does
		const matchDetailsData = await getMatchDetails(matchId as matchId);
		const organizerData = await getOrganizerDetails(matchDetailsData.organizer_id);
		const teamsData = matchDetailsData.teams;
		
		const playerStats = await getTournamentStatsForPlayer(matchDetailsData.competition_id, teamsData);
		const tournamentMaps = [
			'Inferno',
			'Train',
			'Ancient',
			'Mirage',
			'Nuke',
			'Dust2',
			'Anubis'
		];
		
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
		return json({ error: 'Failed to fetch match data' }, { status: 500 });
	}
}