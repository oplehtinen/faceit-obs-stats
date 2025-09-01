# FACEIT OBS Stats

Match statistics overlay system for CS2 esports broadcasting and streaming. Provides match analytics, player performance data, and team comparisons.

## Features

- **Match Statistics**: Map breakdowns with round wins, team performance, and match results
- **Player Statistics**: Individual analytics with K/D ratios, ADR, headshot percentages, and performance metrics
- **FACEIT Integration**: Real-time match data from FACEIT API with automatic match ID extraction
- **OBS Ready**: Clean overlay interface for broadcasting without input elements
- **Smart URL Handling**: Supports direct match IDs and full FACEIT URLs

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/oplehtinen/pappaliiga-obs.git
   cd pappaliiga-obs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   FACEIT_API_KEY=your_faceit_api_key_here
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173`

## Usage

### For Streamers

1. Navigate to statistics page:
   - `/mapstats` for map analysis
   - `/playerstats` for player metrics

2. Enter match data:
   - Paste FACEIT match URL or enter match ID directly

3. View statistics on dedicated pages:
   - `/mapstats/view` or `/playerstats/view`
   - Clean pages without input elements for OBS

### Direct Links

Access statistics directly:
- Map Stats: `https://your-domain.com/mapstats/view?id=MATCH_ID`
- Player Stats: `https://your-domain.com/playerstats/view?id=MATCH_ID`

## OBS Integration

1. Add Browser Source in OBS
2. Set URL to desired page:
   - Map stats: `http://localhost:5173/mapstats`
   - Player stats: `http://localhost:5173/playerstats`
3. Set size to match canvas (e.g., 1920×1080)
4. Right-click source > Interact, paste match ID or URL
5. Optional: Enable "Shutdown source when not visible" to reset between scenes

## API

### `/api/match-data`

Fetches match data from FACEIT API.

**Parameters:**
- `matchId` (required): FACEIT match ID

**Response:**
```json
{
  "matchDetailsData": { /* Match details */ },
  "teamsData": { /* Team information */ },
  "organizerData": { /* Tournament data */ }
}
```

**Errors:**
- `404`: Match not found
- `401`: Authentication failed
- `500`: Server error

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte           # Main layout
│   ├── +page.svelte             # Landing page
│   ├── mapstats/
│   │   ├── +page.svelte         # Map stats input
│   │   └── view/+page.svelte    # Map stats display
│   ├── playerstats/
│   │   ├── +page.svelte         # Player stats input
│   │   └── view/+page.svelte    # Player stats display
│   └── api/
│       └── match-data/+server.ts # FACEIT API endpoint
├── lib/
│   ├── components/
│   │   └── MatchIdInput.svelte  # Match input component
│   └── faceit.ts                # FACEIT API client
└── stores.ts                    # State management
```

## Development

**Scripts:**
- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview build
- `npm run lint` - Run ESLint
- `npm run format` - Format code

## Deployment

### Vercel
1. Connect GitHub repository to Vercel
2. Set environment variables in dashboard
3. Auto-deploy on push to main

For other platforms, see [SvelteKit deployment docs](https://kit.svelte.dev/docs/adapters).

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `FACEIT_API_KEY` | FACEIT API key for match data | Yes |

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS with DaisyUI
- **API**: FACEIT REST API
- **Deployment**: Vercel
- **Language**: TypeScript

## License

MIT License - see [LICENSE](LICENSE) file.

## Support

Use [GitHub Issues](https://github.com/oplehtinen/pappaliiga-obs/issues) for support and feature requests.
