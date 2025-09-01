// Mock data for different match game states based on FACEIT API structure
import type {
	matchDetails,
	matchStats,
	matchId,
	team,
	player,
	playerId,
	teamId,
	organizerId,
	tournamentId,
	mapStatsForTeams,
	mapData,
	mapStat
} from './dataTypes';

// Mock Match IDs for different states
export const MOCK_MATCH_IDS = {
	SCHEDULED: 'match-scheduled-123' as matchId,
	ONGOING_MAP1: 'match-ongoing-map1-456' as matchId,
	ONGOING_MAP2: 'match-ongoing-map2-789' as matchId,
	FINISHED: 'match-finished-abc' as matchId,
	NOT_FOUND: 'match-not-found-xyz' as matchId,
	INVALID_DATA: 'match-invalid-data-def' as matchId
} as const;

// Common team data
const mockTeam1: team = {
	faction_id: 'team1-id' as teamId,
	name: 'Team Alpha',
	avatar: 'https://example.com/team1-avatar.jpg',
	roster: [
		{
			player_id: 'player1-id' as playerId,
			nickname: 'Alpha1',
			avatar: 'https://example.com/player1-avatar.jpg',
		},
		{
			player_id: 'player2-id' as playerId,
			nickname: 'Alpha2',
			avatar: 'https://example.com/player2-avatar.jpg',
		},
		{
			player_id: 'player3-id' as playerId,
			nickname: 'Alpha3',
			avatar: 'https://example.com/player3-avatar.jpg',
		},
		{
			player_id: 'player4-id' as playerId,
			nickname: 'Alpha4',
			avatar: 'https://example.com/player4-avatar.jpg',
		},
		{
			player_id: 'player5-id' as playerId,
			nickname: 'Alpha5',
			avatar: 'https://example.com/player5-avatar.jpg',
		}
	],
	score: 0
};

const mockTeam2: team = {
	faction_id: 'team2-id' as teamId,
	name: 'Team Beta',
	avatar: 'https://example.com/team2-avatar.jpg',
	roster: [
		{
			player_id: 'player6-id' as playerId,
			nickname: 'Beta1',
			avatar: 'https://example.com/player6-avatar.jpg',
		},
		{
			player_id: 'player7-id' as playerId,
			nickname: 'Beta2',
			avatar: 'https://example.com/player7-avatar.jpg',
		},
		{
			player_id: 'player8-id' as playerId,
			nickname: 'Beta3',
			avatar: 'https://example.com/player8-avatar.jpg',
		},
		{
			player_id: 'player9-id' as playerId,
			nickname: 'Beta4',
			avatar: 'https://example.com/player9-avatar.jpg',
		},
		{
			player_id: 'player10-id' as playerId,
			nickname: 'Beta5',
			avatar: 'https://example.com/player10-avatar.jpg',
		}
	],
	score: 0
};

// Mock match details for different states
export const MOCK_MATCH_DETAILS: Record<string, matchDetails> = {
	[MOCK_MATCH_IDS.SCHEDULED]: {
		match_id: MOCK_MATCH_IDS.SCHEDULED,
		competition_id: 'tournament-123' as tournamentId,
		competition_name: 'Test Tournament',
		organizer_id: 'organizer-123' as organizerId,
		teams: {
			faction1: { ...mockTeam1 },
			faction2: { ...mockTeam2 }
		},
		voting: {
			map: { pick: ['de_inferno', 'de_mirage', 'de_dust2'] }
		},
		round: 0,
		scheduled_at: Date.now() + 3600000, // 1 hour from now
		configured_at: Date.now() - 1800000, // 30 minutes ago
		started_at: 0, // Not started yet
		finished_at: 0, // Not finished
		results: {
			winner: '',
			score: {
				faction1: 0,
				faction2: 0
			}
		},
		status: 'READY' // Match is scheduled but not started
	},

	[MOCK_MATCH_IDS.ONGOING_MAP1]: {
		match_id: MOCK_MATCH_IDS.ONGOING_MAP1,
		competition_id: 'tournament-123' as tournamentId,
		competition_name: 'Test Tournament',
		organizer_id: 'organizer-123' as organizerId,
		teams: {
			faction1: { ...mockTeam1, score: 8 },
			faction2: { ...mockTeam2, score: 4 }
		},
		voting: {
			map: { pick: ['de_inferno', 'de_mirage', 'de_dust2'] }
		},
		round: 1,
		scheduled_at: Date.now() - 7200000, // 2 hours ago
		configured_at: Date.now() - 5400000, // 1.5 hours ago
		started_at: Date.now() - 3600000, // 1 hour ago
		finished_at: 0, // Not finished
		results: {
			winner: '',
			score: {
				faction1: 0,
				faction2: 0
			}
		},
		status: 'ONGOING' // Match is currently being played - first map
	},

	[MOCK_MATCH_IDS.ONGOING_MAP2]: {
		match_id: MOCK_MATCH_IDS.ONGOING_MAP2,
		competition_id: 'tournament-123' as tournamentId,
		competition_name: 'Test Tournament',
		organizer_id: 'organizer-123' as organizerId,
		teams: {
			faction1: { ...mockTeam1, score: 1 },
			faction2: { ...mockTeam2, score: 1 }
		},
		voting: {
			map: { pick: ['de_inferno', 'de_mirage', 'de_dust2'] }
		},
		round: 2,
		scheduled_at: Date.now() - 10800000, // 3 hours ago
		configured_at: Date.now() - 9000000, // 2.5 hours ago
		started_at: Date.now() - 7200000, // 2 hours ago
		finished_at: 0, // Not finished
		results: {
			winner: '',
			score: {
				faction1: 1,
				faction2: 1
			}
		},
		status: 'ONGOING' // Match is currently being played - second map, series is 1-1
	},

	[MOCK_MATCH_IDS.FINISHED]: {
		match_id: MOCK_MATCH_IDS.FINISHED,
		competition_id: 'tournament-123' as tournamentId,
		competition_name: 'Test Tournament',
		organizer_id: 'organizer-123' as organizerId,
		teams: {
			faction1: { ...mockTeam1, score: 2 },
			faction2: { ...mockTeam2, score: 1 }
		},
		voting: {
			map: { pick: ['de_inferno', 'de_mirage', 'de_dust2'] }
		},
		round: 3,
		scheduled_at: Date.now() - 14400000, // 4 hours ago
		configured_at: Date.now() - 12600000, // 3.5 hours ago
		started_at: Date.now() - 10800000, // 3 hours ago
		finished_at: Date.now() - 3600000, // 1 hour ago
		results: {
			winner: 'team1-id',
			score: {
				faction1: 2,
				faction2: 1
			}
		},
		status: 'FINISHED' // Match is completed
	}
};

// Mock match stats (round by round statistics)
export const MOCK_MATCH_STATS: Record<string, matchStats[]> = {
	[MOCK_MATCH_IDS.SCHEDULED]: [], // No stats for scheduled match

	[MOCK_MATCH_IDS.ONGOING_MAP1]: [
		{
			match_round: 1,
			played: true,
			round_stats: {
				Winner: 'team1-id' as teamId,
				Rounds: 30,
				Score: '16-14',
				Map: 'de_inferno'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '16',
						'Team Win': '1'
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 3,
							Result: 1,
							'Penta Kills': 0,
							'K/D Ratio': 1.2,
							Kills: 18,
							'Triple Kills': 1,
							'K/R Ratio': 0.6,
							Headshots: 8,
							Deaths: 15,
							'Headshots %': 44,
							Assists: 4
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '14',
						'Team Win': '0'
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 2,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.9,
							Kills: 14,
							'Triple Kills': 0,
							'K/R Ratio': 0.5,
							Headshots: 6,
							Deaths: 16,
							'Headshots %': 43,
							Assists: 3
						}
					}))
				}
			]
		}
	],

	[MOCK_MATCH_IDS.ONGOING_MAP2]: [
		// First map stats (finished)
		{
			match_round: 1,
			played: true,
			round_stats: {
				Winner: 'team1-id' as teamId,
				Rounds: 30,
				Score: '16-14',
				Map: 'de_inferno'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '16',
						'Team Win': '1'
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 3,
							Result: 1,
							'Penta Kills': 0,
							'K/D Ratio': 1.2,
							Kills: 18,
							'Triple Kills': 1,
							'K/R Ratio': 0.6,
							Headshots: 8,
							Deaths: 15,
							'Headshots %': 44,
							Assists: 4
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '14',
						'Team Win': '0'
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 2,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.9,
							Kills: 14,
							'Triple Kills': 0,
							'K/R Ratio': 0.5,
							Headshots: 6,
							Deaths: 16,
							'Headshots %': 43,
							Assists: 3
						}
					}))
				}
			]
		},
		// Second map stats (finished)
		{
			match_round: 2,
			played: true,
			round_stats: {
				Winner: 'team2-id' as teamId,
				Rounds: 28,
				Score: '13-16',
				Map: 'de_mirage'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '13',
						'Team Win': '0'
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 2,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.8,
							Kills: 16,
							'Triple Kills': 0,
							'K/R Ratio': 0.57,
							Headshots: 7,
							Deaths: 20,
							'Headshots %': 44,
							Assists: 5
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '16',
						'Team Win': '1'
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 1,
							MVPs: 4,
							Result: 1,
							'Penta Kills': 0,
							'K/D Ratio': 1.25,
							Kills: 20,
							'Triple Kills': 1,
							'K/R Ratio': 0.71,
							Headshots: 9,
							Deaths: 16,
							'Headshots %': 45,
							Assists: 3
						}
					}))
				}
			]
		},
		// Third map stats (ongoing)
		{
			match_round: 3,
			played: false, // Currently being played
			round_stats: {
				Winner: '',
				Rounds: 12, // Current round count
				Score: '8-4', // Current score
				Map: 'de_dust2'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '8',
						'Team Win': ''
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 2,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 1.5,
							Kills: 12,
							'Triple Kills': 1,
							'K/R Ratio': 1.0,
							Headshots: 5,
							Deaths: 8,
							'Headshots %': 42,
							Assists: 2
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '4',
						'Team Win': ''
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 1,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.67,
							Kills: 8,
							'Triple Kills': 0,
							'K/R Ratio': 0.67,
							Headshots: 3,
							Deaths: 12,
							'Headshots %': 38,
							Assists: 3
						}
					}))
				}
			]
		}
	],

	[MOCK_MATCH_IDS.FINISHED]: [
		// All three maps completed
		{
			match_round: 1,
			played: true,
			round_stats: {
				Winner: 'team1-id' as teamId,
				Rounds: 30,
				Score: '16-14',
				Map: 'de_inferno'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '16',
						'Team Win': '1'
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 3,
							Result: 1,
							'Penta Kills': 0,
							'K/D Ratio': 1.2,
							Kills: 18,
							'Triple Kills': 1,
							'K/R Ratio': 0.6,
							Headshots: 8,
							Deaths: 15,
							'Headshots %': 44,
							Assists: 4
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '14',
						'Team Win': '0'
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 2,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.9,
							Kills: 14,
							'Triple Kills': 0,
							'K/R Ratio': 0.5,
							Headshots: 6,
							Deaths: 16,
							'Headshots %': 43,
							Assists: 3
						}
					}))
				}
			]
		},
		{
			match_round: 2,
			played: true,
			round_stats: {
				Winner: 'team2-id' as teamId,
				Rounds: 28,
				Score: '13-16',
				Map: 'de_mirage'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '13',
						'Team Win': '0'
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 2,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.8,
							Kills: 16,
							'Triple Kills': 0,
							'K/R Ratio': 0.57,
							Headshots: 7,
							Deaths: 20,
							'Headshots %': 44,
							Assists: 5
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '16',
						'Team Win': '1'
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 1,
							MVPs: 4,
							Result: 1,
							'Penta Kills': 0,
							'K/D Ratio': 1.25,
							Kills: 20,
							'Triple Kills': 1,
							'K/R Ratio': 0.71,
							Headshots: 9,
							Deaths: 16,
							'Headshots %': 45,
							Assists: 3
						}
					}))
				}
			]
		},
		{
			match_round: 3,
			played: true,
			round_stats: {
				Winner: 'team1-id' as teamId,
				Rounds: 30,
				Score: '16-14',
				Map: 'de_dust2'
			},
			teams: [
				{
					team_id: 'team1-id' as teamId,
					team_stats: {
						'Final Score': '16',
						'Team Win': '1'
					},
					players: mockTeam1.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 5,
							Result: 1,
							'Penta Kills': 1,
							'K/D Ratio': 1.4,
							Kills: 21,
							'Triple Kills': 2,
							'K/R Ratio': 0.7,
							Headshots: 9,
							Deaths: 15,
							'Headshots %': 43,
							Assists: 4
						}
					}))
				},
				{
					team_id: 'team2-id' as teamId,
					team_stats: {
						'Final Score': '14',
						'Team Win': '0'
					},
					players: mockTeam2.roster.map(player => ({
						player_id: player.player_id,
						nickname: player.nickname,
						avatar: player.avatar,
						player_stats: {
							'Quadro Kills': 0,
							MVPs: 3,
							Result: 0,
							'Penta Kills': 0,
							'K/D Ratio': 0.85,
							Kills: 17,
							'Triple Kills': 1,
							'K/R Ratio': 0.57,
							Headshots: 7,
							Deaths: 20,
							'Headshots %': 41,
							Assists: 5
						}
					}))
				}
			]
		}
	]
};

// Mock organizer data
export const MOCK_ORGANIZER_DATA = {
	organizer_id: 'organizer-123',
	name: 'Test Tournament Organizer',
	avatar: 'https://example.com/organizer-avatar.jpg'
};

// Mock team stats for maps
export const MOCK_TEAM_STATS_FOR_MAPS: mapStatsForTeams = {
	Inferno: {
		label: 'Inferno',
		img_regular: 'https://example.com/inferno.jpg',
		map_stats: [
			{
				Matches: 10,
				Wins: 7,
				'Win Rate %': 70
			},
			{
				Matches: 8,
				Wins: 3,
				'Win Rate %': 37.5
			}
		] as [mapStat, mapStat]
	},
	Mirage: {
		label: 'Mirage',
		img_regular: 'https://example.com/mirage.jpg',
		map_stats: [
			{
				Matches: 12,
				Wins: 6,
				'Win Rate %': 50
			},
			{
				Matches: 15,
				Wins: 9,
				'Win Rate %': 60
			}
		] as [mapStat, mapStat]
	},
	Dust2: {
		label: 'Dust2',
		img_regular: 'https://example.com/dust2.jpg',
		map_stats: [
			{
				Matches: 8,
				Wins: 5,
				'Win Rate %': 62.5
			},
			{
				Matches: 6,
				Wins: 2,
				'Win Rate %': 33.3
			}
		] as [mapStat, mapStat]
	}
};

// Mock player tournament stats
export const MOCK_PLAYER_STATS = {
	faction1: {
		...mockTeam1,
		roster: mockTeam1.roster.map(player => ({
			...player,
			stats: {
				'K/D Ratio': Math.random() * 0.5 + 0.8, // 0.8 - 1.3
				'Avg K/R': Math.random() * 0.3 + 0.5, // 0.5 - 0.8
				'Win Rate %': Math.random() * 20 + 60, // 60 - 80%
				Matches: Math.floor(Math.random() * 50) + 20, // 20 - 70 matches
				Wins: 0 // Will be calculated based on win rate
			}
		}))
	},
	faction2: {
		...mockTeam2,
		roster: mockTeam2.roster.map(player => ({
			...player,
			stats: {
				'K/D Ratio': Math.random() * 0.5 + 0.8, // 0.8 - 1.3
				'Avg K/R': Math.random() * 0.3 + 0.5, // 0.5 - 0.8
				'Win Rate %': Math.random() * 20 + 60, // 60 - 80%
				Matches: Math.floor(Math.random() * 50) + 20, // 20 - 70 matches
				Wins: 0 // Will be calculated based on win rate
			}
		}))
	}
};

// Calculate wins based on win rate
MOCK_PLAYER_STATS.faction1.roster.forEach(player => {
	player.stats.Wins = Math.floor(player.stats.Matches * (player.stats['Win Rate %'] / 100));
});
MOCK_PLAYER_STATS.faction2.roster.forEach(player => {
	player.stats.Wins = Math.floor(player.stats.Matches * (player.stats['Win Rate %'] / 100));
});