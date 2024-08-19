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
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(mapStatsTeam.Dust2);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
const pickedMaps = matchDetailsData.voting.map.pick; // array of mapNames
const pickedStats = pickedMaps.map((map) => mapStatsTeam[map]);
export async function load() {
    return {
        mapStatsTeam,
        pickedStats,
        matchDetailsData,
        organizerData,
        teamsData,
        playerStats
    }
}