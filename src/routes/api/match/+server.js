import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';
import { getMatchDetails } from '../../../lib/faceit';
import { getMatchStats } from '../../../lib/faceit';

let matchId = '';

export async function POST({ request }) {
	("api:" + matchId);
	const { newMatchId } = await request.json();
	matchId = newMatchId

	return json({ matchId });
}

export async function GET() {

	const data = await getMatchDetails(env.PUBLIC_MATCHID);
	const stats = await getMatchStats(env.PUBLIC_MATCHID);


	let series = []

	for (let i = 0; i < stats.rounds.length; i++) {
		if (i == 2) {
			series.push({
				map: stats.rounds[i].round_stats.Map,
				scoreLeft: stats.rounds[i].teams[0].team_stats,
				scoreRight: stats.rounds[i].teams[1].team_stats,
			})
		}
		else {
			series.push({
				map: stats.rounds[i].round_stats.Map,
				picked: i == 0 ? 0 : 1,
				scoreLeft: stats.rounds[i].teams[0].team_stats,
				scoreRight: stats.rounds[i].teams[1].team_stats,
			})
		}
	}

	const response = {
		primaryTeam: null,
		series: [
			{
				"map": "Inferno",
				"picked": "0",
				"scoreLeft": 16,
				"scoreRight": 14
			},
			{
				"map": "Overpass",
				"picked": "1",
				"scoreRight": 0,
				"scoreLeft": 0,
				"currentlyPlaying": true
			},
			{
				"map": "Nuke",
				"scoreLeft": 0,
				"scoreRight": 0
			}
		],
		seriesName: [],
		seriesNumber: null,
	};

	return json(data);
}