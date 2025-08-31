# Pappaliiga OBS

A professional FACEIT match statistics overlay system designed for esports broadcasting and streaming. This application provides comprehensive match analytics, player performance data, and team comparisons for CS:GO and CS2 matches.

## Features

### 🎯 **Match Statistics**

- **Map Statistics**: Detailed map-by-map breakdowns including round wins, team performance, and match results
- **Player Statistics**: Individual player analytics with K/D ratios, ADR, headshot percentages, and performance metrics

### 🔗 **FACEIT Integration**

- Direct FACEIT API integration for real-time match data
- Support for both CS:GO and CS2 matches
- Automatic match ID extraction from FACEIT URLs

### 🎥 **OBS Ready**

- Clean, overlay-friendly interface designed for broadcasting
- Dedicated view pages without input elements for seamless streaming
- Responsive design that works across different screen sizes

### 🚀 **Smart URL Handling**

Supports multiple input formats:

- Direct match IDs: `1-58d8dbd0-dc69-4077-9970-7893f3fc07dc`
- CS:GO URLs: `https://www.faceit.com/en/csgo/room/1-abc123.../scoreboard`
- CS2 URLs: `https://www.faceit.com/en/cs2/room/1-abc123.../scoreboard`

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- FACEIT API access

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/oplehtinen/pappaliiga-obs.git
   cd pappaliiga-obs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```bash
   # FACEIT API Configuration
   FACEIT_API_KEY=your_faceit_api_key_here
   PUBLIC_MATCHID=default_match_id_for_testing
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to access the application.

## Usage

### For Streamers and Broadcasters

1. **Navigate to Statistics Page**

   - Go to `/mapstats` for map-by-map analysis
   - Go to `/playerstats` for individual player metrics

2. **Enter Match Data**

   - Paste a FACEIT match URL or enter the match ID directly
   - The application automatically extracts the match ID from URLs

3. **View Clean Statistics**
   - You'll be redirected to a dedicated view page (`/mapstats/view` or `/playerstats/view`)
   - These pages contain only the statistics without input elements
   - Perfect for OBS browser source integration

### Direct View Links

You can also directly access statistics by constructing URLs:

- Map Stats: `https://your-domain.com/mapstats/view?id=MATCH_ID`
- Player Stats: `https://your-domain.com/playerstats/view?id=MATCH_ID`

## API Endpoints

### `/api/match-data`

Fetches comprehensive match data from FACEIT API.

**Query Parameters:**

- `matchId` (required): FACEIT match ID

**Response:**

```json
{
	"matchDetailsData": {
		/* Match details */
	},
	"teamsData": {
		/* Team information */
	},
	"organizerData": {
		/* Tournament/organizer data */
	}
}
```

**Error Handling:**

- `404`: Match not found or invalid match ID
- `401`: Authentication issues with FACEIT API
- `500`: Server or API errors

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte           # Main application layout
│   ├── +page.svelte             # Landing page with documentation
│   ├── mapstats/
│   │   ├── +page.svelte         # Map stats input page
│   │   └── view/+page.svelte    # Map stats display page
│   ├── playerstats/
│   │   ├── +page.svelte         # Player stats input page
│   │   └── view/+page.svelte    # Player stats display page
│   ├── api/
│   │   └── match-data/+server.ts # FACEIT API endpoint
│   └── [components...]          # Statistics display components
├── lib/
│   ├── components/
│   │   └── MatchIdInput.svelte  # Reusable match input component
│   ├── faceit.ts                # FACEIT API client
│   └── [other utilities...]
└── stores.ts                    # Svelte stores for state management
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Architecture Decisions

**Redirect-Based Navigation**: Instead of hiding/showing components, the app uses dedicated routes for input and display. This provides:

- Clean URLs for direct linking
- Better separation of concerns
- OBS-friendly pages without UI clutter

**Component Structure**: Statistics components are reusable and can be embedded in different page contexts while maintaining their functionality.

## Deployment

### Vercel (Recommended)

This project is configured for Vercel deployment with the SvelteKit Vercel adapter.

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Node.js applications. Refer to the [SvelteKit deployment documentation](https://kit.svelte.dev/docs/adapters) for platform-specific instructions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Environment Variables

| Variable         | Description                                  | Required |
| ---------------- | -------------------------------------------- | -------- |
| `FACEIT_API_KEY` | Your FACEIT API key for accessing match data | Yes      |
| `PUBLIC_MATCHID` | Default match ID for testing/development     | No       |

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS with DaisyUI components
- **API**: FACEIT REST API
- **Deployment**: Vercel (with SvelteKit adapter)
- **Language**: TypeScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, issues, or feature requests, please use the [GitHub Issues](https://github.com/oplehtinen/pappaliiga-obs/issues) page.
