import { PUBLIC_MATCHID } from "$env/static/public";
import type { matchId } from "$lib/dataTypes";
import { getMatchDetails, getOrganizerDetails, getTeamStatsForMap, getTournamentStatsForPlayer } from "$lib/faceit";
const matchDetailsData = await getMatchDetails(PUBLIC_MATCHID as matchId);

const organizerData = await getOrganizerDetails(matchDetailsData.organizer_id);

const teamsData = matchDetailsData.teams;

const playerStats = await getTournamentStatsForPlayer(matchDetailsData.competition_id, teamsData);
const tournamentMaps = [
    'Inferno',
    'Vertigo',
    'Ancient',
    'Mirage',
    'Nuke',
    'Dust2',
    'Anubis'
]
const teamArr = [teamsData.faction1, teamsData.faction2];
const mapStatsTeam = await getTeamStatsForMap(teamArr, tournamentMaps);
const pickedMaps = matchDetailsData.voting.map.pick; // array of mapNames
const pickedStats = {}
// loop through keys in mapstatsteam
for (const key in mapStatsTeam) {
    // compare key to values in pickedMaps array. 
    // pickedmaps will have de_ suffix, mapStatsTeam will not
    const mapName = key.replace('de_', '');
    if (pickedMaps.includes(mapName)) {
        console.log('picked map: ' + mapName);
        pickedStats[key] = mapStatsTeam[key];
    }
}
console.log(pickedStats);
export async function load() {
    return {
        mapStatsTeam,
        pickedMaps,
        pickedStats,
        matchDetailsData,
        organizerData,
        teamsData,
        playerStats
    }
}