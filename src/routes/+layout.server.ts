// This file is now optional since we've moved to client-side data loading
// The server-side loading is kept for backwards compatibility with other pages
// but stats pages will use client-side loading

export async function load() {
    // Return empty data - stats pages will load their own data client-side
    return {
        mapStatsTeam: {},
        pickedMaps: [],
        pickedStats: {},
        matchDetailsData: null,
        organizerData: null,
        teamsData: null,
        playerStats: null,
        matchStats: []
    }
}
