import type { PageServerLoad } from './$types';
import { createClient } from '@vercel/kv';
import { env } from '$env/dynamic/private';
// we need to store the selected view in a store for all clients
import { writable } from 'svelte/store';
const selectedView = 'matches';
const kv = createClient({
	token: env.KV_REST_API_TOKEN ?? '',
	url: env.KV_REST_API_URL ?? ''
});

export const load: PageServerLoad = async ({ params }) => {
	try {
		await kv.set('selectedView', selectedView);
	} catch (e) {
		console.error(e);
	}
	try {
		const view = await kv.get('selectedView');
		return { view };
	} catch (e) {
		console.error(e);
		return e;
	}
};
