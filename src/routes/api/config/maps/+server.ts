import { json } from '@sveltejs/kit';
import { maps as staticMapData } from '$lib/maps';

// Since we're in server context, we need to handle state differently
// For simplicity, we'll use an in-memory approach
// In production, this should use a database

let mapPoolConfig = {
	activeMaps: ['Inferno', 'Train', 'Ancient', 'Mirage', 'Nuke', 'Dust2', 'Anubis']
};

export async function GET() {
	// Get all available maps from static data
	const availableMaps = Object.keys(staticMapData);

	return json({
		activeMaps: mapPoolConfig.activeMaps,
		availableMaps: availableMaps
	});
}

export async function POST({ request }) {
	try {
		const body = await request.json();

		if (!body.activeMaps || !Array.isArray(body.activeMaps)) {
			return json({ error: 'Invalid request: activeMaps must be an array' }, { status: 400 });
		}

		// Validate that all maps exist in our static data
		const availableMaps = Object.keys(staticMapData);
		const invalidMaps = body.activeMaps.filter((map: string) => !availableMaps.includes(map));

		if (invalidMaps.length > 0) {
			return json(
				{
					error: `Invalid maps: ${invalidMaps.join(', ')}`,
					availableMaps
				},
				{ status: 400 }
			);
		}

		// Update the configuration
		mapPoolConfig = {
			activeMaps: body.activeMaps
		};

		return json({
			success: true,
			activeMaps: mapPoolConfig.activeMaps
		});
	} catch (error) {
		console.error('Error updating map pool config:', error);
		return json({ error: 'Failed to update configuration' }, { status: 500 });
	}
}

// Helper function to get current config (prefix with _ to make it valid SvelteKit export)
export function _getCurrentMapPool(): string[] {
	return mapPoolConfig.activeMaps;
}
