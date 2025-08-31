/** @type {import('./$types').Actions} */

import { updateMatchId } from '$lib/dispatch';

export const actions = {
	default: async ({ request }) => {
		('init hud');
		const data = await request.formData();
		const url = data.get('matchUrl');

		if (url?.toString() != '') {
			const newMatchId: string = url?.toString().split('/').pop()?.toString() || '';
			//("new id:" + newMatchId);
			updateMatchId(newMatchId);
		}
	}
};
