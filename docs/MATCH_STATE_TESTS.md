# Match Game State Tests

This document describes the comprehensive test suite for simulating different game states for FACEIT CS2 matches based on the API definitions in `swagger.json`.

## Test Framework

- **Framework**: Vitest (compatible with SvelteKit)
- **Location**: `src/routes/api/match-data/server.test.ts`
- **Mock Data**: `src/lib/mockMatchData.ts`

## Test Scenarios

### 1. Scheduled Match State
Tests for matches that are configured but not yet started.

**Characteristics:**
- Status: `READY`
- `started_at`: 0 (not started)
- `finished_at`: 0 (not finished)
- Team scores: 0-0
- Match stats: Empty array
- Picked maps: Available but no rounds played

**Test Cases:**
- Correct data structure for scheduled match
- Team composition validation (5 players per team)
- Map picking data available

### 2. Ongoing Match States

#### 2.1 First Map in Progress
Tests for matches where the first map is being played.

**Characteristics:**
- Status: `ONGOING`
- `started_at`: Timestamp > 0
- `finished_at`: 0 (not finished)
- Round: 1
- Match stats: 1 completed map
- Current scores on first map

#### 2.2 Series in Progress (Map 2/3)
Tests for best-of-3 series where teams are 1-1 and playing the final map.

**Characteristics:**
- Status: `ONGOING`  
- Series score: 1-1
- Round: 2
- Match stats: 2 completed maps + 1 ongoing map
- Current live scores on the decisive map

**Test Cases:**
- Player statistics validation
- Map progression tracking
- Live score updates
- Series score consistency

### 3. Finished Match State
Tests for completed matches.

**Characteristics:**
- Status: `FINISHED`
- `started_at` and `finished_at`: Both > 0
- Final series result (e.g., 2-1)
- Winner determined
- All maps marked as `played: true`

**Test Cases:**
- Final series score validation
- Individual map winners
- Complete match statistics
- Winner determination

### 4. Error States
Tests for various error conditions and edge cases.

**Test Cases:**
- Missing `matchId` parameter (400 error)
- Match not found (404 error)
- Incomplete match data (404 error)
- Missing team data (404 error)
- API authentication failures (401 error)
- General API errors (500 error)

### 5. State Transitions
Tests that validate proper progression between match states.

**Test Cases:**
- Scheduled → Ongoing transition
- Map progression during series
- Data consistency across state changes

### 6. Data Consistency
Tests that ensure data integrity across different parts of the API response.

**Test Cases:**
- Team IDs consistent across match details and stats
- Player counts match across data structures
- Map picking and stats processing
- Statistical data validation

## Mock Data Structure

The mock data in `src/lib/mockMatchData.ts` includes:

### Match IDs for Different States
```typescript
MOCK_MATCH_IDS = {
  SCHEDULED: 'match-scheduled-123',
  ONGOING_MAP1: 'match-ongoing-map1-456', 
  ONGOING_MAP2: 'match-ongoing-map2-789',
  FINISHED: 'match-finished-abc',
  NOT_FOUND: 'match-not-found-xyz',
  INVALID_DATA: 'match-invalid-data-def'
}
```

### Team Data
- **Team Alpha** vs **Team Beta**
- 5 players per team with realistic names and IDs
- Player statistics including K/D ratios, kills, deaths, MVPs, etc.

### Match Statistics by State
- **Scheduled**: No stats (empty array)
- **Ongoing Map 1**: First map completed (16-14)
- **Ongoing Map 2**: Two maps completed (1-1), third map live (8-4)
- **Finished**: All three maps completed (2-1 series)

### Map Pool
Standard CS2 competitive maps:
- de_inferno
- de_mirage  
- de_dust2
- de_train
- de_ancient
- de_nuke
- de_anubis

## Running the Tests

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm test -- --watch
```

## Integration with FACEIT API

The tests mock the following functions from `$lib/faceit`:
- `getMatchDetails()` - Main match information
- `getMatchStats()` - Round-by-round statistics  
- `getOrganizerDetails()` - Tournament organizer info
- `getTeamStatsForMap()` - Historical team performance on maps
- `getTournamentStatsForPlayer()` - Player statistics in tournament

## API Response Validation

Each test validates the complete API response structure including:
- Match details with proper status and timestamps
- Team information with roster and scores
- Map picking and voting data
- Player statistics and performance metrics
- Error handling with appropriate HTTP status codes
- Data consistency across different response sections

## Benefits

This test suite provides:
1. **Comprehensive Coverage**: Tests all major match states and transitions
2. **Real-world Scenarios**: Based on actual FACEIT API structure from swagger.json
3. **Error Handling**: Validates proper error responses for edge cases
4. **Data Integrity**: Ensures consistency across complex nested data structures
5. **Regression Prevention**: Catches issues when API structure changes
6. **Documentation**: Serves as living documentation of expected API behavior