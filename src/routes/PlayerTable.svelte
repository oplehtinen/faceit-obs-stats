<script lang="ts">
  export const ssr = false;
	import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
  import { circOut } from 'svelte/easing';
    import {getTournamentStatsForPlayer} from "../lib/faceit";
    export let teamRoster : Array<any>;
    export let color : string = "neutral-content";
    let playerStats : Array<any>;

    onMount(async () => {
        const allPlayerStats = await getTournamentStatsForPlayer("9a5a7b34-29dd-4708-95aa-e37b4128b9c2");
        //console.log(allPlayerStats);
        teamRoster.forEach(player => {
            const playerStats = allPlayerStats.find(p => p.player_id == player.player_id);
            player.stats = playerStats.stats;
        });
        playerStats = teamRoster; 
    });
</script>

<table class="table table-auto {color} w-full">
    <thead>
      <tr>
        <th>Peluri</th>
        <th>K/D</th>
        <th>Voittoprosentti</th>
      </tr>
    </thead>
    <tbody>
    {#if playerStats}
    {#each playerStats as player}
    <tr     in:fly={{ y: 150, duration: 1100, easing: circOut }}>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              {#if player.avatar != ''}
                <img src={player.avatar} alt="Avatar Tailwind CSS Component" />
              {:else}
                <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                </div>
              {/if}
            </div>
          </div>
          <div>
            <div class="font-bold">{player.nickname}</div>
            <div class="text-sm opacity-50">Faceit level: {player.game_skill_level}</div>
          </div>
        </div>
      </td>
      <td>
        {player.stats["Average K/D Ratio"]}
        <br/>
        {#if parseFloat(player.stats["Penta Kills"]) == 1}
        <span class="badge {color} badge-ghost badge-sm">{player.stats["Penta Kills"]} ässä</span>
        {:else}
        <span class="badge {color} badge-ghost badge-sm">{player.stats["Penta Kills"]} ässää</span>
        {/if}
      </td>
      <td>{player.stats["Win Rate %"]}%</td>
    </tr>
    {/each}
    {/if}
    </tbody>
  </table>
