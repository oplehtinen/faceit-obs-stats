import { browser } from '$app/environment';
import { matchId } from '$lib/stores.js'


export async function load({ params }) {
    let storeId = ''
    const unsubscribe = matchId.subscribe(value => storeId = value);

    if (browser) {
        ("browser");
        const clientId = localStorage.getItem('matchId') || '';
        if (clientId != '' && clientId != storeId) {
            ("matchid in local storage, but not in store");
            matchId.set(clientId);
        } else if (clientId == '' && storeId != '') {
            ("matchid in store, but not in local storage");
            localStorage.setItem('matchId', storeId);
        } else if (clientId == '' && storeId == '') {
            ("no matchid in store or local storage");
        }


    } else {
        ("not browser:" + storeId);
        matchId.set(storeId);
    }
    unsubscribe();
    return {

        matchId: storeId
    }
}