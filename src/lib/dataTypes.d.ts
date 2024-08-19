export type matchId = string & { _: never };
export type tournamentId = string & { _: never };
export type organizerId = string & { _: never };
export type teamId = string & { _: never };
export type players = Array<player>;
export type playerId = string & { _: never };
export type nickname = string;
export type playerAvatar = string;
export type teamLogo = string;
export type teamName = string;
export type teamScore = number;
export type mapName = string;
export type mapPicks = Array<mapName>;
export type matchStatus = string;
export type nextMapIndex = number;
export type player = {
	mapstats: any;
	stats?: any;
	player_id: playerId;
	nickname: nickname;
	avatar: playerAvatar;
}
/* export type mapData = {
	stats?: any;
	img_regular: string;
	image_lg: string;
	label: mapName;
	guid: mapName;
	game_map_id: mapName;
}; */
export type mapStat = {
	Matches: number;
	Wins: number;
	'Win Rate %': number;
}

export type playerStat = {
	'Quadro Kills': number;
	MVPs: number;
	Result: number;
	'Penta Kills': number;
	'K/D Ratio': number;
	Kills: number;
	'Triple Kills': number;
	'K/R Ratio': number;
	Headshots: number;
	Deaths: number;
	'Headshots %': number;
	Assists: number;
};

export type matchStats = {
	match_round: number;
	played: boolean;
	round_stats: {
		Winner: teamId;
		Rounds: number,
		Score: string,
		Map: mapName,

	}
	teams: [teamStats, teamStats];
};
export type team = {
	avatar: teamLogo;
	roster: players;
	faction_id: teamId;
	name: teamName;
	score: teamScore;
	stats?: playerStat;
	color?: string;
};
export type teams = {
	faction1: team;
	faction2: team;
};
export type mapStatsForTeams = {
	[key: mapName]: mapData;
};
export type mapData = {
	label: mapName;
	img_regular: string;
	stats: [mapStat, mapStat];
};
export type teamStats = {
	team1: mapStat;
	team2: mapStat;
}
export type matchResults = {
	winner: string;
	score: {
		faction1: teamScore;
		faction2: teamScore;
	};
}
export type matchDetails = {
	match_id: matchId;
	competition_id: tournamentId;
	competition_name: string;
	organizer_id: organizerId;
	teams: {
		faction1: team;
		faction2: team;
	};
	voting: {
		map: { pick: mapPicks };
	};
	"scheduled_at": number,
	"configured_at": number,
	"started_at": number,
	"finished_at": number,
	results: matchResults;
	status: matchStatus;
}
interface tournamentDetails { }
