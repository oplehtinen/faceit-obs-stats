<script lang="ts">
  import PlayerTable from "./PlayerTable.svelte";
  export let team1Roster : Array<object>;
  export let team2Roster : Array<object>;
</script>

<div class="flex w-full">
    <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
      <PlayerTable teamRoster={team1Roster} />
    </div>
    <div class="divider divider-horizontal">VS</div>
    <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
      <PlayerTable teamRoster={team2Roster} color="text-secondary-content" />
    </div>
  </div>