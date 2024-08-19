/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AccessMode defines the access mode of a volume. */
export interface AccessMode {
	/** Intentionally empty. */
	BlockVolume?: TypeBlock;
	/**
	 * TypeMount contains options for using a volume as a Mount-type
	 * volume.
	 */
	MountVolume?: TypeMount;
	/**
	 * Scope defines the Scope of a Cluster Volume. This is how many nodes a
	 * Volume can be accessed simultaneously on.
	 */
	Scope?: Scope;
	/**
	 * SharingMode defines the Sharing of a Cluster Volume. This is how Tasks using a
	 * Volume at the same time can use it.
	 */
	Sharing?: SharingMode;
}

export interface Address {
	address?: string;
	city?: string;
	country?: string;
	postcode?: string;
}

export interface AlgorithmParameters {
	band?: Band;
}

export interface Assets {
	color?: string;
	icon?: string;
	image?: string;
}

/** AuthenticateOKBody authenticate o k body */
export interface AuthenticateOKBody {
	/** An opaque token used to authenticate a user after a successful login */
	IdentityToken: string;
	/** The status of the authentication */
	Status: string;
}

/** Availability specifies the availability of the volume. */
export type Availability = string;

export interface Band {
	/** @format int64 */
	value?: number;
}

export interface BirthDate {
	/** @format int64 */
	date?: number;
	/** @format int64 */
	month?: number;
	/** @format int64 */
	year?: number;
}

export interface Brackets {
	game?: string;
	matches?: BracketsMatch[];
	name?: string;
	rounds?: BracketsRound[];
	status?: string;
}

export interface BracketsFaction {
	avatar?: string;
	nickname?: string;
	team_id?: string;
}

export interface BracketsMatch {
	faceit_url?: string;
	match_id?: string;
	/** @format int64 */
	position?: number;
	results?: MatchResult;
	/** @format int64 */
	round?: number;
	state?: string;
	teams?: Record<string, BracketsFaction>;
}

export interface BracketsRound {
	/** @format int64 */
	best_of?: number;
	label?: string;
	/** @format int64 */
	matches?: number;
	/** @format int64 */
	round?: number;
	/** @format int64 */
	start_time?: number;
	starts_asap?: boolean;
	/** @format int64 */
	substitution_time?: number;
	substitutions_allowed?: boolean;
}

/**
 * CapacityRange describes the minimum and maximum capacity a volume should be
 * created with
 */
export interface CapacityRange {
	/**
	 * LimitBytes specifies that a volume must not be bigger than this. The
	 * value of 0 indicates an unspecified maximum
	 * @format int64
	 */
	LimitBytes?: number;
	/**
	 * RequiredBytes specifies that a volume must be at least this big. The
	 * value of 0 indicates an unspecified minimum.
	 * @format int64
	 */
	RequiredBytes?: number;
}

export interface Championship {
	anticheat_required?: boolean;
	avatar?: string;
	background_image?: string;
	championship_id?: string;
	/** @format int64 */
	championship_start?: number;
	/** @format int64 */
	checkin_clear?: number;
	checkin_enabled?: boolean;
	/** @format int64 */
	checkin_start?: number;
	cover_image?: string;
	/** @format int64 */
	current_subscriptions?: number;
	description?: string;
	faceit_url?: string;
	featured?: boolean;
	full?: boolean;
	game_data?: Game;
	game_id?: string;
	/** Deprecated: use championship_id instead */
	id?: string;
	join_checks?: JoinCheck;
	name?: string;
	organizer_data?: Organizer;
	organizer_id?: string;
	prizes?: Prize[];
	region?: string;
	rules_id?: string;
	schedule?: Record<string, ChampionshipSchedule>;
	screening?: ChampionshipScreening;
	seeding_strategy?: string;
	/** @format int64 */
	slots?: number;
	status?: string;
	stream?: ChampionshipStream;
	/** @format int64 */
	subscription_end?: number;
	/** @format int64 */
	subscription_start?: number;
	subscriptions_locked?: boolean;
	substitution_configuration?: SubstitutionConfiguration;
	/** @format int64 */
	total_groups?: number;
	/** @format int64 */
	total_prizes?: number;
	/** @format int64 */
	total_rounds?: number;
	type?: string;
}

export interface ChampionshipBounds {
	/** @format int64 */
	left?: number;
	/** @format int64 */
	right?: number;
}

export interface ChampionshipPlacement {
	id?: string;
	name?: string;
	type?: string;
}

export interface ChampionshipPlacementGroup {
	bounds?: ChampionshipBounds;
	placements?: ChampionshipPlacement[];
}

export interface ChampionshipResultList {
	/** @format int64 */
	end?: number;
	items?: ChampionshipPlacementGroup[];
	/** @format int64 */
	start?: number;
}

export interface ChampionshipSchedule {
	/** @format int64 */
	date?: number;
	status?: string;
}

export interface ChampionshipScreening {
	enabled?: boolean;
	id?: string;
}

export interface ChampionshipStream {
	active?: boolean;
	platform?: string;
	source?: string;
	title?: string;
}

export interface ChampionshipSubscription {
	coach?: string;
	coleader?: string;
	/** @format int64 */
	group?: number;
	leader?: string;
	roster?: string[];
	status?: string;
	substitutes?: string[];
	/** The Team holds information about a team. */
	team?: Team;
}

export interface ChampionshipSubscriptionsList {
	/** @format int64 */
	end?: number;
	items?: ChampionshipSubscription[];
	/** @format int64 */
	start?: number;
}

export interface ChampionshipsList {
	/** @format int64 */
	end?: number;
	items?: Championship[];
	/** @format int64 */
	start?: number;
}

export interface CheckIn {
	/** @format int64 */
	time?: number;
}

export interface ClanSearch {
	/**
	 * The clan's avatar url
	 * @example "https://faceit.com/images/example-clan-avatar.jpeg"
	 */
	avatar?: string;
	/**
	 * The game of the clan
	 * @example "csgo"
	 */
	game?: string;
	/**
	 * The id of the clan
	 * @example "22479709-2064-4688-80fa-f02e97412345"
	 */
	id?: string;
	/**
	 * The clan's join type
	 * @example "invite"
	 */
	join?: string;
	/**
	 * The time the clan's last match finished
	 * @format date-time
	 */
	last_match_finished?: string;
	/**
	 * The clan's matches count in the last 24 hours
	 * @format int64
	 * @example 3
	 */
	matches_count_24h?: number;
	/**
	 * The clan's maximum skill level
	 * @format int64
	 * @example 10
	 */
	max_skill_level?: number;
	/**
	 * The clan's members count
	 * @format int64
	 * @example 72300
	 */
	members_count?: number;
	/**
	 * The clan's members count in the last 24 hours
	 * @format int64
	 * @example 1
	 */
	members_count_24h?: number;
	/**
	 * The clan's minimum skill level
	 * @format int64
	 * @example 1
	 */
	min_skill_level?: number;
	/**
	 * The name of the clan
	 * @example "Example Clan"
	 */
	name?: string;
	/**
	 * The clan's organizer id
	 * @example "f80900c9-88ef-43b4-aa97-d61ea3712345"
	 */
	organizer_id?: string;
	/**
	 * The region of the clan
	 * @example "eu"
	 */
	region?: string;
	/**
	 * The type of the clan
	 * @example "community"
	 */
	type?: string;
}

export interface ClansSearchList {
	/** @format int64 */
	end?: number;
	items?: ClanSearch[];
	/** @format int64 */
	start?: number;
}

/**
 * ClusterVolume contains options and information specific to, and only present
 * on, Swarm CSI cluster volumes.
 */
export interface ClusterVolume {
	/** @format date-time */
	CreatedAt?: string;
	/**
	 * ID is the Swarm ID of the volume. Because cluster volumes are Swarm
	 * objects, they have an ID, unlike non-cluster volumes, which only have a
	 * Name. This ID can be used to refer to the cluster volume.
	 */
	ID?: string;
	/**
	 * Info contains information about the Volume as a whole as provided by
	 * the CSI storage plugin.
	 */
	Info?: Info;
	/**
	 * PublishStatus contains the status of the volume as it pertains to its
	 * publishing on Nodes.
	 */
	PublishStatus?: PublishStatus[];
	Spec?: ClusterVolumeSpec;
	/** @format date-time */
	UpdatedAt?: string;
	Version?: Version;
}

/** ClusterVolumeSpec contains the spec used to create this volume. */
export interface ClusterVolumeSpec {
	AccessMode?: AccessMode;
	/**
	 * TopologyRequirement expresses the user's requirements for a volume's
	 * accessible topology.
	 */
	AccessibilityRequirements?: TopologyRequirement;
	Availability?: Availability;
	/**
	 * CapacityRange describes the minimum and maximum capacity a volume should be
	 * created with
	 */
	CapacityRange?: CapacityRange;
	/**
	 * Group defines the volume group of this volume. Volumes belonging to the
	 * same group can be referred to by group name when creating Services.
	 * Referring to a volume by group instructs swarm to treat volumes in that
	 * group interchangeably for the purpose of scheduling. Volumes with an
	 * empty string for a group technically all belong to the same, emptystring
	 * group.
	 */
	Group?: string;
	/**
	 * Secrets defines Swarm Secrets that are passed to the CSI storage plugin
	 * when operating on this volume.
	 */
	Secrets?: Secret[];
}

export interface CompetitionSearch {
	competition_id?: string;
	competition_type?: string;
	game?: string;
	name?: string;
	/** @format int64 */
	number_of_members?: number;
	organizer_id?: string;
	organizer_name?: string;
	organizer_type?: string;
	/** @format int64 */
	players_checkedin?: number;
	/** @format int64 */
	players_joined?: number;
	/** Tournaments */
	prize_type?: string;
	region?: string;
	/**
	 * Hubs
	 * @format int64
	 */
	slots?: number;
	/** @format int64 */
	started_at?: number;
	status?: string;
	total_prize?: string;
}

export interface CompetitionsSearchList {
	/** @format int64 */
	end?: number;
	items?: CompetitionSearch[];
	/** @format int64 */
	start?: number;
}

/** ContainerChangeResponseItem change item in response to ContainerChanges operation */
export interface ContainerChangeResponseItem {
	/**
	 * Kind of change
	 * @format uint8
	 */
	Kind: number;
	/** Path to file that has changed */
	Path: string;
}

/** ContainerTopOKBody OK response to ContainerTop operation */
export interface ContainerTopOKBody {
	/**
	 * Each process running in the container, where each is process
	 * is an array of values corresponding to the titles.
	 */
	Processes: string[][];
	/** The ps column titles */
	Titles: string[];
}

/** ContainerUpdateOKBody OK response to ContainerUpdate operation */
export interface ContainerUpdateOKBody {
	/** warnings */
	Warnings: string[];
}

/**
 * CreateOptions VolumeConfig
 * Volume configuration
 */
export interface CreateOptions {
	ClusterVolumeSpec?: ClusterVolumeSpec;
	/** Name of the volume driver to use. */
	Driver?: string;
	/**
	 * A mapping of driver options and values. These options are
	 * passed directly to the driver and are driver specific.
	 */
	DriverOpts?: Record<string, string>;
	/** User-defined key/value metadata. */
	Labels?: Record<string, string>;
	/** The new volume's name. If not specified, Docker generates a name. */
	Name?: string;
}

/**
 * CreateResponse ContainerCreateResponse
 * OK response to ContainerCreate operation
 */
export interface CreateResponse {
	/** The ID of the created container */
	Id: string;
	/** Warnings encountered when creating the container */
	Warnings: string[];
}

/**
 * DetailedMatchResult Model
 * # DetailedMatchResult holds detailed match results
 */
export interface DetailedMatchResult {
	/**
	 * True if the scores should be interpreted ascending (lower score wins)
	 * @example true
	 */
	asc_score?: boolean;
	/** The factions of the match */
	factions?: Record<string, FactionResult>;
	/** The winner faction */
	winner?: string;
}

export interface Division {
	assets?: Assets;
	/** The type of the division. Can be nested or classic. Nested means that the division has tiers, classic is without tiers. */
	config_type?: string;
	leaderboard_config?: LeaderboardConfig;
	/** The leaderboards of the division */
	leaderboards?: string[];
	/**
	 * Max ELO for a user to be placed in this division after placement matches
	 * @format int64
	 */
	max_elo?: number;
	/**
	 * Min ELO for a user to be placed in this division after placement matches
	 * @format int64
	 */
	min_elo?: number;
	/** The name of the division. */
	name?: string;
	/** The tiers of the division */
	tiers?: Tier[];
	/** The type of the division. */
	type?: string;
}

export interface EntityRanking {
	/** @format int64 */
	end?: number;
	items?: Ranking[];
	leaderboard?: Leaderboard;
	/** @format int64 */
	start?: number;
}

/** ErrorResponse Represents an error. */
export interface ErrorResponse {
	/** The error message. */
	message: string;
}

export interface Faction {
	avatar?: string;
	faction_id?: string;
	leader?: string;
	name?: string;
	roster?: Roster[];
	roster_v1?: any;
	stats?: Stats;
	substituted?: boolean;
	type?: string;
}

/**
 * FactionResult Model
 * # FactionResult holds detailed faction score
 */
export interface FactionResult {
	/**
	 * The score of the faction.
	 * @format int64
	 * @example 2
	 */
	score?: number;
}

export interface Game {
	assets?: {
		cover?: string;
		featured_img_l?: string;
		featured_img_m?: string;
		featured_img_s?: string;
		flag_img_icon?: string;
		flag_img_l?: string;
		flag_img_m?: string;
		flag_img_s?: string;
		landing_page?: string;
	};
	game_id?: string;
	long_label?: string;
	/** @format int64 */
	order?: number;
	parent_game_id?: string;
	platforms?: string[];
	regions?: string[];
	short_label?: string;
}

export interface GameDetail {
	/** @format int64 */
	faceit_elo?: number;
	game_player_id?: string;
	game_player_name?: string;
	/** Deprecated: no more in use */
	game_profile_id?: string;
	region?: string;
	/** Deprecated: no more in use */
	regions?: any;
	/** @format int64 */
	skill_level?: number;
	/** Deprecated: use SkillLevel instead */
	skill_level_label?: string;
}

/**
 * Here we return SkillLevel as string even if it is an int
 * as we don't want to break the contract with devs
 */
export interface GameUserSearch {
	name?: string;
	skill_level?: string;
}

export interface GamesList {
	/** @format int64 */
	end?: number;
	items?: Game[];
	/** @format int64 */
	start?: number;
}

export interface GeoDescription {
	en?: string;
	fr?: string;
}

export interface GeoLabel {
	en?: string;
	fr?: string;
}

export interface GlobalRanking {
	country?: string;
	/** @format int64 */
	faceit_elo?: number;
	/** @format int64 */
	game_skill_level?: number;
	nickname?: string;
	player_id?: string;
	/** @format int64 */
	position?: number;
}

export interface GlobalRankingList {
	/** @format int64 */
	end?: number;
	items?: GlobalRanking[];
	/** @format int64 */
	start?: number;
}

/**
 * GraphDriverData Information about the storage driver used to store the container's and
 * image's filesystem.
 */
export interface GraphDriverData {
	/**
	 * Low-level storage metadata, provided as key/value pairs.
	 *
	 * This information is driver-specific, and depends on the storage-driver
	 * in use, and should be used for informational purposes only.
	 */
	Data: Record<string, string>;
	/** Name of the storage driver. */
	Name: string;
}

export interface HistoryFaction {
	avatar?: string;
	nickname?: string;
	players?: MatchHistoryPlayer[];
	team_id?: string;
	type?: string;
}

/** HistoryResponseItem individual image layer information in response to ImageHistory operation */
export interface HistoryResponseItem {
	/** comment */
	Comment: string;
	/**
	 * created
	 * @format int64
	 */
	Created: number;
	/** created by */
	CreatedBy: string;
	/** Id */
	Id: string;
	/**
	 * size
	 * @format int64
	 */
	Size: number;
	/** tags */
	Tags: string[];
}

export interface Hub {
	avatar?: string;
	background_image?: string;
	chat_room_id?: string;
	cover_image?: string;
	description?: string;
	faceit_url?: string;
	game_data?: Game;
	game_id?: string;
	hub_id?: string;
	join_permission?: string;
	/** @format int64 */
	max_skill_level?: number;
	/** @format int64 */
	min_skill_level?: number;
	name?: string;
	organizer_data?: Organizer;
	organizer_id?: string;
	/** @format int64 */
	players_joined?: number;
	region?: string;
	rule_id?: string;
}

export interface HubMembers {
	/** @format int64 */
	end?: number;
	items?: HubUser[];
	/** @format int64 */
	start?: number;
}

export interface HubSmall {
	avatar?: string;
	faceit_url?: string;
	game_id?: string;
	hub_id?: string;
	name?: string;
	organizer_id?: string;
}

export interface HubStats {
	game_id?: string;
	players?: StatsCompetitionPlayer[];
}

export interface HubUser {
	avatar?: string;
	faceit_url?: string;
	nickname?: string;
	roles?: string[];
	user_id?: string;
}

export interface HubsList {
	/** @format int64 */
	end?: number;
	items?: Hub[];
	/** @format int64 */
	start?: number;
}

export interface HubsSmallList {
	/** @format int64 */
	end?: number;
	items?: HubSmall[];
	/** @format int64 */
	start?: number;
}

/** IDResponse Response to an API call that returns just an Id */
export interface IdResponse {
	/** The id of the newly created object. */
	Id: string;
}

/** ImageDeleteResponseItem image delete response item */
export interface ImageDeleteResponseItem {
	/** The image ID of an image that was deleted */
	Deleted?: string;
	/** The image ID of an image that was untagged */
	Untagged?: string;
}

/** ImageSummary image summary */
export interface ImageSummary {
	/**
	 * Number of containers using this image. Includes both stopped and running
	 * containers.
	 *
	 * This size is not calculated by default, and depends on which API endpoint
	 * is used. `-1` indicates that the value has not been set / calculated.
	 * @format int64
	 */
	Containers: number;
	/**
	 * Date and time at which the image was created as a Unix timestamp
	 * (number of seconds sinds EPOCH).
	 * @format int64
	 */
	Created: number;
	/**
	 * ID is the content-addressable ID of an image.
	 *
	 * This identifier is a content-addressable digest calculated from the
	 * image's configuration (which includes the digests of layers used by
	 * the image).
	 *
	 * Note that this digest differs from the `RepoDigests` below, which
	 * holds digests of image manifests that reference the image.
	 */
	Id: string;
	/** User-defined key/value metadata. */
	Labels: Record<string, string>;
	/**
	 * ID of the parent image.
	 *
	 * Depending on how the image was created, this field may be empty and
	 * is only set for images that were built/created locally. This field
	 * is empty if the image was pulled from an image registry.
	 */
	ParentId: string;
	/**
	 * List of content-addressable digests of locally available image manifests
	 * that the image is referenced from. Multiple manifests can refer to the
	 * same image.
	 *
	 * These digests are usually only available if the image was either pulled
	 * from a registry, or if the image was pushed to a registry, which is when
	 * the manifest is generated and its digest calculated.
	 */
	RepoDigests: string[];
	/**
	 * List of image names/tags in the local image cache that reference this
	 * image.
	 *
	 * Multiple image tags can refer to the same image, and this list may be
	 * empty if no tags reference the image, in which case the image is
	 * "untagged", in which case it can still be referenced by its ID.
	 */
	RepoTags: string[];
	/**
	 * Total size of image layers that are shared between this image and other
	 * images.
	 *
	 * This size is not calculated by default. `-1` indicates that the value
	 * has not been set / calculated.
	 * @format int64
	 */
	SharedSize: number;
	/**
	 * Total size of the image including all layers it is composed of.
	 * @format int64
	 */
	Size: number;
	/**
	 * Total size of the image including all layers it is composed of.
	 *
	 * In versions of Docker before v1.10, this field was calculated from
	 * the image itself and all of its parent images. Docker v1.10 and up
	 * store images self-contained, and no longer use a parent-chain, making
	 * this field an equivalent of the Size field.
	 *
	 * This field is kept for backward compatibility, but may be removed in
	 * a future version of the API.
	 * @format int64
	 */
	VirtualSize: number;
}

/**
 * Info contains information about the Volume as a whole as provided by
 * the CSI storage plugin.
 */
export interface Info {
	/**
	 * AccessibleTopolgoy is the topology this volume is actually accessible
	 * from.
	 */
	AccessibleTopology?: Topology[];
	/**
	 * CapacityBytes is the capacity of the volume in bytes. A value of 0
	 * indicates that the capacity is unknown.
	 * @format int64
	 */
	CapacityBytes?: number;
	/**
	 * VolumeContext is the context originating from the CSI storage plugin
	 * when the Volume is created.
	 */
	VolumeContext?: Record<string, string>;
	/**
	 * VolumeID is the ID of the Volume as seen by the CSI storage plugin. This
	 * is distinct from the Volume's Swarm ID, which is the ID used by all of
	 * the Docker Engine to refer to the Volume. If this field is blank, then
	 * the Volume has not been successfully created yet.
	 */
	VolumeID?: string;
}

export interface Item {
	category?: string;
	country_blacklist?: string[];
	country_whitelist?: string[];
	/** @format date-time */
	created_at?: string;
	created_by?: string;
	/** ExternalId refers to the ID of the item in a third-party shop */
	external_id?: string;
	games?: string[];
	id?: string;
	media?: ItemMedia;
	name?: string;
	new?: boolean;
	order_type?: string;
	platforms?: string[];
	/** @format float */
	price?: number;
	published?: boolean;
	/** @format int64 */
	quantity?: number;
	sizes?: string[];
	tags?: string[];
	unlimited?: boolean;
	url?: string;
}

export interface ItemList {
	/** @format int64 */
	end?: number;
	items?: Item[];
	/** @format int64 */
	start?: number;
}

export interface ItemMedia {
	avatar_full?: string;
	avatar_medium?: string;
	avatar_small?: string;
}

export interface JoinCheck {
	allowed_team_types?: string[];
	blacklist_geo_countries?: string[];
	join_policy?: string;
	/** @format int64 */
	max_skill_level?: number;
	membership_type?: string;
	/** @format int64 */
	min_skill_level?: number;
	whitelist_geo_countries?: string[];
	/** @format int64 */
	whitelist_geo_countries_min_players?: number;
}

export interface JoinType {
	/** @format int64 */
	maxParty?: number;
	party?: boolean;
	premade?: boolean;
	solo?: boolean;
}

export interface Leaderboard {
	competition_id?: string;
	competition_type?: string;
	/** @format int64 */
	end_date?: number;
	game_id?: string;
	/** @format int64 */
	group?: number;
	leaderboard_id?: string;
	leaderboard_mode?: string;
	leaderboard_name?: string;
	leaderboard_type?: string;
	/** @format int64 */
	min_matches?: number;
	/** @format int64 */
	points_per_draw?: number;
	/** @format int64 */
	points_per_loss?: number;
	/** @format int64 */
	points_per_win?: number;
	points_type?: string;
	/** @format int64 */
	ranking_boost?: number;
	ranking_type?: string;
	region?: string;
	/** @format int64 */
	round?: number;
	/** @format int64 */
	season?: number;
	/** @format int64 */
	start_date?: number;
	/** @format int64 */
	starting_points?: number;
	status?: string;
}

export interface LeaderboardConfig {
	/**
	 * Max players in the leaderboard.
	 * @format int64
	 */
	max_players?: number;
	/**
	 * User will lose this amount of points if they lose a match
	 * @format int64
	 * @example -2
	 */
	points_per_loss?: number;
	/**
	 * User will gain this amount of points if they win a match. When not configured, it's using the global value which is 3
	 * @format int64
	 * @example 10
	 */
	points_per_win?: number;
	/** Promotion holds information about what is required in order for a player to be promoted to the next tier. */
	promotion?: Promotion;
	/** Relegation holds information about what is required in order for a player to be relegated to the previous tier. */
	relegation?: Relegation;
	/**
	 * Starting points for a player.
	 * @format int64
	 */
	starting_points?: number;
}

export interface LeaderboardsList {
	/** @format int64 */
	end?: number;
	items?: Leaderboard[];
	/** @format int64 */
	start?: number;
}

/**
 * League Model
 * The League holds league information.
 */
export interface League {
	/** The divisions of the league. */
	divisions?: Division[];
	/** The game of the league. */
	game?: string;
	/** The id of the league. */
	id?: string;
	/**
	 * The minimum matches of the league.
	 * @format int64
	 */
	min_matches?: number;
	/** The region of the league. */
	region?: string;
	/** Season holds information about a league season. When no older season is requested, this field holds information about the season of the league. */
	season?: Season;
}

/**
 * ListResponse VolumeListResponse
 * Volume list response
 */
export interface ListResponse {
	/** List of volumes */
	Volumes?: Volume[];
	/** Warnings that occurred when fetching the list of volumes. */
	Warnings?: string[];
}

export interface Match {
	/** @format int64 */
	best_of?: number;
	/** @format int64 */
	broadcast_start_time?: number;
	broadcast_start_time_label?: string;
	calculate_elo?: boolean;
	chat_room_id?: string;
	competition_id?: string;
	competition_name?: string;
	competition_type?: string;
	/** @format int64 */
	configured_at?: number;
	demo_url?: string[];
	detailed_results?: DetailedMatchResult[];
	faceit_url?: string;
	/** @format int64 */
	finished_at?: number;
	game?: string;
	/** @format int64 */
	group?: number;
	match_id?: string;
	organizer_id?: string;
	region?: string;
	results?: MatchResult;
	/** @format int64 */
	round?: number;
	/** @format int64 */
	scheduled_at?: number;
	/** @format int64 */
	started_at?: number;
	status?: string;
	teams?: Record<string, Faction>;
	/** @format int64 */
	version?: number;
	voting?: any;
}

export interface MatchHistory {
	competition_id?: string;
	competition_name?: string;
	competition_type?: string;
	faceit_url?: string;
	/** @format int64 */
	finished_at?: number;
	game_id?: string;
	game_mode?: string;
	match_id?: string;
	match_type?: string;
	/** @format int64 */
	max_players?: number;
	organizer_id?: string;
	playing_players?: string[];
	region?: string;
	results?: MatchResult;
	/** @format int64 */
	started_at?: number;
	status?: string;
	teams?: Record<string, HistoryFaction>;
	/** @format int64 */
	teams_size?: number;
}

export interface MatchHistoryList {
	/** @format int64 */
	end?: number;
	/** @format int64 */
	from?: number;
	items?: MatchHistory[];
	/** @format int64 */
	start?: number;
	/** @format int64 */
	to?: number;
}

export interface MatchHistoryPlayer {
	avatar?: string;
	faceit_url?: string;
	game_player_id?: string;
	game_player_name?: string;
	nickname?: string;
	player_id?: string;
	/** @format int64 */
	skill_level?: number;
}

export interface MatchList {
	/** @format int64 */
	end?: number;
	items?: Match[];
	/** @format int64 */
	start?: number;
}

export interface MatchResult {
	score?: Record<string, number>;
	winner?: string;
}

export interface MatchStats {
	rounds?: RoundStats[];
}

/** Matchmaking A detailed representation of a matchmaking */
export interface Matchmaking {
	game?: string;
	icon?: string;
	id?: string;
	league_id?: string;
	long_description?: string;
	name?: string;
	queues?: MatchmakingQueue[];
	region?: string;
	short_description?: string;
}

/** MatchmakingList A list of matchmaking objects */
export interface MatchmakingList {
	/** @format int64 */
	end?: number;
	items?: MatchmakingSlim[];
	/** @format int64 */
	start?: number;
}

export interface MatchmakingQueue {
	id?: string;
	name?: string;
	open?: boolean;
	organizer_id?: string;
	paused?: boolean;
}

/** MatchmakingSlim A slim representation of a matchmaking */
export interface MatchmakingSlim {
	game?: string;
	has_league?: boolean;
	id?: string;
	name?: string;
	region?: string;
}

/** Meta is a base object inherited by most of the other once. */
export interface Meta {
	/** @format date-time */
	CreatedAt?: string;
	/** @format date-time */
	UpdatedAt?: string;
	Version?: Version;
}

export interface Order {
	/** @format date-time */
	created_at?: string;
	game?: string;
	id?: string;
	item?: OrderItem;
	status?: string;
	/** @format date-time */
	updated_at?: string;
	user?: OrderUser;
}

export interface OrderItem {
	external_id?: string;
	image_url?: string;
	item_id?: string;
	name?: string;
	/** @format float */
	price?: number;
}

export interface OrderList {
	/** @format int64 */
	end?: number;
	items?: Order[];
	/** @format int64 */
	start?: number;
}

export interface OrderUser {
	external_id?: string;
	id?: string;
}

export interface Organizer {
	avatar?: string;
	cover?: string;
	description?: string;
	facebook?: string;
	faceit_url?: string;
	/** @format int64 */
	followers_count?: number;
	name?: string;
	organizer_id?: string;
	twitch?: string;
	twitter?: string;
	type?: string;
	vk?: string;
	website?: string;
	youtube?: string;
}

export interface OrganizerSearch {
	active?: boolean;
	avatar?: string;
	countries?: string[];
	games?: string[];
	name?: string;
	organizer_id?: string;
	partner?: boolean;
	regions?: string[];
}

export interface OrganizersSearchList {
	/** @format int64 */
	end?: number;
	items?: OrganizerSearch[];
	/** @format int64 */
	start?: number;
}

export interface PaginationFields {
	/** @format int64 */
	end?: number;
	/** @format int64 */
	start?: number;
}

export interface Placement {
	division_name?: string;
	division_type?: string;
	ladder?: string;
	matchmaking_id?: string;
	/** @format int64 */
	season_number?: number;
	tier_name?: string;
	/** @format int64 */
	tier_rank?: number;
}

export interface Player {
	/** @format date-time */
	activated_at?: string;
	avatar?: string;
	country?: string;
	/** Deprecated: no more in use */
	cover_featured_image?: string;
	cover_image?: string;
	faceit_url?: string;
	friends_ids?: string[];
	games?: Record<string, GameDetail>;
	/** Deprecated: no more in use */
	infractions?: any;
	/** Deprecated: use memberships instead */
	membership_type?: string;
	memberships?: string[];
	new_steam_id?: string;
	nickname?: string;
	platforms?: Record<string, string>;
	player_id?: string;
	settings?: UserSettings;
	steam_id_64?: string;
	steam_nickname?: string;
	verified?: boolean;
}

export interface PlayerBan {
	/** @format date-time */
	ends_at?: string;
	game?: string;
	nickname?: string;
	reason?: string;
	/** @format date-time */
	starts_at?: string;
	type?: string;
	user_id?: string;
}

export interface PlayerBansList {
	/** @format int64 */
	end?: number;
	items?: PlayerBan[];
	/** @format int64 */
	start?: number;
}

export interface PlayerGlobalRanking {
	/** @format int64 */
	end?: number;
	items?: GlobalRanking[];
	/** @format int64 */
	position?: number;
	/** @format int64 */
	start?: number;
}

/**
 * PlayerInLeague Model
 * PlayerInLeague holds information about a player in a league.
 */
export interface PlayerInLeague {
	/** The division name that the player is in. */
	division_name?: string;
	/** The division tier that the player is in. */
	division_tier?: string;
	/** The division type that the player is in. */
	division_type?: string;
	/** The leaderboard id that the player is in. */
	leaderboard_id?: string;
	/**
	 * The points of the player in the leaderboard.
	 * @format int64
	 */
	points?: number;
	/**
	 * The position of the player in the leaderboard.
	 * @format int64
	 */
	position?: number;
}

export interface PlayerStats {
	game_id?: string;
	lifetime?: Record<string, any>;
	player_id?: string;
	segments?: Record<string, any>[];
}

export interface PlayerStatsForMatch {
	stats?: Record<string, any>;
}

export interface PlayerStatsForMatchesList {
	/** @format int64 */
	end?: number;
	items?: PlayerStatsForMatch[];
	/** @format int64 */
	start?: number;
}

export interface PlayerStatsSimple {
	nickname?: any;
	player_id?: any;
	player_stats?: Record<string, any>;
}

/** Plugin A plugin for the Engine API */
export interface Plugin {
	Config: PluginConfig;
	/** True if the plugin is running. False if the plugin is not running, only installed. */
	Enabled: boolean;
	/** Id */
	Id?: string;
	/** name */
	Name: string;
	/** plugin remote reference used to push/pull the plugin */
	PluginReference?: string;
	Settings: PluginSettings;
}

/** PluginConfig The config of a plugin. */
export interface PluginConfig {
	/** PluginConfigArgs plugin config args */
	Args: PluginConfigArgs;
	/** description */
	Description: string;
	/** Docker Version used to create the plugin */
	DockerVersion?: string;
	/** documentation */
	Documentation: string;
	/** entrypoint */
	Entrypoint: string[];
	/** env */
	Env: PluginEnv[];
	/** PluginConfigInterface The interface between Docker and the plugin */
	Interface: PluginConfigInterface;
	/** ipc host */
	IpcHost: boolean;
	/** PluginConfigLinux plugin config linux */
	Linux: PluginConfigLinux;
	/** mounts */
	Mounts: PluginMount[];
	/** PluginConfigNetwork plugin config network */
	Network: PluginConfigNetwork;
	/** pid host */
	PidHost: boolean;
	/** propagated mount */
	PropagatedMount: string;
	/** PluginConfigUser plugin config user */
	User?: PluginConfigUser;
	/** work dir */
	WorkDir: string;
	/** PluginConfigRootfs plugin config rootfs */
	rootfs?: PluginConfigRootfs;
}

/** PluginConfigArgs plugin config args */
export interface PluginConfigArgs {
	/** description */
	Description: string;
	/** name */
	Name: string;
	/** settable */
	Settable: string[];
	/** value */
	Value: string[];
}

/** PluginConfigInterface The interface between Docker and the plugin */
export interface PluginConfigInterface {
	/** Protocol to use for clients connecting to the plugin. */
	ProtocolScheme?: string;
	/** socket */
	Socket: string;
	/** types */
	Types: PluginInterfaceType[];
}

/** PluginConfigLinux plugin config linux */
export interface PluginConfigLinux {
	/** allow all devices */
	AllowAllDevices: boolean;
	/** capabilities */
	Capabilities: string[];
	/** devices */
	Devices: PluginDevice[];
}

/** PluginConfigNetwork plugin config network */
export interface PluginConfigNetwork {
	/** type */
	Type: string;
}

/** PluginConfigRootfs plugin config rootfs */
export interface PluginConfigRootfs {
	/** diff ids */
	diff_ids?: string[];
	/** type */
	type?: string;
}

/** PluginConfigUser plugin config user */
export interface PluginConfigUser {
	/**
	 * g ID
	 * @format uint32
	 */
	GID?: number;
	/**
	 * UID
	 * @format uint32
	 */
	UID?: number;
}

/** PluginDevice plugin device */
export interface PluginDevice {
	/** description */
	Description: string;
	/** name */
	Name: string;
	/** path */
	Path: string;
	/** settable */
	Settable: string[];
}

/** PluginEnv plugin env */
export interface PluginEnv {
	/** description */
	Description: string;
	/** name */
	Name: string;
	/** settable */
	Settable: string[];
	/** value */
	Value: string;
}

/** PluginInterfaceType plugin interface type */
export interface PluginInterfaceType {
	/** capability */
	Capability: string;
	/** prefix */
	Prefix: string;
	/** version */
	Version: string;
}

/** PluginMount plugin mount */
export interface PluginMount {
	/** description */
	Description: string;
	/** destination */
	Destination: string;
	/** name */
	Name: string;
	/** options */
	Options: string[];
	/** settable */
	Settable: string[];
	/** source */
	Source: string;
	/** type */
	Type: string;
}

/** PluginSettings Settings that can be modified by users. */
export interface PluginSettings {
	/** args */
	Args: string[];
	/** devices */
	Devices: PluginDevice[];
	/** env */
	Env: string[];
	/** mounts */
	Mounts: PluginMount[];
}

/** Port An open port on a container */
export interface Port {
	/** Host IP address that the container's port is mapped to */
	IP?: string;
	/**
	 * Port on the container
	 * @format uint16
	 */
	PrivatePort: number;
	/**
	 * Port exposed on the host
	 * @format uint16
	 */
	PublicPort?: number;
	/** type */
	Type: string;
}

export interface Prize {
	/** @format int64 */
	faceit_points?: number;
	/** @format int64 */
	rank?: number;
}

/**
 * Promotion Model
 * Promotion holds information about what is required in order for a player to be promoted to the next tier.
 */
export interface Promotion {
	/**
	 * Points needed for a player to get promoted.
	 * @format int64
	 * @example 10
	 */
	points?: number;
}

/**
 * PublishState represents the state of a Volume as it pertains to its
 * use on a particular Node.
 */
export type PublishState = string;

/**
 * PublishStatus represents the status of the volume as published to an
 * individual node
 */
export interface PublishStatus {
	/** NodeID is the ID of the swarm node this Volume is published to. */
	NodeID?: string;
	/**
	 * PublishContext is the PublishContext returned by the CSI plugin when
	 * a volume is published.
	 */
	PublishContext?: Record<string, string>;
	/**
	 * PublishState represents the state of a Volume as it pertains to its
	 * use on a particular Node.
	 */
	State?: PublishState;
}

export interface Queue {
	adminTool?: boolean;
	anticheatRequired?: boolean;
	calculateElo?: boolean;
	captainSelection?: string;
	checkIn?: CheckIn;
	entityId?: string;
	entityType?: string;
	fbiManagement?: boolean;
	game?: string;
	groupSimilar?: boolean;
	id?: string;
	joinType?: JoinType;
	/** @format date-time */
	lastModified?: string;
	/** @format int64 */
	maxSkill?: number;
	/** @format int64 */
	minSkill?: number;
	/** @format int64 */
	noOfPlayers?: number;
	open?: boolean;
	organizerId?: string;
	paused?: boolean;
	queueAlgorithm?: QueueAlgorithm;
	queueName?: string;
	region?: string;
	state?: string;
	verifiedMatching?: boolean;
}

export interface QueueAlgorithm {
	algorithmId?: string;
	algorithmInput?: string[];
	algorithmParameters?: AlgorithmParameters;
	geoDescription?: GeoDescription;
	geoLabel?: GeoLabel;
	id?: string;
	roleBasedCaptainPick?: boolean;
}

export interface QueueBan {
	/** @format date-time */
	banEnd?: string;
	banId?: string;
	/** @format date-time */
	banStart?: string;
	/** @format date-time */
	createdAt?: string;
	entityId?: string;
	entityType?: string;
	expired?: boolean;
	/** @format date-time */
	lastModified?: string;
	nickname?: string;
	organizerId?: string;
	queueId?: string;
	reason?: string;
	type?: string;
	userId?: string;
	/** @format int64 */
	version?: number;
}

export interface QueueBansList {
	/** @format int64 */
	end?: number;
	items?: QueueBan[];
	/** @format int64 */
	start?: number;
}

export interface QueueSimple {
	entityId?: string;
	entityType?: string;
	game?: string;
	id?: string;
	/** @format date-time */
	lastModified?: string;
	open?: boolean;
	organizerId?: string;
	queueName?: string;
	region?: string;
	state?: string;
}

export interface QueuesList {
	/** @format int64 */
	end?: number;
	items?: QueueSimple[];
	/** @format int64 */
	start?: number;
}

export interface Ranking {
	/** @format int64 */
	current_streak?: number;
	/** @format int64 */
	draw?: number;
	/** @format int64 */
	lost?: number;
	/** @format int64 */
	played?: number;
	/** The UserSimple holds information about a user. */
	player?: UserSimple;
	/** @format int64 */
	points?: number;
	/** @format int64 */
	position?: number;
	/** @format double */
	win_rate?: number;
	/** @format int64 */
	won?: number;
}

/**
 * Relegation Model
 * Relegation holds information about what is required in order for a player to be relegated to the previous tier.
 */
export interface Relegation {
	/**
	 * Consecutive losses needed for a player to get relegated to the previous tier.
	 * @format int64
	 * @example 3
	 */
	consecutive_losses?: number;
}

export interface Role {
	color?: string;
	name?: string;
	/** @format int64 */
	ranking?: number;
	role_id?: string;
	visible_on_chat?: boolean;
}

export interface RolesList {
	/** @format int64 */
	end?: number;
	items?: Role[];
	/** @format int64 */
	start?: number;
}

export interface Roster {
	anticheat_required?: boolean;
	avatar?: string;
	game_player_id?: string;
	game_player_name?: string;
	/** @format int64 */
	game_skill_level?: number;
	membership?: string;
	nickname?: string;
	player_id?: string;
}

export interface RoundStats {
	best_of?: any;
	competition_id?: any;
	game_id?: any;
	game_mode?: any;
	match_id?: any;
	match_round?: any;
	played?: any;
	round_stats?: Record<string, any>;
	teams?: TeamStatsSimple[];
}

export interface Rules {
	body?: string;
	game?: string;
	name?: string;
	organizer?: string;
	rule_id?: string;
}

/**
 * Scope defines the Scope of a Cluster Volume. This is how many nodes a
 * Volume can be accessed simultaneously on.
 */
export type Scope = string;

/**
 * Season Model
 * Season holds information about a league season. When no older season is requested, this field holds information about the season of the league.
 */
export interface Season {
	/**
	 * The end date of the season.
	 * @format date-time
	 */
	end_date?: string;
	/**
	 * The season number.
	 * @format int64
	 */
	number?: number;
	/**
	 * The placement match mount.
	 * @format int64
	 */
	placement_match_count?: number;
	/**
	 * The start date of the season.
	 * @format date-time
	 */
	start_date?: string;
}

export interface SeasonDetailed {
	/** The divisions of the given season. */
	divisions?: Division[];
	/** Season holds information about a league season. When no older season is requested, this field holds information about the season of the league. */
	season?: Season;
}

/**
 * Secret represents a Swarm Secret value that must be passed to the CSI
 * storage plugin when operating on this Volume. It represents one key-value
 * pair of possibly many.
 */
export interface Secret {
	/** Key is the name of the key of the key-value pair passed to the plugin. */
	Key?: string;
	/**
	 * Secret is the swarm Secret object from which to read data. This can be a
	 * Secret name or ID. The Secret data is retrieved by Swarm and used as the
	 * value of the key-value pair passed to the plugin.
	 */
	Secret?: string;
}

/** ServiceUpdateResponse service update response */
export interface ServiceUpdateResponse {
	/** Optional warning messages */
	Warnings?: string[];
}

/**
 * SharingMode defines the Sharing of a Cluster Volume. This is how Tasks using a
 * Volume at the same time can use it.
 */
export type SharingMode = string;

export interface SpacePlayer {
	/** @format date-time */
	activated_at?: string;
	address?: Address;
	avatar?: string;
	birth_date?: BirthDate;
	country?: string;
	/** Deprecated: no more in use */
	cover_featured_image?: string;
	cover_image?: string;
	email?: string;
	faceit_url?: string;
	first_name?: string;
	friends_ids?: string[];
	games?: Record<string, GameDetail>;
	/** Deprecated: no more in use */
	infractions?: any;
	last_name?: string;
	/** Deprecated: use memberships instead */
	membership_type?: string;
	memberships?: string[];
	new_steam_id?: string;
	nickname?: string;
	platforms?: Record<string, string>;
	player_id?: string;
	settings?: UserSettings;
	steam_id_64?: string;
	steam_nickname?: string;
	verified?: boolean;
}

export interface Stats {
	/** @format int64 */
	rating?: number;
	skillLevel?: {
		/** @format int64 */
		average?: number;
		range?: {
			/** @format int64 */
			max?: number;
			/** @format int64 */
			min?: number;
		};
	};
	/** @format double */
	winProbability?: number;
}

export interface StatsCompetitionPlayer {
	nickname?: string;
	player_id?: string;
	stats?: Record<string, any>;
}

export interface SubstitutionConfiguration {
	/** @format int64 */
	max_substitutes?: number;
	/** @format int64 */
	max_substitutions?: number;
}

/**
 * Team Model
 * The Team holds information about a team.
 */
export interface Team {
	/**
	 * The Avatar of a team
	 * @example "https://avatar.jpg"
	 */
	avatar?: string;
	/**
	 * The ChatID of a team
	 * @example "team-6204037c-30e6-408b-8aaa-dd8219860b4b"
	 */
	chat_room_id?: string;
	/**
	 * The CoverImage of a team
	 * @example "https://cover-image.jpg"
	 */
	cover_image?: string;
	/**
	 * The Description of a team
	 * @example "Some description"
	 */
	description?: string;
	/**
	 * The Facebook of a team
	 * @example "https://facebook/team"
	 */
	facebook?: string;
	/**
	 * The FaceitUrl of a team
	 * @example "https://www.faceit.com/{lang}/teams/6204037c-30e6-408b-8aaa-dd8219860b4b"
	 */
	faceit_url?: string;
	/**
	 * The Game of a team
	 * @example "csgo"
	 */
	game?: string;
	/**
	 * The Leader of a team
	 * @example "leader"
	 */
	leader?: string;
	/**
	 * The Members of a team
	 *
	 * Can be empty if not supported
	 */
	members?: UserSimple[];
	/**
	 * The Name of a team
	 * @example "name"
	 */
	name?: string;
	/**
	 * The Nickname of a team
	 * @example "nickname"
	 */
	nickname?: string;
	/**
	 * The ID of a team
	 * @example "6204037c-30e6-408b-8aaa-dd8219860b4b"
	 */
	team_id?: string;
	/**
	 * The TeamType of a team
	 * @example "premade"
	 */
	team_type?: string;
	/**
	 * The Twitter of a team
	 * @example "https://twitter/team"
	 */
	twitter?: string;
	/**
	 * The Website of a team
	 * @example "https://team.website"
	 */
	website?: string;
	/**
	 * The Youtube of a team
	 * @example "https://youtube.com/team"
	 */
	youtube?: string;
}

/**
 * TeamList Model
 * The TeamList holds teams information.
 */
export interface TeamList {
	/** @format int64 */
	end?: number;
	/** The teams list. */
	items: Team[];
	/** @format int64 */
	start?: number;
}

export interface TeamSearch {
	avatar?: string;
	chat_room_id?: string;
	faceit_url?: string;
	game?: string;
	name?: string;
	team_id?: string;
	verified?: boolean;
}

export interface TeamStats {
	game_id?: string;
	lifetime?: Record<string, any>;
	segments?: Record<string, any>[];
	team_id?: string;
}

export interface TeamStatsSimple {
	players?: PlayerStatsSimple[];
	premade?: any;
	team_id?: any;
	team_stats?: Record<string, any>;
}

export interface TeamsSearchList {
	/** @format int64 */
	end?: number;
	items?: TeamSearch[];
	/** @format int64 */
	start?: number;
}

export interface Tier {
	/** The name of the tier */
	name?: string;
	/**
	 * The target points for the tier
	 * @format int64
	 */
	points_target?: number;
	/**
	 * The rank of the tier
	 * @format int64
	 * @example 1
	 */
	rank?: number;
}

/**
 * Topology is a map of topological domains to topological segments.
 * This description is taken verbatim from the CSI Spec:
 *
 * A topological domain is a sub-division of a cluster, like "region",
 * "zone", "rack", etc.
 * A topological segment is a specific instance of a topological domain,
 * like "zone3", "rack3", etc.
 * For example {"com.company/zone": "Z1", "com.company/rack": "R3"}
 * Valid keys have two segments: an OPTIONAL prefix and name, separated
 * by a slash (/), for example: "com.company.example/zone".
 * The key name segment is REQUIRED. The prefix is OPTIONAL.
 * The key name MUST be 63 characters or less, begin and end with an
 * alphanumeric character ([a-z0-9A-Z]), and contain only dashes (-),
 * underscores (_), dots (.), or alphanumerics in between, for example
 * "zone".
 * The key prefix MUST be 63 characters or less, begin and end with a
 * lower-case alphanumeric character ([a-z0-9]), contain only
 * dashes (-), dots (.), or lower-case alphanumerics in between, and
 * follow domain name notation format
 * (https://tools.ietf.org/html/rfc1035#section-2.3.1).
 * The key prefix SHOULD include the plugin's host company name and/or
 * the plugin name, to minimize the possibility of collisions with keys
 * from other plugins.
 * If a key prefix is specified, it MUST be identical across all
 * topology keys returned by the SP (across all RPCs).
 * Keys MUST be case-insensitive. Meaning the keys "Zone" and "zone"
 * MUST not both exist.
 * Each value (topological segment) MUST contain 1 or more strings.
 * Each string MUST be 63 characters or less and begin and end with an
 * alphanumeric character with '-', '_', '.', or alphanumerics in
 * between.
 */
export interface Topology {
	Segments?: Record<string, string>;
}

/**
 * TopologyRequirement expresses the user's requirements for a volume's
 * accessible topology.
 */
export interface TopologyRequirement {
	/**
	 * Preferred is a list of Topologies that the volume should attempt to be
	 * provisioned in.
	 *
	 * Taken from the CSI spec:
	 *
	 * Specifies the list of topologies the CO would prefer the volume to
	 * be provisioned in.
	 *
	 * This field is OPTIONAL. If TopologyRequirement is specified either
	 * requisite or preferred or both MUST be specified.
	 *
	 * An SP MUST attempt to make the provisioned volume available using
	 * the preferred topologies in order from first to last.
	 *
	 * If requisite is specified, all topologies in preferred list MUST
	 * also be present in the list of requisite topologies.
	 *
	 * If the SP is unable to to make the provisioned volume available
	 * from any of the preferred topologies, the SP MAY choose a topology
	 * from the list of requisite topologies.
	 * If the list of requisite topologies is not specified, then the SP
	 * MAY choose from the list of all possible topologies.
	 * If the list of requisite topologies is specified and the SP is
	 * unable to to make the provisioned volume available from any of the
	 * requisite topologies it MUST fail the CreateVolume call.
	 *
	 * Example 1:
	 * Given a volume should be accessible from a single zone, and
	 * requisite =
	 * {"region": "R1", "zone": "Z2"},
	 * {"region": "R1", "zone": "Z3"}
	 * preferred =
	 * {"region": "R1", "zone": "Z3"}
	 * then the the SP SHOULD first attempt to make the provisioned volume
	 * available from "zone" "Z3" in the "region" "R1" and fall back to
	 * "zone" "Z2" in the "region" "R1" if that is not possible.
	 *
	 * Example 2:
	 * Given a volume should be accessible from a single zone, and
	 * requisite =
	 * {"region": "R1", "zone": "Z2"},
	 * {"region": "R1", "zone": "Z3"},
	 * {"region": "R1", "zone": "Z4"},
	 * {"region": "R1", "zone": "Z5"}
	 * preferred =
	 * {"region": "R1", "zone": "Z4"},
	 * {"region": "R1", "zone": "Z2"}
	 * then the the SP SHOULD first attempt to make the provisioned volume
	 * accessible from "zone" "Z4" in the "region" "R1" and fall back to
	 * "zone" "Z2" in the "region" "R1" if that is not possible. If that
	 * is not possible, the SP may choose between either the "zone"
	 * "Z3" or "Z5" in the "region" "R1".
	 *
	 * Example 3:
	 * Given a volume should be accessible from TWO zones (because an
	 * opaque parameter in CreateVolumeRequest, for example, specifies
	 * the volume is accessible from two zones, aka synchronously
	 * replicated), and
	 * requisite =
	 * {"region": "R1", "zone": "Z2"},
	 * {"region": "R1", "zone": "Z3"},
	 * {"region": "R1", "zone": "Z4"},
	 * {"region": "R1", "zone": "Z5"}
	 * preferred =
	 * {"region": "R1", "zone": "Z5"},
	 * {"region": "R1", "zone": "Z3"}
	 * then the the SP SHOULD first attempt to make the provisioned volume
	 * accessible from the combination of the two "zones" "Z5" and "Z3" in
	 * the "region" "R1". If that's not possible, it should fall back to
	 * a combination of "Z5" and other possibilities from the list of
	 * requisite. If that's not possible, it should fall back  to a
	 * combination of "Z3" and other possibilities from the list of
	 * requisite. If that's not possible, it should fall back  to a
	 * combination of other possibilities from the list of requisite.
	 */
	Preferred?: Topology[];
	/**
	 * Requisite specifies a list of Topologies, at least one of which the
	 * volume must be accessible from.
	 *
	 * Taken verbatim from the CSI Spec:
	 *
	 * Specifies the list of topologies the provisioned volume MUST be
	 * accessible from.
	 * This field is OPTIONAL. If TopologyRequirement is specified either
	 * requisite or preferred or both MUST be specified.
	 *
	 * If requisite is specified, the provisioned volume MUST be
	 * accessible from at least one of the requisite topologies.
	 *
	 * Given
	 * x = number of topologies provisioned volume is accessible from
	 * n = number of requisite topologies
	 * The CO MUST ensure n >= 1. The SP MUST ensure x >= 1
	 * If x==n, then the SP MUST make the provisioned volume available to
	 * all topologies from the list of requisite topologies. If it is
	 * unable to do so, the SP MUST fail the CreateVolume call.
	 * For example, if a volume should be accessible from a single zone,
	 * and requisite =
	 * {"region": "R1", "zone": "Z2"}
	 * then the provisioned volume MUST be accessible from the "region"
	 * "R1" and the "zone" "Z2".
	 * Similarly, if a volume should be accessible from two zones, and
	 * requisite =
	 * {"region": "R1", "zone": "Z2"},
	 * {"region": "R1", "zone": "Z3"}
	 * then the provisioned volume MUST be accessible from the "region"
	 * "R1" and both "zone" "Z2" and "zone" "Z3".
	 *
	 * If x<n, then the SP SHALL choose x unique topologies from the list
	 * of requisite topologies. If it is unable to do so, the SP MUST fail
	 * the CreateVolume call.
	 * For example, if a volume should be accessible from a single zone,
	 * and requisite =
	 * {"region": "R1", "zone": "Z2"},
	 * {"region": "R1", "zone": "Z3"}
	 * then the SP may choose to make the provisioned volume available in
	 * either the "zone" "Z2" or the "zone" "Z3" in the "region" "R1".
	 * Similarly, if a volume should be accessible from two zones, and
	 * requisite =
	 * {"region": "R1", "zone": "Z2"},
	 * {"region": "R1", "zone": "Z3"},
	 * {"region": "R1", "zone": "Z4"}
	 * then the provisioned volume MUST be accessible from any combination
	 * of two unique topologies: e.g. "R1/Z2" and "R1/Z3", or "R1/Z2" and
	 * "R1/Z4", or "R1/Z3" and "R1/Z4".
	 *
	 * If x>n, then the SP MUST make the provisioned volume available from
	 * all topologies from the list of requisite topologies and MAY choose
	 * the remaining x-n unique topologies from the list of all possible
	 * topologies. If it is unable to do so, the SP MUST fail the
	 * CreateVolume call.
	 * For example, if a volume should be accessible from two zones, and
	 * requisite =
	 * {"region": "R1", "zone": "Z2"}
	 * then the provisioned volume MUST be accessible from the "region"
	 * "R1" and the "zone" "Z2" and the SP may select the second zone
	 * independently, e.g. "R1/Z4".
	 */
	Requisite?: Topology[];
}

export interface Tournament {
	anticheat_required?: boolean;
	best_of?: any;
	calculate_elo?: boolean;
	/** DEPRECATED: use tournament_id instead */
	competition_id?: string;
	cover_image?: string;
	custom?: boolean;
	description?: string;
	faceit_url?: string;
	featured_image?: string;
	game_data?: Game;
	game_id?: string;
	invite_type?: string;
	match_type?: string;
	/** @format int64 */
	max_skill?: number;
	membership_type?: string;
	/** @format int64 */
	min_skill?: number;
	name?: string;
	/** @format int64 */
	number_of_players?: number;
	/** @format int64 */
	number_of_players_checkedin?: number;
	/** @format int64 */
	number_of_players_joined?: number;
	/** @format int64 */
	number_of_players_participants?: number;
	organizer_data?: Organizer;
	organizer_id?: string;
	prize_type?: string;
	region?: string;
	rounds?: any[];
	rule?: string;
	/** @format int64 */
	started_at?: number;
	status?: string;
	/** @format int64 */
	substitutes_allowed?: number;
	/** @format int64 */
	substitutions_allowed?: number;
	/** @format int64 */
	team_size?: number;
	total_prize?: any;
	tournament_id?: string;
	voting?: any;
	whitelist_countries?: string[];
}

export interface TournamentSimple {
	anticheat_required?: boolean;
	custom?: boolean;
	faceit_url?: string;
	featured_image?: string;
	game_id?: string;
	invite_type?: string;
	match_type?: string;
	/** @format int64 */
	max_skill?: number;
	membership_type?: string;
	/** @format int64 */
	min_skill?: number;
	name?: string;
	/** @format int64 */
	number_of_players?: number;
	/** @format int64 */
	number_of_players_checkedin?: number;
	/** @format int64 */
	number_of_players_joined?: number;
	/** @format int64 */
	number_of_players_participants?: number;
	organizer_id?: string;
	prize_type?: string;
	region?: string;
	/** @format int64 */
	started_at?: number;
	status?: string;
	/** @format int64 */
	subscriptions_count?: number;
	/** @format int64 */
	team_size?: number;
	total_prize?: any;
	tournament_id?: string;
	whitelist_countries?: string[];
}

export interface TournamentTeam {
	nickname?: string;
	/** @format int64 */
	skill_level?: number;
	/** @format int64 */
	subs_done?: number;
	team_id?: string;
	team_leader?: string;
	team_type?: string;
}

export interface TournamentTeams {
	checked_in?: TournamentTeam[];
	finished?: TournamentTeam[];
	joined?: TournamentTeam[];
	started?: TournamentTeam[];
}

export interface TournamentsList {
	/** @format int64 */
	end?: number;
	items?: TournamentSimple[];
	/** @format int64 */
	start?: number;
}

/**
 * TypeBlock defines options for using a volume as a block-type volume.
 * Intentionally empty.
 */
export type TypeBlock = object;

/**
 * TypeMount contains options for using a volume as a Mount-type
 * volume.
 */
export interface TypeMount {
	/** FsType specifies the filesystem type for the mount volume. Optional. */
	FsType?: string;
	/** MountFlags defines flags to pass when mounting the volume. Optional. */
	MountFlags?: string[];
}

/**
 * UsageData Usage details about the volume. This information is used by the
 * `GET /system/df` endpoint, and omitted in other endpoints.
 */
export interface UsageData {
	/**
	 * The number of containers referencing this volume. This field
	 * is set to `-1` if the reference-count is not available.
	 * @format int64
	 */
	RefCount: number;
	/**
	 * Amount of disk space used by the volume (in bytes). This information
	 * is only available for volumes created with the `"local"` volume
	 * driver. For volumes created with other volume drivers, this field
	 * is set to `-1` ("not available")
	 * @format int64
	 */
	Size: number;
}

export interface UserSearch {
	avatar?: string;
	country?: string;
	games?: GameUserSearch[];
	nickname?: string;
	player_id?: string;
	status?: string;
	verified?: boolean;
}

export interface UserSettings {
	language?: string;
}

/**
 * UserSimple Model
 * The UserSimple holds information about a user.
 */
export interface UserSimple {
	/**
	 * The Avatar of a user
	 * @example "https://avatar.jpg"
	 */
	avatar?: string;
	/**
	 * The Country of a user
	 * @example "GB"
	 */
	country?: string;
	/** The FaceitUrl of a user */
	faceit_url?: string;
	/** Deprecated: use memberships instead */
	membership_type?: string;
	/**
	 * The Memberships of a user
	 * @example ["free","unlimited"]
	 */
	memberships?: string[];
	/**
	 * The Nickname of a user
	 * @example "nickname"
	 */
	nickname?: string;
	/**
	 * The SkillLevel of a user
	 * @format int64
	 * @example 1
	 */
	skill_level?: number;
	/**
	 * The ID of a user
	 * @example "6204037c-30e6-408b-8aaa-dd8219860b4b"
	 */
	user_id?: string;
}

export interface UsersSearchList {
	/** @format int64 */
	end?: number;
	items?: UserSearch[];
	/** @format int64 */
	start?: number;
}

/** Version represents the internal object version. */
export interface Version {
	/** @format uint64 */
	Index?: number;
}

/** Volume volume */
export interface Volume {
	/**
	 * ClusterVolume contains options and information specific to, and only present
	 * on, Swarm CSI cluster volumes.
	 */
	ClusterVolume?: ClusterVolume;
	/** Date/Time the volume was created. */
	CreatedAt?: string;
	/** Name of the volume driver used by the volume. */
	Driver: string;
	/** User-defined key/value metadata. */
	Labels: Record<string, string>;
	/** Mount path of the volume on the host. */
	Mountpoint: string;
	/** Name of the volume. */
	Name: string;
	/** The driver specific options used when creating the volume. */
	Options: Record<string, string>;
	/**
	 * The level at which the volume exists. Either `global` for cluster-wide,
	 * or `local` for machine level.
	 */
	Scope: string;
	/**
	 * Low-level details about the volume, provided by the volume driver.
	 * Details are returned as a map with key/value pairs:
	 * `{"key":"value","key2":"value2"}`.
	 *
	 * The `Status` field is optional, and is omitted if the volume driver
	 * does not support this feature.
	 */
	Status?: Record<string, any>;
	/**
	 * UsageData Usage details about the volume. This information is used by the
	 * `GET /system/df` endpoint, and omitted in other endpoints.
	 */
	UsageData?: UsageData;
}

/** WaitExitError container waiting error, if any */
export interface WaitExitError {
	/** Details of an error */
	Message?: string;
}

/**
 * WaitResponse ContainerWaitResponse
 * OK response to ContainerWait operation
 */
export interface WaitResponse {
	/** WaitExitError container waiting error, if any */
	Error?: WaitExitError;
	/**
	 * Exit code of the container
	 * @format int64
	 */
	StatusCode: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = 'https://open.faceit.com/data/v4';
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key)
			)
			.join('&');
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : '';
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === 'object' || typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === 'object' && property !== null
							? JSON.stringify(property)
							: `${property}`
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {})
			}
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
				},
				signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
				body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
			}
		).then(async (response) => {
			const r = response.clone() as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data;
		});
	};
}

/**
 * @title Data API
 * @version 4
 * @license Property of FACEIT LTD
 * @baseUrl https://open.faceit.com/data/v4
 *
 * # This API provide access to FACEIT's data
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	championships = {
		/**
		 * @description Retrieve all championships of a game
		 *
		 * @tags Championships
		 * @name GetChampionships
		 * @summary Retrieve all championships of a game
		 * @request GET:/championships
		 * @secure
		 */
		getChampionships: (
			query: {
				/** The id of the game */
				game: string;
				/** Kind of matches to return. Can be all(default), upcoming, ongoing or past */
				type?: 'all' | 'upcoming' | 'ongoing' | 'past';
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 10
				 * @default 10
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<ChampionshipsList, void>({
				path: `/championships`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve championship details
		 *
		 * @tags Championships
		 * @name GetChampionship
		 * @summary Retrieve championship details
		 * @request GET:/championships/{championship_id}
		 * @secure
		 */
		getChampionship: (
			championshipId: string,
			query?: {
				/**
				 * List of entity names to expand in request
				 * @uniqueItems true
				 */
				expanded?: ('organizer' | 'game')[];
			},
			params: RequestParams = {}
		) =>
			this.request<Championship, void>({
				path: `/championships/${championshipId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all matches of a championship
		 *
		 * @tags Championships
		 * @name GetChampionshipMatches
		 * @summary Retrieve all matches of a championship
		 * @request GET:/championships/{championship_id}/matches
		 * @secure
		 */
		getChampionshipMatches: (
			championshipId: string,
			query?: {
				/** Kind of matches to return. Can be all(default), upcoming, ongoing or past */
				type?: 'all' | 'upcoming' | 'ongoing' | 'past';
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<MatchList, void>({
				path: `/championships/${championshipId}/matches`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all results of a championship
		 *
		 * @tags Championships
		 * @name GetChampionshipResults
		 * @summary Retrieve all results of a championship
		 * @request GET:/championships/{championship_id}/results
		 * @secure
		 */
		getChampionshipResults: (
			championshipId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<ChampionshipResultList, void>({
				path: `/championships/${championshipId}/results`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all subscriptions of a championship
		 *
		 * @tags Championships
		 * @name GetChampionshipSubscriptions
		 * @summary Retrieve all subscriptions of a championship
		 * @request GET:/championships/{championship_id}/subscriptions
		 * @secure
		 */
		getChampionshipSubscriptions: (
			championshipId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 10
				 * @default 10
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<ChampionshipSubscriptionsList, void>({
				path: `/championships/${championshipId}/subscriptions`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	games = {
		/**
		 * @description Retrieve details of all games on FACEIT
		 *
		 * @tags Games
		 * @name GetAllGames
		 * @summary Retrieve details of all games on FACEIT
		 * @request GET:/games
		 * @secure
		 */
		getAllGames: (
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<GamesList, void>({
				path: `/games`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve details of all matchmakings of a game on FACEIT
		 *
		 * @tags Games
		 * @name GetGameMatchmakings
		 * @summary Retrieve details of all matchmakings of a game on FACEIT
		 * @request GET:/games/{gameId}/matchmakings
		 * @secure
		 */
		getGameMatchmakings: (
			gameId: string,
			query?: {
				/**
				 * The region of the matchmakings
				 * @example "EU"
				 */
				region?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<MatchmakingList, void>({
				path: `/games/${gameId}/matchmakings`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve game details
		 *
		 * @tags Games
		 * @name GetGame
		 * @summary Retrieve game details
		 * @request GET:/games/{game_id}
		 * @secure
		 */
		getGame: (gameId: string, params: RequestParams = {}) =>
			this.request<Game, void>({
				path: `/games/${gameId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve the details of the parent game, if the game is region-specific
		 *
		 * @tags Games
		 * @name GetParentGame
		 * @summary Retrieve the details of the parent game, if the game is region-specific
		 * @request GET:/games/{game_id}/parent
		 * @secure
		 */
		getParentGame: (gameId: string, params: RequestParams = {}) =>
			this.request<Game, void>({
				path: `/games/${gameId}/parent`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve queues by filters on FACEIT. Available only for game developers and queue owners(organizers)
		 *
		 * @tags Games
		 * @name GetQueuesByEntityFilters
		 * @summary Retrieve queues by filters on FACEIT
		 * @request GET:/games/{game_id}/queues
		 * @secure
		 */
		getQueuesByEntityFilters: (
			gameId: string,
			query: {
				/**
				 * The type of the entity
				 * @example "hub"
				 */
				entity_type: string;
				/** The id of the entity */
				entity_id: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 20
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<QueuesList, void>({
				path: `/games/${gameId}/queues`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve details of a queue on FACEIT. Available only for game or queue owners(organizers)
		 *
		 * @tags Games
		 * @name GetQueueById
		 * @summary Retrieve details of a queue on FACEIT
		 * @request GET:/games/{game_id}/queues/{queue_id}
		 * @secure
		 */
		getQueueById: (gameId: string, queueId: string, params: RequestParams = {}) =>
			this.request<Queue, void>({
				path: `/games/${gameId}/queues/${queueId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve queue bans on FACEIT. Available only for game or queue owners(organizers)
		 *
		 * @tags Games
		 * @name GetQueueBans
		 * @summary Retrieve queue bans on FACEIT
		 * @request GET:/games/{game_id}/queues/{queue_id}/bans
		 * @secure
		 */
		getQueueBans: (
			gameId: string,
			queueId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<QueueBansList, void>({
				path: `/games/${gameId}/queues/${queueId}/bans`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve queues by region on FACEIT. Available only for game developers
		 *
		 * @tags Games
		 * @name GetQueuesByRegion
		 * @summary Retrieve queues by region on FACEIT
		 * @request GET:/games/{game_id}/regions/{region_id}/queues
		 * @secure
		 */
		getQueuesByRegion: (
			gameId: string,
			regionId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 20
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<QueuesList, void>({
				path: `/games/${gameId}/regions/${regionId}/queues`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	hubs = {
		/**
		 * @description Retrieve hub details
		 *
		 * @tags Hubs
		 * @name GetHub
		 * @summary Retrieve hub details
		 * @request GET:/hubs/{hub_id}
		 * @secure
		 */
		getHub: (
			hubId: string,
			query?: {
				/**
				 * List of entity names to expand in request
				 * @uniqueItems true
				 */
				expanded?: ('organizer' | 'game')[];
			},
			params: RequestParams = {}
		) =>
			this.request<Hub, void>({
				path: `/hubs/${hubId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all matches of a hub
		 *
		 * @tags Hubs
		 * @name GetHubMatches
		 * @summary Retrieve all matches of a hub
		 * @request GET:/hubs/{hub_id}/matches
		 * @secure
		 */
		getHubMatches: (
			hubId: string,
			query?: {
				/** Kind of matches to return. Can be all(default), upcoming, ongoing or past */
				type?: 'all' | 'upcoming' | 'ongoing' | 'past';
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<MatchList, void>({
				path: `/hubs/${hubId}/matches`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all members of a hub
		 *
		 * @tags Hubs
		 * @name GetHubMembers
		 * @summary Retrieve all members of a hub
		 * @request GET:/hubs/{hub_id}/members
		 * @secure
		 */
		getHubMembers: (
			hubId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @max 1000
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 50
				 * @default 50
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<HubMembers, void>({
				path: `/hubs/${hubId}/members`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all roles members can have in a hub
		 *
		 * @tags Hubs
		 * @name GetHubRoles
		 * @summary Retrieve all roles members can have in a hub
		 * @request GET:/hubs/{hub_id}/roles
		 * @secure
		 */
		getHubRoles: (
			hubId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @max 1000
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 50
				 * @default 50
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<RolesList, void>({
				path: `/hubs/${hubId}/roles`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve rules of a hub
		 *
		 * @tags Hubs
		 * @name GetHubRules
		 * @summary Retrieve rules of a hub
		 * @request GET:/hubs/{hub_id}/rules
		 * @secure
		 */
		getHubRules: (hubId: string, params: RequestParams = {}) =>
			this.request<Rules, void>({
				path: `/hubs/${hubId}/rules`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve statistics of a hub
		 *
		 * @tags Hubs
		 * @name GetHubStats
		 * @summary Retrieve statistics of a hub
		 * @request GET:/hubs/{hub_id}/stats
		 * @secure
		 */
		getHubStats: (
			hubId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<HubStats, void>({
				path: `/hubs/${hubId}/stats`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	leaderboards = {
		/**
		 * @description Retrieve all leaderboards of a championship
		 *
		 * @tags Leaderboards
		 * @name GetChampionshipLeaderboards
		 * @summary Retrieve all leaderboards of a championship
		 * @request GET:/leaderboards/championships/{championship_id}
		 * @secure
		 */
		getChampionshipLeaderboards: (
			championshipId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<LeaderboardsList, void>({
				path: `/leaderboards/championships/${championshipId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve group ranking of a championship
		 *
		 * @tags Leaderboards
		 * @name GetChampionshipGroupRanking
		 * @summary Retrieve group ranking of a championship
		 * @request GET:/leaderboards/championships/{championship_id}/groups/{group}
		 * @secure
		 */
		getChampionshipGroupRanking: (
			championshipId: string,
			group: number,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<EntityRanking, void>({
				path: `/leaderboards/championships/${championshipId}/groups/${group}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all leaderboards of a hub
		 *
		 * @tags Leaderboards
		 * @name GetHubLeaderboards
		 * @summary Retrieve all leaderboards of a hub
		 * @request GET:/leaderboards/hubs/{hub_id}
		 * @secure
		 */
		getHubLeaderboards: (
			hubId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<LeaderboardsList, void>({
				path: `/leaderboards/hubs/${hubId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all time ranking of a hub
		 *
		 * @tags Leaderboards
		 * @name GetHubRanking
		 * @summary Retrieve all time ranking of a hub
		 * @request GET:/leaderboards/hubs/{hub_id}/general
		 * @secure
		 */
		getHubRanking: (
			hubId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<EntityRanking, void>({
				path: `/leaderboards/hubs/${hubId}/general`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve seasonal ranking of a hub
		 *
		 * @tags Leaderboards
		 * @name GetHubSeasonRanking
		 * @summary Retrieve seasonal ranking of a hub
		 * @request GET:/leaderboards/hubs/{hub_id}/seasons/{season}
		 * @secure
		 */
		getHubSeasonRanking: (
			hubId: string,
			season: number,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<EntityRanking, void>({
				path: `/leaderboards/hubs/${hubId}/seasons/${season}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve ranking from a leaderboard id
		 *
		 * @tags Leaderboards
		 * @name GetLeaderboard
		 * @summary Retrieve ranking from a leaderboard id
		 * @request GET:/leaderboards/{leaderboard_id}
		 * @secure
		 */
		getLeaderboard: (
			leaderboardId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<EntityRanking, void>({
				path: `/leaderboards/${leaderboardId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve a players ranking in a leaderboard
		 *
		 * @tags Leaderboards
		 * @name GetPlayerRankingInLeaderboard
		 * @summary Retrieve a players ranking in a leaderboard
		 * @request GET:/leaderboards/{leaderboard_id}/players/{player_id}
		 * @secure
		 */
		getPlayerRankingInLeaderboard: (
			leaderboardId: string,
			playerId: string,
			params: RequestParams = {}
		) =>
			this.request<Ranking, void>({
				path: `/leaderboards/${leaderboardId}/players/${playerId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	leagues = {
		/**
		 * @description Retrieve details of a league of a matchmaking on FACEIT
		 *
		 * @tags Leagues
		 * @name GetLeagueById
		 * @summary Retrieve details of a league of a matchmaking on FACEIT
		 * @request GET:/leagues/{league_id}
		 * @secure
		 */
		getLeagueById: (leagueId: string, params: RequestParams = {}) =>
			this.request<League, void>({
				path: `/leagues/${leagueId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve details of a season of a league on FACEIT
		 *
		 * @tags Leagues
		 * @name GetLeagueSeason
		 * @summary Retrieve details of a season of a league on FACEIT
		 * @request GET:/leagues/{league_id}/seasons/{season_id}
		 * @secure
		 */
		getLeagueSeason: (leagueId: string, seasonId: number, params: RequestParams = {}) =>
			this.request<SeasonDetailed, void>({
				path: `/leagues/${leagueId}/seasons/${seasonId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve details of a player for a given league and season on FACEIT
		 *
		 * @tags Leagues
		 * @name GetPlayerForLeagueSeason
		 * @summary Retrieve details of a player for a given league and season on FACEIT
		 * @request GET:/leagues/{league_id}/seasons/{season_id}/players/{player_id}
		 * @secure
		 */
		getPlayerForLeagueSeason: (
			leagueId: string,
			seasonId: number,
			playerId: string,
			params: RequestParams = {}
		) =>
			this.request<PlayerInLeague, void>({
				path: `/leagues/${leagueId}/seasons/${seasonId}/players/${playerId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	matches = {
		/**
		 * @description Retrieve match details
		 *
		 * @tags Matches
		 * @name GetMatch
		 * @summary Retrieve match details
		 * @request GET:/matches/{match_id}
		 * @secure
		 */
		getMatch: (matchId: string, params: RequestParams = {}) =>
			this.request<Match, void>({
				path: `/matches/${matchId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve statistics of a match
		 *
		 * @tags Matches
		 * @name GetMatchStats
		 * @summary Retrieve statistics of a match
		 * @request GET:/matches/{match_id}/stats
		 * @secure
		 */
		getMatchStats: (matchId: string, params: RequestParams = {}) =>
			this.request<MatchStats, void>({
				path: `/matches/${matchId}/stats`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	matchmakings = {
		/**
		 * @description Retrieve details of a matchmaking of a game on FACEIT
		 *
		 * @tags Matchmakings
		 * @name GetMatchmaking
		 * @summary Retrieve details of a matchmaking of a game on FACEIT
		 * @request GET:/matchmakings/{matchmaking_id}
		 * @secure
		 */
		getMatchmaking: (matchmakingId: string, params: RequestParams = {}) =>
			this.request<Matchmaking, void>({
				path: `/matchmakings/${matchmakingId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	organizers = {
		/**
		 * @description Retrieve organizer details from name
		 *
		 * @tags Organizers
		 * @name GetOrganizerByName
		 * @summary Retrieve organizer details from name
		 * @request GET:/organizers
		 * @secure
		 */
		getOrganizerByName: (
			query: {
				/** The name of the organizer */
				name: string;
			},
			params: RequestParams = {}
		) =>
			this.request<Organizer, void>({
				path: `/organizers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve organizer details
		 *
		 * @tags Organizers
		 * @name GetOrganizer
		 * @summary Retrieve organizer details
		 * @request GET:/organizers/{organizer_id}
		 * @secure
		 */
		getOrganizer: (organizerId: string, params: RequestParams = {}) =>
			this.request<Organizer, void>({
				path: `/organizers/${organizerId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all championships of an organizer
		 *
		 * @tags Organizers
		 * @name GetOrganizerChampionships
		 * @summary Retrieve all championships of an organizer
		 * @request GET:/organizers/{organizer_id}/championships
		 * @secure
		 */
		getOrganizerChampionships: (
			organizerId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<ChampionshipsList, void>({
				path: `/organizers/${organizerId}/championships`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all games an organizer is involved with
		 *
		 * @tags Organizers
		 * @name GetOrganizerGames
		 * @summary Retrieve all games an organizer is involved with
		 * @request GET:/organizers/{organizer_id}/games
		 * @secure
		 */
		getOrganizerGames: (organizerId: string, params: RequestParams = {}) =>
			this.request<GamesList, void>({
				path: `/organizers/${organizerId}/games`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all hubs of an organizer
		 *
		 * @tags Organizers
		 * @name GetOrganizerHubs
		 * @summary Retrieve all hubs of an organizer
		 * @request GET:/organizers/{organizer_id}/hubs
		 * @secure
		 */
		getOrganizerHubs: (
			organizerId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @max 1000
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 50
				 * @default 50
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<HubsList, void>({
				path: `/organizers/${organizerId}/hubs`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all tournaments of an organizer
		 *
		 * @tags Organizers
		 * @name GetOrganizerTournaments
		 * @summary Retrieve all tournaments of an organizer
		 * @request GET:/organizers/{organizer_id}/tournaments
		 * @secure
		 */
		getOrganizerTournaments: (
			organizerId: string,
			query?: {
				/** Kind of tournament. Can be upcoming(default) or past */
				type?: 'past' | 'upcoming';
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TournamentsList, void>({
				path: `/organizers/${organizerId}/tournaments`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	players = {
		/**
		 * @description Retrieve player details
		 *
		 * @tags Players
		 * @name GetPlayerFromLookup
		 * @summary Retrieve player details
		 * @request GET:/players
		 * @secure
		 */
		getPlayerFromLookup: (
			query?: {
				/** The nickname of the player on FACEIT */
				nickname?: string;
				/** A game on FACEIT */
				game?: string;
				/** The ID of a player on game's platform */
				game_player_id?: string;
			},
			params: RequestParams = {}
		) =>
			this.request<Player, void>({
				path: `/players`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve player details
		 *
		 * @tags Players
		 * @name GetPlayer
		 * @summary Retrieve player details
		 * @request GET:/players/{player_id}
		 * @secure
		 */
		getPlayer: (playerId: string, params: RequestParams = {}) =>
			this.request<Player, void>({
				path: `/players/${playerId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all bans of a player
		 *
		 * @tags Players
		 * @name GetPlayerBans
		 * @summary Retrieve all bans of a player
		 * @request GET:/players/{player_id}/bans
		 * @secure
		 */
		getPlayerBans: (
			playerId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<PlayerBansList, void>({
				path: `/players/${playerId}/bans`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve statistics of a player for a given amount of matches
		 *
		 * @tags Players
		 * @name GetPlayerStats
		 * @summary Retrieve statistics of a player for a given amount of matches
		 * @request GET:/players/{player_id}/games/{game_id}/stats
		 * @secure
		 */
		getPlayerStats: (
			playerId: string,
			gameId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<PlayerStatsForMatchesList, void>({
				path: `/players/${playerId}/games/${gameId}/stats`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all matches of a player
		 *
		 * @tags Players
		 * @name GetPlayerHistory
		 * @summary Retrieve all matches of a player
		 * @request GET:/players/{player_id}/history
		 * @secure
		 */
		getPlayerHistory: (
			playerId: string,
			query: {
				/** A game on FACEIT */
				game: string;
				/**
				 * The timestamp (Unix time) as lower bound of the query. 1 month ago if not specified
				 * @min 0
				 */
				from?: number;
				/**
				 * The timestamp (Unix time) as higher bound of the query. Current timestamp if not specified
				 * @min 0
				 */
				to?: number;
				/**
				 * The starting item position
				 * @min 0
				 * @max 1000
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<MatchHistoryList, void>({
				path: `/players/${playerId}/history`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all hubs of a player
		 *
		 * @tags Players
		 * @name GetPlayerHubs
		 * @summary Retrieve all hubs of a player
		 * @request GET:/players/{player_id}/hubs
		 * @secure
		 */
		getPlayerHubs: (
			playerId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @max 1000
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 50
				 * @default 50
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<HubsList, void>({
				path: `/players/${playerId}/hubs`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve statistics of a player
		 *
		 * @tags Players
		 * @name GetPlayerStats2
		 * @summary Retrieve statistics of a player
		 * @request GET:/players/{player_id}/stats/{game_id}
		 * @originalName getPlayerStats
		 * @duplicate
		 * @secure
		 */
		getPlayerStats2: (playerId: string, gameId: string, params: RequestParams = {}) =>
			this.request<PlayerStats, void>({
				path: `/players/${playerId}/stats/${gameId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all teams of a player
		 *
		 * @tags Players
		 * @name GetPlayerTeams
		 * @summary Retrieve all teams of a player
		 * @request GET:/players/{player_id}/teams
		 * @secure
		 */
		getPlayerTeams: (
			playerId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TeamList, void>({
				path: `/players/${playerId}/teams`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all tournaments of a player
		 *
		 * @tags Players
		 * @name GetPlayerTournaments
		 * @summary Retrieve all tournaments of a player
		 * @request GET:/players/{player_id}/tournaments
		 * @secure
		 */
		getPlayerTournaments: (
			playerId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TournamentsList, void>({
				path: `/players/${playerId}/tournaments`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	rankings = {
		/**
		 * @description Retrieve global ranking of a game
		 *
		 * @tags Rankings
		 * @name GetGlobalRanking
		 * @summary Retrieve global ranking of a game
		 * @request GET:/rankings/games/{game_id}/regions/{region}
		 * @secure
		 */
		getGlobalRanking: (
			gameId: string,
			region: string,
			query?: {
				/** A country code (ISO 3166-1) */
				country?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<GlobalRankingList, void>({
				path: `/rankings/games/${gameId}/regions/${region}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve user position in the global ranking of a game
		 *
		 * @tags Rankings
		 * @name GetPlayerRanking
		 * @summary Retrieve user position in the global ranking of a game
		 * @request GET:/rankings/games/{game_id}/regions/{region}/players/{player_id}
		 * @secure
		 */
		getPlayerRanking: (
			gameId: string,
			region: string,
			playerId: string,
			query?: {
				/** A country code (ISO 3166-1) */
				country?: string;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<PlayerGlobalRanking, void>({
				path: `/rankings/games/${gameId}/regions/${region}/players/${playerId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	search = {
		/**
		 * @description Search for championships
		 *
		 * @tags Search
		 * @name SearchChampionships
		 * @summary Search for championships
		 * @request GET:/search/championships
		 * @secure
		 */
		searchChampionships: (
			query: {
				/** The name of a championship on FACEIT */
				name: string;
				/** A game on FACEIT */
				game?: string;
				/** A region of the game */
				region?: string;
				/** Kind of competitions to return */
				type?: 'all' | 'upcoming' | 'ongoing' | 'past';
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<CompetitionsSearchList, void>({
				path: `/search/championships`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Search for clans
		 *
		 * @tags Search
		 * @name SearchClans
		 * @summary Search for clans
		 * @request GET:/search/clans
		 * @secure
		 */
		searchClans: (
			query: {
				/** The name of a clan on FACEIT */
				name: string;
				/** A game on FACEIT */
				game?: string;
				/** A region of the game */
				region?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<ClansSearchList, void>({
				path: `/search/clans`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Search for hubs
		 *
		 * @tags Search
		 * @name SearchHubs
		 * @summary Search for hubs
		 * @request GET:/search/hubs
		 * @secure
		 */
		searchHubs: (
			query: {
				/** The name of a hub on FACEIT */
				name: string;
				/** A game on FACEIT */
				game?: string;
				/** A region of the game */
				region?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<CompetitionsSearchList, void>({
				path: `/search/hubs`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Search for organizers
		 *
		 * @tags Search
		 * @name SearchOrganizers
		 * @summary Search for organizers
		 * @request GET:/search/organizers
		 * @secure
		 */
		searchOrganizers: (
			query: {
				/** The name of a organizer on FACEIT */
				name: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<OrganizersSearchList, void>({
				path: `/search/organizers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Search for players
		 *
		 * @tags Search
		 * @name SearchPlayers
		 * @summary Search for players
		 * @request GET:/search/players
		 * @secure
		 */
		searchPlayers: (
			query: {
				/** The nickname of a player on FACEIT */
				nickname: string;
				/** A game on FACEIT */
				game?: string;
				/** A country code (ISO 3166-1) */
				country?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<UsersSearchList, void>({
				path: `/search/players`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Search for teams
		 *
		 * @tags Search
		 * @name SearchTeams
		 * @summary Search for teams
		 * @request GET:/search/teams
		 * @secure
		 */
		searchTeams: (
			query: {
				/** The nickname of a team on FACEIT */
				nickname: string;
				/** A game on FACEIT */
				game?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TeamsSearchList, void>({
				path: `/search/teams`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Search for tournaments
		 *
		 * @tags Search
		 * @name SearchTournaments
		 * @summary Search for tournaments
		 * @request GET:/search/tournaments
		 * @secure
		 */
		searchTournaments: (
			query: {
				/** The name of a tournament on FACEIT */
				name: string;
				/** A game on FACEIT */
				game?: string;
				/** A region of the game */
				region?: string;
				/** Kind of competitions to return */
				type?: 'all' | 'upcoming' | 'ongoing' | 'past';
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<CompetitionsSearchList, void>({
				path: `/search/tournaments`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	teams = {
		/**
		 * @description Retrieve team details
		 *
		 * @tags Teams
		 * @name GetTeam
		 * @summary Retrieve team details
		 * @request GET:/teams/{team_id}
		 * @secure
		 */
		getTeam: (teamId: string, params: RequestParams = {}) =>
			this.request<Team, void>({
				path: `/teams/${teamId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve statistics of a team
		 *
		 * @tags Teams
		 * @name GetTeamStats
		 * @summary Retrieve statistics of a team
		 * @request GET:/teams/{team_id}/stats/{game_id}
		 * @secure
		 */
		getTeamStats: (teamId: string, gameId: string, params: RequestParams = {}) =>
			this.request<TeamStats, void>({
				path: `/teams/${teamId}/stats/${gameId}`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve tournaments of a team
		 *
		 * @tags Teams
		 * @name GetTeamTournaments
		 * @summary Retrieve tournaments of a team
		 * @request GET:/teams/{team_id}/tournaments
		 * @secure
		 */
		getTeamTournaments: (
			teamId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TournamentsList, void>({
				path: `/teams/${teamId}/tournaments`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	tournaments = {
		/**
		 * @description Retrieve tournaments v1 (no longer used). Please refer to the Championships controller to retrieve tournaments v2
		 *
		 * @tags Tournaments
		 * @name GetTournamentsList
		 * @summary Retrieve tournaments v1 (no longer used)
		 * @request GET:/tournaments
		 * @secure
		 */
		getTournamentsList: (
			query?: {
				/** A game on FACEIT */
				game?: string;
				/** A region of the game */
				region?: string;
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TournamentsList, void>({
				path: `/tournaments`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve tournament details
		 *
		 * @tags Tournaments
		 * @name GetTournament
		 * @summary Retrieve tournament details
		 * @request GET:/tournaments/{tournament_id}
		 * @secure
		 */
		getTournament: (
			tournamentId: string,
			query?: {
				/**
				 * List of entity names to expand in request
				 * @uniqueItems true
				 */
				expanded?: ('organizer' | 'game')[];
			},
			params: RequestParams = {}
		) =>
			this.request<Tournament, void>({
				path: `/tournaments/${tournamentId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve brackets of a tournament
		 *
		 * @tags Tournaments
		 * @name GetTournamentBrackets
		 * @summary Retrieve brackets of a tournament
		 * @request GET:/tournaments/{tournament_id}/brackets
		 * @secure
		 */
		getTournamentBrackets: (tournamentId: string, params: RequestParams = {}) =>
			this.request<Brackets, void>({
				path: `/tournaments/${tournamentId}/brackets`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all matches of a tournament
		 *
		 * @tags Tournaments
		 * @name GetTournamentMatches
		 * @summary Retrieve all matches of a tournament
		 * @request GET:/tournaments/{tournament_id}/matches
		 * @secure
		 */
		getTournamentMatches: (
			tournamentId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<MatchList, void>({
				path: `/tournaments/${tournamentId}/matches`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Retrieve all teams of a tournament
		 *
		 * @tags Tournaments
		 * @name GetTournamentTeams
		 * @summary Retrieve all teams of a tournament
		 * @request GET:/tournaments/{tournament_id}/teams
		 * @secure
		 */
		getTournamentTeams: (
			tournamentId: string,
			query?: {
				/**
				 * The starting item position
				 * @min 0
				 * @default 0
				 */
				offset?: number;
				/**
				 * The number of items to return
				 * @min 1
				 * @max 100
				 * @default 20
				 */
				limit?: number;
			},
			params: RequestParams = {}
		) =>
			this.request<TournamentTeams, void>({
				path: `/tournaments/${tournamentId}/teams`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
}
