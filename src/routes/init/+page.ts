import { browser } from '$app/environment';
import { matchId } from '$lib/stores.js'


export async function load({ params }) {
    let storeId = ''
    const unsubscribe = matchId.subscribe(value => storeId = value);

    if (browser) {
        console.log("browser");
        const clientId = localStorage.getItem('matchId') || '';
        if (clientId != '' && clientId != storeId) {
            console.log("matchid in local storage, but not in store");
            matchId.set(clientId);
        } else if (clientId == '' && storeId != '') {
            console.log("matchid in store, but not in local storage");
            localStorage.setItem('matchId', storeId);
        } else if (clientId == '' && storeId == '') {
            console.log("no matchid in store or local storage");
        }


    } else {
        console.log("not browser:" + storeId);
        matchId.set(storeId);
    }
    unsubscribe();
    return {

        matchId: storeId
    }
}