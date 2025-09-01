import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from './+server';
import {
	MOCK_MATCH_IDS,
	MOCK_MATCH_DETAILS,
	MOCK_MATCH_STATS,
	MOCK_ORGANIZER_DATA,
	MOCK_TEAM_STATS_FOR_MAPS,
	MOCK_PLAYER_STATS
} from '$lib/mockMatchData';

// Mock the faceit module functions
vi.mock('$lib/faceit', () => ({
	getMatchDetails: vi.fn(),
	getMatchStats: vi.fn(),
	getOrganizerDetails: vi.fn(),
	getTeamStatsForMap: vi.fn(),
	getTournamentStatsForPlayer: vi.fn()
}));

import {
	getMatchDetails,
	getMatchStats,
	getOrganizerDetails,
	getTeamStatsForMap,
	getTournamentStatsForPlayer
} from '$lib/faceit';

describe('Match Data API - Different Game States', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('Scheduled Match State', () => {
		it('should return correct data for a scheduled match', async () => {
			const matchId = MOCK_MATCH_IDS.SCHEDULED;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			// Setup mocks
			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			// Create mock request
			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const mockRequest = { url: mockUrl };

			// Call the API endpoint
			const response = await GET(mockRequest);
			const data = await response.json();

			// Assertions for scheduled match
			expect(response.status).toBe(200);
			expect(data.matchDetailsData.status).toBe('READY');
			expect(data.matchDetailsData.started_at).toBe(0);
			expect(data.matchDetailsData.finished_at).toBe(0);
			expect(data.matchDetailsData.teams.faction1.score).toBe(0);
			expect(data.matchDetailsData.teams.faction2.score).toBe(0);
			expect(data.matchStats).toEqual([]); // No stats for scheduled match
			expect(data.pickedMaps).toEqual(['de_inferno', 'de_mirage', 'de_dust2']);
		});

		it('should have correct team composition for scheduled match', async () => {
			const matchId = MOCK_MATCH_IDS.SCHEDULED;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Check team details
			expect(data.matchDetailsData.teams.faction1.name).toBe('Team Alpha');
			expect(data.matchDetailsData.teams.faction2.name).toBe('Team Beta');
			expect(data.matchDetailsData.teams.faction1.roster).toHaveLength(5);
			expect(data.matchDetailsData.teams.faction2.roster).toHaveLength(5);
		});
	});

	describe('Ongoing Match States', () => {
		it('should return correct data for ongoing match - first map', async () => {
			const matchId = MOCK_MATCH_IDS.ONGOING_MAP1;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Assertions for ongoing match - first map
			expect(response.status).toBe(200);
			expect(data.matchDetailsData.status).toBe('ONGOING');
			expect(data.matchDetailsData.started_at).toBeGreaterThan(0);
			expect(data.matchDetailsData.finished_at).toBe(0);
			expect(data.matchDetailsData.round).toBe(1);
			expect(data.matchStats).toHaveLength(1); // First map completed
			expect(data.matchStats[0].round_stats.Map).toBe('de_inferno');
			expect(data.matchStats[0].round_stats.Score).toBe('16-14');
			expect(data.matchStats[0].played).toBe(true);
		});

		it('should return correct data for ongoing match - second map', async () => {
			const matchId = MOCK_MATCH_IDS.ONGOING_MAP2;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Assertions for ongoing match - second map (series 1-1, third map in progress)
			expect(response.status).toBe(200);
			expect(data.matchDetailsData.status).toBe('ONGOING');
			expect(data.matchDetailsData.started_at).toBeGreaterThan(0);
			expect(data.matchDetailsData.finished_at).toBe(0);
			expect(data.matchDetailsData.round).toBe(2);
			expect(data.matchDetailsData.teams.faction1.score).toBe(1);
			expect(data.matchDetailsData.teams.faction2.score).toBe(1);
			expect(data.matchStats).toHaveLength(3); // Two completed maps + one ongoing
			
			// Check map completion status
			expect(data.matchStats[0].played).toBe(true); // First map finished
			expect(data.matchStats[1].played).toBe(true); // Second map finished
			expect(data.matchStats[2].played).toBe(false); // Third map ongoing
			expect(data.matchStats[2].round_stats.Score).toBe('8-4'); // Current score
		});

		it('should have correct player statistics for ongoing match', async () => {
			const matchId = MOCK_MATCH_IDS.ONGOING_MAP1;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Check player statistics are present
			const firstTeamStats = data.matchStats[0].teams[0];
			const secondTeamStats = data.matchStats[0].teams[1];

			expect(firstTeamStats.players).toHaveLength(5);
			expect(secondTeamStats.players).toHaveLength(5);

			// Check player stats structure
			const playerStats = firstTeamStats.players[0].player_stats;
			expect(playerStats).toHaveProperty('K/D Ratio');
			expect(playerStats).toHaveProperty('Kills');
			expect(playerStats).toHaveProperty('Deaths');
			expect(playerStats).toHaveProperty('MVPs');
			expect(playerStats).toHaveProperty('Headshots %');
		});
	});

	describe('Finished Match State', () => {
		it('should return correct data for finished match', async () => {
			const matchId = MOCK_MATCH_IDS.FINISHED;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Assertions for finished match
			expect(response.status).toBe(200);
			expect(data.matchDetailsData.status).toBe('FINISHED');
			expect(data.matchDetailsData.started_at).toBeGreaterThan(0);
			expect(data.matchDetailsData.finished_at).toBeGreaterThan(0);
			expect(data.matchDetailsData.results.winner).toBe('team1-id');
			expect(data.matchDetailsData.results.score.faction1).toBe(2);
			expect(data.matchDetailsData.results.score.faction2).toBe(1);
			expect(data.matchStats).toHaveLength(3); // All three maps completed
			
			// All maps should be marked as played
			data.matchStats.forEach((mapStats) => {
				expect(mapStats.played).toBe(true);
			});
		});

		it('should have correct final series score', async () => {
			const matchId = MOCK_MATCH_IDS.FINISHED;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Check individual map winners
			expect(data.matchStats[0].round_stats.Winner).toBe('team1-id'); // First map
			expect(data.matchStats[1].round_stats.Winner).toBe('team2-id'); // Second map  
			expect(data.matchStats[2].round_stats.Winner).toBe('team1-id'); // Third map

			// Final series result should be 2-1 to team1
			expect(data.matchDetailsData.results.score.faction1).toBe(2);
			expect(data.matchDetailsData.results.score.faction2).toBe(1);
		});
	});

	describe('Error States', () => {
		it('should return 400 error when matchId is missing', async () => {
			const mockUrl = new URL('http://localhost/api/match-data');
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(400);
			expect(data.error).toBe('Match ID is required');
		});

		it('should return 404 error when match is not found', async () => {
			const matchId = MOCK_MATCH_IDS.NOT_FOUND;

			vi.mocked(getMatchDetails).mockResolvedValue(null);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.error).toBe('Invalid match data received');
		});

		it('should return 404 error when match data is incomplete', async () => {
			const matchId = MOCK_MATCH_IDS.INVALID_DATA;

			// Mock incomplete match data (missing teams)
			vi.mocked(getMatchDetails).mockResolvedValue({
				...MOCK_MATCH_DETAILS[MOCK_MATCH_IDS.SCHEDULED],
				teams: null
			});

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.error).toBe('Invalid match data received');
		});

		it('should return 404 error when faction data is incomplete', async () => {
			const matchId = MOCK_MATCH_IDS.INVALID_DATA;

			// Mock incomplete faction data
			vi.mocked(getMatchDetails).mockResolvedValue({
				...MOCK_MATCH_DETAILS[MOCK_MATCH_IDS.SCHEDULED],
				teams: {
					faction1: MOCK_MATCH_DETAILS[MOCK_MATCH_IDS.SCHEDULED].teams.faction1,
					faction2: null
				}
			});

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.error).toBe('Incomplete team data');
		});

		it('should return 500 error when API calls fail', async () => {
			const matchId = MOCK_MATCH_IDS.SCHEDULED;

			vi.mocked(getMatchDetails).mockRejectedValue(new Error('API Error'));

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(500);
			expect(data.error).toBe('Failed to fetch match data');
		});

		it('should return 404 error for specific API 404 errors', async () => {
			const matchId = MOCK_MATCH_IDS.NOT_FOUND;

			vi.mocked(getMatchDetails).mockRejectedValue(new Error('404 Not Found'));

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(404);
			expect(data.error).toBe('Match not found');
		});

		it('should return 401 error for authentication failures', async () => {
			const matchId = MOCK_MATCH_IDS.SCHEDULED;

			vi.mocked(getMatchDetails).mockRejectedValue(new Error('401 Unauthorized'));

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			expect(response.status).toBe(401);
			expect(data.error).toBe('API authentication failed');
		});
	});

	describe('Match State Transitions', () => {
		it('should properly handle map picking state to ongoing state transition', async () => {
			// Test that scheduled match has picked maps but no started time
			const scheduledMatchId = MOCK_MATCH_IDS.SCHEDULED;
			const scheduledData = MOCK_MATCH_DETAILS[scheduledMatchId];

			vi.mocked(getMatchDetails).mockResolvedValue(scheduledData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[scheduledMatchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${scheduledMatchId}`);
			const scheduledResponse = await GET({ url: mockUrl });
			const scheduledResult = await scheduledResponse.json();

			expect(scheduledResult.pickedMaps).toHaveLength(3);
			expect(scheduledResult.matchDetailsData.started_at).toBe(0);
			expect(scheduledResult.matchStats).toHaveLength(0);

			// Now test ongoing match has started time and match stats
			const ongoingMatchId = MOCK_MATCH_IDS.ONGOING_MAP1;
			const ongoingData = MOCK_MATCH_DETAILS[ongoingMatchId];

			vi.mocked(getMatchDetails).mockResolvedValue(ongoingData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[ongoingMatchId]);

			const ongoingUrl = new URL(`http://localhost/api/match-data?matchId=${ongoingMatchId}`);
			const ongoingResponse = await GET({ url: ongoingUrl });
			const ongoingResult = await ongoingResponse.json();

			expect(ongoingResult.matchDetailsData.started_at).toBeGreaterThan(0);
			expect(ongoingResult.matchStats).toHaveLength(1);
		});

		it('should handle series progression correctly', async () => {
			// Test that map stats accumulate correctly as series progresses
			const ongoingMap2Id = MOCK_MATCH_IDS.ONGOING_MAP2;
			const ongoingData = MOCK_MATCH_DETAILS[ongoingMap2Id];

			vi.mocked(getMatchDetails).mockResolvedValue(ongoingData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[ongoingMap2Id]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${ongoingMap2Id}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Should have 3 map stats: 2 completed + 1 ongoing
			expect(data.matchStats).toHaveLength(3);
			expect(data.matchStats[0].played).toBe(true); // First map completed
			expect(data.matchStats[1].played).toBe(true); // Second map completed
			expect(data.matchStats[2].played).toBe(false); // Third map ongoing

			// Series score should be 1-1
			expect(data.matchDetailsData.teams.faction1.score).toBe(1);
			expect(data.matchDetailsData.teams.faction2.score).toBe(1);
		});
	});

	describe('Data Consistency', () => {
		it('should maintain consistent team data across all endpoints', async () => {
			const matchId = MOCK_MATCH_IDS.ONGOING_MAP1;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Verify team IDs are consistent across all data structures
			const matchTeam1Id = data.matchDetailsData.teams.faction1.faction_id;
			const matchTeam2Id = data.matchDetailsData.teams.faction2.faction_id;
			const statsTeam1Id = data.matchStats[0].teams[0].team_id;
			const statsTeam2Id = data.matchStats[0].teams[1].team_id;

			expect(matchTeam1Id).toBe(statsTeam1Id);
			expect(matchTeam2Id).toBe(statsTeam2Id);

			// Verify player counts are consistent
			const matchTeam1Players = data.matchDetailsData.teams.faction1.roster.length;
			const matchTeam2Players = data.matchDetailsData.teams.faction2.roster.length;
			const statsTeam1Players = data.matchStats[0].teams[0].players.length;
			const statsTeam2Players = data.matchStats[0].teams[1].players.length;

			expect(matchTeam1Players).toBe(5);
			expect(matchTeam2Players).toBe(5);
			expect(statsTeam1Players).toBe(5);
			expect(statsTeam2Players).toBe(5);
		});

		it('should have valid map stats processing', async () => {
			const matchId = MOCK_MATCH_IDS.ONGOING_MAP1;
			const mockMatchData = MOCK_MATCH_DETAILS[matchId];

			vi.mocked(getMatchDetails).mockResolvedValue(mockMatchData);
			vi.mocked(getMatchStats).mockResolvedValue(MOCK_MATCH_STATS[matchId]);
			vi.mocked(getOrganizerDetails).mockResolvedValue(MOCK_ORGANIZER_DATA);
			vi.mocked(getTeamStatsForMap).mockResolvedValue(MOCK_TEAM_STATS_FOR_MAPS);
			vi.mocked(getTournamentStatsForPlayer).mockResolvedValue(MOCK_PLAYER_STATS);

			const mockUrl = new URL(`http://localhost/api/match-data?matchId=${matchId}`);
			const response = await GET({ url: mockUrl });
			const data = await response.json();

			// Check that picked maps are processed correctly
			expect(data.pickedMaps).toEqual(['de_inferno', 'de_mirage', 'de_dust2']);
			
			// Check that map stats team data is present
			expect(data.mapStatsTeam).toBeDefined();
			expect(data.mapStatsTeam).toHaveProperty('Inferno');
			expect(data.mapStatsTeam).toHaveProperty('Mirage');
			expect(data.mapStatsTeam).toHaveProperty('Dust2');

			// Check that picked stats are processed
			expect(data.pickedStats).toBeDefined();
			expect(typeof data.pickedStats).toBe('object');
		});
	});
});