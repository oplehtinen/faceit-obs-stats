/** @type {import('./$types').Actions} */

import { updateMatchId } from '$lib/dispatch';


export const actions = {
    default: async ({ request }) => {
        console.log('init hud');
        const data = await request.formData();
        const url = data.get('matchUrl');

        if (url?.toString() != '') {
            const newMatchId: string = url?.toString().split('/').pop()?.toString() || ''
            //console.log("new id:" + newMatchId);
            updateMatchId(newMatchId);

        }


    }
};

